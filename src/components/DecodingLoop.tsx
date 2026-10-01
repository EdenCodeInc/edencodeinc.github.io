import { useEffect, useMemo, useState, type CSSProperties } from "react";

/**
 * Animated detector-error-model graph for the hero: three layers (logical
 * observables, hidden faults, observed syndrome) and a four-beat story that
 * repeats for a handful of fault patterns — faults occur, the syndrome lights
 * up, the decoder passes messages back, the correction clears the device.
 */
const LOGICAL = [136, 264, 392];
const FAULTS = [40, 104, 168, 232, 296, 360, 424, 488];
const CHECKS = [72, 168, 264, 360, 456];
const Y_LOGICAL = 34;
const Y_FAULT = 138;
const Y_CHECK = 240;

const LOGICAL_EDGES: Array<[number, number]> = [
  [0, 0], [0, 3],
  [1, 2], [1, 4],
  [2, 6], [2, 7],
];
const CHECK_EDGES: Array<[number, number]> = [
  [0, 0], [0, 1], [0, 2],
  [1, 1], [1, 2], [1, 3], [1, 4],
  [2, 3], [2, 4], [2, 5],
  [3, 4], [3, 5], [3, 6],
  [4, 5], [4, 6], [4, 7],
];
const PATTERNS: number[][] = [[3, 6], [1], [4, 7], [0, 5], [2, 6]];
const PHASES = ["Error", "Syndrome", "Decode", "Corrected"] as const;
const PHASE_MS = 1300;

const curve = (x1: number, y1: number, x2: number, y2: number) => {
  const dy = (y2 - y1) * 0.45;
  return `M${x1} ${y1} C ${x1} ${y1 + dy}, ${x2} ${y2 - dy}, ${x2} ${y2}`;
};

