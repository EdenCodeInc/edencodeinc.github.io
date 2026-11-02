import { BlogLayout } from "../components/BlogLayout";

export default function BlogDecoderFactory() {
  return (
    <BlogLayout
      tag="Research · arXiv preprint"
      tone="rust"
      title="Distilling Knowledge from Search: Decoder Model Factory for Quantum LDPC Codes"
      author="EdenCode Research"
      date="2026-10-30"
      readTime="7"
    >
      <section>
        <p>
          Can the computation spent solving a difficult decoding problem help a quantum computer handle the next one? Our new paper introduces a <strong>decoder model factory</strong>: a cycle that turns experience from decoding into training data for better decoders.
        </p>
        <p>
          At its core is <strong>GraphMP</strong>, a learned message-passing decoder for quantum low-density parity-check (qLDPC) codes. Beam search lets it refine uncertain predictions; verified search trajectories then teach the next model. The result is a way to reuse decoding effort across generations, transfer a learned strategy to unseen tasks, and adapt when the noise changes.
        </p>
        <p>
          The study demonstrates this cycle in simulation. It also sets out a longer-term architecture in which fast decoding protects quantum information while a slower learning cycle updates the models from operating experience.
        </p>
      </section>

      <aside className="callout">
        <p className="callout-title">The paper</p>
        <p>
          <a href="https://arxiv.org/abs/2610.41398" target="_blank" rel="noopener noreferrer"><strong>Distilling Knowledge from Search: Decoder Model Factory for Quantum LDPC Codes</strong></a>
        </p>
        <p>Anil Bilgin, Wanda Hou, Pranav Srinivas, and Yi-Zhuang You</p>
        <p>
          arXiv:2610.41398 · Submitted October 30, 2026
          <br />
          <a href="https://arxiv.org/pdf/2610.41398" target="_blank" rel="noopener noreferrer">Read the PDF</a>
          {" · "}
          <a href="https://arxiv.org/html/2610.41398v1" target="_blank" rel="noopener noreferrer">Read the full text</a>
        </p>
      </aside>

      <section>
        <h2>One Local Rule, Many Decoding Tasks</h2>
        <p>
          A decoder uses measured syndromes to infer errors and choose a recovery. Different qLDPC families, code sizes, and noise settings produce different decoding problems. Training and maintaining a separate neural model for every setting would make deployment harder as the hardware evolves.
        </p>
        <p>
          GraphMP works on a sparse graph connecting detectors to possible error events. Shared learned functions exchange messages along its edges and predict error probabilities. The graph changes from task to task; the learned update rules stay the same. With a fixed number of message-passing rounds, total computation grows linearly with the number of graph edges.
        </p>
        <p>
          We initialize the model by distilling predictions from a belief-propagation (BP) teacher on three code-capacity tasks: BB<sub>144</sub>, Mitten<sub>150</sub>, and GB<sub>180</sub>. This provides a transferable starting point. The next challenge is to turn individual error probabilities into a coordinated prediction that satisfies the syndrome constraints.
        </p>
      </section>

      <section>
        <h2>Search Improves a Prediction. Distillation Reuses the Work.</h2>
        <p>
          GraphMP-guided beam search explores alternative assignments to uncertain error variables. It fixes a variable, updates the remaining problem, and asks the model to predict again. Search width and depth control the tradeoff: more exploration can lower the logical error rate, while requiring more model calls.
        </p>
        <p>
          The useful output is more than a final answer. A successful search leaves a sequence of intermediate problems and their completions. During data collection, an independent evaluator checks that the final prediction both explains the syndrome and preserves the logical outcome. In this study, the simulated error supplies that reference. The retained trajectories become examples for training the next model to solve partially completed search problems.
        </p>
        <p>
          The factory alternates collection and distillation: model G<sub>x</sub> guides search, verified trajectories join the accumulated dataset, and training produces G<sub>x+1</sub>. <strong>Search improves the current prediction and creates experience that can improve future predictions.</strong> Logical verification is used to collect training data and evaluate results; ordinary decoding chooses candidates using syndrome consistency and ranking, without access to the true logical outcome.
        </p>
        <figure className="figure decoder-factory-figure">
          <img
            src="/fig-factory-paper-loop.svg"
            alt="Decoder model factory cycle: accumulated data trains GraphMP, the model guides beam search, and verified trajectories supply the next training dataset"
            width={476} height={110} loading="lazy" decoding="async"
          />
          <figcaption>
            <strong>From the paper, Figure 9.</strong> Trajectory collection and model training alternate. G<sub>x</sub> is the single-pass model; G<sub>x</sub><sup>+</sup> combines that model with beam search.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Improvement That Transfers Beyond the Training Set</h2>
        <p>
          Across successive factory generations, single-pass decoding improves without changing the message-passing architecture. The improvement also reaches tasks excluded from training. The figure below follows both a training task, Mitten<sub>150</sub>, and an unseen lifted-product task, LP<sub>20</sub><sup>3,5</sup>. The largest gains arrive with the first round of trajectory distillation, followed by smaller refinements.
        </p>
        <figure className="figure decoder-factory-figure">
          <img
            src="/fig-factory-paper-generations.svg"
            alt="Logical error rates across factory generations on training task Mitten-150 and unseen task LP-20, showing single-pass and search-enhanced decoding"
            width={476} height={206} loading="lazy" decoding="async"
          />
          <figcaption>
            <strong>From the paper, Figure 10.</strong> Dashed green curves show single-pass decoding; solid green curves include beam search. Curves average five independent factory runs, and bands show the range across those runs.
          </figcaption>
        </figure>
        <p>
          The final benchmark evaluates twelve tasks: the three used for training and nine unseen tasks, spanning different code sizes, families, and noise models. The same trained model is applied to the unseen tasks <strong>without fine-tuning</strong>.
        </p>
        <p>
          Under the reported configurations, the final search-enhanced model G<sub>3</sub><sup>+</sup> has lower measured logical error rates than BP+OSD on all nine code-capacity tasks and is broadly competitive with Relay-BP. It also shows strong results against BP-based beam search and Tesseract on larger generalized-bicycle and lifted-product tasks. Performance remains task dependent: on phenomenological Mitten<sub>150</sub>, BP-based beam search and Tesseract are more accurate.
        </p>
        <figure className="figure decoder-factory-figure">
          <img
            src="/fig-factory-paper-benchmark.svg"
            alt="Final search-enhanced GraphMP benchmark against BP+OSD or BP+LSD, Relay-BP, BP beam search, and Tesseract on twelve decoding tasks; three training tasks are shaded"
            width={476} height={204} loading="lazy" decoding="async"
          />
          <figcaption>
            <strong>From the paper, Figure 11.</strong> Three shaded tasks supply training data; nine others test transfer. Comparisons use 2,048 error realizations per task, with shorter Tesseract runs on the largest tasks. Bars above 0.04 are truncated; full settings are in Appendix E.4.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Measuring the Cost of Search</h2>
        <p>
          Single-pass GraphMP uses a fixed number of message-passing rounds, so its decoding time stays nearly independent of physical error rate for a given task. Beam search reduces logical errors but adds work, especially as noisier inputs require more exploration.
        </p>
        <p>
          On Mitten<sub>150</sub> and LP<sub>20</sub><sup>3,5</sup>, the paper reports search-enhanced GraphMP approaching Relay-BP accuracy with less measured time per shot. These are measurements in a stream of syndromes: GraphMP runs on one NVIDIA B300 GPU, while reference decoders run on one CPU core. Hardware and implementation differ, so these results characterize the accuracy–computation tradeoff rather than establish a hardware-matched speedup or real-time deployment readiness.
        </p>
        <figure className="figure decoder-factory-figure">
          <img
            src="/fig-factory-paper-latency.svg"
            alt="Logical error rate and decoding time versus physical error rate on Mitten-150 and LP-20, comparing GraphMP on a GPU with classical decoders on a single CPU core"
            width={476} height={311} loading="lazy" decoding="async"
          />
          <figcaption>
            <strong>From the paper, Figure 12.</strong> Accuracy and time per shot on a training task and an unseen task. Error-rate bands are 90% bootstrap intervals conditional on the fitted model. Timing procedures and fit diagnostics are in Appendices E.5–E.6.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Learning Again When the Noise Changes</h2>
        <p>
          After three generations under depolarizing noise, the adaptation experiment switches to XZ noise. This is a controlled toy-model change, rather than a simulation of realistic hardware drift. The factory continues collecting trajectories on its three training tasks and distills them into generations G<sub>4</sub> through G<sub>6</sub>.
        </p>
        <p>
          Accuracy initially worsens after the switch, then recovers as the new trajectories enter training. Most of the recovery comes in the first update. The adaptation transfers to LP<sub>20</sub><sup>3,5</sup>, which is excluded from adaptation training: G<sub>6</sub><sup>+</sup> outperforms Relay-BP with its original noise prior there, while Relay-BP given the updated prior remains more accurate. GraphMP's beam-search candidate selector retains its original prior throughout this test.
        </p>
        <figure className="figure decoder-factory-figure">
          <img
            src="/fig-factory-paper-adaptation.svg"
            alt="Adaptation from depolarizing to XZ noise on Mitten-150 and unseen LP-20, with GraphMP generations compared against Relay-BP using original and updated priors"
            width={476} height={220} loading="lazy" decoding="async"
          />
          <figcaption>
            <strong>From the paper, Figure 13.</strong> The noise changes at G<sub>3</sub>; G<sub>4</sub>–G<sub>6</sub> learn from newly collected trajectories. Panel (a) shows a training task; panel (b) tests transfer. Bands are 90% Wilson intervals.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Two Cycles for a Learning Quantum Computer</h2>
        <p>
          The longer-term vision pairs a fast decoding cycle with a slower model-training cycle. A quantum processing unit produces measurements; a classical quantum data processing unit uses them for recovery and collects experience for future updates. The immune-system analogy remains useful: immediate responses protect the system, while learning changes how it responds next time.
        </p>
        <p>
          The next step is to collect trajectories from quantum-memory experiments, using dedicated logical benchmarks to verify outcomes. Circuit-level noise, sustained drift, and the deadlines of real-time error correction remain to be tested. The contribution here is a demonstrated learning cycle in simulation: local decoding, search, verification, and distillation working together to produce successive models.
        </p>
      </section>

      <section>
        <h2>Paper and Further Reading</h2>
        <ul>
          <li>
            <a href="https://arxiv.org/abs/2610.41398" target="_blank" rel="noopener noreferrer">arXiv:2610.41398</a>
            {" "}— the paper, with full methods, benchmark settings, and appendices.
          </li>
          <li>
            <a href="https://online.kitp.ucsb.edu/online/aiqmatter-c26/you/" target="_blank" rel="noopener noreferrer">Earlier KITP talk by Yi-Zhuang You</a>
            {" "}— September 28, 2026; an introduction to the ideas preceding this preprint.
          </li>
          <li>
            Earlier from EdenCode: <a href="/blog-graph-transformer">One Decoder for Every Quantum Code</a> and <a href="/blog-nvidia-ising">Scaling AI-Powered QEC with NVIDIA Ising</a>.
          </li>
        </ul>
        <p>
          Figures are reproduced from Bilgin, Hou, Srinivas, and You, arXiv:2610.41398v1, under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Figure numbers refer to the paper. This post updates our earlier KITP talk summary to reflect the October 30 preprint.
        </p>
      </section>

      <div className="about">
        <p className="about-title">About EdenCode</p>
        <p>
          EdenCode Inc. is a quantum AI company on a mission to unlock quantum computing with AI — and ultimately use quantum to design better AI. Founded in 2025, EdenCode builds real-time AI decoder technology for quantum error correction ecosystems, working across all quantum hardware modalities. Learn more at www.edencode.ai.
        </p>
      </div>
    </BlogLayout>
  );
}
