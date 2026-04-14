import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function ResearchPage() {

  const blogPosts = [
    {
      id: 0,
      title: "One Decoder for Every Quantum Code: EdenCode Releases the Graph Transformer Decoder",
      excerpt: "EdenCode publicly releases the Graph Transformer Decoder — an attention-based neural network approaching the theoretically optimal error threshold on surface codes and demonstrating the first neural scaling laws in quantum error correction. A single foundational model generalizes across code distances d = 3 to 21 without retraining.",
      author: "EdenCode Research",
      date: "2026-04-14",
      category: "MODEL_RELEASE",
      readTime: "12",
      link: "/blog-graph-transformer",
      fileType: "model_release.md",
      isHighlight: true,
    },
    {
      id: 1,
      title: "Scaling AI-Powered Quantum Error Correction with NVIDIA Ising and GPU Compute",
      excerpt: "EdenCode obtained early access to NVIDIA's Ising Decoding framework and applied it to quantum error correction beyond its original design. Using the Ising CNN on H200 GPUs, we demonstrated that the architecture successfully generalizes to repetition code Tanner graphs with up to 2× LER improvement and 7× PyMatching speedup, validating a universal AI decoder framework across code families.",
      author: "EdenCode Research",
      date: "2026-04-14",
      category: "NVIDIA_COLLAB",
      readTime: "10",
      link: "/blog-nvidia-ising",
      fileType: "nvidia_collab.md",
      isSpecial: true,
    },
    {
      id: 2,
      title: "How Focused Are LLMs? Understanding the Accuracy Cliff via Repetitive Deterministic Prediction Tasks",
      excerpt: "A quantitative study revealing why large language models fail at repetitive reasoning tasks and how statistical physics can explain—and mitigate—these failures through divide-and-conquer strategies.",
      author: "EdenCode Research",
      date: "2025-11-15",
      category: "RESEARCH",
      readTime: "12",
      link: "/blog-llm-accuracy",
      fileType: "research_paper.pdf",
    },
    {
      id: 3,
      title: "AI for Quantum Error Correction",
      excerpt: "Explore the role of quantum error correction, the necessity of leveraging artificial intelligence for error detection and correction, and how these technologies collaboratively enhance the performance of quantum algorithms.",
      author: "Dr. Wanda Hou",
      date: "2025-03-15",
      category: "RESEARCH",
      readTime: "8",
      link: "/blog-ai-quantum-error-correction",
      fileType: "tech_report.md",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-6 overflow-hidden bg-background">
        <div className="absolute inset-0 scanlines pointer-events-none opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-background p-4 sm:p-6 border-l-4 border-[var(--terminal-secondary)] relative">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="text-[var(--terminal-secondary)] text-xs font-mono">
                $ ls system_log/
              </div>
              <div className="text-[var(--terminal-primary)] text-xs hidden sm:block">│</div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-[var(--terminal-primary)] font-bold font-mono text-glow">
                SYSTEM_LOG
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="pt-6 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className={`border-2 ${
                  post.isSpecial
                    ? 'border-[var(--nvidia-green)]/60 hover:border-[var(--nvidia-green)] shadow-lg shadow-[var(--nvidia-green)]/20 hover:shadow-2xl hover:shadow-[var(--nvidia-green)]/40'
                    : post.isHighlight
                    ? 'border-[var(--terminal-secondary)]/60 hover:border-[var(--terminal-secondary)] shadow-lg shadow-[var(--terminal-secondary)]/20 hover:shadow-2xl hover:shadow-[var(--terminal-secondary)]/40'
                    : 'border-[var(--terminal-primary)]/30 hover:border-[var(--terminal-primary)]'
                } bg-card transition-all group`}
              >
                {/* File Header */}
                <div className={`border-b ${
                  post.isSpecial ? 'border-[var(--nvidia-green)]/30'
                  : post.isHighlight ? 'border-[var(--terminal-secondary)]/30'
                  : 'border-[var(--terminal-primary)]/30'
                } px-3 sm:px-6 py-3 bg-muted/50`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <span className={`${
                        post.isSpecial
                          ? 'text-[var(--nvidia-green)] border border-current px-2 py-0.5 shadow-[0_0_8px_var(--nvidia-green)] font-bold'
                          : post.isHighlight
                          ? 'text-[var(--terminal-secondary)] border border-current px-2 py-0.5 shadow-[0_0_8px_var(--terminal-secondary)] font-bold'
                          : 'text-[var(--terminal-secondary)]'
                      }`}>[{post.category}]</span>
                      <span className={`${
                        post.isSpecial ? 'text-[var(--nvidia-green-2)]'
                        : post.isHighlight ? 'text-[var(--terminal-secondary)]'
                        : 'text-[var(--terminal-primary)]'
                      } text-[10px] sm:text-xs`}>{post.fileType}</span>
                    </div>
                    <div className={`flex items-center gap-2 sm:gap-4 ${
                      post.isSpecial ? 'text-[var(--nvidia-green-2)]' : 'text-[var(--terminal-secondary)]'
                    } text-[10px] sm:text-xs`}>
                      <span>{post.readTime}min</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className={`text-xl md:text-2xl ${
                        post.isSpecial
                          ? 'text-[var(--nvidia-green)] drop-shadow-[0_0_8px_var(--nvidia-green)] group-hover:drop-shadow-[0_0_12px_var(--nvidia-green)]'
                          : post.isHighlight
                          ? 'text-[var(--terminal-secondary)] drop-shadow-[0_0_8px_var(--terminal-secondary)] group-hover:drop-shadow-[0_0_12px_var(--terminal-secondary)]'
                          : 'text-[var(--terminal-primary)] group-hover:text-glow'
                      } font-bold font-mono mb-2 transition-all`}>
                        {post.title}
                      </h2>
                      <p className={`${
                        post.isSpecial ? 'text-[var(--nvidia-green-3)]'
                        : post.isHighlight ? 'text-[var(--terminal-secondary)]/80'
                        : 'text-muted-foreground'
                      } text-sm leading-relaxed`}>
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-center justify-between pt-4 border-t ${
                    post.isSpecial ? 'border-[var(--nvidia-green)]/20'
                    : post.isHighlight ? 'border-[var(--terminal-secondary)]/20'
                    : 'border-[var(--terminal-primary)]/20'
                  }`}>
                    <div className={`text-xs ${
                      post.isSpecial ? 'text-[var(--nvidia-green-2)]' : 'text-[var(--terminal-secondary)]'
                    } font-mono`}>
                      <span>AUTHOR: {post.author}</span>
                    </div>
                    <a
                      href={post.link}
                      className={`px-4 py-2 ${
                        post.isSpecial
                          ? 'bg-[var(--nvidia-green)] border-[var(--nvidia-green)] text-primary-foreground hover:shadow-[0_0_12px_var(--nvidia-green)]'
                          : post.isHighlight
                          ? 'bg-[var(--terminal-secondary)] border-[var(--terminal-secondary)] text-primary-foreground hover:shadow-[0_0_12px_var(--terminal-secondary)]'
                          : 'bg-primary border-primary text-primary-foreground hover:bg-accent'
                      } border font-bold text-sm font-mono transition-all inline-flex items-center gap-2`}
                    >
                      {'>'} READ_ENTRY
                      <span className="group-hover:translate-x-1 transition-transform">▶</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