export function DecodingLoop() {
  const [tick, setTick] = useState(1);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setAnimate(false);
      return;
    }
    const id = setInterval(() => setTick((t) => t + 1), PHASE_MS);
    return () => clearInterval(id);
  }, []);

  const step = Math.floor(tick / PHASES.length) % PATTERNS.length;
  const phase = tick % PHASES.length;

  const faulty = useMemo(() => new Set(PATTERNS[step]), [step]);
  const fired = useMemo(() => {
    const s = new Set<number>();
    CHECK_EDGES.forEach(([c, f]) => faulty.has(f) && s.add(c));
    return s;
  }, [faulty]);
  const atRisk = useMemo(() => {
    const s = new Set<number>();
    LOGICAL_EDGES.forEach(([l, f]) => faulty.has(f) && s.add(l));
    return s;
  }, [faulty]);

  const showFault = phase <= 2;
  const showSyndrome = phase === 1 || phase === 2;
  const decoding = phase === 2;
  const hotColor = decoding ? "var(--amber)" : "var(--rust)";
  const hotEdges = CHECK_EDGES.filter(([, f]) => faulty.has(f));
  const key = `${step}-${phase}`;

  return (
    <div className="loop-panel">
      <div className="flex items-center justify-between font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-3">
        <span>Detector error model</span>
        <span className="inline-flex items-center gap-2">
          <span className="loop-dot pulse-slow" />
          Decoding loop
        </span>
      </div>

      <svg viewBox="0 0 528 270" className="w-full h-auto mt-4" aria-hidden="true" focusable="false">

        {LOGICAL_EDGES.map(([l, f]) => (
          <path
            key={`le-${l}-${f}`}
            className="tg-edge"
            d={curve(LOGICAL[l], Y_LOGICAL, FAULTS[f], Y_FAULT)}
            fill="none"
            stroke={showFault && faulty.has(f) ? "var(--rust)" : "var(--ink)"}
            strokeOpacity={showFault && faulty.has(f) ? 0.55 : 0.12}
            strokeWidth={1}
          />
        ))}

        {CHECK_EDGES.map(([c, f]) => {
          const hot = showSyndrome && faulty.has(f);
          return (
            <path
              key={`ce-${c}-${f}`}
              className="tg-edge"
              d={curve(FAULTS[f], Y_FAULT, CHECKS[c], Y_CHECK)}
              fill="none"
              stroke={hot ? hotColor : "var(--ink)"}
              strokeOpacity={hot ? 0.85 : 0.16}
              strokeWidth={hot ? 1.5 : 1}
            />
          );
        })}

        {animate &&
          showSyndrome &&
          hotEdges.map(([c, f]) => (
            <path
              key={`draw-${key}-${c}-${f}`}
              className={decoding ? "draw-rev" : "draw-fwd"}
              d={curve(FAULTS[f], Y_FAULT, CHECKS[c], Y_CHECK)}
              pathLength={1}
              fill="none"
              stroke={hotColor}
              strokeWidth={2}
              strokeLinecap="round"
            />
          ))}

        {animate &&
          showSyndrome &&
          hotEdges.map(([c, f]) => (
            <circle key={`msg-${key}-${c}-${f}`} r={3} fill={hotColor}>
              <animateMotion
                dur="1s"
                begin="0.05s"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.4 0 0.2 1"
                path={
                  decoding
                    ? curve(CHECKS[c], Y_CHECK, FAULTS[f], Y_FAULT)
                    : curve(FAULTS[f], Y_FAULT, CHECKS[c], Y_CHECK)
                }
              />
            </circle>
          ))}

        {LOGICAL.map((x, i) => {
          const risk = showFault && atRisk.has(i);
          return (
            <path
              key={`l${i}`}
              className="tg-node"
              d={`M${x} ${Y_LOGICAL - 10} L${x + 10} ${Y_LOGICAL + 7} L${x - 10} ${Y_LOGICAL + 7} Z`}
              fill="var(--paper-3)"
              stroke={risk ? "var(--rust)" : "var(--ink-2)"}
              strokeWidth={risk ? 1.8 : 1.3}
              strokeLinejoin="round"
            />
          );
        })}

        {animate &&
          phase === 0 &&
          PATTERNS[step].map((f) => (
            <circle
              key={`rip-${key}-${f}`}
              className="ripple"
              cx={FAULTS[f]}
              cy={Y_FAULT}
              r={9}
              fill="none"
              stroke="var(--rust)"
              strokeWidth={1.2}
            />
          ))}

        {FAULTS.map((x, i) => {
          const on = showFault && faulty.has(i);
          const inferred = decoding && faulty.has(i);
          return (
            <g key={`f${i}`}>
              {inferred && (
                <circle cx={x} cy={Y_FAULT} r={14} fill="none" stroke="var(--amber)" strokeWidth={1.2} className="tg-node" />
              )}
              <circle
                className="tg-node"
                cx={x}
                cy={Y_FAULT}
                r={9}
                fill={on ? "var(--rust)" : "var(--paper-3)"}
                stroke={on ? "var(--rust)" : "var(--ink-2)"}
                strokeWidth={1.4}
              />
            </g>
          );
        })}

        {animate &&
          phase === 1 &&
          [...fired].map((c) => (
            <rect
              key={`crip-${key}-${c}`}
              className="ripple ripple-late"
              x={CHECKS[c] - 9}
              y={Y_CHECK - 9}
              width={18}
              height={18}
              rx={3}
              fill="none"
              stroke="var(--rust)"
              strokeWidth={1.2}
            />
          ))}

        {CHECKS.map((x, i) => {
          const on = showSyndrome && fired.has(i);
          return (
            <rect
              key={`c${i}`}
              className="tg-node"
              style={{ transitionDelay: phase === 1 ? "0.85s" : "0s" } as CSSProperties}
              x={x - 9}
              y={Y_CHECK - 9}
              width={18}
              height={18}
              rx={2}
              fill={on ? "var(--rust)" : "var(--paper-3)"}
              stroke={on ? "var(--rust)" : "var(--ink-2)"}
              strokeWidth={1.4}
            />
          );
        })}
      </svg>

      <ul className="loop-legend" aria-hidden="true">
        <li>
          <svg viewBox="0 0 12 12" className="loop-glyph"><path d="M6 1.6 L11 10.4 L1 10.4 Z" /></svg>
          <span><i className="loop-var">ℓ</i> · Logical</span>
        </li>
        <li>
          <svg viewBox="0 0 12 12" className="loop-glyph"><circle cx="6" cy="6" r="4.6" /></svg>
          <span><i className="loop-var">e</i> · Faults · hidden</span>
        </li>
        <li>
          <svg viewBox="0 0 12 12" className="loop-glyph"><rect x="1.5" y="1.5" width="9" height="9" rx="1.5" /></svg>
          <span><i className="loop-var">s</i> · Syndrome · observed</span>
        </li>
      </ul>

      <ol className="mt-4 grid grid-cols-4 gap-3" style={{ "--phase-ms": `${PHASE_MS}ms` } as CSSProperties}>
        {PHASES.map((label, i) => (
          <li key={`${label}-${phase === i ? tick : "idle"}`} className={`phase ${phase === i ? "is-active" : ""}`}>
            {label}
          </li>
        ))}
      </ol>
    </div>
  );
}
