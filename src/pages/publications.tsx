import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import publications from "../data/publications.json";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      <main id="main">
        <header className="pt-36 pb-12">
          <div className="max-w-6xl mx-auto px-6">
            <span className="accent-rule" />
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-[-0.025em] text-ink">
              Publications
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
              Academic papers from EdenCode and our collaborators.
            </p>
          </div>
        </header>

        <section className="pb-24 md:pb-32" aria-label="Academic publications">
          <div className="max-w-6xl mx-auto px-6">
            <ol>
              {publications.map((paper, index) => (
                <Reveal
                  as="li"
                  key={paper.id}
                  delay={index * 70}
                  className="row hairline py-8 md:py-10 grid md:grid-cols-12 gap-3 md:gap-8"
                >
                  <time
                    dateTime={paper.date}
                    className="md:col-span-2 font-mono text-[13px] tracking-wide text-ink-2 md:pt-1"
                  >
                    {paper.date}
                  </time>
                  <article className="md:col-span-10 max-w-3xl min-w-0">
                    <span
                      className={`tag ${paper.status === "Journal article" ? "tag-rust" : "tag-amber"}`}
                    >
                      {paper.status}
                    </span>
                    <h2 className="mt-4 font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight leading-snug text-ink">
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rust transition-colors"
                      >
                        {paper.title}
                      </a>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-2">
                      {paper.authors.join(", ")}
                    </p>
                    <p className="mt-2 font-mono text-[12px] leading-relaxed text-rust">
                      {paper.venue}
                    </p>
                    <p className="mt-4 text-[15px] md:text-base leading-relaxed text-ink-2">
                      {paper.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                      >
                        <span>
                          {paper.status === "Journal article"
                            ? "Journal article"
                            : "arXiv"}
                        </span>
                        <ArrowUpRight className="w-4 h-4 arrow-ext" />
                      </a>
                      <a
                        href={paper.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                      >
                        <span>PDF</span>
                        <ArrowUpRight className="w-4 h-4 arrow-ext" />
                      </a>
                      {paper.note && (
                        <a href={paper.note} className="link-arrow">
                          <span>Research blog</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <details className="mt-5 text-sm text-ink-2">
                      <summary className="cursor-pointer w-fit py-1 hover:text-ink transition-colors">
                        BibTeX citation
                      </summary>
                      <pre
                        className="mt-3 p-4 border border-rule bg-paper-2 font-mono text-[11px] leading-relaxed whitespace-pre-wrap break-words overflow-x-auto"
                        tabIndex={0}
                      >
                        {paper.bibtex}
                      </pre>
                    </details>
                  </article>
                </Reveal>
              ))}
            </ol>
            <p className="hairline pt-6 text-sm leading-relaxed text-ink-3">
              Dates refer to journal publication or the first arXiv submission.
              Journal articles and preprints are identified above.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
