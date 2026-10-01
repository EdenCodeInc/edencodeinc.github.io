import { BlogLayout } from "../components/BlogLayout";

export default function BlogNvidiaIsing() {
  return (
    <BlogLayout
      tag="NVIDIA collaboration"
      tone="nvidia"
      title="Scaling AI-Powered Quantum Error Correction with NVIDIA Ising and GPU Compute"
      author="EdenCode Research"
      date="World Quantum Day, April 14, 2026"
      readTime="10"
    >
      <section>
        <p>
          <a href="https://nvidianews.nvidia.com/news/nvidia-launches-ising-the-worlds-first-open-ai-models-to-accelerate-the-path-to-useful-quantum-computers" target="_blank" rel="noopener noreferrer">NVIDIA Ising</a>, an open-source family of AI models, training frameworks, and tools purpose-built for quantum computing workloads, is released today. Among them, <strong>NVIDIA Ising Decoding</strong> provides the first open, state-of-the-art 3D CNN pre-decoders for quantum error correction on surface codes, outperforming PyMatching with up to 4× improvement in speed or accuracy.
        </p>
        <p>
          At EdenCode, we obtained early access to the Ising Decoding model and training framework. As a startup focused on AI-powered quantum error correction, we were drawn to a specific question: <strong>can the Ising decoder take the general Tanner graph of any quantum error correction code as input, stepping forward from the surface code it was originally designed for?</strong>
        </p>
        <p>
          The Tanner graph is the mathematically complete representation of any stabilizer code. If the Ising CNN model can operate on general Tanner graphs, it would mean a single decoder framework could serve the entire landscape of quantum error correction codes, spanning repetition codes, surface codes, color codes, and beyond. This is the possibility we set out to explore.
        </p>
        <figure className="figure">
          <img
            src="/fig-nvidia-ising-ecosystem.jpg"
            alt="NVIDIA Ising ecosystem partners including EdenCode, featured in NVIDIA Quantum Special Address"
           width={2685} height={1532} loading="lazy" decoding="async" />
          <figcaption>
            NVIDIA Ising ecosystem: Announcing the world's first open AI models to accelerate the path to useful quantum computers. EdenCode featured under Ising Decoding.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>What NVIDIA Ising Decoding Provides</h2>
        <p>
          NVIDIA Ising Decoding introduces two open 3D CNN models for pre-decoding surface codes:
        </p>
        <ul>
          <li><strong>Ising-decoder-surfacecode-1-fast</strong>: A compact 912K-parameter model (9×9×9 receptive field), delivering 4× speedup over PyMatching with 2× LER improvement.</li>
          <li><strong>Ising-decoder-surfacecode-1-accurate</strong>: A larger 7.13M-parameter model (13×13×13 receptive field), delivering 2× speedup with 4× LER improvement.</li>
        </ul>
        <p>
          The models operate as pre-decoders: the CNN takes raw syndrome measurements, predicts likely error corrections, and outputs a cleaned (sparser) syndrome that is then passed to a conventional decoder like PyMatching. This hybrid approach is faster and more accurate than either component alone.
        </p>
        <p>
          A key design choice in the Ising architecture is the use of <strong>translation-invariant 3D convolutional kernels</strong>. The same local filters are applied at every position in the spatiotemporal syndrome grid, so the model does not hard-code any assumption about global code size. This means an Ising-style decoder trained at one code distance can apply the same learned corrections at a larger distance, since the local structure is identical everywhere in the bulk.
        </p>
        <p>
          Critically, NVIDIA has released the complete training framework under Apache 2.0, including the full training pipeline with Lion optimizer, learning rate scheduling, exponential moving average, and on-the-fly synthetic data generation. This openness is what made our exploration possible: we could load the Ising pipeline and connect it to our own Tanner-graph-based QEC simulator for a different code family, using the same proven training methodology.
        </p>
      </section>

      <section>
        <h2>Our Exploration: Repetition Codes with Measurement Error</h2>
        <p>
          We connected the NVIDIA Ising Decoding pipeline to our Tanner-graph-based QEC simulator and applied it to <strong>repetition codes</strong>, the simplest family of quantum error correction codes. We chose repetition codes as a deliberate starting point. With faulty measurements across multiple rounds, their Tanner graph extends into a two-dimensional spatiotemporal structure, sharing the same grid-like topology that the Ising CNN expects. If the decoder works here, it is because the Tanner graph representation itself carries the information the CNN needs, regardless of which code produced it.
        </p>
        <p>
          We connected the Ising pipeline to our simulator end-to-end: our simulator constructs the Tanner graph, generates time-extended detector error models with measurement noise, produces syndrome data on the fly, and feeds it directly into the CNN pre-decoder for the two-stage CNN + PyMatching evaluation. We also introduced <strong>correlated noise</strong>, specifically CNOT hook errors that create correlations between data and measurement errors, to test whether the Tanner graph representation captures realistic noise structure that the CNN can learn from.
        </p>
        <p>
          Using the NVIDIA training recipe on an{" "}
          <a href="https://www.nvidia.com/en-us/data-center/h200/" target="_blank" rel="noopener noreferrer">NVIDIA H200 GPU</a>
          , we trained six CNN architectures spanning a range from 50K to 7.1M parameters, each evaluated across code distances d&nbsp;=&nbsp;3, 5, 7, and 9 with 262,144 shots per data point.
        </p>
      </section>

      <section>
        <h2>What We Found</h2>
        <h3>The Ising CNN works on repetition code Tanner graphs</h3>
        <p>
          Across all six architectures, the CNN pre-decoder consistently reduced logical error rates on repetition codes, a code family the Ising architecture was never originally trained on. At physical error rates of p&nbsp;=&nbsp;0.01–0.05, the best models achieved <strong>1.7–2.0× LER reduction</strong> compared to PyMatching alone, with <strong>up to 7× PyMatching speedup</strong> from the sparser residual syndromes.
        </p>
        <p>
          Under correlated noise (CNOT hook errors with correlation strength 0.3–0.5), the CNN continued to provide LER improvement at small to moderate code distances without any architectural modification. The Tanner graph representation captured the noise correlations, and the CNN learned to exploit them. At larger distances, the correlated noise experiments showed diminishing returns, suggesting that correlated noise demands either larger models or longer training to handle effectively. This is an active area of investigation, and notably, correlated noise is precisely where conventional minimum-weight matching decoders also struggle most, making it a high-value target for AI-assisted decoding.
        </p>
        <p>
          These results confirm that the Ising decoder architecture is not tied to any specific code. The Tanner graph carries sufficient information for the CNN to learn effective corrections on a structurally different code family, under both simple and realistic noise models.
        </p>

        <h3>Larger codes require larger decoders</h3>
        <p>
          Every model we tested provided strong improvement at small distances (d&nbsp;=&nbsp;3, d&nbsp;=&nbsp;5). But as code distance grew, smaller models degraded faster while larger models maintained their advantage for longer. This reveals a <strong>co-scaling requirement</strong>: the AI decoder must grow alongside the code distance to sustain its error correction benefit.
        </p>
        <p>
          We tested six model sizes and found a clear pattern: <strong>small models fail quickly as code distance grows, while larger models continue to help.</strong>
        </p>
        <figure className="figure">
          <img
            src="/fig-nvidia-cnn-scaling.png"
            alt="Error threshold plots showing CNN model scaling across code distances"
           width={2500} height={991} loading="lazy" decoding="async" />
          <figcaption>
            <strong>Figure 1.</strong> Error threshold plots for three CNN model sizes (Small: 50K params; Medium: 4.2M params; Large: 7.1M params). Each panel shows Logical Error Rate vs. Physical Error Rate for code distances d&nbsp;=&nbsp;3, 5, 7, 9. Dashed lines = MWPM baseline; solid lines = CNN + MWPM (Ising-style AI decoder); shaded regions = AI improvement. In the Small panel, the d&nbsp;=&nbsp;9 solid line crosses above the dashed — the small model fails at large distance. In the Large panel, solid lines remain well below dashed even at d&nbsp;=&nbsp;9 — larger models scale further. All models trained with 20K steps on NVIDIA H200 GPU, evaluated with 262,144 shots per data point.
          </figcaption>
        </figure>
        <p>
          The smallest model (50K parameters) delivered strong improvement at d&nbsp;=&nbsp;3 (1.8× LER reduction) but actively degraded performance at d&nbsp;=&nbsp;9 (ratio below 1.0). The largest models (4.2M–7.1M parameters) maintained positive improvement across all distances tested, achieving up to 2.0× LER reduction even at d&nbsp;=&nbsp;9. The implication is that as quantum hardware scales to larger code distances, the decoding challenge can be met by scaling up the AI decoder, given sufficient GPU compute for training and inference.
        </p>
      </section>

      <section>
        <h2>Looking Ahead</h2>
        <p>
          Our exploration started with a focused question: does the Ising CNN work on general Tanner graphs? The answer is yes, and the results point toward something larger.
        </p>
        <p>
          The fact that the architecture generalizes across code families means it can serve as a <strong>universal AI decoder framework</strong>, applicable wherever a Tanner graph can be constructed. The fact that decoder performance scales with model size means there is no fixed ceiling on how much the AI decoder can help. Larger models, trained with more data and more compute, deliver stronger error correction at larger code distances.
        </p>
        <p>
          At EdenCode, we believe this points to a defining principle for the future of quantum computing: <strong>the performance of a fault-tolerant quantum computer will be determined not by its qubits alone, but by the joint scaling of quantum hardware and classical AI infrastructure.</strong>
        </p>
        <p>
          As code distances grow from today's 3–7 toward 15, 21, and beyond, the AI decoder must grow with them. This requires larger models, more training data, and more powerful GPUs connected to quantum processors through low-latency links for real-time, closed-loop correction. NVIDIA Ising is part of a full platform that is uniquely positioned to enable this: Ising Decoding provides the AI decoder layer, NVIDIA accelerated computing provides the compute, and platforms like{" "}
          <a href="https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/" target="_blank" rel="noopener noreferrer">NVIDIA NVQLink</a>
          {" "}provide the low-latency interconnect.
        </p>
        <p>
          The open release of NVIDIA Ising Decoding on World Quantum Day is a milestone. For the first time, the quantum computing community has access to a state-of-the-art AI decoder framework that is open, GPU-accelerated, and, as we have now shown, capable of operating on general Tanner graphs beyond its original design. We believe this is the beginning of a new era in quantum error correction, where AI and quantum hardware scale together toward fault tolerance.
        </p>
      </section>

      <div className="about">
        <p className="about-title">About</p>
        <p>
          EdenCode is a quantum computing startup exploring AI-powered approaches to quantum error correction, with a focus on generalizing decoder architectures across code families via the Tanner graph formalism. Our research is conducted on NVIDIA H200 GPUs with NVLink. For more information, visit edencode.ai.
        </p>
        <p>
          NVIDIA Ising is an open-source family of AI models for quantum computing, launched on World Quantum Day 2026. The models, training framework, and cookbook are available at build.nvidia.com, Hugging Face, and the NVIDIA Ising GitHub repository.
        </p>
      </div>
    </BlogLayout>
  );
}
