import { PythonDemo } from "../components/PythonDemo";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9D0] via-white to-[#FFF9D0]">
      {/* Header */}
      <header className="border-b border-[#F4A135]/10 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/">
                <Button
                  variant="ghost"
                  className="text-[#553128] hover:text-[#EB612E]"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Home
                </Button>
              </a>
              <div className="h-6 w-px bg-[#F4A135]/20"></div>
              <div>
                <h1 className="text-2xl text-[#553128]">
                  Interactive Demo on Topological Code
                </h1>
                <p className="text-sm text-[#553128]/70">
                  Real-Time Quantum Error Correction
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Description */}
          <div className="bg-white p-6 rounded-xl border border-[#F4A135]/20 shadow-sm">
            <h2 className="text-xl text-[#553128] mb-3">
              About This Demo
            </h2>
            <div className="space-y-2 text-sm text-[#553128]/80 leading-relaxed">
              <p>
                This interactive demonstration runs our
                message-passing decoder for quantum error
                correction directly in your browser. The
                visualization shows the real-time evolution of a
                quantum error correction code with syndrome
                tracking and adaptive corrections.
              </p>
              <p>
                <strong className="text-[#553128]">
                  What you're seeing:
                </strong>{" "}
                The grid represents detector readouts (syndrome
                measurements) in a quantum error-correcting
                code. Orange-red cells indicate active syndromes
                (check violations). When the decoder is active,
                it uses a message-passing algorithm with
                Manhattan-distance-based propagation to identify
                likely error chains and propose corrections.
                Green cells show accurate corrections applied to
                syndromes, while yellow cells show misdiagnosis
                corrections on non-syndrome locations.
              </p>
              <p className="text-xs italic text-[#553128]/70 mt-4">
                For relevant details, please refer to:{" "}
                <a
                  href="https://arxiv.org/abs/2505.10162"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EB612E] hover:text-[#EB612E]/80 underline"
                >
                  arXiv:2505.10162
                </a>{" "}
                and{" "}
                <a
                  href="https://arxiv.org/abs/2510.08056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EB612E] hover:text-[#EB612E]/80 underline"
                >
                  arXiv:2510.08056
                </a>
              </p>
            </div>
          </div>

          {/* Demo Component */}
          <PythonDemo />

          {/* Technical Details */}
          <div className="bg-gradient-to-br from-[#553128] to-[#553128]/90 p-8 rounded-2xl shadow-lg text-white">
            <h2 className="text-2xl mb-4">Technical Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg mb-2 text-[#F4A135]">
                  Algorithm
                </h3>
                <p className="text-white/90 text-sm">
                  The decoder implements a message-passing
                  algorithm with Manhattan-distance-based
                  propagation. Messages originate from defects
                  (syndromes) and propagate through the
                  spacetime lattice, with each step costing +1
                  distance. The algorithm includes forward
                  propagation along directional channels and
                  perpendicular turns, respecting the Manhattan
                  metric throughout.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#F4A135]">
                  Performance
                </h3>
                <p className="text-white/90 text-sm">
                  The velocity parameter (must be {">"} 2)
                  determines how many rounds of message
                  propagation occur per decoding step. Higher
                  velocity allows messages to travel farther,
                  improving correction accuracy at the cost of
                  computation time. All operations are
                  vectorized and support batch processing for
                  multiple instances simultaneously.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#F4A135]">
                  Boundary Conditions
                </h3>
                <p className="text-white/90 text-sm">
                  Choose between 'open' and 'periodic' boundary
                  conditions to simulate different quantum code
                  topologies. Periodic boundaries create a toric
                  code structure where edges wrap around, while
                  open boundaries represent planar surface codes
                  with physical edges. Boundary conditions
                  affect how messages propagate at grid edges
                  and determine valid correction targets.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#F4A135]">
                  Error Models & Syndrome Tracking
                </h3>
                <p className="text-white/90 text-sm">
                  The simulation models two types of errors:
                  bit-flip errors (physical errors occurring per
                  dimension at the specified rate) and
                  measurement errors (noise in syndrome
                  detection). The decoder maintains a rolling
                  time window to track syndrome history,
                  enabling it to identify error chains evolving
                  over time. Corrections are generated by
                  inferring directional actions from message
                  values and marking pairs of sites to
                  neutralize syndromes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}