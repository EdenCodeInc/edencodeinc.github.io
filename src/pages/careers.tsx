import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobs = [
    {
      id: 0,
      title: "Technical Marketing Manager",
      tagline: "Be the public face of our quantum AI technology",
      location: "Palo Alto or San Jose, CA",
      type: "FULL_TIME",
      remote: false,
      description: "We are looking for a charismatic and organized Technical Marketing Manager to be the public face of our technology. You will bridge the gap between our internal R&D team and the global quantum community.",
      responsibilities: [
        "Conference & Event Strategy: Own the global event calendar. Plan, organize, and execute our presence at key Quantum and AI conferences.",
        "Technical Evangelism: Deliver demos, explain our technology to non-experts, and answer technical inquiries.",
        "Content & Communications: Write high-quality technical blog posts, white papers, and LinkedIn updates.",
        "Ecosystem Building: Act as the liaison for hardware partners and industry associations.",
        "Market Intelligence: Monitor competitor announcements and research trends.",
      ],
      qualifications: [
        "Bachelor's degree in Physics, Engineering, Computer Science, or related STEM field",
        "Solid understanding of Quantum Computing (qubits, gates, error correction) and AI",
        "Exceptional public speaking and writing skills",
        "Proven experience organizing technology conferences or symposiums",
        "Willingness to travel (40-50%)",
      ],
      email: "hwanda@edencode.ai",
    },
    {
      id: 1,
      title: "AI Research Scientist – Quantum Error Correction",
      tagline: "Work at the intersection of Deep Learning and Quantum Physics",
      location: "San Jose, CA",
      type: "FULL_TIME",
      remote: false,
      description: "Research and design advanced neural network architectures that improve the accuracy and decoding speed of Quantum Error Correction. Collaborate closely with hardware architects to ensure algorithms are scalable for real-time control systems.",
      responsibilities: [
        "Design novel deep learning architectures for quantum error correction",
        "Implement and optimize GNNs, Probabilistic Graphical Models, or Transformers",
        "Bridge theoretical models with physical hardware constraints",
        "Publish research in top-tier conferences (NeurIPS, ICML, PRL, PRX)",
        "Collaborate with quantum physicists and ML engineers",
      ],
      qualifications: [
        "Ph.D. or Master's in Physics, CS, EE, Applied Math, or related field",
        "Strong expertise in modern deep learning architectures (GNNs, Transformers)",
        "Expert-level Python fluency and experience with PyTorch/TensorFlow/JAX",
        "Track record of publications in top-tier conferences/journals",
        "Solid grounding in linear algebra, probability theory, and optimization",
      ],
      email: "hwanda@edencode.ai",
    },
    {
      id: 2,
      title: "Head of Quantum Hardware Architecture",
      tagline: "Lead hardware-software co-design at the speed of physics",
      location: "San Jose, CA",
      type: "FULL_TIME",
      remote: false,
      description: "Lead the design and implementation of high-throughput, low-latency hardware accelerators for real-time quantum error correction. Own the hardware roadmap and collaborate with AI researchers to co-design algorithms optimized for deployment.",
      responsibilities: [
        "Design FPGA/ASIC architectures for real-time QEC decoding",
        "Optimize hardware for sub-microsecond latency requirements",
        "Co-design ML algorithms with hardware constraints in mind",
        "Lead hardware architecture roadmap and team",
        "Interface with quantum hardware partners",
      ],
      qualifications: [
        "Ph.D. or Master's in Electrical Engineering, Computer Engineering, or Physics",
        "Extensive experience with FPGA/ASIC design and verification",
        "Proficiency in Verilog/VHDL, SystemVerilog, and hardware simulation tools",
        "Understanding of quantum error correction schemes",
        "Experience with real-time systems and low-latency design",
      ],
      email: "hwanda@edencode.ai",
    },
  ];

  const toggleJob = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

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
            <div className="terminal-window bg-background p-4 sm:p-8">
              <div className="space-y-4">
                <div className="text-[var(--terminal-primary)] text-sm font-mono space-y-1">
                  <p>$ cd /careers</p>
                  <p>$ ./search_openings.sh --location=all</p>
                  <p className="text-[var(--terminal-secondary)]">---</p>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--terminal-secondary)] font-bold font-mono text-glow-orange break-words">
                  {'>'} JOIN_THE_QUANTUM_TEAM
                </h1>

                <p className="text-[var(--terminal-primary)] text-sm">
                  [INFO] {jobs.length} positions available
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="border border-[var(--terminal-primary)]/30 p-3 bg-card">
                    <div className="text-[var(--terminal-secondary)] text-xs mb-1">[FOCUS]</div>
                    <div className="text-[var(--terminal-primary)] text-sm font-bold">Quantum AI</div>
                  </div>
                  <div className="border border-[var(--terminal-primary)]/30 p-3 bg-card">
                    <div className="text-[var(--terminal-secondary)] text-xs mb-1">[TYPE]</div>
                    <div className="text-[var(--terminal-primary)] text-sm font-bold">Deep Tech</div>
                  </div>
                  <div className="border border-[var(--terminal-primary)]/30 p-3 bg-card">
                    <div className="text-[var(--terminal-secondary)] text-xs mb-1">[LOCATION]</div>
                    <div className="text-[var(--terminal-primary)] text-sm font-bold">Bay Area</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="border-2 border-[var(--terminal-primary)]/30 bg-card hover:border-[var(--terminal-primary)] transition-all"
              >
                {/* Job Header - Clickable */}
                <div
                  className="cursor-pointer"
                  onClick={() => toggleJob(job.id)}
                >
                  {/* File Info Bar */}
                  <div className="border-b border-[var(--terminal-primary)]/30 px-3 sm:px-6 py-3 bg-muted/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono">
                      <span className="text-[var(--terminal-secondary)]">[{job.type}]</span>
                      <span className="text-[var(--terminal-secondary)] text-[10px] sm:text-xs">{job.location}</span>
                    </div>
                    <div className="text-[var(--terminal-primary)] text-xs font-mono">
                      {expandedJob === job.id ? "[-] COLLAPSE" : "[+] EXPAND"}
                    </div>
                  </div>

                  {/* Job Title */}
                  <div className="p-4 sm:p-6 hover:bg-[var(--terminal-primary)]/5 transition-colors">
                    <h2 className="text-lg sm:text-xl md:text-2xl text-[var(--terminal-primary)] font-bold font-mono mb-2">
                      {job.title}
                    </h2>
                    <p className="text-[var(--terminal-secondary)] text-sm font-mono">
                      {'>'} {job.tagline}
                    </p>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedJob === job.id && (
                  <div className="border-t border-[var(--terminal-primary)]/30 animate-[terminal-boot_0.3s_ease-out]">
                    <div className="p-4 sm:p-6 space-y-6">
                      {/* Description */}
                      <div>
                        <div className="text-[var(--terminal-secondary)] text-sm font-bold font-mono mb-2">
                          [DESCRIPTION]
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <div className="text-[var(--terminal-secondary)] text-sm font-bold font-mono mb-3">
                          [RESPONSIBILITIES]
                        </div>
                        <div className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="text-[var(--terminal-primary)] mt-1 text-xs">{'>'}</span>
                              <span className="text-muted-foreground text-sm">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Qualifications */}
                      <div>
                        <div className="text-[var(--terminal-secondary)] text-sm font-bold font-mono mb-3">
                          [QUALIFICATIONS]
                        </div>
                        <div className="space-y-2">
                          {job.qualifications.map((qual, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="text-[var(--terminal-primary)] mt-1 text-xs">{'>'}</span>
                              <span className="text-muted-foreground text-sm">{qual}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Apply Button */}
                      <div className="pt-4 border-t border-[var(--terminal-primary)]/30">
                        <div className="text-[var(--terminal-secondary)] text-xs font-mono mb-3">
                          $ ./apply.sh --email={job.email}
                        </div>
                        <a
                          href={`mailto:${job.email}?subject=Application: ${job.title}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary border-2 border-primary text-primary-foreground font-bold font-mono hover:bg-accent transition-all"
                        >
                          {'>'} SEND_APPLICATION
                          <span>▶</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Status */}
          <div className="max-w-4xl mx-auto mt-8 border border-[var(--terminal-primary)]/30 bg-background p-4">
            <div className="flex justify-between items-center text-xs text-[var(--terminal-secondary)] font-mono">
              <span>[STATUS] End of job listings</span>
              <span>POSITIONS: {jobs.length} | STATUS: HIRING</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
