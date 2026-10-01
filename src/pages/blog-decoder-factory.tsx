import { BlogLayout } from "../components/BlogLayout";

export default function BlogDecoderFactory() {
  return (
    <BlogLayout
      tag="KITP talk"
      tone="rust"
      title="An Immune System for Quantum Computers: Building an AI Decoder Factory for Quantum LDPC Codes"
      author="Yi-Zhuang (Everett) You · EdenCode & UC San Diego"
      date="KITP, September 28, 2026"
      readTime="10"
    >
      <section>
        <p>
          This week the Kavli Institute for Theoretical Physics (KITP) at UC Santa Barbara is hosting{" "}
          <a href="https://www.kitp.ucsb.edu/activities/aiqmatter-c26" target="_blank" rel="noopener noreferrer">Artificial Intelligence at the Quantum Frontier</a>
          {" "}(September 28 – October 1, 2026), the conference of its ten-week program{" "}
          <a href="https://www.kitp.ucsb.edu/activities/aiqmatter26" target="_blank" rel="noopener noreferrer">AI for Quantum Matter</a>
          {" "}(July 27 – October 8). EdenCode co-founder and CTO <strong>Yi-Zhuang (Everett) You</strong>, professor of physics at UC San Diego, co-coordinates the program (with Eliska Greplova, Hsin-Yuan (Robert) Huang, Di Luo, and Xiao-Liang Qi) and the conference (with Greplova, Huang, and Luo). On the opening day he presented EdenCode's latest work,{" "}
          <a href="https://online.kitp.ucsb.edu/online/aiqmatter-c26/you/" target="_blank" rel="noopener noreferrer"><em>Building AI Decoder Factory for Quantum LDPC Codes</em></a>
          . This post is the written version of that talk.
        </p>
        <p>
          The premise is simple. Without an immune system, a human lives for days; the first infection ends the story. With one, decades — every infection survived, and time enough for great work. Fault-tolerant quantum computing likewise needs a <strong>quantum immune system</strong>, better known as quantum error correction (QEC). The question is what kind of immune system to build.
        </p>
        <p>
          The answer presented at KITP: <strong>not one decoder, but a factory</strong> that keeps making better decoders from its own verified experience. We introduced <strong>GraphMP</strong>, a graph neural network that decodes any quantum LDPC code by passing messages on its Tanner graph; placed it inside a beam search so that it can deliberate on difficult syndromes; and then closed the loop, collecting the logically correct search trajectories and training the next generation on them. Taught on three codes and tested on twelve, the third-generation decoder matches or surpasses the strongest classical decoders almost everywhere, at constant single-pass latency, and re-adapts when the noise drifts.
        </p>
      </section>

      <aside className="callout">
        <p className="callout-title">Key results</p>
        <ul>
          <li><strong>Three codes taught, twelve decoded:</strong> GraphMP is trained only on BB<sub>144</sub>, Mitten<sub>150</sub> and GB<sub>180</sub>, then evaluated on twelve decoding problems across bivariate-bicycle, generalized-bicycle, Mitten and lifted-product codes — up to [[2610,&nbsp;744,&nbsp;≤16]] — under code-capacity and phenomenological noise</li>
          <li><strong>Ahead of the decoders that trained it:</strong> after three generations of self-improvement, GraphMP G3<sup>+</sup> matches or surpasses BP+OSD/LSD and Relay-BP almost everywhere, including on codes it never saw in training</li>
          <li><strong>Search folded into the weights:</strong> each generation's single-pass decoder inherits the accuracy that the previous generation bought with search. Single-pass G3 runs in constant time per shot on one GPU regardless of noise strength; the search-enhanced G3<sup>+</sup> stays at or below BP+OSD/LSD and well below Relay-BP across the whole noise range</li>
          <li><strong>Adaptive:</strong> when the noise model was switched mid-run (depolarizing to X/Z-only), the factory re-adapted within three generations and finished below Relay-BP — even after Relay-BP was handed the updated noise prior</li>
        </ul>
      </aside>

      <section>
        <h2>Five Things the Immune System Gets Right</h2>
        <p>
          The biological immune system is a remarkably good design brief for a decoder. It acts locally, without central coordination; it clears an infection over successive rounds; the same machinery serves organisms of every size; it meets pathogens it has never encountered; and it learns. A QEC decoder should have the same five properties:
        </p>
        <ul>
          <li><strong>Local</strong> — local syndromes in, local corrections out; no global decision making</li>
          <li><strong>Progressive</strong> — multi-round decoding clears residual syndromes step by step</li>
          <li><strong>Scalable</strong> — the same decoding rule applies everywhere and grows with the system</li>
          <li><strong>Transferable</strong> — one universal decoding algorithm solves different decoding problems</li>
          <li><strong>Adaptive</strong> — a machine-learning decoder learns the live noise and keeps up with its drift</li>
        </ul>
        <p>
          Our earlier post on the <a href="/blog-graph-transformer">Graph Transformer Decoder</a> approached locality and scalability on the surface code. The decoder factory is about the last two properties: transferability across the fast-growing family of quantum LDPC codes, and adaptivity through learning.
        </p>
      </section>

      <section>
        <h2>A Fast-Growing Family of Quantum LDPC Codes</h2>
        <p>
          Quantum LDPC codes promise far lower qubit overhead than the surface code, and new families appear every few months. The talk considered four: <strong>bivariate bicycle</strong> (BB) codes BB<sub>144</sub> [[144,&nbsp;12,&nbsp;12]] and BB<sub>288</sub> [[288,&nbsp;12,&nbsp;18]]; <strong>generalized bicycle</strong> (GB) codes GB<sub>180</sub> [[180,&nbsp;10,&nbsp;≤18]] and GB<sub>900</sub> [[900,&nbsp;50,&nbsp;15]]; the <strong>Mitten</strong> codes Mitten<sub>150</sub> [[150,&nbsp;30,&nbsp;10]], Mitten<sub>200</sub> [[200,&nbsp;40,&nbsp;12]] and Mitten<sub>300</sub> [[300,&nbsp;60,&nbsp;14]]; and <strong>lifted-product</strong> (LP) codes LP<sub>20</sub><sup>3,5</sup> [[1122,&nbsp;148,&nbsp;≤20]] and LP<sub>16</sub><sup>3,7</sup> [[2610,&nbsp;744,&nbsp;≤16]]. In the [[n, k, d]] notation, n is the number of physical qubits, k the number of logical qubits and d the code distance; n : k is the overhead.
        </p>
        <p>
          Each of these codes needs a decoder, and hand-tuning one per code does not scale. Within the stabilizer formalism, however, a code and its noise model compile to a <strong>detector error model</strong> (DEM): a detector matrix H, an observable matrix L, and a prior π(e) over faults. The syndrome is s = He, the logical effect is ℓ = Le, and the decoder's job is to model p(e|s) and propose a correction ê. Its quality is measured by the residual e ⊕ ê: the correction is consistent when the residual is invisible to the checks, H(e ⊕ ê) = 0, and correct when it is harmless to the logical qubits, L(e ⊕ ê) = 0. The <strong>logical error rate</strong> p<sub>L</sub> = Pr[L(e ⊕ ê) ≠ 0] is how often the logical word comes out wrong. Different codes, same decoding framework — which is what makes a universal decoder possible.
        </p>
      </section>

      <section>
        <h2>GraphMP: Embed, Pass Messages, Read Out</h2>
        <p>
          <strong>GraphMP</strong> is a graph neural network living on the Tanner graph of the DEM. <strong>Embed:</strong> the syndrome goes in, embedded as a feature vector on each check node. <strong>Message passing:</strong> feature vectors flow along the edges of the Tanner graph, between syndrome and fault nodes, for multiple rounds. <strong>Read out:</strong> each fault node emits a logit — how likely it carries an error. Because the network is defined by the graph rather than by any particular code, the same weights run on any DEM.
        </p>
        <p>
          To bootstrap the first generation, we train GraphMP by imitation from a <strong>belief propagation</strong> (BP) teacher — a natural choice, since BP is itself a message-passing decoder on the same graph. The single-pass student roughly tracks its teacher on the training codes and on codes of similar size, but falls behind on the larger codes it has never seen — and all of them remain far behind BP+OSD/LSD and Relay-BP, the strongest classical decoders for quantum LDPC codes. A good medical student is not yet a good doctor: a student can propose a cure for every syndrome, but a good doctor can think several steps ahead to plan a treatment.
        </p>
      </section>

      <section>
        <h2>Thinking Buys Accuracy</h2>
        <p>
          The remedy is to let the decoder think. Building on{" "}
          <a href="https://arxiv.org/abs/2512.07057" target="_blank" rel="noopener noreferrer">beam-search decoding for quantum LDPC codes</a>
          {" "}(Ye, Wecker and Delfosse), we wrap GraphMP in a search: take the least certain fault in the current proposal, pin it to 0 in one branch and to 1 in another, decode each branch again, and keep the W best candidates alive over R rounds of search depth. Branch, predict, prune.
        </p>
        <p>
          Search works: wider beams and deeper search keep lowering the logical error rate. It also has a price: decoding time grows with W × R, by orders of magnitude at the widest and deepest settings. This trade-off raises the question that leads to the factory. Can the accuracy bought by search be folded back into the single-pass decoder, so that the next generation inherits it at no cost?
        </p>
      </section>

      <section>
        <h2>The Decoder Factory: Recursive Self-Improvement</h2>
        <p>
          The loop runs as follows. The quantum device — or its simulator — poses the problem by emitting a syndrome s. The AI decoder, GraphMP running inside a beam search, answers with a correction ê. The device checks logical correctness: keep when L(e ⊕ ê) = 0, discard otherwise. Every logically correct <strong>search trajectory</strong> — the sequence of intermediate proposals that led from the observed syndrome to a correct answer — goes into a database. That database is the next textbook.
        </p>
        <p>
          Generation x's single-pass decoder G<sub>x</sub> is trained by supervised learning on the cumulative data D<sub>1</sub> ∪ ⋯ ∪ D<sub>x</sub>. Beam search turns it into G<sub>x</sub><sup>+</sup>, which collects a new set of verified trajectories D<sub>x+1</sub>, which is appended to the training data for G<sub>x+1</sub>. <strong>Better data trains a better model, and a better model collects better data.</strong> No hand-labelled data and no external oracle: the device's own verdict on logical correctness is the only supervision the factory needs.
        </p>
        <figure className="figure">
          <img
            src="/fig-factory-loop.jpg"
            alt="The decoder factory loop: cumulative training data trains a single-pass decoder; beam search turns it into a search decoder; verified trajectories are collected and appended for the next round"
           width={2000} height={684} loading="lazy" decoding="async" />
          <figcaption>
            <strong>Figure 1.</strong> The decoder factory. The single-pass decoder GraphMP G<sub>x</sub> is trained by supervised learning on the cumulative data D<sub>1</sub> ∪ ⋯ ∪ D<sub>x</sub>; beam search turns it into G<sub>x</sub><sup>+</sup>, whose logically correct search trajectories are collected as D<sub>x+1</sub> and appended to the training data for the next generation.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Each Generation Is Better Than the Last</h2>
        <p>
          Figure 2 tracks the logical error rate across factory generations G<sub>0</sub> to G<sub>3</sub>. On Mitten<sub>150</sub>, a code in the training set, both the single-pass decoder (dashed) and its search-enhanced version (solid) improve every generation; the search decoder crosses below BP+OSD/LSD by G<sub>1</sub> and below Relay-BP by G<sub>2</sub>. The right panel is the transfer test: LP<sub>20</sub><sup>3,5</sup>, more than a thousand qubits and never in the training set. It shows the same climb — the single-pass decoder improves generation by generation, and its search version reaches Relay-BP by G<sub>2</sub> and passes below it at G<sub>3</sub>.
        </p>
        <figure className="figure">
          <img
            src="/fig-factory-generations.jpg"
            alt="Logical error rate versus factory generation on Mitten-150 (in training set) and LP-20 (not in training set), compared with BP, BP+OSD/LSD and Relay-BP"
           width={2000} height={703} loading="lazy" decoding="async" />
          <figcaption>
            <strong>Figure 2.</strong> Each generation is better than the last — and the improvement transfers. Logical error rate p<sub>L</sub> versus factory generation for the single-pass decoder (dashed) and the search-enhanced decoder (solid), against BP, BP+OSD/LSD and Relay-BP (horizontal lines). Left: Mitten<sub>150</sub> at p&nbsp;=&nbsp;0.05, a code in the training set. Right: LP<sub>20</sub><sup>3,5</sup> at p&nbsp;=&nbsp;0.09, a code outside the training set.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Now Ahead of the Decoders That Trained It</h2>
        <p>
          Figure 3 is the full benchmark: twelve decoding problems, nine under code-capacity noise and three under phenomenological noise, where the syndrome measurements are noisy too. The three shaded columns are the only codes the factory ever trained on. The third-generation single-pass decoder G3 is already well below its BP teacher everywhere. With search, G3<sup>+</sup> matches or surpasses BP+OSD/LSD and Relay-BP almost everywhere — including GB<sub>900</sub> and both lifted-product codes, none of which were in the training set. Nor is this a single-point effect: sweeping the physical error rate on GB<sub>180</sub> and LP<sub>20</sub><sup>3,5</sup>, each generation sits below the last, and the best of them reaches Relay-BP across the whole curve.
        </p>
        <figure className="figure">
          <img
            src="/fig-factory-benchmark.jpg"
            alt="Logical error rate of GraphMP G3 and G3+ versus BP teacher, BP+OSD/LSD and Relay-BP on twelve quantum LDPC decoding problems"
           width={2000} height={704} loading="lazy" decoding="async" />
          <figcaption>
            <strong>Figure 3.</strong> Twelve decoding problems, three training codes. Logical error rate of GraphMP G3 (single pass) and G3<sup>+</sup> (search) against the BP teacher, BP+OSD/LSD and Relay-BP. Shaded: the training set. Left of the divider: code-capacity noise; right: phenomenological noise. Physical error rate p per code as labelled.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Still Within the Time Budget</h2>
        <p>
          Accuracy bought by search must not be paid for in latency. Figure 4 shows decoding time per shot across the noise range on GB<sub>180</sub> and LP<sub>20</sub><sup>3,5</sup>, with GraphMP on one GPU and the classical decoders on one CPU core. The single-pass decoder is flat — its cost does not depend on how noisy the syndrome is — because the search of every previous generation has been distilled into its weights. The search-enhanced generations track BP+OSD/LSD and stay well below Relay-BP over the whole range. The comparison is a check against the latency budget rather than a like-for-like measure of speed.
        </p>
        <figure className="figure">
          <img
            src="/fig-factory-latency.jpg"
            alt="Decoding time per shot versus physical error rate on GB-180 and LP-20 for GraphMP generations, BP+OSD/LSD and Relay-BP"
           width={2000} height={664} loading="lazy" decoding="async" />
          <figcaption>
            <strong>Figure 4.</strong> Decoding time per shot versus physical error rate on GB<sub>180</sub> and LP<sub>20</sub><sup>3,5</sup> (code capacity). GraphMP runs on one GPU; BP+OSD/LSD and Relay-BP run on one CPU core. Dashed: single-pass G3; solid: search-enhanced G0<sup>+</sup> to G3<sup>+</sup>.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>When the Noise Drifts, the Decoder Adapts</h2>
        <p>
          Real devices drift. Figure 5 runs the factory on BB<sub>144</sub> at p&nbsp;=&nbsp;0.08 under depolarizing noise (X, Y and Z each with probability p/3) for three generations, then changes the physics: from G<sub>3</sub> on, only X and Z errors occur, each with probability p/2. A decoder built around a fixed noise prior is stuck with the model it was given — Relay-BP with the stale prior (solid) sits high in the new regime. GraphMP, which learns from the device's verified answers rather than from a stated noise model, re-adapts over G<sub>4</sub> to G<sub>6</sub> and ends just below Relay-BP even after Relay-BP is handed the updated prior (dashed). Like an immune system meeting a novel pathogen, it evolves new strategies in the fight.
        </p>
        <figure className="figure">
          <img
            src="/fig-factory-drift.jpg"
            alt="Logical error rate across factory generations on BB-144 when the noise model switches from depolarizing to X/Z-only, compared with Relay-BP using stale and updated priors"
           width={2000} height={695} loading="lazy" decoding="async" />
          <figcaption>
            <strong>Figure 5.</strong> Adapting to noise drift on BB<sub>144</sub> at p&nbsp;=&nbsp;0.08. Generations G<sub>0</sub> to G<sub>3</sub> run under depolarizing noise (X, Y, Z each p/3); from G<sub>3</sub> the noise switches to X and Z each p/2, and G<sub>4</sub> to G<sub>6</sub> re-adapt. Relay-BP is shown with the stale prior (solid) and with the updated prior (dashed).
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Toward Intelligent Quantum Matter</h2>
        <p>
          Viewed from a distance, the factory resembles a new phase of matter: qubits that interact locally, classical agents that learn locally, and feedback between the two. The quantum layer runs local quantum dynamics; the classical layer runs local message passing and learning; measurement flows down and feedback flows up. Architecturally, that is a QPU coupled to a <strong>QDPU</strong> — a quantum data processing unit that is not a fixed decoder but a learning system. Recent work on{" "}
          <a href="https://arxiv.org/abs/2510.08056" target="_blank" rel="noopener noreferrer">local active error correction</a>
          {" "}points in the same direction.
        </p>
        <p>
          This is the paradigm EdenCode is building toward: an immune system for quantum computers — local, dynamic, scalable, transferable and adaptive. One local rule on the graph; rounds of revision; the same rule at any size; three codes taught, twelve decoded; learning from its own verified cases.
        </p>
      </section>

      <blockquote>
        <p>“Not one decoder — a factory that keeps making better ones, from its own verified experience.”</p>
        <cite>Yi-Zhuang (Everett) You, co-founder and CTO, EdenCode, at KITP</cite>
      </blockquote>

      <section>
        <h2>Talk and References</h2>
        <ul>
          <li>
            <a href="https://online.kitp.ucsb.edu/online/aiqmatter-c26/you/" target="_blank" rel="noopener noreferrer">Talk recording</a>
            {" "}— KITP Online, September 28, 2026
          </li>
          <li>
            <a href="https://www.kitp.ucsb.edu/activities/aiqmatter-c26" target="_blank" rel="noopener noreferrer">Artificial Intelligence at the Quantum Frontier</a>
            {" "}— KITP conference, September 28 – October 1, 2026
          </li>
          <li>
            <a href="https://www.kitp.ucsb.edu/activities/aiqmatter26" target="_blank" rel="noopener noreferrer">AI for Quantum Matter</a>
            {" "}— KITP program, July 27 – October 8, 2026
          </li>
          <li>
            Baselines and related work: beam-search decoding (<a href="https://arxiv.org/abs/2512.07057" target="_blank" rel="noopener noreferrer">arXiv:2512.07057</a>), Relay-BP (<a href="https://arxiv.org/abs/2506.01779" target="_blank" rel="noopener noreferrer">arXiv:2506.01779</a>), BP+OSD (<a href="https://arxiv.org/abs/2005.07016" target="_blank" rel="noopener noreferrer">arXiv:2005.07016</a>) and LSD (<a href="https://arxiv.org/abs/2406.18655" target="_blank" rel="noopener noreferrer">arXiv:2406.18655</a>), detector error models (<a href="https://arxiv.org/abs/2103.02202" target="_blank" rel="noopener noreferrer">arXiv:2103.02202</a>)
          </li>
          <li>
            Earlier from EdenCode: <a href="/blog-graph-transformer">One Decoder for Every Quantum Code</a> and <a href="/blog-nvidia-ising">Scaling AI-Powered QEC with NVIDIA Ising</a>
          </li>
        </ul>
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
