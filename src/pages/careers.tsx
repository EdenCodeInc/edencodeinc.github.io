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
      title: "Principal FPGA Engineer – Quantum Control",
      tagline: "Integrate AI onto the FPGA fabric driving real-time quantum control",
      location: "San Jose, CA",
      type: "FULL_TIME",
      remote: false,
      description: "Own the hardware-software interface between EdenCode's AI decoders and the real-time FPGA control stack running our quantum computers. Deploy our ML models onto modern RFSoC-class control platforms, drive the feedforward loop down to the microsecond scale, and help make fault-tolerant quantum error correction feasible at the speed of physics. A deeply technical IC role spanning AI deployment, FPGA fabric, and the RF/analog chain behind quantum gate operations.",
      responsibilities: [
        "Deploy EdenCode's QEC decoders onto FPGA fabric and tightly-coupled accelerators with deterministic, low-latency links",
        "Architect high-bandwidth data paths from instrumentation into the FPGA — removing the PC from the real-time control loop",
        "Design hardware-accelerated signal and image processing pipelines for massively parallel qubit arrays",
        "Implement real-time control algorithms on FPGA and drive low-jitter RF waveform synthesis for gate and qubit-transport operations",
        "Build the mid-circuit measurement feedforward chain from measurement to conditional gate within a deterministic microsecond-scale budget",
        "Extend RF and analog control capabilities, including multi-board synchronization at sub-microsecond latency",
        "Partner with quantum hardware teams to co-design the control system against real experimental constraints",
      ],
      qualifications: [
        "B.S., M.S., or Ph.D. in Electrical Engineering, Computer Engineering, Physics, or related field — with senior experience in low-latency RF/FPGA design",
        "Deep expertise with RFSoC-class FPGA platforms; fluent in Verilog / SystemVerilog and modern FPGA toolchains (Vivado, HLS)",
        "Proven track record building low-latency, low-jitter RF systems: DDS, chirp / spline modulation, phase-noise-aware design",
        "Multi-FPGA synchronization experience at sub-microsecond latency",
        "Familiarity with quantum or atomic-physics control ecosystems preferred; background in quantum optics or atomic physics a plus",
        "Experience deploying ML inference on FPGA or on FPGA-to-accelerator links a strong plus",
        "Systems mindset: comfortable owning a latency budget end-to-end",
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
      <section className="relative pt-28 sm:pt-32 pb-6 overflow-hidden bg-background">
        <div className="absolute inset-0 scanlines pointer-events-none opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-background p-4 sm:p-6 border-l-4 border-[var(--terminal-secondary)] relative">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="text-[var(--terminal-secondary)] text-xs font-mono">
                $ cat open_positions/
              </div>
              <div className="text-[var(--terminal-primary)] text-xs hidden sm:block">│</div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-[var(--terminal-primary)] font-bold font-mono text-glow">
                CAREERS
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pt-6 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
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
                    <div className="p-6 space-y-6">
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
                        <a
                          href={`mailto:${job.email}?subject=Application: ${job.title}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary border-2 border-primary text-primary-foreground font-bold font-mono hover:bg-accent transition-all"
                        >
                          {'>'} SEND_APPLICATION
                          <span>▶</span>
                        </a>
                        <div className="mt-3 text-xs font-mono text-muted-foreground">
                          # or email {job.email}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
