import type { ReactNode } from "react";
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

/** Shared frame for long-form posts: header, reading column, back link. */
export function BlogLayout({ tag, tone = "rust", title, author, date, readTime, children }: Props) {
  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      <header className="pt-36 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.14em] uppercase text-ink-2 hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Research
          </a>
          <div className="mt-8">
            <span className={`tag tag-${tone}`}>{tag}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08] text-ink">
            {title}
          </h1>
          <ul className="meta-row mt-6 flex flex-wrap items-center gap-y-1 font-mono text-[12px] tracking-wide text-ink-2">
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
              Back to research
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
