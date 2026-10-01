import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobs = [
    {
      id: 0,
      title: "Technical Marketing Manager",
      tagline: "Be the public face of our quantum AI technology",
      location: "Palo Alto or San Jose, CA",
      type: "Full time",
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
      type: "Full time",
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
      type: "Full time",
      description: "Own the hardware-software interface between EdenCode's AI decoders and the real-time FPGA control stacks running modern quantum computers. Deploy our ML models onto modern RFSoC-class control platforms, drive the feedforward loop down to the microsecond scale, and help make fault-tolerant quantum error correction feasible at the speed of physics. A deeply technical IC role spanning AI deployment, FPGA fabric, and the RF/analog chain behind quantum gate operations.",
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
    <div className="min-h-screen bg-paper">
      <Navigation />

      <header className="pt-36 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow mb-4">Careers</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink">
            Careers
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
            Open positions at EdenCode.
          </p>
        </div>
      </header>

      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol>
            {jobs.map((job) => {
              const open = expandedJob === job.id;
              return (
                <li key={job.id} className="hairline">
                  <button
                    onClick={() => toggleJob(job.id)}
                    aria-expanded={open}
                    className="w-full text-left py-8 md:py-10 grid md:grid-cols-12 gap-3 md:gap-8 group"
                  >
                    <div className="md:col-span-2 font-mono text-[12px] tracking-wide text-ink-2 md:pt-1.5 space-y-1">
                      <div>{job.type}</div>
                      <div className="text-ink-3">{job.location}</div>
                    </div>
                    <div className="md:col-span-9 max-w-3xl">
                      <h2 className="font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight leading-snug text-ink group-hover:text-rust transition-colors">
                        {job.title}
                      </h2>
                      <p className="mt-2 text-[15px] md:text-base text-ink-2">{job.tagline}</p>
                    </div>
                    <div className="hidden md:flex md:col-span-1 justify-end md:pt-1 text-ink-2 group-hover:text-ink transition-colors">
                      {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>

                  {open && (
                    <div className="pb-10 md:pb-12 grid md:grid-cols-12 gap-3 md:gap-8">
                      <div className="hidden md:block md:col-span-2" />
                      <div className="md:col-span-9 max-w-3xl prose-ec">
                        <p>{job.description}</p>

                        <h3>Responsibilities</h3>
                        <ul>
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>

                        <h3>Qualifications</h3>
                        <ul>
                          {job.qualifications.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>

                        <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                          <a
                            href={`mailto:${job.email}?subject=Application: ${job.title}`}
                            className="btn btn-primary no-underline"
                            style={{ textDecoration: "none" }}
                          >
                            Apply by email
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                          <span className="font-mono text-[12px] tracking-wide text-ink-3">
                            or write to {job.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <Footer />
    </div>
  );
}
