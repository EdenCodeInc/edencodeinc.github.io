import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";

export default function BlogGraphTransformer() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-background crt-screen">
        <div className="absolute inset-0 scanlines pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="terminal-window bg-background p-8 border-2 border-[var(--terminal-secondary)]/60 shadow-lg shadow-[var(--terminal-secondary)]/20">
              <div className="space-y-4">
                <a
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] hover:drop-shadow-[0_0_8px_var(--terminal-secondary)] transition-all text-sm font-mono"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {'<'} BACK_TO_SYSTEM_LOG
                </a>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-[var(--terminal-secondary)] text-black font-bold border border-[var(--terminal-secondary)] shadow-[0_0_8px_var(--terminal-secondary)]">[MODEL_RELEASE]</span>
                  </div>

                  <h1 className="text-3xl md:text-4xl text-[var(--terminal-primary)] font-bold font-mono drop-shadow-[0_0_12px_var(--terminal-secondary)]">
                    {'>'} One Decoder for Every Quantum Code: EdenCode Releases the Graph Transformer Decoder
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--terminal-secondary)] font-mono">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span>EdenCode Research</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>World Quantum Day, April 14, 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>12min</span>
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
            <div className="border-2 border-[var(--terminal-secondary)]/30 bg-card p-4 sm:p-8">
              <div className="text-foreground space-y-6 text-base leading-relaxed font-mono">

                {/* Introduction */}
                <div>
                  <p className="mb-4">
                    <a href="https://nvidianews.nvidia.com/news/nvidia-launches-ising-the-worlds-first-open-ai-models-to-accelerate-the-path-to-useful-quantum-computers" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">NVIDIA Ising</a>, an open-source family of AI models, training frameworks, and tools purpose-built for quantum computing workloads, launches today on World Quantum Day. Built on NVIDIA's accelerated computing platform, <strong>EdenCode</strong> is releasing the <strong>Graph Transformer Decoder</strong> — an attention-based neural network that builds upon NVIDIA Ising to extend the growing ecosystem of AI-powered tools for quantum error correction.
                  </p>
                  <p className="mb-4">
                    Fault-tolerant quantum computing will require real-time decoding of massive syndrome measurement data — terabytes processed thousands of times per second. This is fundamentally a GPU workload: parallel, latency-sensitive, and, as we show here, one whose performance scales directly with model size and compute. EdenCode's research demonstrates that scaling up AI decoder model size and training data continuously improves decoding performance toward optimal error thresholds, mirroring the scaling laws behind large language models.
                  </p>
                  <p className="mb-4">
                    The implication is profound: the path to fault-tolerant quantum computing runs through larger code distances, bigger AI models, and more GPU compute. The future quantum computer is a QPU tightly coupled with a GPU cluster via high-bandwidth interconnects like{" "}
                    <a href="https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">NVIDIA NVQLink</a>
                    , where the GPU continuously runs the AI decoder that makes the QPU fault-tolerant.
                  </p>
                  <p>
                    The Graph Transformer Decoder achieves an error threshold of <strong>9.0%</strong> on the surface code — a new state of the art among standalone AI decoders — while operating as a single <strong>foundational model</strong> that generalizes across code distances d = 3 to 21 without retraining. Scaling model size from 5,000 to 820,000 parameters reduces the logical error rate by <strong>57×</strong>, following a power law LER ∝ N⁻⁰·⁴³ — the first demonstration of neural scaling laws in quantum error correction.
                  </p>
                </div>

                {/* Key Results Highlight Box */}
                <div className="border-2 border-[var(--terminal-secondary)]/60 p-6 bg-[var(--terminal-secondary)]/5 shadow-[0_0_15px_var(--terminal-secondary)]/10">
                  <h2 className="text-xl text-[var(--terminal-secondary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Key Results
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Error threshold:</strong> 9.0% ± 0.3% on the surface code</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Scaling law:</strong> LER ∝ N⁻⁰·⁴³ — a <strong>57×</strong> reduction in LER scaling from 5K to 820K parameters (d=15, p=5%)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Foundational model:</strong> A single set of weights decodes surface codes at d = 3 through 21, with decode depth scaling automatically as L = 2d iterations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Decode latency:</strong> 0.64d + 1.58 ms per syndrome on NVIDIA H200 GPU, achieving theoretically optimal time complexity</span>
                    </li>
                  </ul>
                </div>

                {/* A New Architecture */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    A New Architecture for Decoding
                  </h2>
                  <p className="mb-4">
                    The Graph Transformer Decoder takes a fundamentally different approach from traditional decoding algorithms. Rather than relying on hand-designed rules or fixed algorithmic procedures, it uses an attention-based neural network — the same family of architectures that power modern large language models — adapted for the structure of quantum error correction.
                  </p>
                  <p className="mb-4">
                    The architecture combines <strong>causal transformer blocks</strong> with <strong>graph neural network message passing</strong> on the Tanner graph, the mathematical structure that defines any quantum error correction code. Through multiple layers of graph attention, information flows across the full error correction graph: each node aggregates context from its neighborhood, and through successive layers, the model builds a global picture of the error landscape. This graph-wide information propagation makes the decoder naturally suited for <strong>correlated noise</strong> — the realistic, complex error patterns found in actual quantum hardware, where errors on nearby qubits are not independent.
                  </p>
                  <p className="mb-4">
                    Critically, attention-based architectures are the most GPU-optimized workload in modern AI. The same hardware and software stack that accelerates transformer training and inference for LLMs — tensor cores, optimized CUDA kernels, flash attention — directly benefits QEC decoding. Training and inference are massively parallel by design.
                  </p>
                  <p>
                    The Graph Transformer Decoder is trained using <strong>reinforcement learning</strong>: a REINFORCE policy-gradient algorithm with reward signals based on syndrome density reduction and logical error rate. The model <strong>discovers its own decoding strategies</strong> by trial and error, adapting to the specific noise profile of whatever quantum hardware it is deployed on. There are no hand-designed heuristics or rule tables — the model learns what works. And when the noise environment shifts due to hardware drift, temperature fluctuations, or recalibration, the model can be <strong>fine-tuned in real time</strong> to maintain peak performance.
                  </p>
                </div>

                {/* Foundational Model */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    A Candidate for the Foundational QEC Decoding Model
                  </h2>
                  <p className="mb-4">
                    One of the most powerful aspects of the Graph Transformer Decoder is how it represents its input. The model takes an <strong>abstract Tanner graph with syndrome measurements as a prompt</strong> — analogous to how a large language model takes text as a prompt. Each node in the Tanner graph receives a structured description encoding its identity, connectivity, and observed syndrome value. The graph topology is passed as a structural input to the graph attention layers.
                  </p>
                  <p className="mb-4">
                    This design has a critical consequence: <strong>every quantum error correction code can be fully represented by its Tanner graph.</strong> Surface codes, repetition codes, color codes, LDPC codes, Floquet codes — they all reduce to a bipartite graph between error nodes and detector nodes. Because the Graph Transformer Decoder operates on this abstract representation rather than on code-specific features, a single model architecture trained on diverse codes can <strong>generalize to entirely new codes and arbitrary code distances</strong> without retraining from scratch.
                  </p>
                  <p>
                    This is the path toward a foundational QEC decoding model — a single pre-trained model that can be fine-tuned or applied zero-shot to any quantum error correction code, on any quantum hardware, at any scale.
                  </p>
                </div>

                {/* Local Decoding */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Local Decoding: An Immune System for Quantum Processors
                  </h2>
                  <p className="mb-4">
                    As quantum processors scale, global decoding approaches face a fundamental problem: processing the entire syndrome vector at once becomes a bottleneck. The Graph Transformer Decoder is designed around a local decoding philosophy that solves this.
                  </p>
                  <p className="mb-4">
                    Think of it as an <strong>immune system</strong> for the quantum processor. Local neural networks are deployed across the device, each monitoring a patch of qubits. These local agents run entirely in parallel and communicate with their neighbors through the graph attention message-passing mechanism — sharing information about detected errors and coordinating corrections without any central bottleneck.
                  </p>
                  <p>
                    Because all local decoders run simultaneously, the <strong>scaling cost is constant</strong>: to decode a larger quantum processor, you deploy more local NNs, not a bigger single model. Each local decoder is a small, fast inference task. This architecture achieves <strong>theoretically optimal time complexity</strong>, operating in the millisecond time order — purpose-built for GPU deployment and scaling naturally with GPU cluster size.
                  </p>
                </div>

                {/* Scaling Laws */}
                <div className="border-2 border-[var(--terminal-secondary)]/40 p-6">
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-6 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Scaling Laws: Why GPU Computing Is Foundational to the Quantum Future
                  </h2>
                  <p className="mb-6">
                    Our experiments show a consistent pattern: as we scale up the Graph Transformer Decoder — increasing model parameters, expanding the training dataset with more quantum measurement data, and training longer — decoding performance improves continuously, approaching the theoretically optimal error threshold.
                  </p>

                  {/* Figure 1 */}
                  <div className="my-8 border-2 border-[var(--terminal-secondary)]/30 p-4">
                    <img
                      src="/fig-gt-threshold.png"
                      alt="Error threshold on the surface code"
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed italic">
                      <strong className="text-[var(--terminal-secondary)]">Figure 1.</strong> Error threshold on the surface code. The Graph Transformer Decoder achieves p_th = 9.0% ± 0.3%, tested across code distances d = 3, 5, 7, 9, and 11, approaching the 9.7% threshold of Perfect Matching.
                    </p>
                  </div>

                  {/* Figure 2 */}
                  <div className="my-8 border-2 border-[var(--terminal-secondary)]/30 p-4">
                    <img
                      src="/fig-gt-scaling.png"
                      alt="Neural scaling law for quantum error correction"
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed italic">
                      <strong className="text-[var(--terminal-secondary)]">Figure 2.</strong> Neural scaling law for quantum error correction. Logical error rate follows LER ∝ N⁻⁰·⁴³ with model parameter count N. Scaling from 5K to 820K parameters yields a 57× reduction in LER (d = 15, p = 5%).
                    </p>
                  </div>

                  <p className="mb-4">
                    This is a scaling law for quantum error correction, and it carries the same transformative implication as the scaling laws that drove the AI revolution: <strong>performance is a function of compute.</strong> More GPU power translates directly into better decoding, lower logical error rates, and ultimately, more reliable quantum computation.
                  </p>
                  <p className="mb-4">
                    High-bandwidth GPU interconnects like NVQLink are not a nice-to-have — they are critical for coupling the QPU to the GPU decoding cluster with the throughput and latency that real-time QEC demands. The quantum computer of the future is not a standalone device; it is a <strong>hybrid system</strong> where quantum processors and GPU-accelerated AI decoders operate as a tightly integrated unit.
                  </p>
                  <p>
                    NVIDIA's investment in open AI tools for quantum computing — through the <strong>Ising family</strong> and the broader <strong>CUDA-Q</strong> ecosystem — is building exactly this infrastructure. EdenCode is proud to contribute to this vision with the Graph Transformer Decoder.
                  </p>
                </div>

                {/* Available for Research */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Available for Research, Ready for Integration
                  </h2>
                  <p className="mb-4">
                    EdenCode is publicly releasing the{" "}
                    <a href="https://github.com/EdenCodeInc/transformer-decoder" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">Graph Transformer Decoder model and training framework</a>
                    , available for research and evaluation, to accelerate the community's progress toward fault-tolerant quantum computing.
                  </p>
                  <p className="mb-4">
                    For quantum hardware companies looking to deploy in production, EdenCode offers commercial licensing and tailored integration services. The Graph Transformer Decoder is designed to work across all quantum modalities — superconducting, trapped-ion, neutral-atom, photonic, and beyond. We design ultra-low-latency decoding systems customized to your specific quantum control architecture, delivering a turnkey GPU-accelerated decoding solution that plugs directly into your hardware stack.
                  </p>
                  <p>
                    EdenCode is accepting a limited number of design partners for integration pilots. Contact us at{" "}
                    <a href="mailto:hwanda@edencode.ai" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">hwanda@edencode.ai</a>
                    {" "}to schedule a technical consultation.
                  </p>
                </div>

                {/* CTO Quote */}
                <div className="border-l-4 border-[var(--terminal-secondary)] pl-6 py-4 bg-[var(--terminal-secondary)]/5">
                  <p className="italic mb-3">
                    "GPU computing is not just accelerating quantum error correction — it is defining what error correction can become. Our research shows that AI decoders obey the same scaling laws as large language models: more compute, more parameters, better performance. By joining the NVIDIA Ising ecosystem on World Quantum Day, EdenCode is making these tools available to the quantum research community, and establishing GPU infrastructure as the backbone of fault-tolerant quantum computing. We are at the beginning of a scaling curve — and the curve is steep."
                  </p>
                  <p className="text-xs text-[var(--terminal-secondary)]">
                    — Prof. Everett You, CTO, EdenCode
                  </p>
                </div>

                {/* Footer note */}
                <div className="border-t-2 border-[var(--terminal-secondary)]/30 pt-6 mt-8 -mx-8 px-8">
                  <p className="text-xs text-[var(--terminal-secondary)] font-bold mb-2">About EdenCode</p>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    EdenCode Inc. is a quantum AI company on a mission to unlock quantum computing with AI — and ultimately use quantum to design better AI. Founded in 2025, EdenCode builds real-time AI decoder technology for quantum error correction ecosystems, working across all quantum hardware modalities. Learn more at www.edencode.ai.
                  </p>
                </div>

              </div>
            </div>

            {/* Back to System Log */}
            <div className="mt-8 flex justify-between items-center">
              <a
                href="/blogs"
                className="px-4 py-2 border-2 border-[var(--terminal-secondary)] text-[var(--terminal-secondary)] font-bold font-mono text-sm hover:bg-[var(--terminal-secondary)]/10 hover:drop-shadow-[0_0_8px_var(--terminal-secondary)] transition-all inline-flex items-center gap-2"
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
