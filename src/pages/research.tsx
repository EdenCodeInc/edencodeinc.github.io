import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function ResearchPage() {

  const blogPosts = [
    {
      id: 0,
      title: "An Immune System for Quantum Computers: Building an AI Decoder Factory for Quantum LDPC Codes",
      excerpt: "Presented at KITP's 'Artificial Intelligence at the Quantum Frontier' conference: a self-improving loop in which the GraphMP neural decoder trains on its own device-verified search trajectories. Taught on three quantum LDPC codes and tested on twelve, the third-generation decoder matches or surpasses BP+OSD and Relay-BP almost everywhere — and re-adapts when the noise drifts.",
      author: "Yi-Zhuang You",
      date: "2026-09-28",
      category: "KITP_TALK",
      readTime: "10",
      link: "/blog-decoder-factory",
      isHighlight: true,
    },
    {
      id: 1,
      title: "One Decoder for Every Quantum Code: EdenCode Releases the Graph Transformer Decoder",
      excerpt: "EdenCode publicly releases the Graph Transformer Decoder — an attention-based neural network approaching the theoretically optimal error threshold on surface codes and demonstrating the first neural scaling laws in quantum error correction. A single foundational model generalizes across code distances d = 3 to 21 without retraining.",
      author: "EdenCode Research",
      date: "2026-04-14",
      category: "MODEL_RELEASE",
      readTime: "12",
      link: "/blog-graph-transformer",
      isHighlight: true,
    },
    {
      id: 2,
      title: "Scaling AI-Powered Quantum Error Correction with NVIDIA Ising and GPU Compute",
      excerpt: "EdenCode obtained early access to NVIDIA's Ising Decoding framework and applied it to quantum error correction beyond its original design. Using the Ising CNN on H200 GPUs, we demonstrated that the architecture successfully generalizes to repetition code Tanner graphs with up to 2× LER improvement and 7× PyMatching speedup, validating a universal AI decoder framework across code families.",
      author: "EdenCode Research",
      date: "2026-04-14",
      category: "NVIDIA_COLLAB",
      readTime: "10",
      link: "/blog-nvidia-ising",
      isSpecial: true,
    },
    {
      id: 3,
      title: "How Focused Are LLMs? Understanding the Accuracy Cliff via Repetitive Deterministic Prediction Tasks",
      excerpt: "A quantitative study revealing why large language models fail at repetitive reasoning tasks and how statistical physics can explain—and mitigate—these failures through divide-and-conquer strategies.",
      author: "EdenCode Research",
      date: "2025-11-15",
      category: "RESEARCH",
      readTime: "12",
      link: "/blog-llm-accuracy",
    },
    {
      id: 4,
      title: "AI for Quantum Error Correction",
      excerpt: "Explore the role of quantum error correction, the necessity of leveraging artificial intelligence for error detection and correction, and how these technologies collaboratively enhance the performance of quantum algorithms.",
      author: "Dr. Wanda Hou",
      date: "2025-03-15",
      category: "RESEARCH",
      readTime: "8",
      link: "/blog-ai-quantum-error-correction",
    },
  ];

  const tagTone = (post: { isSpecial?: boolean; isHighlight?: boolean }) =>
    post.isSpecial ? "tag-nvidia" : post.isHighlight ? "tag-rust" : "tag-amber";

  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      <header className="pt-36 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <span className="accent-rule" />
          <p className="eyebrow mb-4">Research</p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-[-0.025em] text-ink">
            Research
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
            Papers, model releases and notes from the EdenCode lab.
          </p>
        </div>
      </header>

      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol>
            {blogPosts.map((post) => (
              <Reveal as="li" key={post.id} delay={Math.min(post.id, 3) * 70} className="row hairline py-8 md:py-10 grid md:grid-cols-12 gap-3 md:gap-8">
                <div className="md:col-span-2 font-mono text-[13px] tracking-wide text-ink-2 md:pt-1">
                  {post.date}
                </div>
                <div className="md:col-span-10 max-w-3xl">
                  <span className={`tag ${tagTone(post)}`}>{post.category.replace(/_/g, " ")}</span>
                  <h2 className="mt-4 font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight leading-snug text-ink">
                    <a href={post.link} className="hover:text-rust transition-colors">
                      {post.title}
                    </a>
                  </h2>
                  <p className="mt-3 text-[15px] md:text-base leading-relaxed text-ink-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                    <span className="font-mono text-[12px] tracking-wide text-ink-3">
                      {post.author} · {post.readTime} min read
                    </span>
                    <a href={post.link} className="link-arrow">
                      <span>Read the post</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </div>
  );
}
