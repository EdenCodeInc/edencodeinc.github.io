import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Link } from "wouter";
import qecCircuitImage from "figma:asset/e5927cbff3c98c9b4b0c3ed6f865c18f1c08e86a.png";
import errorDynImage from "figma:asset/4088fad955113e3f11357ea74e4cf45c3e39c4c2.png";

export default function BlogAIQuantumErrorCorrection() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#FFF9D0] via-white to-[#FFF9D0]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F4A135] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EB612E] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#EB612E] hover:text-[#F4A135] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </a>

            <div className="space-y-4">
              <Badge className="bg-[#EB612E] text-white hover:bg-[#EB612E]/90">
                Quantum Error Correction
              </Badge>

              <h1 className="text-4xl md:text-5xl text-[#553128]">
                AI for Quantum Error Correction
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#553128]/60">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Dr. Wanda Hou</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>March 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-[#553128]/80 space-y-6 text-base">
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

              <h2 className="text-3xl text-[#553128] mt-12 mb-6">
                1. What is Quantum Error Correction (QEC)?
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

              <h2 className="text-3xl text-[#553128] mt-12 mb-6">
                2. Why Do We Need AI for Quantum Error Detection
                Instead of Relying on Humans?
              </h2>

              <div className="space-y-4 pl-6">
                <div>
                  <strong className="text-[#553128]">
                    1. Agentic AI and Tailored Noise Modeling:
                  </strong>{" "}
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
                </div>

                <div>
                  <strong className="text-[#553128]">
                    2. Scalable Foundation Models:
                  </strong>{" "}
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
                </div>
              </div>

              <h2 className="text-3xl text-[#553128] mt-12 mb-6">
                3. How Does AI-Powered Quantum Error Correction
                Work Alongside Quantum Algorithms?
              </h2>

              <p>
                To illustrate the integration of AI into quantum
                error correction, consider the following
                workflow:
              </p>

              <figure className="my-8">
                <img
                  src={qecCircuitImage}
                  alt="Quantum Error Correction Circuit with AI Decoder"
                  className="w-full md:w-3/4 mx-auto rounded-lg border border-[#F4A135]/20 shadow-lg"
                />
                <figcaption className="text-center text-sm text-[#553128]/60 mt-4">
                  Quantum Error Correction Circuit with AI
                  Decoder
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

              <figure className="my-8">
                <img
                  src={errorDynImage}
                  alt="Comparison of Quantum Error Accumulation With and Without Error Correction"
                  className="w-full md:w-3/4 mx-auto rounded-lg border border-[#F4A135]/20 shadow-lg"
                />
                <figcaption className="text-center text-sm text-[#553128]/60 mt-4">
                  Comparison of Quantum Error Accumulation With
                  and Without Error Correction
                </figcaption>
              </figure>

              <p>
                Additionally, the comparative figure above
                highlights the benefit of AI-assisted quantum
                error correction. In the upper panel, quantum
                errors accumulate unchecked as the quantum
                algorithm proceeds, eventually overwhelming and
                crashing the algorithm. In contrast, the lower
                panel illustrates how quantum error correction
                continuously mitigates errors during
                computation, preventing error accumulation and
                allowing the quantum algorithm to run smoothly
                and reliably.
              </p>

              <h2 className="text-3xl text-[#553128] mt-12 mb-6">
                Conclusion
              </h2>

              <p>
                Combining AI with quantum computing not only
                accelerates the development of robust quantum
                technologies but also ensures quantum algorithms
                can deliver on their transformative promises.
                Our commitment is to lead the way in this
                exciting interdisciplinary frontier, harnessing
                artificial intelligence to make quantum
                computing practical, powerful, and reliable.
              </p>

              <p>
                Stay tuned for more updates as we embark on this
                exciting journey into the quantum future!
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-gradient-to-br from-[#FFF9D0] to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <a
                href="/blogs"
                className="inline-flex items-center gap-2 text-[#EB612E] hover:text-[#F4A135] transition-colors cursor-pointer"
              >
                View all blog posts
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}