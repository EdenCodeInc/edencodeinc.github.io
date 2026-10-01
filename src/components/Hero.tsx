import { ArrowRight } from "lucide-react";

// A Tanner graph: fault nodes (circles) above, syndrome checks (squares) below.
// Two faults have fired, lighting up the checks that touch them.
const FAULTS = [40, 104, 168, 232, 296, 360, 424, 488];
const CHECKS = [72, 168, 264, 360, 456];
const EDGES: Array<[number, number]> = [
  [0, 0], [0, 1], [0, 2],
  [1, 1], [1, 2], [1, 3], [1, 4],
  [2, 3], [2, 4], [2, 5],
  [3, 4], [3, 5], [3, 6],
  [4, 5], [4, 6], [4, 7],
];
const FAULTY = new Set([3, 6]);
const FIRED = new Set([1, 2, 3, 4]);

function TannerGraph() {
  return (
    <svg
      viewBox="0 0 528 300"
      className="w-full h-auto"
      aria-hidden="true"
      focusable="false"
    >
      <text x="40" y="34" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="var(--ink-3)">
        e · FAULTS · HIDDEN
      </text>
      <text x="40" y="284" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="var(--ink-3)">
        s · SYNDROME · OBSERVED
      </text>

      {EDGES.map(([c, f]) => {
        const hot = FAULTY.has(f) && FIRED.has(c);
        return (
          <line
            key={`${c}-${f}`}
            x1={FAULTS[f]}
            y1={72}
            x2={CHECKS[c]}
            y2={228}
            stroke={hot ? "var(--rust)" : "var(--ink)"}
            strokeOpacity={hot ? 0.9 : 0.18}
            strokeWidth={hot ? 1.6 : 1.1}
          />
        );
      })}

      {FAULTS.map((x, i) => (
        <circle
          key={`f${i}`}
          cx={x}
          cy={72}
          r={9}
          fill={FAULTY.has(i) ? "var(--rust)" : "var(--paper-3)"}
          stroke={FAULTY.has(i) ? "var(--rust)" : "var(--ink-2)"}
          strokeWidth={1.4}
        />
      ))}

      {CHECKS.map((x, i) => (
        <rect
          key={`c${i}`}
          x={x - 9}
          y={219}
          width={18}
          height={18}
          rx={2}
          fill={FIRED.has(i) ? "var(--rust)" : "var(--paper-3)"}
          stroke={FIRED.has(i) ? "var(--rust)" : "var(--ink-2)"}
          strokeWidth={1.4}
          className={FIRED.has(i) ? "pulse-slow" : undefined}
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
          <p className="eyebrow mb-6">AI-native quantum error correction</p>
          <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-ink">
            Unlock quantum
            <br />
            with AI.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-ink-2 max-w-xl">
            EdenCode builds real-time AI decoder technology for quantum error
            correction ecosystems — across all quantum hardware modalities.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/blogs" className="btn btn-primary">
              Read the research
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/careers" className="btn btn-secondary">
              Join the team
            </a>
          </div>
        </div>
        <div className="md:col-span-5 md:pl-6">
          <TannerGraph />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 md:mt-24">
        <div className="hairline pt-5 flex flex-wrap gap-x-10 gap-y-2 font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3">
          <span>DOE Genesis Mission awardee</span>
          <span>NVIDIA Ising ecosystem</span>
          <span>KITP · AI for Quantum Matter 2026</span>
        </div>
      </div>
    </section>
  );
}
