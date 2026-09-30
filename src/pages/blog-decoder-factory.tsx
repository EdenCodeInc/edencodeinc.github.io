import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";

export default function BlogDecoderFactory() {
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
                    <span className="px-2 py-1 bg-[var(--terminal-secondary)] text-black font-bold border border-[var(--terminal-secondary)] shadow-[0_0_8px_var(--terminal-secondary)]">[KITP_TALK]</span>
                  </div>

                  <h1 className="text-3xl md:text-4xl text-[var(--terminal-primary)] font-bold font-mono drop-shadow-[0_0_12px_var(--terminal-secondary)]">
                    {'>'} An Immune System for Quantum Computers: Building an AI Decoder Factory for Quantum LDPC Codes
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--terminal-secondary)] font-mono">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span>Yi-Zhuang (Everett) You · EdenCode & UC San Diego</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>KITP, September 28, 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>10min</span>
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
                    This week the Kavli Institute for Theoretical Physics (KITP) at UC Santa Barbara is hosting{" "}
                    <a href="https://www.kitp.ucsb.edu/activities/aiqmatter-c26" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">Artificial Intelligence at the Quantum Frontier</a>
                    {" "}(September 28 – October 1, 2026), the conference of its ten-week program{" "}
                    <a href="https://www.kitp.ucsb.edu/activities/aiqmatter26" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">AI for Quantum Matter</a>
                    {" "}(July 27 – October 8). EdenCode co-founder and CTO <strong>Yi-Zhuang (Everett) You</strong>, professor of physics at UC San Diego, co-coordinates the program (with Eliska Greplova, Hsin-Yuan (Robert) Huang, Di Luo, and Xiao-Liang Qi) and the conference (with Greplova, Huang, and Luo). On the opening day he presented EdenCode's latest work,{" "}
                    <a href="https://online.kitp.ucsb.edu/online/aiqmatter-c26/you/" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline"><em>Building AI Decoder Factory for Quantum LDPC Codes</em></a>
                    . This post is the written version of that talk.
                  </p>
                  <p className="mb-4">
                    The premise is simple. Without an immune system, a human lives for days; the first infection ends the story. With one, decades — every infection survived, and time enough for great work. Fault-tolerant quantum computing likewise needs a <strong>quantum immune system</strong>, better known as quantum error correction (QEC). The question is what kind of immune system to build.
                  </p>
                  <p>
                    The answer presented at KITP: <strong>not one decoder, but a factory</strong> that keeps making better decoders from its own verified experience. We introduced <strong>GraphMP</strong>, a graph neural network that decodes any quantum LDPC code by passing messages on its Tanner graph; placed it inside a beam search so that it can deliberate on difficult syndromes; and then closed the loop, collecting the logically correct search trajectories and training the next generation on them. Taught on three codes and tested on twelve, the third-generation decoder matches or surpasses the strongest classical decoders almost everywhere, at constant single-pass latency, and re-adapts when the noise drifts.
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
                      <span><strong className="text-[var(--terminal-secondary)]">Three codes taught, twelve decoded:</strong> GraphMP is trained only on BB<sub>144</sub>, Mitten<sub>150</sub> and GB<sub>180</sub>, then evaluated on twelve decoding problems across bivariate-bicycle, generalized-bicycle, Mitten and lifted-product codes — up to [[2610, 744, ≤16]] — under code-capacity and phenomenological noise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Ahead of the decoders that trained it:</strong> after three generations of self-improvement, GraphMP G3<sup>+</sup> matches or surpasses BP+OSD/LSD and Relay-BP almost everywhere, including on codes it never saw in training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Search folded into the weights:</strong> each generation's single-pass decoder inherits the accuracy that the previous generation bought with search. Single-pass G3 runs in constant time per shot on one GPU regardless of noise strength; the search-enhanced G3<sup>+</sup> stays at or below BP+OSD/LSD and well below Relay-BP across the whole noise range</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Adaptive:</strong> when the noise model was switched mid-run (depolarizing to X/Z-only), the factory re-adapted within three generations and finished below Relay-BP — even after Relay-BP was handed the updated noise prior</span>
                    </li>
                  </ul>
                </div>

                {/* Immune paradigm */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Five Things the Immune System Gets Right
                  </h2>
                  <p className="mb-4">
                    The biological immune system is a remarkably good design brief for a decoder. It acts locally, without central coordination; it clears an infection over successive rounds; the same machinery serves organisms of every size; it meets pathogens it has never encountered; and it learns. A QEC decoder should have the same five properties:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Local</strong> — local syndromes in, local corrections out; no global decision making</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Progressive</strong> — multi-round decoding clears residual syndromes step by step</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Scalable</strong> — the same decoding rule applies everywhere and grows with the system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Transferable</strong> — one universal decoding algorithm solves different decoding problems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span><strong className="text-[var(--terminal-secondary)]">Adaptive</strong> — a machine-learning decoder learns the live noise and keeps up with its drift</span>
                    </li>
                  </ul>
                  <p>
                    Our earlier post on the{" "}
                    <a href="/blog-graph-transformer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">Graph Transformer Decoder</a>
                    {" "}approached locality and scalability on the surface code. The decoder factory is about the last two properties: transferability across the fast-growing family of quantum LDPC codes, and adaptivity through learning.
                  </p>
                </div>

                {/* qLDPC codes and the DEM */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    A Fast-Growing Family of Quantum LDPC Codes
                  </h2>
                  <p className="mb-4">
                    Quantum LDPC codes promise far lower qubit overhead than the surface code, and new families appear every few months. The talk considered four: <strong>bivariate bicycle</strong> (BB) codes BB<sub>144</sub> [[144, 12, 12]] and BB<sub>288</sub> [[288, 12, 18]]; <strong>generalized bicycle</strong> (GB) codes GB<sub>180</sub> [[180, 10, ≤18]] and GB<sub>900</sub> [[900, 50, 15]]; the <strong>Mitten</strong> codes Mitten<sub>150</sub> [[150, 30, 10]], Mitten<sub>200</sub> [[200, 40, 12]] and Mitten<sub>300</sub> [[300, 60, 14]]; and <strong>lifted-product</strong> (LP) codes LP<sub>20</sub><sup>3,5</sup> [[1122, 148, ≤20]] and LP<sub>16</sub><sup>3,7</sup> [[2610, 744, ≤16]]. In the [[n, k, d]] notation, n is the number of physical qubits, k the number of logical qubits and d the code distance; n : k is the overhead.
                  </p>
                  <p>
                    Each of these codes needs a decoder, and hand-tuning one per code does not scale. Within the stabilizer formalism, however, a code and its noise model compile to a <strong>detector error model</strong> (DEM): a detector matrix H, an observable matrix L, and a prior π(e) over faults. The syndrome is s = He, the logical effect is ℓ = Le, and the decoder's job is to model p(e|s) and propose a correction ê. Its quality is measured by the residual e ⊕ ê: the correction is consistent when the residual is invisible to the checks, H(e ⊕ ê) = 0, and correct when it is harmless to the logical qubits, L(e ⊕ ê) = 0. The <strong>logical error rate</strong> p<sub>L</sub> = Pr[L(e ⊕ ê) ≠ 0] is how often the logical word comes out wrong. Different codes, same decoding framework — which is what makes a universal decoder possible.
                  </p>
                </div>

                {/* GraphMP */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    GraphMP: Embed, Pass Messages, Read Out
                  </h2>
                  <p className="mb-4">
                    <strong>GraphMP</strong> is a graph neural network living on the Tanner graph of the DEM. <strong>Embed:</strong> the syndrome goes in, embedded as a feature vector on each check node. <strong>Message passing:</strong> feature vectors flow along the edges of the Tanner graph, between syndrome and fault nodes, for multiple rounds. <strong>Read out:</strong> each fault node emits a logit — how likely it carries an error. Because the network is defined by the graph rather than by any particular code, the same weights run on any DEM.
                  </p>
                  <p>
                    To bootstrap the first generation, we train GraphMP by imitation from a <strong>belief propagation</strong> (BP) teacher — a natural choice, since BP is itself a message-passing decoder on the same graph. The single-pass student roughly tracks its teacher on the training codes and on codes of similar size, but falls behind on the larger codes it has never seen — and all of them remain far behind BP+OSD/LSD and Relay-BP, the strongest classical decoders for quantum LDPC codes. A good medical student is not yet a good doctor: a student can propose a cure for every syndrome, but a good doctor can think several steps ahead to plan a treatment.
                  </p>
                </div>

                {/* Search */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Thinking Buys Accuracy
                  </h2>
                  <p className="mb-4">
                    The remedy is to let the decoder think. Building on{" "}
                    <a href="https://arxiv.org/abs/2512.07057" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">beam-search decoding for quantum LDPC codes</a>
                    {" "}(Ye, Wecker and Delfosse), we wrap GraphMP in a search: take the least certain fault in the current proposal, pin it to 0 in one branch and to 1 in another, decode each branch again, and keep the W best candidates alive over R rounds of search depth. Branch, predict, prune.
                  </p>
                  <p>
                    Search works: wider beams and deeper search keep lowering the logical error rate. It also has a price: decoding time grows with W × R, by orders of magnitude at the widest and deepest settings. This trade-off raises the question that leads to the factory. Can the accuracy bought by search be folded back into the single-pass decoder, so that the next generation inherits it at no cost?
                  </p>
                </div>

                {/* The factory */}
                <div className="border-2 border-[var(--terminal-secondary)]/40 p-6">
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-6 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    The Decoder Factory: Recursive Self-Improvement
                  </h2>
                  <p className="mb-4">
                    The loop runs as follows. The quantum device — or its simulator — poses the problem by emitting a syndrome s. The AI decoder, GraphMP running inside a beam search, answers with a correction ê. The device checks logical correctness: keep when L(e ⊕ ê) = 0, discard otherwise. Every logically correct <strong>search trajectory</strong> — the sequence of intermediate proposals that led from the observed syndrome to a correct answer — goes into a database. That database is the next textbook.
                  </p>
                  <p className="mb-6">
                    Generation x's single-pass decoder G<sub>x</sub> is trained by supervised learning on the cumulative data D<sub>1</sub> ∪ ⋯ ∪ D<sub>x</sub>. Beam search turns it into G<sub>x</sub><sup>+</sup>, which collects a new set of verified trajectories D<sub>x+1</sub>, which is appended to the training data for G<sub>x+1</sub>. <strong>Better data trains a better model, and a better model collects better data.</strong> No hand-labelled data and no external oracle: the device's own verdict on logical correctness is the only supervision the factory needs.
                  </p>

                  {/* Figure 1 */}
                  <div className="my-8 border-2 border-[var(--terminal-secondary)]/30 p-4">
                    <img
                      src="/fig-factory-loop.jpg"
                      alt="The decoder factory loop: cumulative training data trains a single-pass decoder; beam search turns it into a search decoder; verified trajectories are collected and appended for the next round"
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed italic">
                      <strong className="text-[var(--terminal-secondary)]">Figure 1.</strong> The decoder factory. The single-pass decoder GraphMP G<sub>x</sub> is trained by supervised learning on the cumulative data D<sub>1</sub> ∪ ⋯ ∪ D<sub>x</sub>; beam search turns it into G<sub>x</sub><sup>+</sup>, whose logically correct search trajectories are collected as D<sub>x+1</sub> and appended to the training data for the next generation.
                    </p>
                  </div>
                </div>

                {/* Results: generations */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Each Generation Is Better Than the Last
                  </h2>
                  <p className="mb-4">
                    Figure 2 tracks the logical error rate across factory generations G<sub>0</sub> to G<sub>3</sub>. On Mitten<sub>150</sub>, a code in the training set, both the single-pass decoder (dashed) and its search-enhanced version (solid) improve every generation; the search decoder crosses below BP+OSD/LSD by G<sub>1</sub> and below Relay-BP by G<sub>2</sub>. The right panel is the transfer test: LP<sub>20</sub><sup>3,5</sup>, more than a thousand qubits and never in the training set. It shows the same climb — the single-pass decoder improves generation by generation, and its search version reaches Relay-BP by G<sub>2</sub> and passes below it at G<sub>3</sub>.
                  </p>

                  {/* Figure 2 */}
                  <div className="my-8 border-2 border-[var(--terminal-secondary)]/30 p-4">
                    <img
                      src="/fig-factory-generations.jpg"
                      alt="Logical error rate versus factory generation on Mitten-150 (in training set) and LP-20 (not in training set), compared with BP, BP+OSD/LSD and Relay-BP"
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed italic">
                      <strong className="text-[var(--terminal-secondary)]">Figure 2.</strong> Each generation is better than the last — and the improvement transfers. Logical error rate p<sub>L</sub> versus factory generation for the single-pass decoder (dashed) and the search-enhanced decoder (solid), against BP, BP+OSD/LSD and Relay-BP (horizontal lines). Left: Mitten<sub>150</sub> at p = 0.05, a code in the training set. Right: LP<sub>20</sub><sup>3,5</sup> at p = 0.09, a code outside the training set.
                    </p>
                  </div>
                </div>

                {/* Results: benchmark */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Now Ahead of the Decoders That Trained It
                  </h2>
                  <p className="mb-4">
                    Figure 3 is the full benchmark: twelve decoding problems, nine under code-capacity noise and three under phenomenological noise, where the syndrome measurements are noisy too. The three shaded columns are the only codes the factory ever trained on. The third-generation single-pass decoder G3 is already well below its BP teacher everywhere. With search, G3<sup>+</sup> matches or surpasses BP+OSD/LSD and Relay-BP almost everywhere — including GB<sub>900</sub> and both lifted-product codes, none of which were in the training set. Nor is this a single-point effect: sweeping the physical error rate on GB<sub>180</sub> and LP<sub>20</sub><sup>3,5</sup>, each generation sits below the last, and the best of them reaches Relay-BP across the whole curve.
                  </p>

                  {/* Figure 3 */}
                  <div className="my-8 border-2 border-[var(--terminal-secondary)]/30 p-4">
                    <img
                      src="/fig-factory-benchmark.jpg"
                      alt="Logical error rate of GraphMP G3 and G3+ versus BP teacher, BP+OSD/LSD and Relay-BP on twelve quantum LDPC decoding problems"
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed italic">
                      <strong className="text-[var(--terminal-secondary)]">Figure 3.</strong> Twelve decoding problems, three training codes. Logical error rate of GraphMP G3 (single pass) and G3<sup>+</sup> (search) against the BP teacher, BP+OSD/LSD and Relay-BP. Shaded: the training set. Left of the divider: code-capacity noise; right: phenomenological noise. Physical error rate p per code as labelled.
                    </p>
                  </div>
                </div>

                {/* Results: latency */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Still Within the Time Budget
                  </h2>
                  <p className="mb-4">
                    Accuracy bought by search must not be paid for in latency. Figure 4 shows decoding time per shot across the noise range on GB<sub>180</sub> and LP<sub>20</sub><sup>3,5</sup>, with GraphMP on one GPU and the classical decoders on one CPU core. The single-pass decoder is flat — its cost does not depend on how noisy the syndrome is — because the search of every previous generation has been distilled into its weights. The search-enhanced generations track BP+OSD/LSD and stay well below Relay-BP over the whole range. The comparison is a check against the latency budget rather than a like-for-like measure of speed.
                  </p>

                  {/* Figure 4 */}
                  <div className="my-8 border-2 border-[var(--terminal-secondary)]/30 p-4">
                    <img
                      src="/fig-factory-latency.jpg"
                      alt="Decoding time per shot versus physical error rate on GB-180 and LP-20 for GraphMP generations, BP+OSD/LSD and Relay-BP"
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed italic">
                      <strong className="text-[var(--terminal-secondary)]">Figure 4.</strong> Decoding time per shot versus physical error rate on GB<sub>180</sub> and LP<sub>20</sub><sup>3,5</sup> (code capacity). GraphMP runs on one GPU; BP+OSD/LSD and Relay-BP run on one CPU core. Dashed: single-pass G3; solid: search-enhanced G0<sup>+</sup> to G3<sup>+</sup>.
                    </p>
                  </div>
                </div>

                {/* Results: drift */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    When the Noise Drifts, the Decoder Adapts
                  </h2>
                  <p className="mb-4">
                    Real devices drift. Figure 5 runs the factory on BB<sub>144</sub> at p = 0.08 under depolarizing noise (X, Y and Z each with probability p/3) for three generations, then changes the physics: from G<sub>3</sub> on, only X and Z errors occur, each with probability p/2. A decoder built around a fixed noise prior is stuck with the model it was given — Relay-BP with the stale prior (solid) sits high in the new regime. GraphMP, which learns from the device's verified answers rather than from a stated noise model, re-adapts over G<sub>4</sub> to G<sub>6</sub> and ends just below Relay-BP even after Relay-BP is handed the updated prior (dashed). Like an immune system meeting a novel pathogen, it evolves new strategies in the fight.
                  </p>

                  {/* Figure 5 */}
                  <div className="my-8 border-2 border-[var(--terminal-secondary)]/30 p-4">
                    <img
                      src="/fig-factory-drift.jpg"
                      alt="Logical error rate across factory generations on BB-144 when the noise model switches from depolarizing to X/Z-only, compared with Relay-BP using stale and updated priors"
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed italic">
                      <strong className="text-[var(--terminal-secondary)]">Figure 5.</strong> Adapting to noise drift on BB<sub>144</sub> at p = 0.08. Generations G<sub>0</sub> to G<sub>3</sub> run under depolarizing noise (X, Y, Z each p/3); from G<sub>3</sub> the noise switches to X and Z each p/2, and G<sub>4</sub> to G<sub>6</sub> re-adapt. Relay-BP is shown with the stale prior (solid) and with the updated prior (dashed).
                    </p>
                  </div>
                </div>

                {/* Intelligent quantum matter */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Toward Intelligent Quantum Matter
                  </h2>
                  <p className="mb-4">
                    Viewed from a distance, the factory resembles a new phase of matter: qubits that interact locally, classical agents that learn locally, and feedback between the two. The quantum layer runs local quantum dynamics; the classical layer runs local message passing and learning; measurement flows down and feedback flows up. Architecturally, that is a QPU coupled to a <strong>QDPU</strong> — a quantum data processing unit that is not a fixed decoder but a learning system. Recent work on{" "}
                    <a href="https://arxiv.org/abs/2510.08056" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">local active error correction</a>
                    {" "}points in the same direction.
                  </p>
                  <p>
                    This is the paradigm EdenCode is building toward: an immune system for quantum computers — local, dynamic, scalable, transferable and adaptive. One local rule on the graph; rounds of revision; the same rule at any size; three codes taught, twelve decoded; learning from its own verified cases.
                  </p>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-[var(--terminal-secondary)] pl-6 py-4 bg-[var(--terminal-secondary)]/5">
                  <p className="italic mb-3">
                    "Not one decoder — a factory that keeps making better ones, from its own verified experience."
                  </p>
                  <p className="text-xs text-[var(--terminal-secondary)]">
                    — Yi-Zhuang (Everett) You, co-founder and CTO, EdenCode, at KITP
                  </p>
                </div>

                {/* Watch & references */}
                <div>
                  <h2 className="text-2xl text-[var(--terminal-primary)] mb-4 font-bold drop-shadow-[0_0_8px_var(--terminal-secondary)]">
                    Talk and References
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span>
                        <a href="https://online.kitp.ucsb.edu/online/aiqmatter-c26/you/" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">Talk recording</a>
                        {" "}— KITP Online, September 28, 2026
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span>
                        <a href="https://www.kitp.ucsb.edu/activities/aiqmatter-c26" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">Artificial Intelligence at the Quantum Frontier</a>
                        {" "}— KITP conference, September 28 – October 1, 2026
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span>
                        <a href="https://www.kitp.ucsb.edu/activities/aiqmatter26" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">AI for Quantum Matter</a>
                        {" "}— KITP program, July 27 – October 8, 2026
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span>
                        Baselines and related work: beam-search decoding (<a href="https://arxiv.org/abs/2512.07057" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">arXiv:2512.07057</a>), Relay-BP (<a href="https://arxiv.org/abs/2506.01779" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">arXiv:2506.01779</a>), BP+OSD (<a href="https://arxiv.org/abs/2005.07016" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">arXiv:2005.07016</a>) and LSD (<a href="https://arxiv.org/abs/2406.18655" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">arXiv:2406.18655</a>), detector error models (<a href="https://arxiv.org/abs/2103.02202" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">arXiv:2103.02202</a>)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--terminal-secondary)] mt-1">▶</span>
                      <span>
                        Earlier from EdenCode:{" "}
                        <a href="/blog-graph-transformer" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">One Decoder for Every Quantum Code</a>
                        {" "}and{" "}
                        <a href="/blog-nvidia-ising" className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-primary)] underline">Scaling AI-Powered QEC with NVIDIA Ising</a>
                      </span>
                    </li>
                  </ul>
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
