import { ArrowUpRight } from "lucide-react";
import { BlogLayout } from "../components/BlogLayout";

export default function BlogLLMAccuracy() {
  return (
    <BlogLayout
      tag="AI/ML"
      tone="amber"
      title="How Focused Are LLMs?"
      author="EdenCode Research"
      date="2025-11-15"
      readTime="12"
    >
      <section>
        <h2>The Reliability Problem in LLMs</h2>
        <p>
          Large language models (LLMs) have achieved remarkable success across diverse applications, but their reliability on structured, multi-step reasoning remains poorly understood. While these models excel at creative text generation and many natural language tasks, they often struggle with deterministic problems that require consistent, step-by-step execution—like performing multi-digit arithmetic or executing repetitive transformations.
        </p>
        <p>
          In our latest research paper, we investigate this fundamental limitation by studying how LLM accuracy scales with output length in <strong>repetitive deterministic prediction tasks</strong>—problems where each step follows a simple, fixed rule, but the sequence must be executed many times correctly.
        </p>
        <aside className="callout">
          <p className="callout-title">Reference</p>
          <p>
            Paper:{" "}
            <a href="https://arxiv.org/abs/2511.00763" target="_blank" rel="noopener noreferrer">arXiv:2511.00763</a>
          </p>
        </aside>
      </section>

      <section>
        <h2>Discovering the Accuracy Cliff</h2>
        <figure className="figure">
          <img src="/fig-llm-cliff.webp" alt="Illustration of LLM accuracy cliff phenomenon"  width={2000} height={782} loading="lazy" decoding="async" />
          <figcaption>
            The accuracy cliff phenomenon—LLMs maintain high accuracy for short sequences, then experience a sharp drop beyond a characteristic length N*.
          </figcaption>
        </figure>
        <p>
          We evaluated leading LLMs (GPT-5, Gemini-2.5-Pro, Gemini-2.5-Flash, Grok-4, and Claude-4-Sonnet) on three carefully designed benchmarks:
        </p>
        <ul>
          <li><strong>Cyclic Letter Replacement:</strong> Apply a simple transformation rule (e.g., A→B, B→C, …, Z→A) to each character in a string</li>
          <li><strong>Integer Addition:</strong> Add two multi-digit numbers, testing carry propagation</li>
          <li><strong>Pauli String Multiplication:</strong> Multiply quantum operators following precise algebraic rules with phase tracking</li>
        </ul>
        <p>
          What we discovered was striking: instead of the expected exponential decay in accuracy, LLMs exhibit a <strong>sharp double-exponential drop</strong> beyond a characteristic length scale—an “accuracy cliff” marking a transition from reliable to unstable generation.
        </p>
        <aside className="callout">
          <p className="callout-title">Key finding</p>
          <p>
            If LLMs performed each operation independently, we would expect accuracy to decay as exp(-βN). Instead, we observe exp(-β₀N α^(N-1))—showing that errors accumulate multiplicatively as the sequence grows longer.
          </p>
        </aside>
      </section>

      <section>
        <h2>Mapping LLM Performance</h2>
        <figure className="figure">
          <img src="/fig-llm-phase-task.webp" alt="Correlation-error phase diagrams grouped by task"  width={2000} height={2188} loading="lazy" decoding="async" />
          <figcaption>
            Performance of different LLMs on various tasks, mapped by correlation level (log α) and error level (log β₀). Each task reveals different characteristic patterns.
          </figcaption>
        </figure>
        <p>
          By fitting our empirical model to the experimental data, we extract two key parameters for each model-task pair:
        </p>
        <ul>
          <li><strong>β₀</strong> — Intrinsic error rate: How likely the model is to make a mistake on a single operation</li>
          <li><strong>α</strong> — Error accumulation factor: How quickly errors compound across the sequence (when α {'>'} 1, errors amplify exponentially)</li>
        </ul>
        <figure className="figure">
          <img src="/fig-llm-phase-model.webp" alt="Correlation-error phase diagrams grouped by model"  width={2000} height={1469} loading="lazy" decoding="async" />
          <figcaption>
            Different LLMs exhibit varying levels of attention focus and intrinsic accuracy across tasks, with each model showing characteristic patterns in the correlation-error parameter space.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>A Statistical Physics Explanation</h2>
        <p>
          Why do LLMs fail this way? We propose a novel theoretical framework inspired by <strong>spin-glass physics</strong> and the Ising model. Our key insight: the self-attention mechanism in LLMs creates all-to-all correlations between tokens, causing errors to propagate through the sequence in complex, interacting ways.
        </p>
        <p>
          We model each token's correctness as an Ising spin (correct = +1, incorrect = -1) and introduce random couplings J_ij between tokens to represent attention-induced interference. An external field h represents the prompt's bias toward correct generation.
        </p>
        <aside className="callout">
          <p className="callout-title">The model</p>
          <p>The energy of a token sequence is:</p>
          <p className="formula">E[s] = -∑(i{'<'}j) J_ij s_i s_j - h ∑i s_i</p>
          <p>
            Random couplings J_ij capture noisy all-to-all dependencies introduced by self-attention. When the correlation energy (scaling as N²) dominates over the external conditioning (scaling as N), the system crosses into a “spin-glass” regime where the fully correct sequence is no longer favored—the accuracy cliff.
          </p>
        </aside>
        <p>
          This model quantitatively reproduces the observed crossover behavior and provides an interpretable link between attention-induced interference and sequence-level failure.
        </p>
      </section>

      <section>
        <h2>Beating the Accuracy Cliff: Divide-and-Conquer</h2>
        <p>
          Our model doesn't just explain the problem—it suggests a solution. When α {'>'} 1, the reliability of long-sequence generation can be dramatically improved by adopting a <strong>divide-and-conquer strategy</strong>: breaking the task into k smaller sub-tasks and processing them separately.
        </p>
        <p>
          This works because it “cuts the correlation loops”—preventing the catastrophic error accumulation that occurs when all tokens interact through attention. Our experiments confirm this prediction: dividing a task into k parts extends the reliable length scale approximately linearly with k.
        </p>
        <aside className="callout">
          <p className="callout-title">Theorem — when divide-and-conquer helps</p>
          <p>
            For sequence length N and segmentation factor k ≥ 2, divide-and-conquer yields positive gain when:
          </p>
          <p className="formula">N ≥ 1 + (1/log α)[log(1 - 2log θ/β₀) + log 2/(1-1/k)]</p>
          <p>where θ represents the overhead factor from segmentation operations.</p>
        </aside>
      </section>

      <section>
        <h2>Implications and Future Directions</h2>
        <p>
          This work provides both theoretical insights and practical tools for building more reliable AI systems. Our framework enables quantitative model comparison through the (α, β₀) parameter space, while Sequence Accuracy Rate (SAR) offers a principled metric for evaluating deterministic reasoning tasks. Critically, multi-call decomposition strategies can extend reliable reasoning length by orders of magnitude, and our statistical-physics model suggests architectural improvements to reduce attention-induced error propagation. As LLMs increasingly power scientific computing and mathematical reasoning systems, understanding these fundamental accuracy limits becomes essential for developing trustworthy AI.
        </p>
      </section>

      <aside className="callout">
        <p className="callout-title">Read the full paper</p>
        <p>
          For complete technical details, proofs, and additional experimental results, please refer to our paper:
        </p>
        <p>
          <a
            href="https://arxiv.org/abs/2511.00763"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ textDecoration: "none" }}
          >
            arXiv:2511.00763
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </p>
      </aside>
    </BlogLayout>
  );
}
