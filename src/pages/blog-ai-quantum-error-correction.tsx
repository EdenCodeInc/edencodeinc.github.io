import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import qecCircuitImage from "figma:asset/e5927cbff3c98c9b4b0c3ed6f865c18f1c08e86a.png";
import errorDynImage from "figma:asset/4088fad955113e3f11357ea74e4cf45c3e39c4c2.png";

export default function BlogAIQuantumErrorCorrection() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-background crt-screen">
        <div className="absolute inset-0 scanlines pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Terminal Window */}
            <div className="terminal-window bg-background p-8">
              <div className="space-y-4">
                <a
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] transition-colors text-sm font-mono"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {'<'} BACK_TO_SYSTEM_LOG
                </a>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-primary text-primary-foreground font-bold">[QEC]</span>
                  </div>

                  <h1 className="text-3xl md:text-4xl text-[var(--terminal-primary)] font-bold font-mono text-glow">
                    {'>'} AI for Quantum Error Correction
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--terminal-secondary)] font-mono">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span>Dr. Wanda Hou</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>2025-03-15</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>8min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-[var(--terminal-primary)]/30 bg-card p-4 sm:p-8">
              <div className="text-foreground space-y-6 text-base leading-relaxed font-mono">
                <p>
                  Quantum computing is rapidly evolving, promising
                  exponential speed-ups for tasks ranging from
                  cryptography and drug discovery to complex
                  simulations. However, one significant challenge
                  remains: quantum errors. To unlock the full
                  potential of quantum technology, we must address
                  these errors efficiently and accurately.
                </p>

                <p>
                  In this blog, we'll explore the role of quantum
                  error correction, the necessity of leveraging
                  artificial intelligence (AI) for error detection
                   and correction, and how these technologies
                   collaboratively enhance the performance of
                   quantum algorithms.
                </p>

                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [1] What is Quantum Error Correction (QEC)?
                  </h2>

                  <p>
                    Quantum Error Correction (QEC) is a set of
                    techniques designed to protect quantum
                    information from errors that inevitably arise
                    due to quantum decoherence and operational
                    imperfections. Quantum decoherence occurs when
                    quantum bits (qubits) lose their delicate
                    quantum states due to environmental
                    interactions, causing quantum noise and errors.
                    Unlike classical error correction, quantum error
                    correction must address errors without directly
                    observing the quantum states themselves, as
                    direct observation collapses these fragile
                    states. QEC uses redundancy, encoding a single
                    logical qubit into multiple physical qubits.
                    This redundancy enables indirect measurement of
                    "error syndromes," revealing the presence and
                    type of errors without disturbing the protected
                    quantum information, allowing the system to
                    correct these errors and maintain the integrity
                    of quantum computations.
                  </p>

                  <p>
                    QEC is essential for quantum computing because
                    quantum states are incredibly sensitive to even
                    slight disturbances. Without effective error
                    correction, quantum algorithms rapidly
                    accumulate errors, leading to inaccurate results
                    and potentially rendering quantum computations
                    impractical.
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [2] Why Do We Need AI for Quantum Error Detection?
                  </h2>

                  <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                    <div>
                      <div className="text-[var(--terminal-secondary)] font-bold mb-2">
                        {'>'} 1. Agentic AI and Tailored Noise Modeling:
                      </div>
                      <p>
                        An agentic AI can reconstruct the noise models
                        inherent in quantum computers by directly
                        interacting with and learning from observed
                        measurement outcomes. It can dynamically
                        tailor error correction strategies
                        specifically optimized for particular
                        hardware, thereby becoming device-agnostic.
                        Furthermore, reinforcement learning techniques
                        enable the AI to continuously improve and
                        adapt its strategies based on real-time
                        feedback.
                      </p>
                    </div>

                    <div>
                      <div className="text-[var(--terminal-secondary)] font-bold mb-2">
                        {'>'} 2. Scalable Foundation Models:
                      </div>
                      <p>
                        By developing a foundation model, AI can
                        efficiently implement any quantum error
                        correction code tailored to specific hardware.
                        Such models can initially be trained on
                        small-scale systems and subsequently applied
                        to larger, more complex systems. This
                        scalability greatly surpasses traditional
                        human-designed approaches, as the AI
                        inherently understands the nuances and
                        operational behaviors of the quantum hardware
                        better.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [3] How Does AI-Powered QEC Work?
                  </h2>

                  <p>
                    To illustrate the integration of AI into quantum
                    error correction, consider the following
                    workflow:
                  </p>

                  <figure className="my-8 border border-[var(--terminal-primary)]/20 p-4 bg-muted">
                    <img
                      src={qecCircuitImage}
                      alt="Quantum Error Correction Circuit with AI Decoder"
                      className="w-full"
                    />
                    <figcaption className="text-center text-xs text-[var(--terminal-secondary)] mt-4 font-mono">
                      [IMAGE] Quantum Error Correction Circuit with AI Decoder
                    </figcaption>
                  </figure>

                  <p>
                    A schematic diagram shows how the AI interacts
                    directly with the quantum computer. The AI
                    begins by taking a quantum error correction
                    code, such as the LDPC code, represented as a
                    "Tanner graph," as input. It then proposes which
                    syndrome qubits should be measured. Measurement
                    outcomes from these qubits are fed back into the
                    AI, which predicts appropriate quantum gate
                    operations (actions) to correct detected errors.
                    This process ensures real-time error detection
                    and correction.
                  </p>

                  <figure className="my-8 border border-[var(--terminal-primary)]/20 p-4 bg-muted">
                    <img
                      src={errorDynImage}
                      alt="Error Dynamics with AI Decoder"
                      className="w-full"
                    />
                    <figcaption className="text-center text-xs text-[var(--terminal-secondary)] mt-4 font-mono">
                      [IMAGE] Error Dynamics with AI Decoder
                    </figcaption>
                  </figure>

                  <p>
                    Another graph illustrates the dynamic behavior of
                    accumulated errors over time under four different
                    scenarios: without any error correction, with
                    syndrome measurement only (which further
                    introduces new errors), with repetitive syndrome
                    measurement leading to eventual error correction
                    actions, and finally, with continuous, real-time
                    error correction. The graph demonstrates that
                    without AI-powered real-time correction,
                    cumulative errors grow and stabilize at levels
                    detrimental to logical qubit stability. However,
                    when AI continuously monitors and corrects
                    errors, the error rates are dramatically reduced,
                    effectively mitigating noise accumulation and
                    maintaining quantum computation accuracy.
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [4] Conclusion
                  </h2>

                  <p>
                    Quantum error correction is fundamental to
                    achieving reliable, scalable quantum computing.
                    The integration of AI into QEC systems presents
                    an unparalleled opportunity to dynamically
                    tailor error mitigation strategies, adapt to
                    hardware-specific noise profiles, and
                    dramatically reduce error accumulation in
                    real-time. By leveraging agentic AI and scalable
                    foundation models, we can transition from
                    relying solely on theoretical models and manual
                    optimization to deploying adaptive, intelligent
                    systems that continuously enhance the performance
                    and stability of quantum algorithms.
                  </p>

                  <p>
                    As quantum technology advances, AI-powered
                    quantum error correction will be critical in
                    bridging the gap between theory and practical,
                    fault-tolerant quantum computation. This
                    collaboration between AI and quantum mechanics
                    promises to unlock new frontiers in computing,
                    paving the way for breakthroughs in science,
                    cryptography, materials design, and beyond.
                  </p>
                </div>

                {/* Terminal Footer */}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between items-center">
              <a
                href="/blogs"
                className="px-4 py-2 border-2 border-[var(--terminal-primary)] text-[var(--terminal-primary)] font-bold font-mono text-sm hover:bg-[var(--terminal-primary)]/10 hover:drop-shadow-[0_0_8px_var(--terminal-secondary)] transition-all inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                {'<'} BACK_TO_SYSTEM_LOG
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
