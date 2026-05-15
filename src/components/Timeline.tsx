export function Timeline() {
  const timelineEvents = [
    {
      date: "2026-05-04",
      title: "EdenCode Benchmarks Quantum Error Detection on 74-Qubit IBM Hardware",
      description: "New EdenCode research paper benchmarks quantum error detection on IBM superconducting hardware at up to 74 physical qubits, and maps the practical pseudothreshold for near-term devices. Two bottlenecks emerge: exponential sample overhead and exponential classical decoding cost. AI-accelerated decoding offers a complementary path through these constraints, and addressing them is a central focus of EdenCode's technology.",
      category: "RESEARCH",
      link: "https://arxiv.org/abs/2605.02861",
      linkLabel: "READ_PAPER",
      isHighlight: true,
    },
    {
      date: "2026-04-14",
      title: "Graph Transformer Decoder Released on World Quantum Day",
      description: "EdenCode publicly releases the Graph Transformer Decoder — an attention-based neural network approaching the theoretically optimal error threshold on surface codes and demonstrating the first neural scaling laws in quantum error correction. A single foundational model generalizes across code distances d = 3 to 21 without retraining.",
      category: "MODEL_RELEASE",
      link: "/blog-graph-transformer",
      linkLabel: "READ_MORE",
      link2: "https://github.com/EdenCodeInc/transformer-decoder",
      link2Label: "GITHUB",
      isHighlight: true,
    },
    {
      date: "2026-04-14",
      title: "World Quantum Day: EdenCode Featured in NVIDIA Ising Launch",
      description: "EdenCode obtained early access to NVIDIA's Ising Decoding framework and applied it to quantum error correction beyond its original design. Using the Ising CNN on H200 GPUs, we demonstrated that the architecture successfully generalizes to repetition code Tanner graphs with up to 2× LER improvement and 7× PyMatching speedup, validating a universal AI decoder framework across code families.",
      category: "NVIDIA_COLLAB",
      link: "/blog-nvidia-ising",
      linkLabel: "READ_MORE",
      link2: "https://nvidianews.nvidia.com/news/nvidia-launches-ising-the-worlds-first-open-ai-models-to-accelerate-the-path-to-useful-quantum-computers",
      link2Label: "NVIDIA_ISING",
      isSpecial: true,
    },
    {
      date: "2026-03-20",
      title: "EdenCode Sponsors Stanford Qfarm Workshop, CTO Panelist",
      description: "EdenCode sponsored Cal-Bay Quantum School and CTO joined panel discussion on 'Broad Applications of Quantum Hardware: Sensing, Networking, AI'",
      category: "NEWS",
      link: "https://qfarm.stanford.edu/events/conference-workshop/2026-cal-bay-quantum-school",
    },
    {
      date: "2026-03-05",
      title: "Founders Chair Sessions at 2026 APS March Meeting Global Physics Summit",
      description: "EdenCode founders chaired key sessions on 'Neural Network Quantum States and Learning Quantum Many-Body Systems' and 'Quantum Information and Simulation with Neutral Atoms'",
      category: "NEWS",
      link: "https://summit.aps.org/events/MAR-G42",
      linkLabel: "SESSION_1",
      link2: "https://summit.aps.org/events/MAR-G28",
      link2Label: "SESSION_2",
    },
    {
      date: "2026-01-24",
      title: "EdenCode Emerges from Stealth with Pre-Seed Funding",
      description: "EdenCode officially launched operations after closing pre-seed funding round. The Quantum Insider featured the company's emergence from stealth with real-time AI decoder technology for quantum error correction ecosystems",
      category: "ANNOUNCEMENT",
      link: "https://thequantuminsider.com/2026/01/24/edencode-emerges-from-stealth-with-real-time-ai-decoder-for-quantum-error-correction/",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "NVIDIA_COLLAB":
        return "text-[var(--nvidia-green)]";
      case "MODEL_RELEASE":
        return "text-[var(--terminal-secondary)]";
      case "RESEARCH":
        return "text-[var(--terminal-primary)]";
      case "PRODUCT":
        return "text-[var(--terminal-primary)]";
      case "ANNOUNCEMENT":
        return "text-[var(--terminal-primary)]";
      case "MILESTONE":
        return "text-[var(--terminal-primary)]";
      case "NEWS":
        return "text-[var(--terminal-primary)]";
      default:
        return "text-[var(--terminal-primary)]";
    }
  };

  return (
    <section className="relative pt-8 pb-24 bg-background overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 scanlines opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <div className="bg-background p-4 sm:p-6 border-l-4 border-[var(--terminal-secondary)] relative">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="text-[var(--terminal-secondary)] text-xs font-mono">
                $ cat timeline.log
              </div>
              <div className="text-[var(--terminal-primary)] text-xs hidden sm:block">│</div>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-[var(--terminal-primary)] font-bold font-mono text-glow">
                DEVELOPMENT_TIMELINE
              </h2>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--terminal-primary)]/0 via-[var(--terminal-primary)]/50 to-[var(--terminal-primary)]/0"></div>

            <div className="space-y-10">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-12 sm:pl-20 group">
                  {/* Timeline dot */}
                  <div className={`absolute left-3 sm:left-6 top-2 w-5 h-5 border-2 ${event.isSpecial ? 'border-[var(--nvidia-green)]' : event.isHighlight ? 'border-[var(--terminal-secondary)]' : 'border-[var(--terminal-primary)]'} bg-background ${event.isSpecial ? 'group-hover:bg-[var(--nvidia-green)]' : event.isHighlight ? 'group-hover:bg-[var(--terminal-secondary)]' : 'group-hover:bg-[var(--terminal-primary)]'} transition-all ${event.isSpecial ? 'shadow-[0_0_10px_var(--nvidia-green)]' : event.isHighlight ? 'shadow-[0_0_10px_var(--terminal-secondary)]' : ''}`}>
                    <div className={`absolute inset-0 flex items-center justify-center ${event.isSpecial ? 'text-[var(--nvidia-green)]' : event.isHighlight ? 'text-[var(--terminal-secondary)]' : 'text-[var(--terminal-primary)]'} text-xs group-hover:text-background`}>
                      ▶
                    </div>
                    <div className={`absolute inset-0 border-2 ${event.isSpecial ? 'border-[var(--nvidia-green)]' : event.isHighlight ? 'border-[var(--terminal-secondary)]' : 'border-[var(--terminal-primary)]'} opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}></div>
                  </div>

                  {/* Event card */}
                  <div className={`border-2 ${event.isSpecial ? 'border-[var(--nvidia-green)]/60 hover:border-[var(--nvidia-green)] shadow-lg shadow-[var(--nvidia-green)]/20 hover:shadow-2xl hover:shadow-[var(--nvidia-green)]/40' : event.isHighlight ? 'border-[var(--terminal-secondary)]/60 hover:border-[var(--terminal-secondary)] shadow-lg shadow-[var(--terminal-secondary)]/20 hover:shadow-2xl hover:shadow-[var(--terminal-secondary)]/40' : 'border-[var(--terminal-primary)]/30 hover:border-[var(--terminal-primary)] hover:shadow-lg hover:shadow-[var(--terminal-primary)]/20'} bg-background p-4 sm:p-6 transition-all relative`}>
                    {/* Corner accents */}
                    <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${event.isSpecial ? 'border-[var(--nvidia-green)]' : event.isHighlight ? 'border-[var(--terminal-secondary)]' : 'border-[var(--terminal-secondary)]/50'}`}></div>
                    <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${event.isSpecial ? 'border-[var(--nvidia-green)]' : event.isHighlight ? 'border-[var(--terminal-secondary)]' : 'border-[var(--terminal-secondary)]/50'}`}></div>
                    <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${event.isSpecial ? 'border-[var(--nvidia-green)]' : event.isHighlight ? 'border-[var(--terminal-secondary)]' : 'border-[var(--terminal-secondary)]/50'}`}></div>
                    <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${event.isSpecial ? 'border-[var(--nvidia-green)]' : event.isHighlight ? 'border-[var(--terminal-secondary)]' : 'border-[var(--terminal-secondary)]/50'}`}></div>

                    {/* Date & Category */}
                    <div className="flex items-center gap-3 mb-3 text-xs font-mono">
                      <span className={event.isSpecial ? 'text-[var(--nvidia-green-2)]' : 'text-[var(--terminal-secondary)]'}>{event.date}</span>
                      <span className="text-[var(--terminal-primary)]">│</span>
                      <span className={`${getCategoryColor(event.category)} border border-current px-2 py-0.5 ${event.isSpecial ? 'shadow-[0_0_8px_var(--nvidia-green)]' : event.isHighlight ? 'shadow-[0_0_8px_var(--terminal-secondary)]' : ''} ${event.isSpecial || event.isHighlight ? 'font-bold' : ''}`}>[{event.category}]</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg ${event.isSpecial ? 'text-[var(--nvidia-green)] drop-shadow-[0_0_8px_var(--nvidia-green)]' : event.isHighlight ? 'text-[var(--terminal-secondary)] drop-shadow-[0_0_8px_var(--terminal-secondary)]' : 'text-[var(--terminal-primary)]'} font-bold font-mono mb-3 ${event.isSpecial ? 'group-hover:drop-shadow-[0_0_12px_var(--nvidia-green)]' : event.isHighlight ? 'group-hover:drop-shadow-[0_0_12px_var(--terminal-secondary)]' : 'group-hover:text-[var(--terminal-secondary)]'} transition-colors`}>
                      {'>'} {event.title}
                    </h3>

                    {/* Description */}
                    <p className={`${event.isSpecial ? 'text-[var(--nvidia-green-2)]' : event.isHighlight ? 'text-[var(--terminal-secondary)]/80' : 'text-muted-foreground'} text-sm mb-4 leading-relaxed`}>
                      {event.description}
                    </p>

                    {/* Buttons */}
                    {event.link && (
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={event.link}
                          target={event.link.startsWith('http') ? '_blank' : undefined}
                          rel={event.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`px-3 py-1.5 border-2 font-bold font-mono text-xs transition-all inline-flex items-center gap-2 ${event.isSpecial ? 'border-[var(--nvidia-green)] text-[var(--nvidia-green)] hover:bg-[var(--nvidia-green)]/10 hover:drop-shadow-[0_0_8px_var(--nvidia-green)]' : event.isHighlight ? 'border-[var(--terminal-secondary)] text-[var(--terminal-secondary)] hover:bg-[var(--terminal-secondary)]/10 hover:drop-shadow-[0_0_8px_var(--terminal-secondary)]' : 'border-[var(--terminal-primary)] text-[var(--terminal-primary)] hover:bg-[var(--terminal-primary)]/10'}`}
                        >
                          {'>'} {event.linkLabel || 'READ_MORE'}
                          <span className="group-hover:translate-x-1 transition-transform">▶</span>
                        </a>
                        {event.link2 && (
                          <a
                            href={event.link2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-3 py-1.5 border-2 font-bold font-mono text-xs transition-all inline-flex items-center gap-2 ${event.isSpecial ? 'border-[var(--nvidia-green)] text-[var(--nvidia-green)] hover:bg-[var(--nvidia-green)]/10 hover:drop-shadow-[0_0_8px_var(--nvidia-green)]' : event.isHighlight ? 'border-[var(--terminal-secondary)] text-[var(--terminal-secondary)] hover:bg-[var(--terminal-secondary)]/10 hover:drop-shadow-[0_0_8px_var(--terminal-secondary)]' : 'border-[var(--terminal-primary)] text-[var(--terminal-primary)] hover:bg-[var(--terminal-primary)]/10'}`}
                          >
                            {'>'} {event.link2Label || 'LINK_2'}
                            <span className="group-hover:translate-x-1 transition-transform">▶</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Status */}
          <div className="mt-12 border-2 border-[var(--terminal-primary)]/50 bg-background p-5 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--terminal-primary)]/50 to-transparent"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs text-[var(--terminal-secondary)] font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[var(--terminal-primary)]">▶</span>
                <span>[STATUS] Timeline complete</span>
              </div>
              <div className="flex gap-4">
                <span>EVENTS: {timelineEvents.length}</span>
                <span className="text-[var(--terminal-primary)]">│</span>
                <span>ACTIVE: TRUE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
