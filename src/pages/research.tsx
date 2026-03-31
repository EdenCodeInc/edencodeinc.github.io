import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function ResearchPage() {

  const blogPosts = [
    {
      id: 0,
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
      id: 1,
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
                className="border-2 border-[var(--terminal-primary)]/30 hover:border-[var(--terminal-primary)] bg-card transition-all group"
              >
                {/* File Header */}
                <div className="border-b border-[var(--terminal-primary)]/30 px-3 sm:px-6 py-3 bg-muted/50">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <span className="text-[var(--terminal-secondary)]">[{post.category}]</span>
                      <span className="text-[var(--terminal-primary)] text-[10px] sm:text-xs">{post.fileType}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 text-[var(--terminal-secondary)] text-[10px] sm:text-xs">
                      <span>{post.readTime}min</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl text-[var(--terminal-primary)] font-bold font-mono mb-2 group-hover:text-glow transition-all">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[var(--terminal-primary)]/20">
                    <div className="text-xs text-[var(--terminal-secondary)] font-mono">
                      <span>AUTHOR: {post.author}</span>
                    </div>
                    <a
                      href={post.link}
                      className="px-4 py-2 bg-primary border border-primary text-primary-foreground font-bold text-sm font-mono hover:bg-accent transition-all inline-flex items-center gap-2"
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
