export function Timeline() {
  // Timeline events from newest to oldest (displayed top to bottom)
  const timelineEvents = [
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
      link2: "https://summit.aps.org/events/MAR-G28",
    },
    {
      date: "2026-01-24",
      title: "EdenCode Emerges from Stealth with Pre-Seed Funding",
      description: "EdenCode officially launched operations after closing pre-seed funding round. The Quantum Insider featured the company's emergence from stealth with real-time AI decoder technology for quantum error correction ecosystems",
      category: "ANNOUNCEMENT",
      link: "https://thequantuminsider.com/2026/01/24/edencode-emerges-from-stealth-with-real-time-ai-decoder-for-quantum-error-correction/",
    },
    {
      date: "2025-11-15",
      title: "Research Paper Published on LLM Accuracy",
      description: "Published paper 'How Focused Are LLMs? Understanding the Accuracy Cliff via Repetitive Deterministic Prediction Tasks'",
      category: "RESEARCH",
      link: "/blog-llm-accuracy",
    },
    {
      date: "2025-06-01",
      title: "Company Founded",
      description: "EdenCode Inc. founded to begin quantum AI technology development",
      category: "MILESTONE",
      link: null,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
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
      {/* Scanlines overlay */}
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
            {/* Vertical line with glow effect */}
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--terminal-primary)]/0 via-[var(--terminal-primary)]/50 to-[var(--terminal-primary)]/0"></div>

            {/* Timeline events */}
            <div className="space-y-10">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-12 sm:pl-20 group">
                  {/* Timeline dot with pulse effect */}
                  <div className="absolute left-3 sm:left-6 top-2 w-5 h-5 border-2 border-[var(--terminal-primary)] bg-background group-hover:bg-[var(--terminal-primary)] transition-all">
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--terminal-primary)] text-xs group-hover:text-background">
                      ▶
                    </div>
                    {/* Pulse ring on hover */}
                    <div className="absolute inset-0 border-2 border-[var(--terminal-primary)] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                  </div>

                  {/* Event card */}
                  <div className="border-2 border-[var(--terminal-primary)]/30 bg-background p-4 sm:p-6 hover:border-[var(--terminal-primary)] transition-all hover:shadow-lg hover:shadow-[var(--terminal-primary)]/20 relative">
                    {/* Card corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--terminal-secondary)]/50"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--terminal-secondary)]/50"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--terminal-secondary)]/50"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--terminal-secondary)]/50"></div>

                    {/* Date & Category */}
                    <div className="flex items-center gap-3 mb-3 text-xs font-mono">
                      <span className="text-[var(--terminal-secondary)]">{event.date}</span>
                      <span className="text-[var(--terminal-primary)]">│</span>
                      <span className={`${getCategoryColor(event.category)} border border-current px-2 py-0.5`}>[{event.category}]</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg text-[var(--terminal-primary)] font-bold font-mono mb-3 group-hover:text-[var(--terminal-secondary)] transition-colors">
                      {'>'} {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Link if available */}
                    {event.link && !event.link2 && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--terminal-primary)] text-sm font-mono transition-all"
                      >
                        {'>'} READ_MORE
                        <span className="group-hover:translate-x-1 transition-transform">▶</span>
                      </a>
                    )}
                    {/* Multiple links */}
                    {event.link && event.link2 && (
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[var(--terminal-primary)] text-sm font-mono hover:text-[var(--terminal-primary)] transition-colors"
                        >
                          {'>'} SESSION_1
                          <span className="group-hover:translate-x-1 transition-transform">▶</span>
                        </a>
                        <a
                          href={event.link2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[var(--terminal-primary)] text-sm font-mono hover:text-[var(--terminal-primary)] transition-colors"
                        >
                          {'>'} SESSION_2
                          <span className="group-hover:translate-x-1 transition-transform">▶</span>
                        </a>
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
