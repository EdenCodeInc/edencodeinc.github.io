import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { DecodingLoop } from "./DecodingLoop";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` } as CSSProperties);

export function Hero() {
  return (
    <section className="pt-36 md:pt-44 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
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
        <div className="rise lg:col-span-5 lg:pl-6 w-full max-w-2xl lg:max-w-none" style={rise(240)}>
          <DecodingLoop />
        </div>
      </div>
    </section>
  );
}
