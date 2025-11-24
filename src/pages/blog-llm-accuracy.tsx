import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { User } from "lucide-react";
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import phaseTaskImage from "figma:asset/40e0ea2a54d22826df8b2d403000bf0fa1ce140c.png";
import phaseModelImage from "figma:asset/dd6f871572d620d13ddb787f18677d0f0e927751.png";
import illustrationImage from "figma:asset/e395ef6f46cc3640b73afbc9489262797b5c330b.png";

export default function BlogLLMAccuracy() {
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
                AI/ML Research
              </Badge>

              <h1 className="text-4xl md:text-5xl text-[#553128]">
                How Focused Are LLMs?
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#553128]/60">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>EdenCode Research Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>November 15 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
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
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-3xl text-[#553128]">
                The Reliability Problem in LLMs
              </h2>

              <p className="text-[#553128]/80 leading-relaxed">
                Large language models (LLMs) have achieved
                remarkable success across diverse applications,
                but their reliability on structured, multi-step
                reasoning remains poorly understood. While these
                models excel at creative text generation and
                many natural language tasks, they often struggle
                with deterministic problems that require
                consistent, step-by-step execution—like
                performing multi-digit arithmetic or executing
                repetitive transformations.
              </p>

              <p className="text-[#553128]/80 leading-relaxed">
                In our latest research paper, we investigate
                this fundamental limitation by studying how LLM
                accuracy scales with output length in{" "}
                <strong>
                  repetitive deterministic prediction tasks
                </strong>
                —problems where each step follows a simple,
                fixed rule, but the sequence must be executed
                many times correctly.
              </p>

              <div className="bg-gradient-to-br from-[#FFF9D0] to-white p-6 rounded-xl border border-[#F4A135]/20">
                <p className="text-sm italic text-[#553128]/70">
                  <strong>Paper reference:</strong>{" "}
                  <a
                    href="https://arxiv.org/abs/2511.00763"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EB612E] hover:text-[#EB612E]/80 underline"
                  >
                    arXiv:2511.00763
                  </a>
                </p>
              </div>
            </section>

            {/* The Accuracy Cliff */}
            <section className="space-y-4">
              <h2 className="text-3xl text-[#553128]">
                Discovering the Accuracy Cliff
              </h2>

              <div className="my-8 flex flex-col items-center">
                <img
                  src={illustrationImage}
                  alt="Illustration of LLM accuracy cliff phenomenon"
                  className="max-w-2xl w-full rounded-xl border border-[#F4A135]/20 shadow-md"
                />
                <p className="text-sm text-[#553128]/60 mt-3 text-center italic max-w-2xl">
                  Figure: The accuracy cliff phenomenon—LLMs
                  maintain high accuracy for short sequences,
                  then experience a sharp drop beyond a
                  characteristic length N*.
                </p>
              </div>

              <p className="text-[#553128]/80 leading-relaxed">
                We evaluated leading LLMs (GPT-5,
                Gemini-2.5-Pro, Gemini-2.5-Flash, Grok-4, and
                Claude-4-Sonnet) on three carefully designed
                benchmarks:
              </p>

              <ul className="list-disc list-inside space-y-2 text-[#553128]/80 ml-4">
                <li>
                  <strong>Cyclic Letter Replacement:</strong>{" "}
                  Apply a simple transformation rule (e.g., A→B,
                  B→C, ..., Z→A) to each character in a string
                </li>
                <li>
                  <strong>Integer Addition:</strong> Add two
                  multi-digit numbers, testing carry propagation
                </li>
                <li>
                  <strong>Pauli String Multiplication:</strong>{" "}
                  Multiply quantum operators following precise
                  algebraic rules with phase tracking
                </li>
              </ul>

              <p className="text-[#553128]/80 leading-relaxed mt-4">
                What we discovered was striking: instead of the
                expected exponential decay in accuracy, LLMs
                exhibit a{" "}
                <strong>sharp double-exponential drop</strong>{" "}
                beyond a characteristic length scale—an
                "accuracy cliff" marking a transition from
                reliable to unstable generation.
              </p>

              <div className="bg-gradient-to-br from-[#FFF9D0] to-white p-6 rounded-xl border border-[#F4A135]/20">
                <h3 className="text-xl text-[#553128]">
                  Key Finding
                </h3>
                <p className="leading-relaxed text-[#553128]/80 mt-3">
                  If LLMs performed each operation
                  independently, we would expect accuracy to
                  decay as exp(-βN). Instead, we observe
                  exp(-β₀N α^(N-1))—showing that errors
                  accumulate multiplicatively as the sequence
                  grows longer.
                </p>
              </div>
            </section>

            {/* Experimental Results */}
            <section className="space-y-4">
              <h2 className="text-3xl text-[#553128]">
                Mapping LLM Performance
              </h2>

              <div className="my-8 flex flex-col items-center">
                <img
                  src={phaseTaskImage}
                  alt="Correlation-error phase diagrams grouped by task"
                  className="max-w-xl w-full rounded-xl border border-[#F4A135]/20 shadow-md"
                />
                <p className="text-sm text-[#553128]/60 mt-3 text-center italic max-w-2xl">
                  Figure: Performance of different LLMs on
                  various tasks, mapped by correlation level
                  (log α) and error level (log β₀). Each task
                  reveals different characteristic patterns.
                </p>
              </div>

              <p className="text-[#553128]/80 leading-relaxed">
                By fitting our empirical model to the
                experimental data, we extract two key parameters
                for each model-task pair:
              </p>

              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-[#EB612E] font-bold">
                    β₀
                  </span>
                  <span className="text-[#553128]/80">
                    <strong>Intrinsic error rate:</strong> How
                    likely the model is to make a mistake on a
                    single operation
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#EB612E] font-bold">
                    α
                  </span>
                  <span className="text-[#553128]/80">
                    <strong>Error accumulation factor:</strong>{" "}
                    How quickly errors compound across the
                    sequence (when α &gt; 1, errors amplify
                    exponentially)
                  </span>
                </li>
              </ul>

              <div className="my-8 flex flex-col items-center">
                <img
                  src={phaseModelImage}
                  alt="Correlation-error phase diagrams grouped by model"
                  className="max-w-2xl w-full rounded-xl border border-[#F4A135]/20 shadow-md"
                />
                <p className="text-sm text-[#553128]/60 mt-3 text-center italic max-w-2xl">
                  Figure: Different LLMs exhibit varying levels
                  of attention focus and intrinsic accuracy
                  across tasks, with each model showing
                  characteristic patterns in the
                  correlation-error parameter space.
                </p>
              </div>
            </section>

            {/* Statistical Physics Model */}
            <section className="space-y-4">
              <h2 className="text-3xl text-[#553128]">
                A Statistical Physics Explanation
              </h2>

              <p className="text-[#553128]/80 leading-relaxed">
                Why do LLMs fail this way? We propose a novel
                theoretical framework inspired by{" "}
                <strong>spin-glass physics</strong> and the
                Ising model. Our key insight: the self-attention
                mechanism in LLMs creates all-to-all
                correlations between tokens, causing errors to
                propagate through the sequence in complex,
                interacting ways.
              </p>

              <p className="text-[#553128]/80 leading-relaxed">
                We model each token's correctness as an Ising
                spin (correct = +1, incorrect = -1) and
                introduce random couplings J<sub>ij</sub>{" "}
                between tokens to represent attention-induced
                interference. An external field h represents the
                prompt's bias toward correct generation.
              </p>

              <div className="bg-gradient-to-br from-[#FFF9D0] to-white p-6 rounded-xl border border-[#F4A135]/20 space-y-3">
                <h3 className="text-xl text-[#553128]">
                  The Model
                </h3>
                <p className="text-sm text-[#553128]/80">
                  The energy of a token sequence is: <br />
                  <span className="font-mono text-sm">
                    E[s] = -∑<sub>i&lt;j</sub> J<sub>ij</sub> s
                    <sub>i</sub> s<sub>j</sub> - h ∑<sub>i</sub>{" "}
                    s<sub>i</sub>
                  </span>
                </p>
                <p className="text-sm text-[#553128]/70">
                  Random couplings J<sub>ij</sub> capture noisy
                  all-to-all dependencies introduced by
                  self-attention. When the correlation energy
                  (scaling as N²) dominates over the external
                  conditioning (scaling as N), the system
                  crosses into a "spin-glass" regime where the
                  fully correct sequence is no longer
                  favored—the accuracy cliff.
                </p>
              </div>

              <p className="text-[#553128]/80 leading-relaxed mt-4">
                This model quantitatively reproduces the
                observed crossover behavior and provides an
                interpretable link between attention-induced
                interference and sequence-level failure.
              </p>
            </section>

            {/* Practical Solution */}
            <section className="space-y-4">
              <h2 className="text-3xl text-[#553128]">
                Beating the Accuracy Cliff: Divide-and-Conquer
              </h2>

              <p className="text-[#553128]/80 leading-relaxed">
                Our model doesn't just explain the problem—it
                suggests a solution. When α &gt; 1, the
                reliability of long-sequence generation can be
                dramatically improved by adopting a{" "}
                <strong>divide-and-conquer strategy</strong>:
                breaking the task into k smaller sub-tasks and
                processing them separately.
              </p>

              <p className="text-[#553128]/80 leading-relaxed">
                This works because it "cuts the correlation
                loops"—preventing the catastrophic error
                accumulation that occurs when all tokens
                interact through attention. Our experiments
                confirm this prediction: dividing a task into k
                parts extends the reliable length scale
                approximately linearly with k.
              </p>

              <div className="bg-gradient-to-br from-[#FFF9D0] to-white p-6 rounded-xl border border-[#F4A135]/20 space-y-3">
                <h3 className="text-xl text-[#553128]">
                  Theorem: When Divide-and-Conquer Helps
                </h3>
                <p className="text-sm text-[#553128]/80">
                  For sequence length N and segmentation factor
                  k ≥ 2, divide-and-conquer yields positive gain
                  when:
                </p>
                <p className="font-mono text-sm text-[#553128] bg-white p-3 rounded border border-[#F4A135]/10">
                  N ≥ 1 + (1/log α)[log(1 - 2log θ/β₀) + log
                  2/(1-1/k)]
                </p>
                <p className="text-xs text-[#553128]/70 italic">
                  where θ represents the overhead factor from
                  segmentation operations.
                </p>
              </div>
            </section>

            {/* Implications */}
            <section className="space-y-4">
              <h2 className="text-3xl text-[#553128]">
                Implications and Future Directions
              </h2>

              <p className="text-[#553128]/80 leading-relaxed">
                This work provides both theoretical insights and practical tools for building more reliable AI systems. Our framework enables quantitative model comparison through the (α, β₀) parameter space, while Sequence Accuracy Rate (SAR) offers a principled metric for evaluating deterministic reasoning tasks. Critically, multi-call decomposition strategies can extend reliable reasoning length by orders of magnitude, and our statistical-physics model suggests architectural improvements to reduce attention-induced error propagation. As LLMs increasingly power scientific computing and mathematical reasoning systems, understanding these fundamental accuracy limits becomes essential for developing trustworthy AI.
              </p>
            </section>

            {/* Call to Action */}
            <section className="border-t border-[#F4A135]/20 pt-8 mt-12">
              <div className="bg-gradient-to-br from-[#FFF9D0] to-white p-8 rounded-xl space-y-4">
                <h3 className="text-2xl text-[#553128]">
                  Read the Full Paper
                </h3>
                <p className="text-[#553128]/80">
                  For complete technical details, proofs, and
                  additional experimental results, please refer
                  to our paper:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://arxiv.org/abs/2511.00763"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#EB612E] hover:bg-[#EB612E]/90 text-white rounded-lg transition-colors"
                  >
                    arXiv:2511.00763 →
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Navigation */}
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