import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function ResearchPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 0,
      title: "How Focused Are LLMs? Understanding the Accuracy Cliff via Repetitive Deterministic Prediction Tasks",
      excerpt: "A quantitative study revealing why large language models fail at repetitive reasoning tasks and how statistical physics can explain—and mitigate—these failures through divide-and-conquer strategies.",
      author: "EdenCode Research Team",
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
      <section className="relative pt-32 pb-12 overflow-hidden bg-background crt-screen">
        {/* Matrix background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[var(--terminal-primary)] text-xs font-mono"
              style={{
                left: `${i * 7}%`,
                animation: `matrix-fall ${12 + Math.random() * 8}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {[...Array(25)].map((_, j) => (
                <div key={j}>
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="absolute inset-0 scanlines pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Terminal Window */}
            <div className="terminal-window bg-background p-8">
              <div className="space-y-4">
                <div className="text-[var(--terminal-primary)] text-sm font-mono space-y-1">
                  <p>$ cd /system_log</p>
                  <p>$ tail -f updates.log</p>
                  <p className="text-[var(--terminal-secondary)]">---</p>
                </div>

                <h1 className="text-4xl md:text-5xl text-[var(--terminal-secondary)] font-bold font-mono text-glow-orange">
                  {'>'} SYSTEM_LOG
                </h1>

                <p className="text-[var(--terminal-primary)] text-sm">
                  [INFO] Displaying {blogPosts.length} entries | Categories: [RESEARCH] [PRODUCT] [ANNOUNCEMENT] [NEWS]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="border-2 border-[var(--terminal-primary)]/30 bg-card hover:border-[var(--terminal-primary)] transition-all group"
                onMouseEnter={() => setSelectedPost(post.id)}
                onMouseLeave={() => setSelectedPost(null)}
              >
                {/* File Header */}
                <div className="border-b border-[var(--terminal-primary)]/30 px-6 py-3 bg-muted/50">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-4">
                      <span className="text-[var(--terminal-secondary)]">[{post.category}]</span>
                      <span className="text-[var(--terminal-primary)]">{post.fileType}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[var(--terminal-secondary)]">
                      <span>{post.readTime}min</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl text-[var(--terminal-primary)] font-bold font-mono mb-2 group-hover:text-glow transition-all">
                        {post.title}
                      </h2>
                      <p className="text-[var(--terminal-secondary)] text-sm mb-3 font-mono">
                        $ cat {post.fileType.split('.')[0]}_summary.txt
                      </p>
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
                      className="px-4 py-2 bg-primary border border-primary text-primary-foreground text-sm font-bold font-mono hover:bg-accent transition-all inline-flex items-center gap-2"
                    >
                      {'>'} READ_ENTRY
                      <span className="group-hover:translate-x-1 transition-transform">▶</span>
                    </a>
                  </div>
                </div>

                {/* Terminal Indicator */}
                {selectedPost === post.id && (
                  <div className="px-6 pb-3 text-xs text-[var(--terminal-primary)] font-mono animate-[terminal-boot_0.2s_ease-out]">
                    $ entry selected: {post.fileType} <span className="animate-pulse">▮</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Status */}
          <div className="max-w-4xl mx-auto mt-8 border border-[var(--terminal-primary)]/30 bg-background p-4">
            <div className="flex justify-between items-center text-xs text-[var(--terminal-secondary)] font-mono">
              <span>[STATUS] End of log entries</span>
              <span>ENTRIES: {blogPosts.length} | ERRORS: 0</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
