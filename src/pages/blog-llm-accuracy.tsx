import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import phaseTaskImage from "figma:asset/40e0ea2a54d22826df8b2d403000bf0fa1ce140c.png";
import phaseModelImage from "figma:asset/dd6f871572d620d13ddb787f18677d0f0e927751.png";
import illustrationImage from "figma:asset/e395ef6f46cc3640b73afbc9489262797b5c330b.png";

export default function BlogLLMAccuracy() {
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
                    <span className="px-2 py-1 bg-primary text-primary-foreground font-bold">[AI/ML]</span>
                  </div>

                  <h1 className="text-3xl md:text-4xl text-[var(--terminal-primary)] font-bold font-mono text-glow">
                    {'>'} How Focused Are LLMs?
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--terminal-secondary)] font-mono">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span>EdenCode Research Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>2025-11-15</span>
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
            <div className="border-2 border-[var(--terminal-primary)]/30 bg-card p-4 sm:p-8">
              <div className="text-muted-foreground space-y-6 text-sm leading-relaxed font-mono">
                {/* Introduction */}
                <div>
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [1] The Reliability Problem in LLMs
                  </h2>

                  <p>
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

                  <p>
                    In our latest research paper, we investigate
                    this fundamental limitation by studying how LLM
                    accuracy scales with output length in{" "}
                    <span className="text-[var(--terminal-secondary)]">repetitive deterministic prediction tasks</span>
                    —problems where each step follows a simple,
                    fixed rule, but the sequence must be executed
                    many times correctly.
                  </p>

                  <div className="border border-primary/30 p-4 bg-muted mt-4">
                    <p className="text-xs text-[var(--terminal-secondary)]">
                      [REFERENCE]
                    </p>
                    <p className="text-muted-foreground text-xs mt-2">
                      Paper:{" "}
                      <a
                        href="https://arxiv.org/abs/2511.00763"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-[var(--terminal-primary)] underline"
                      >
                        arXiv:2511.00763
                      </a>
                    </p>
                  </div>
                </div>

                {/* The Accuracy Cliff */}
                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [2] Discovering the Accuracy Cliff
                  </h2>

                  <figure className="my-6 border border-[var(--terminal-primary)]/20 p-4 bg-muted">
                    <img
                      src={illustrationImage}
                      alt="Illustration of LLM accuracy cliff phenomenon"
                      className="w-full"
                    />
                    <figcaption className="text-center text-xs text-[var(--terminal-secondary)] mt-4">
                      [IMAGE] The accuracy cliff phenomenon—LLMs maintain high accuracy for short sequences,
                      then experience a sharp drop beyond a characteristic length N*.
                    </figcaption>
                  </figure>

                  <p>
                    We evaluated leading LLMs (GPT-5,
                    Gemini-2.5-Pro, Gemini-2.5-Flash, Grok-4, and
                    Claude-4-Sonnet) on three carefully designed
                    benchmarks:
                  </p>

                  <div className="space-y-2 pl-4 border-l-2 border-primary/30 my-4">
                    <div>
                      <span className="text-[var(--terminal-secondary)]">{'>'}</span> <span className="text-foreground font-bold">Cyclic Letter Replacement:</span> Apply a simple transformation rule (e.g., A→B, B→C, ..., Z→A) to each character in a string
                    </div>
                    <div>
                      <span className="text-[var(--terminal-secondary)]">{'>'}</span> <span className="text-foreground font-bold">Integer Addition:</span> Add two multi-digit numbers, testing carry propagation
                    </div>
                    <div>
                      <span className="text-[var(--terminal-secondary)]">{'>'}</span> <span className="text-foreground font-bold">Pauli String Multiplication:</span> Multiply quantum operators following precise algebraic rules with phase tracking
                    </div>
                  </div>

                  <p>
                    What we discovered was striking: instead of the
                    expected exponential decay in accuracy, LLMs
                    exhibit a{" "}
                    <span className="text-[var(--terminal-secondary)] font-bold">sharp double-exponential drop</span>{" "}
                    beyond a characteristic length scale—an
                    "accuracy cliff" marking a transition from
                    reliable to unstable generation.
                  </p>

                  <div className="border border-primary/30 p-4 bg-muted mt-4">
                    <p className="text-xs text-[var(--terminal-secondary)] font-bold mb-2">
                      [KEY_FINDING]
                    </p>
                    <p className="text-muted-foreground text-xs">
                      If LLMs performed each operation
                      independently, we would expect accuracy to
                      decay as exp(-βN). Instead, we observe
                      exp(-β₀N α^(N-1))—showing that errors
                      accumulate multiplicatively as the sequence
                      grows longer.
                    </p>
                  </div>
                </div>

                {/* Experimental Results */}
                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [3] Mapping LLM Performance
                  </h2>

                  <figure className="my-6 border border-[var(--terminal-primary)]/20 p-4 bg-muted">
                    <img
                      src={phaseTaskImage}
                      alt="Correlation-error phase diagrams grouped by task"
                      className="w-full"
                    />
                    <figcaption className="text-center text-xs text-[var(--terminal-secondary)] mt-4">
                      [IMAGE] Performance of different LLMs on various tasks, mapped by correlation level
                      (log α) and error level (log β₀). Each task reveals different characteristic patterns.
                    </figcaption>
                  </figure>

                  <p>
                    By fitting our empirical model to the
                    experimental data, we extract two key parameters
                    for each model-task pair:
                  </p>

                  <div className="space-y-3 pl-4 border-l-2 border-primary/30 my-4">
                    <div>
                      <span className="text-[var(--terminal-secondary)] font-bold">β₀</span>
                      <span className="text-muted-foreground"> - Intrinsic error rate: How likely the model is to make a mistake on a single operation</span>
                    </div>
                    <div>
                      <span className="text-[var(--terminal-secondary)] font-bold">α</span>
                      <span className="text-muted-foreground"> - Error accumulation factor: How quickly errors compound across the sequence (when α {'>'} 1, errors amplify exponentially)</span>
                    </div>
                  </div>

                  <figure className="my-6 border border-[var(--terminal-primary)]/20 p-4 bg-muted">
                    <img
                      src={phaseModelImage}
                      alt="Correlation-error phase diagrams grouped by model"
                      className="w-full"
                    />
                    <figcaption className="text-center text-xs text-[var(--terminal-secondary)] mt-4">
                      [IMAGE] Different LLMs exhibit varying levels of attention focus and intrinsic accuracy
                      across tasks, with each model showing characteristic patterns in the correlation-error parameter space.
                    </figcaption>
                  </figure>
                </div>

                {/* Statistical Physics Model */}
                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [4] A Statistical Physics Explanation
                  </h2>

                  <p>
                    Why do LLMs fail this way? We propose a novel
                    theoretical framework inspired by{" "}
                    <span className="text-[var(--terminal-secondary)] font-bold">spin-glass physics</span> and the
                    Ising model. Our key insight: the self-attention
                    mechanism in LLMs creates all-to-all
                    correlations between tokens, causing errors to
                    propagate through the sequence in complex,
                    interacting ways.
                  </p>

                  <p>
                    We model each token's correctness as an Ising
                    spin (correct = +1, incorrect = -1) and
                    introduce random couplings J_ij between tokens to represent attention-induced
                    interference. An external field h represents the
                    prompt's bias toward correct generation.
                  </p>

                  <div className="border border-primary/30 p-4 bg-muted mt-4">
                    <p className="text-xs text-[var(--terminal-secondary)] font-bold mb-2">
                      [THE_MODEL]
                    </p>
                    <p className="text-muted-foreground text-xs mb-2">
                      The energy of a token sequence is:
                    </p>
                    <p className="text-foreground text-xs font-bold">
                      E[s] = -∑(i{'<'}j) J_ij s_i s_j - h ∑i s_i
                    </p>
                    <p className="text-muted-foreground text-xs mt-3">
                      Random couplings J_ij capture noisy
                      all-to-all dependencies introduced by
                      self-attention. When the correlation energy
                      (scaling as N²) dominates over the external
                      conditioning (scaling as N), the system
                      crosses into a "spin-glass" regime where the
                      fully correct sequence is no longer
                      favored—the accuracy cliff.
                    </p>
                  </div>

                  <p className="mt-4">
                    This model quantitatively reproduces the
                    observed crossover behavior and provides an
                    interpretable link between attention-induced
                    interference and sequence-level failure.
                  </p>
                </div>

                {/* Practical Solution */}
                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [5] Beating the Accuracy Cliff: Divide-and-Conquer
                  </h2>

                  <p>
                    Our model doesn't just explain the problem—it
                    suggests a solution. When α {'>'} 1, the
                    reliability of long-sequence generation can be
                    dramatically improved by adopting a{" "}
                    <span className="text-[var(--terminal-secondary)] font-bold">divide-and-conquer strategy</span>:
                    breaking the task into k smaller sub-tasks and
                    processing them separately.
                  </p>

                  <p>
                    This works because it "cuts the correlation
                    loops"—preventing the catastrophic error
                    accumulation that occurs when all tokens
                    interact through attention. Our experiments
                    confirm this prediction: dividing a task into k
                    parts extends the reliable length scale
                    approximately linearly with k.
                  </p>

                  <div className="border border-primary/30 p-4 bg-muted mt-4">
                    <p className="text-xs text-[var(--terminal-secondary)] font-bold mb-2">
                      [THEOREM] When Divide-and-Conquer Helps
                    </p>
                    <p className="text-muted-foreground text-xs mb-2">
                      For sequence length N and segmentation factor
                      k ≥ 2, divide-and-conquer yields positive gain
                      when:
                    </p>
                    <p className="text-foreground text-xs bg-muted p-3 border border-[var(--terminal-primary)]/20">
                      N ≥ 1 + (1/log α)[log(1 - 2log θ/β₀) + log 2/(1-1/k)]
                    </p>
                    <p className="text-muted-foreground text-xs mt-2">
                      where θ represents the overhead factor from
                      segmentation operations.
                    </p>
                  </div>
                </div>

                {/* Implications */}
                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <h2 className="text-xl sm:text-2xl text-[var(--terminal-secondary)] mb-4 font-bold">
                    [6] Implications and Future Directions
                  </h2>

                  <p>
                    This work provides both theoretical insights and
                    practical tools for building more reliable AI
                    systems. Our framework enables quantitative
                    model comparison through the (α, β₀) parameter
                    space, while Sequence Accuracy Rate (SAR) offers
                    a principled metric for evaluating deterministic
                    reasoning tasks. Critically, multi-call
                    decomposition strategies can extend reliable
                    reasoning length by orders of magnitude, and our
                    statistical-physics model suggests architectural
                    improvements to reduce attention-induced error
                    propagation. As LLMs increasingly power
                    scientific computing and mathematical reasoning
                    systems, understanding these fundamental
                    accuracy limits becomes essential for developing
                    trustworthy AI.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <div className="border border-primary p-6 bg-muted">
                    <p className="text-xs text-[var(--terminal-secondary)] font-bold mb-2">
                      [READ_FULL_PAPER]
                    </p>
                    <p className="text-muted-foreground text-xs mb-4">
                      For complete technical details, proofs, and
                      additional experimental results, please refer
                      to our paper:
                    </p>
                    <a
                      href="https://arxiv.org/abs/2511.00763"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary border-2 border-primary text-primary-foreground font-bold hover:bg-accent transition-all text-xs"
                    >
                      {'>'} arXiv:2511.00763
                      <span>▶</span>
                    </a>
                  </div>
                </div>

                {/* Terminal Footer */}
                <div className="pt-8 mt-8 border-t border-[var(--terminal-primary)]/20">
                  <div className="text-xs text-[var(--terminal-secondary)]">
                    <p>$ cat article_metadata.txt</p>
                    <p className="text-muted-foreground mt-2">
                      AUTHOR: EdenCode Research Team<br />
                      DATE: 2025-11-15<br />
                      CATEGORY: AI/ML Research<br />
                      STATUS: Published
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between items-center">
              <a
                href="/blogs"
                className="px-4 py-2 border-2 border-[var(--terminal-primary)] text-[var(--terminal-primary)] font-bold font-mono text-sm hover:bg-[var(--terminal-primary)]/10 transition-all inline-flex items-center gap-2"
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
