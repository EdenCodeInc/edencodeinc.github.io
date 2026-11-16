import { BlogLayout } from "../components/BlogLayout";
import announcement from "../data/sc26-announcement.json";

function LinkedIntro({ text }: { text: string }) {
  const { text: label, url } = announcement.introLink;
  const index = text.indexOf(label);
  if (index === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, index)}
      <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
      {text.slice(index + label.length)}
    </>
  );
}

export default function BlogSC26QuantumAIInfrastructure() {
  return (
    <BlogLayout
      tag="SC26 · Research announcement"
      title={announcement.title}
      author="EdenCode Research"
      date={announcement.date}
      readTime={announcement.readTime}
    >
      <section>
        <p className="text-xl text-ink-2">{announcement.subtitle}</p>
        {announcement.intro.map((paragraph) => <p key={paragraph}><LinkedIntro text={paragraph} /></p>)}
      </section>

      {announcement.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.figure && (
            <figure className="figure">
              <a href={section.figure.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-resolution figure: ${section.figure.alt}`}>
                <img
                  src={section.figure.src}
                  alt={section.figure.alt}
                  width={section.figure.width}
                  height={section.figure.height}
                  style={{ background: "#fff" }}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>
                {section.figure.caption}{" "}
                <a href={section.figure.src} target="_blank" rel="noopener noreferrer">Open full-size figure</a>.
              </figcaption>
            </figure>
          )}
          {section.comparison && (
            <div className="my-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-base border-collapse">
                  <caption className="text-left font-mono text-xs tracking-wide text-ink-2 pb-4">{section.comparison.caption}</caption>
                  <thead>
                    <tr className="border-y border-rule">
                      {section.comparison.headers.map((heading) => <th key={heading} scope="col" className="py-3 px-3 font-semibold">{heading}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {section.comparison.rows.map(([decoder, rate], index) => (
                      <tr key={decoder} className={`border-b border-rule ${index === 0 ? "bg-paper-2 font-semibold" : ""}`}>
                        <th scope="row" className={`py-3 px-3 ${index === 0 ? "font-semibold" : "font-normal"}`}>{decoder}</th>
                        <td className="py-3 px-3 font-mono tabular-nums">{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-relaxed text-ink-2" style={{ marginTop: "1rem" }}>{section.comparison.note}</p>
            </div>
          )}
          {section.note && (
            <aside className="callout">
              <p className="callout-title">{section.note.title}</p>
              <p>{section.note.text}</p>
            </aside>
          )}
          {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      ))}

      <section>
        <h2>Read the research</h2>
        <ul>
          <li>
            <a href="https://arxiv.org/abs/2610.41398v1" target="_blank" rel="noopener noreferrer">Distilling Knowledge from Search: Decoder Model Factory for Quantum LDPC Codes</a>
            <span className="mt-1 block text-sm text-ink-2">
              arXiv:2610.41398 · <a href="/blog-decoder-factory" aria-label="EdenCode overview of Decoder Model Factory">EdenCode overview</a>
            </span>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2611.17652" target="_blank" rel="noopener noreferrer">Quantum Data Processing Unit for Neutral-Atom Quantum Computers</a>
            <span className="mt-1 block text-sm text-ink-2">
              arXiv:2611.17652 · <a href="/blog-quantum-data-processing-unit" aria-label="EdenCode overview of the Quantum Data Processing Unit">EdenCode overview</a>
            </span>
          </li>
        </ul>

        <h3>Technology reference</h3>
        <p>
          <a href="https://developer.nvidia.com/blog/nvidia-nvqlink-architecture-integrates-accelerated-computing-with-quantum-processors/" target="_blank" rel="noopener noreferrer">NVIDIA NVQLink architecture</a>
          {" "}— NVIDIA’s architecture overview.
        </p>
        <p className="text-sm text-ink-2">
          Figures 10 and 11 are adapted with generalized code labels and unchanged data.
          Figure numbers refer to the revised decoder manuscript and the QDPU preprint. The linked decoder preprint is v1;
          the 4,600+ logical-qubit results are from the revised manuscript. All large-code decoding results
          are simulations; the separate NVQLink and FPGA results are the stated board measurements.
        </p>
      </section>
    </BlogLayout>
  );
}
