import type { ReactNode } from "react";
import { BlogLayout } from "../components/BlogLayout";

function PaperFigure({ src, alt, width, height, children }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  children: ReactNode;
}) {
  return (
    <figure className="figure">
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-resolution figure: ${alt}`}>
        <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" style={{ background: "#fff" }} />
      </a>
      <figcaption>
        {children}{" "}
        <a href={src} target="_blank" rel="noopener noreferrer">Open full-size figure</a>.
      </figcaption>
    </figure>
  );
}

export default function BlogQuantumDataProcessingUnit() {
  return (
    <BlogLayout
      tag="Research · arXiv preprint"
      title="From Quantum Measurements to Control Decisions"
      author="EdenCode Research"
      date="2026-11-15"
      readTime="5"
    >
      <section>
        <p>
          A quantum computer needs to act on what it measures. An image of an atom
          array must become a decision about which atoms to move. An error signal
          must become information that helps protect a computation. Those decisions
          have to arrive while they can still make a difference.
        </p>
        <p>
          EdenCode’s <strong>quantum data processing unit (QDPU)</strong> is designed
          for this measurement-to-control layer. Our new paper develops the
          architecture for neutral-atom quantum computers and reports hardware
          tests connecting <a href="https://www.nvidia.com/en-us/products/workstations/dgx-spark/" target="_blank" rel="noopener noreferrer"><strong>NVIDIA DGX Spark</strong></a> with an
          {" "}<a href="https://www.amd.com/en/products/adaptive-socs-and-fpgas/soc/zynq-ultrascale-plus-rfsoc.html" target="_blank" rel="noopener noreferrer"><strong>AMD Zynq UltraScale+ RFSoC FPGA</strong></a>.
        </p>
      </section>

      <section>
        <h2>Built and measured on NVIDIA DGX Spark and AMD hardware</h2>
        <p>
          The test platform pairs an <strong>NVIDIA DGX Spark</strong> with an
          <strong> <a href="https://www.amd.com/en/products/adaptive-socs-and-fpgas/evaluation-boards/zcu216.html" target="_blank" rel="noopener noreferrer">AMD ZCU216 development board</a>, built around the Zynq UltraScale+
          RFSoC xczu49dr</strong>. We connected the systems, measured communication
          round trips, and ran a GraphMP ranking kernel on the FPGA to produce
          scores used in decoding. Its outputs were checked against a software
          reference.
        </p>
        <p>
          <a href="https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/" target="_blank" rel="noopener noreferrer">NVIDIA NVQLink</a>
          {" "}provides an open architecture for coupling accelerated computing to
          quantum controllers. Our transport implementation uses NVIDIA Holoscan
          Sensor Bridge FPGA IP and ConnectX-7 networking to connect the FPGA
          board and DGX Spark over 10 GbE.
        </p>
        <aside className="callout">
          <p className="callout-title">Measured on the hardware platform</p>
          <p>
            <strong>2.74 μs median communication round trip</strong>
            <br />
            FPGA → DGX Spark host → FPGA, with CPU forwarding of 128-byte messages.
          </p>
          <p>
            <strong>50.5 μs median GraphMP ranking-kernel round trip</strong>
            <br />
            Host → FPGA computation → host, with one shot in flight; excludes
            host-side BP+OSD post-processing.
          </p>
        </aside>
        <p>
          These measurements establish working communication and model execution
          on a concrete hardware platform. They are component-level results;
          joining them to camera acquisition and quantum-controller feedback is
          the next integration step.
        </p>
      </section>

      <section>
        <h2>A shared processing layer for quantum experiments</h2>
        <p>
          The QDPU interprets measurements and supplies decisions to the controller,
          which generates the waveforms that operate the device. For an atom
          array, that means identifying occupied traps and planning how to assemble
          the desired pattern. For error correction, it means interpreting
          measurement records and providing correction information.
        </p>
        <p>
          This gives different tasks a common place in the system. The models can
          be adapted to each device, while the processing hardware is chosen for
          the time available to make a decision. The paper develops FPGA
          implementations for array preparation and learned qLDPC decoding as
          two examples of this approach.
        </p>
        <PaperFigure
          src="/fig-qdpu-architecture.png"
          alt="QDPU architecture connecting atom detection, rearrangement and GraphMP decoding with quantum control"
          width={1892} height={808}
        >
          <strong>Figure 3 from the paper.</strong> A common architecture for
          turning quantum measurements into control decisions. The complete
          feedback connections shown are the proposed system design.
        </PaperFigure>
      </section>

      <section>
        <h2>Faster decisions can help preserve the atoms</h2>
        <p>
          Atoms load into traps at random, so preparing a usable array requires
          imaging them and moving them into position. Atoms can also be lost while
          the system waits. A slower decision can leave new gaps that require
          another round of preparation.
        </p>
        <p>
          The paper’s atom-loss model illustrates why this matters. For a
          35 × 35 target within a 50 × 50 array, a 60-second trap lifetime and
          0.1% loss per moved atom, removing an <strong>assumed 150 ms host
          delay</strong> raises predicted assembly success from about
          <strong> 8% to 85%</strong>. This is a conditional model prediction;
          the benefit depends on the actual delay and experimental conditions.
        </p>
        <p>
          Choosing the right inference method is part of the same design problem.
          At the evaluated operating point, a calibrated matched filter gives a
          better overall assembly outcome than the tested CNN implementation
          because it needs much less computation. The useful result is an accurate
          decision delivered in time for the experiment.
        </p>
      </section>

      <section>
        <h2>Fast responses, with models that can keep learning</h2>
        <p>
          Optical alignment, background light and device noise change over time.
          The QDPU architecture separates the fast response to each measurement
          from a slower GPU learning loop that collects data and updates models.
          The goal is to keep feedback responsive while allowing the processing
          to adapt to the device it serves.
        </p>
        <PaperFigure
          src="/fig-qdpu-learning-loops.png"
          alt="Proposed fast QDPU inference loop supported by a slower GPU training loop"
          width={1044} height={660}
        >
          <strong>Figure 2 from the paper.</strong> Proposed inference and learning
          loops. The time ranges describe architectural workloads, rather than
          measured timings for a complete feedback system.
        </PaperFigure>
        <p>
          EdenCode’s proposed integration would connect measurement data and model
          updates across this boundary, with GPU inference available for workloads
          beyond the resident FPGA model. The DGX Spark and FPGA tests establish
          transport and kernel execution; the learning-data and model-update
          paths remain to be integrated.
        </p>
        <p>
          This complements our <a href="/blog-decoder-factory">decoder model
          factory</a>, where models learn from verified decoding experience.
          The QDPU work explores the hardware and interfaces that could bring
          such models closer to quantum experiments. Our
          {" "}<a href="/blog-sc26-quantum-ai-infrastructure">SC26 announcement</a>
          {" "}connects the two research directions.
        </p>
      </section>

      <section>
        <h2>Toward an integrated measurement-to-control system</h2>
        <p>
          The next milestone is to connect the processing pipeline to experimental
          camera data and a quantum controller, then measure the complete feedback
          response. The array-assembly results currently combine FPGA
          implementation work with simulated images and an atom-loss model;
          the transport and ranking-kernel results come from separate board tests.
        </p>
        <p>
          Together, these are concrete steps toward a processing layer that can
          support both quantum-device preparation and error correction, with
          hardware and models developed around the needs of the experiment.
        </p>
      </section>

      <aside className="callout">
        <p className="callout-title">Read the paper</p>
        <p>
          <a href="https://arxiv.org/abs/2611.17652" target="_blank" rel="noopener noreferrer">
            <strong>Quantum Data Processing Unit for Neutral-Atom Quantum Computers</strong>
          </a>
        </p>
        <p>Pranav Srinivas Murali, Russell Marroquin Solares, Warren Zhou, Wanda Hou, Anil Bilgin, and Yi-Zhuang You</p>
        <p>
          arXiv:2611.17652 · First submitted November 13, 2026
          <br />
          This introduction follows v1.
          {" "}<a href="https://arxiv.org/pdf/2611.17652v1" target="_blank" rel="noopener noreferrer">Read the PDF</a>.
          {" "}Hardware measurements: Section G.5, Tables 42–43. Array-assembly
          predictions: Section E, including the corrected software reference planner.
        </p>
      </aside>
    </BlogLayout>
  );
}
