import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

// A Tanner graph: fault nodes (circles) above, syndrome checks (squares) below.
// Every few seconds a different set of faults occurs; the checks that touch
// them light up and messages travel along the active edges.
const FAULTS = [40, 104, 168, 232, 296, 360, 424, 488];
const CHECKS = [72, 168, 264, 360, 456];
const FAULT_Y = 72;
const CHECK_Y = 228;
const EDGES: Array<[number, number]> = [
  [0, 0], [0, 1], [0, 2],
  [1, 1], [1, 2], [1, 3], [1, 4],
  [2, 3], [2, 4], [2, 5],
  [3, 4], [3, 5], [3, 6],
  [4, 5], [4, 6], [4, 7],
];
const PATTERNS: number[][] = [[3, 6], [1], [4, 7], [0, 5], [2, 6]];
const CYCLE_MS = 3600;

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` } as CSSProperties);

function TannerGraph() {
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAnimate(!mq.matches);
    if (mq.matches) return;
    const id = setInterval(() => setStep((s) => (s + 1) % PATTERNS.length), CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const faulty = useMemo(() => new Set(PATTERNS[step]), [step]);
  const fired = useMemo(() => {
    const s = new Set<number>();
    EDGES.forEach(([c, f]) => {
      if (faulty.has(f)) s.add(c);
    });
    return s;
  }, [faulty]);

  return (
    <svg viewBox="0 0 528 300" className="w-full h-auto" aria-hidden="true" focusable="false">
      <text x="40" y="34" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="var(--ink-3)">
        e · FAULTS · HIDDEN
      </text>
      <text x="40" y="284" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="var(--ink-3)">
        s · SYNDROME · OBSERVED
      </text>

      {EDGES.map(([c, f]) => {
        const hot = faulty.has(f);
        return (
          <line
            key={`${c}-${f}`}
            className="tg-edge"
            x1={FAULTS[f]}
            y1={FAULT_Y}
            x2={CHECKS[c]}
            y2={CHECK_Y}
            stroke={hot ? "var(--rust)" : "var(--ink)"}
            strokeOpacity={hot ? 0.9 : 0.18}
            strokeWidth={hot ? 1.6 : 1.1}
          />
        );
      })}

      {animate &&
        EDGES.filter(([, f]) => faulty.has(f)).map(([c, f]) => (
          <circle key={`m-${step}-${c}-${f}`} r={2.6} fill="var(--rust)">
            <animateMotion
              dur="1.6s"
              begin="0.2s"
              repeatCount="indefinite"
              path={`M${FAULTS[f]} ${FAULT_Y} L${CHECKS[c]} ${CHECK_Y}`}
            />
          </circle>
        ))}

      {FAULTS.map((x, i) => (
        <circle
          key={`f${i}`}
          className="tg-node"
          cx={x}
          cy={FAULT_Y}
          r={9}
          fill={faulty.has(i) ? "var(--rust)" : "var(--paper-3)"}
          stroke={faulty.has(i) ? "var(--rust)" : "var(--ink-2)"}
          strokeWidth={1.4}
        />
      ))}

      {CHECKS.map((x, i) => (
        <rect
          key={`c${i}`}
          className="tg-node"
          x={x - 9}
          y={CHECK_Y - 9}
          width={18}
          height={18}
          rx={2}
          fill={fired.has(i) ? "var(--rust)" : "var(--paper-3)"}
          stroke={fired.has(i) ? "var(--rust)" : "var(--ink-2)"}
          strokeWidth={1.4}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="pt-36 md:pt-44 pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 md:gap-8 items-center">
        <div className="md:col-span-7">
          <div className="rise" style={rise(0)}>
            <span className="accent-rule" />
            <p className="eyebrow">AI-native quantum error correction</p>
          </div>
          <h1
            className="rise mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold tracking-[-0.03em] leading-[0.98] text-ink"
            style={rise(90)}
          >
            Unlock quantum
            <br />
            with AI.
          </h1>
          <p
            className="rise mt-8 text-lg md:text-[1.3rem] leading-relaxed text-ink-2 max-w-xl"
            style={rise(180)}
          >
            EdenCode builds real-time AI decoder technology for quantum error
            correction ecosystems — across all quantum hardware modalities.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={rise(270)}>
            <a href="/blogs" className="btn btn-primary">
              Read the research
              <ArrowRight className="w-4 h-4 btn-icon" />
            </a>
            <a href="/careers" className="btn btn-secondary">
              Join the team
            </a>
          </div>
        </div>
        <div className="rise md:col-span-5 md:pl-6" style={rise(240)}>
          <TannerGraph />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 md:mt-24 rise" style={rise(420)}>
        <div className="hairline pt-5 flex flex-wrap gap-x-10 gap-y-2 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-3">
          <span>DOE Genesis Mission awardee</span>
          <span>NVIDIA Ising ecosystem</span>
          <span>KITP · AI for Quantum Matter 2026</span>
        </div>
      </div>
    </section>
  );
}
