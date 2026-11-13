import { BlogLayout } from "../components/BlogLayout";

export default function BlogSampleComplexity() {
  return (
    <BlogLayout
      tag="Research · arXiv preprint"
      tone="rust"
      title="How Much Can We Learn from Quantum Measurement Data?"
      author="EdenCode Research"
      date="2026-11-12"
      readTime="6"
    >
      <section>
        <p>
          Every quantum measurement supplies another sample. How much more can a
          generative model learn from it? And how large should that model be for
          the data we actually have?
        </p>
        <p>
          A new paper by our colleagues Shuhan Zhang and Yi-Zhuang You
          connects these questions through a measurable tradeoff: increasing
          model capacity captures more structure, but also creates more
          probabilities to estimate from finite data. The balance predicts both
          the best capacity and the learning curve in controlled examples of
          quantum measurement distributions.
        </p>
        <p>
          The central lesson is that <strong>data requirements depend on what
          information a model discards and how expensive the retained
          information is to learn.</strong> This helps explain why adding samples
          can bring steady power-law improvements in one physical regime and
          much slower progress in another.
        </p>
      </section>

      <aside className="callout">
        <p className="callout-title">The paper</p>
        <p>
          <a href="https://arxiv.org/abs/2610.38028" target="_blank" rel="noopener noreferrer">
            <strong>Sample Complexity for Generative Learning of Quantum Measurement Data</strong>
          </a>
        </p>
        <p>Shuhan Zhang and Yi-Zhuang You</p>
        <p>
          arXiv:2610.38028 · First submitted October 27, 2026
          <br />
          This introduction follows v2, revised October 30, 2026.
          <br />
          <a href="https://arxiv.org/pdf/2610.38028v2" target="_blank" rel="noopener noreferrer">PDF</a>
          {" · "}
          <a href="https://arxiv.org/html/2610.38028v2" target="_blank" rel="noopener noreferrer">Full text</a>
          {" · "}
          <a href="https://github.com/S00Zhang/quantum-measurement-sample-complexity" target="_blank" rel="noopener noreferrer">Code and data</a>
        </p>
      </aside>

      <section>
        <h2>Two Sources of Error, One Capacity Decision</h2>
        <p>
          Repeated measurements produce a classical probability distribution
          determined by both the quantum state and the measurement basis. A
          generative model tries to reproduce that distribution. The paper
          measures its error using population Kullback–Leibler divergence: how
          different the learned distribution is from the target, averaged over
          independently drawn training datasets.
        </p>
        <p className="formula">E(s, N) = B(s) + V(s, N)</p>
        <p>
          Here, <em>s</em> controls model capacity and <em>N</em> is the number of
          measurement records. <strong>Representation bias B</strong> is the
          error remaining even in the best model at that capacity.
          {" "}<strong>Estimation cost V</strong> is the additional error from
          learning that model with finite data. The paper calls this a variance
          term, although it also includes bias introduced by the learner.
        </p>
        <p>
          Larger models can reduce the first cost while raising the second. The
          optimal capacity balances the marginal improvement in representation
          against the marginal cost of estimating more parameters. Combining
          exponential or algebraic laws for these two costs gives four scaling
          templates, including power laws in sample size and inverse powers of
          its logarithm.
        </p>
      </section>

      <section>
        <h2>Context Is Capacity. Lost Information Is Bias.</h2>
        <p>
          To make this tradeoff explicit, the authors study local autoregressive
          models. Each measured bit is predicted from at most <em>R</em> preceding
          bits. A short context is easy to estimate, but overlooks predictive
          information farther in the past. A longer context retains more of
          that information and requires a larger collection of conditional
          probabilities.
        </p>
        <p>
          For the full class of conditional probability tables, the
          representation bias is <strong>exactly the sum of the conditional
          mutual information discarded by truncating the context.</strong>
          This gives the capacity parameter a physical interpretation: the
          radius determines how much predictive information survives.
        </p>
        <p>
          The benchmark uses computational-basis measurements of ground states
          of the one-dimensional transverse-field Ising model. Away from the
          critical point, the computed bulk bias decreases approximately
          exponentially over the resolved radii. At criticality, it is
          consistent with a much slower 1/R decay.
        </p>
        <figure className="figure">
          <img
            src="/fig-sample-complexity-bias.svg"
            alt="Bulk representation bias versus context radius in Ising measurement distributions: approximately exponential decay at g = 0.5 and 1.5, and slower algebraic decay at the critical point g = 1"
            width={476} height={366} loading="lazy" decoding="async"
            style={{ background: "#fff" }}
          />
          <figcaption>
            <strong>Figure 2 from the paper.</strong> Increasing the context
            reduces representation bias at different rates across physical
            regimes. The gapped exponential guides describe the resolved range;
            they do not establish the asymptotic tail.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Rare Contexts Change the Finite-Data Answer</h2>
        <p>
          The learner estimates each conditional probability with a smoothed
          histogram, using Krichevsky–Trofimov (KT) smoothing so that unseen
          outcomes retain nonzero probability. When every context is well
          sampled, each independent Bernoulli parameter contributes a leading
          estimation cost of 1/(2N). At a bulk site there are 2<sup>R</sup>
          {" "}parameters, so the leading cost grows exponentially with radius.
        </p>
        <p className="formula">v(R, N) ≈ 2<sup>R</sup> / (2N) — in the well-sampled regime</p>
        <p>
          At practical sample sizes, some contexts may be rare or entirely
          absent. Counting parameters alone can then overestimate the cost and
          favor contexts that are too short. The paper derives an exact mean
          finite-sample expression for this histogram learner, averaging over
          how often each context is visited and what outcomes occur there.
        </p>
        <p>
          Adding this cost to the independently computed bias predicts the
          optimal radius. For one million independent bulk records, the
          predicted minima occur at R = 8 for g = 0.5 and R = 11 at criticality,
          matching the measured minima in these examples.
        </p>
        <figure className="figure">
          <img
            src="/fig-sample-complexity-selection.svg"
            alt="Bias, exact finite-sample estimation cost, and total error versus context radius for one million samples, with optimal radii of 8 at g = 0.5 and 11 at g = 1"
            width={476} height={173} loading="lazy" decoding="async"
            style={{ background: "#fff" }}
          />
          <figcaption>
            <strong>Figure 4 from the paper.</strong> The sum of representation
            bias and estimation cost predicts the measured error and its
            minimum. Points average 20 independent training datasets. The
            dotted bias tail in panel (a) is extrapolated.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Why Learning Curves Can Look So Different</h2>
        <p>
          In the tested gapped regimes, approximately exponential bias decay
          competes with exponentially growing estimation cost. Optimizing the
          radius produces approximately power-law error decay with sample
          size. At criticality, algebraic bias decay leads instead to a
          prediction of asymptotic inverse-logarithmic improvement. In both
          cases the optimal radius grows roughly logarithmically with data.
        </p>
        <p>
          The distinction matters when interpreting a learning curve.
          {" "}<strong>A power law in sample size does not, by itself, identify
          critical data.</strong> It can also arise from the competition of two
          exponential capacity laws in a gapped system.
        </p>
        <figure className="figure">
          <img
            src="/fig-sample-complexity-scaling.svg"
            alt="Optimal bulk prediction error and context radius versus sample size in three Ising regimes, comparing training measurements with exact finite-sample predictions and asymptotic approximations"
            width={476} height={138} loading="lazy" decoding="async"
            style={{ background: "#fff" }}
          />
          <figcaption>
            <strong>Figure 5 from the paper.</strong> Solid curves use the
            computed bias and exact finite-sample cost; points are training
            measurements. Dashed curves use asymptotic estimation costs and
            continued bias laws. The shaded region beyond 10<sup>8</sup>
            {" "}samples contains extrapolations only.
          </figcaption>
        </figure>
        <p>
          The critical inverse-log law is an asymptotic prediction. Subleading
          corrections remain substantial throughout the tested range of
          10<sup>2</sup> to 10<sup>8</sup> samples, where the leading 1/ln N
          behavior has not yet been reached. Fits including those corrections
          are consistent with the prediction; they do not independently
          establish its asymptotic exponent.
        </p>
      </section>

      <section>
        <h2>What This Means for Quantum AI</h2>
        <p>
          For EdenCode, this work adds a foundation for reasoning about the data
          budget behind quantum AI. A useful comparison between architectures
          should ask what each can achieve at a capacity justified by the same
          number of measurement records. The answer depends on the measured
          distribution, model family, learner, and sample size together.
        </p>
        <p>
          The results here concern local autoregressive probability tables and
          a specified histogram learner, tested on controlled Ising
          distributions, including a 50-site finite-chain validation. For
          restricted neural autoregressive models, the discarded-information
          identity gives a lower bound on representation bias. Other
          architectures require their own bias and estimation-cost analysis.
        </p>
        <p>
          The capacity predictions also use target probabilities available in
          these benchmarks. Developing a selection rule that works from
          observed samples alone is a next step. The present contribution is
          a quantitative explanation of how information structure and
          finite-data estimation jointly determine the model worth learning.
        </p>
      </section>

      <section>
        <h2>Paper and Resources</h2>
        <ul>
          <li>
            <a href="https://arxiv.org/abs/2610.38028" target="_blank" rel="noopener noreferrer">arXiv:2610.38028</a>
            {" "}— paper, version history, and PDF.
          </li>
          <li>
            <a href="https://github.com/S00Zhang/quantum-measurement-sample-complexity" target="_blank" rel="noopener noreferrer">Reproduction code and data</a>
            {" "}— the repository linked by the authors.
          </li>
          <li>
            <a href="/publications">EdenCode publications</a>
            {" "}— our academic papers and related research introductions.
          </li>
        </ul>
        <p>
          Figures are reproduced without modification from Zhang and You,
          {" "}<a href="https://arxiv.org/html/2610.38028v2" target="_blank" rel="noopener noreferrer">arXiv:2610.38028v2</a>,
          under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.
          Figure numbers refer to that version.
        </p>
      </section>
    </BlogLayout>
  );
}
