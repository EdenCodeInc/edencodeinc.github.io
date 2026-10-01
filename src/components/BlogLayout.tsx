import type { CSSProperties, ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

type Props = {
  tag: string;
  tone?: "rust" | "amber" | "nvidia" | "ink";
  title: string;
  author: string;
  date: string;
  readTime: string;
  children: ReactNode;
};

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` } as CSSProperties);

/** Shared frame for long-form posts: header, reading column, back link. */
export function BlogLayout({ tag, tone = "rust", title, author, date, readTime, children }: Props) {
  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      <main id="main">
      <header className="pt-36 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <a
            href="/blogs"
            className="rise inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.16em] uppercase text-ink-2 hover:text-ink transition-colors"
            style={rise(0)}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Research
          </a>
          <div className="rise mt-8" style={rise(80)}>
            <span className={`tag tag-${tone}`}>{tag}</span>
          </div>
          <h1
            className="rise mt-5 font-display text-[clamp(2.125rem,4.5vw,3.5rem)] font-semibold tracking-[-0.025em] leading-[1.06] text-ink"
            style={rise(160)}
          >
            {title}
          </h1>
          <ul style={rise(240)} className="rise meta-row mt-6 flex flex-wrap items-center gap-y-1 font-mono text-[12px] tracking-wide text-ink-2">
            <li>{author}</li>
            <li>{date}</li>
            <li>{readTime} min read</li>
          </ul>
        </div>
      </header>

      <article className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="hairline pt-10 prose-ec">{children}</div>
          <div className="hairline mt-14 pt-8">
            <a href="/blogs" className="link-arrow">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to research</span>
            </a>
          </div>
        </div>
      </article>
      </main>

      <Footer />
    </div>
  );
}
