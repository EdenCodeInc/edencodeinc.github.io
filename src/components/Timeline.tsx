import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const LINK_LABELS: Record<string, string> = {
  READ_MORE: "Read more",
  READ_PAPER: "Read the paper",
  WATCH_TALK: "Watch the talk",
  GITHUB: "GitHub",
  DOE_ANNOUNCEMENT: "DOE announcement",
  UCSD_NEWS: "UC San Diego News",
  NVIDIA_ISING: "NVIDIA Ising",
  KITP_PROGRAM: "KITP program",
  CONFERENCE: "Conference",
};

const linkLabel = (raw?: string) => {
  if (!raw) return "Read more";
  if (LINK_LABELS[raw]) return LINK_LABELS[raw];
  const words = raw.toLowerCase().replace(/_/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
};

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  category: string;
  link?: string;
  linkLabel?: string;
  link2?: string;
  link2Label?: string;
  isHighlight?: boolean;
  isSpecial?: boolean;
};

function EventLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="link-arrow py-1"
    >
      <span>{label}</span>
      {external ? <ArrowUpRight className="w-4 h-4 arrow-ext" /> : <ArrowRight className="w-4 h-4" />}
    </a>
  );
}

export function Timeline() {
  const timelineEvents: TimelineEvent[] = [
    {
      date: "2026-09-28",
      title: "EdenCode Presents the AI Decoder Factory for Quantum LDPC Codes at KITP",
      description: "At KITP's 'Artificial Intelligence at the Quantum Frontier' conference, EdenCode co-founder and CTO Yi-Zhuang You presented the AI Decoder Factory: a self-improving loop in which the GraphMP neural decoder trains on its own device-verified search trajectories. Taught on three codes and tested on twelve, the third-generation decoder matches or surpasses BP+OSD and Relay-BP almost everywhere — and re-adapts when the noise drifts.",
      category: "KITP_TALK",
      link: "/blog-decoder-factory",
      linkLabel: "READ_MORE",
      link2: "https://online.kitp.ucsb.edu/online/aiqmatter-c26/you/",
      link2Label: "WATCH_TALK",
      isHighlight: true,
    },
    {
      date: "2026-07-27",
      title: "Co-Founder Yi-Zhuang You Coordinates KITP 'AI for Quantum Matter' Program",
      description: "EdenCode co-founder and CTO Yi-Zhuang You is a coordinator of the Kavli Institute for Theoretical Physics program 'AI for Quantum Matter' (July 27 – October 8, 2026) and its conference 'Artificial Intelligence at the Quantum Frontier' (September 28 – October 1), bringing together researchers across machine learning, quantum many-body physics, and quantum information at UC Santa Barbara.",
      category: "NEWS",
      link: "https://www.kitp.ucsb.edu/activities/aiqmatter26",
      linkLabel: "KITP_PROGRAM",
      link2: "https://www.kitp.ucsb.edu/activities/aiqmatter-c26",
      link2Label: "CONFERENCE",
    },
    {
      date: "2026-07-22",
      title: "EdenCode Wins DOE Genesis Mission Award with UC San Diego & Berkeley Lab",
      description: "EdenCode, UC San Diego, and Lawrence Berkeley National Laboratory were awarded a $740K+ U.S. Department of Energy Genesis Mission project to advance AI-accelerated quantum computing. Selected from more than 5,000 applications, only 278 projects were funded (<6%), in one of DOE's most competitive calls to date. The collaboration unites academia, national labs, and industry to build AI-driven technologies for practical quantum computing.",
      category: "DOE_AWARD",
      link: "https://www.energy.gov/articles/secretary-energy-chris-wright-announces-first-genesis-mission-projects-selected-accelerate",
      linkLabel: "DOE_ANNOUNCEMENT",
      link2: "https://today.ucsd.edu/story/genesis-mission-to-fund-new-scientific-ai-tools",
      link2Label: "UCSD_NEWS",
      isHighlight: true,
    },
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
      category: "NVIDIA_COLLABORATION",
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
      date: "2026-01-24",
      title: "EdenCode Emerges from Stealth with Pre-Seed Funding",
      description: "EdenCode officially launched operations after closing pre-seed funding round. The Quantum Insider featured the company's emergence from stealth with real-time AI decoder technology for quantum error correction ecosystems",
      category: "ANNOUNCEMENT",
      link: "https://thequantuminsider.com/2026/01/24/edencode-emerges-from-stealth-with-real-time-ai-decoder-for-quantum-error-correction/",
    },
  ];

  const tagTone = (event: TimelineEvent) =>
    event.isSpecial ? "tag-nvidia" : event.isHighlight ? "tag-rust" : "tag-amber";

  return (
    <section className="pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <span className="accent-rule" />
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-ink">
              Development timeline
            </h2>
          </div>
          <span className="hidden sm:block font-mono text-[12px] tracking-wide text-ink-3">
            {timelineEvents.length} entries
          </span>
        </div>

        <ol>
          {timelineEvents.map((event, index) => (
            <Reveal as="li" key={index} delay={Math.min(index, 3) * 70} className="row hairline py-8 md:py-10 grid md:grid-cols-12 gap-3 md:gap-8">
              <div className="md:col-span-2 font-mono text-[13px] tracking-wide text-ink-2 md:pt-1">
                {event.date}
              </div>
              <div className="md:col-span-10 max-w-3xl">
                <span className={`tag ${tagTone(event)}`}>{event.category.replace(/_/g, " ")}</span>
                <h3 className="mt-4 font-display text-[1.375rem] md:text-[1.625rem] font-semibold tracking-tight leading-snug text-ink">
                  {event.title}
                </h3>
                <p className="mt-3 text-[15px] md:text-base leading-relaxed text-ink-2">
                  {event.description}
                </p>
                {event.link && (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    <EventLink href={event.link} label={linkLabel(event.linkLabel)} />
                    {event.link2 && (
                      <EventLink href={event.link2} label={linkLabel(event.link2Label)} />
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
