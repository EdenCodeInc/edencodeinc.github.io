import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { DecodingLoop } from "./DecodingLoop";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` } as CSSProperties);

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
            Unlock <em className="accent-serif">quantum</em>
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
          <DecodingLoop />
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
