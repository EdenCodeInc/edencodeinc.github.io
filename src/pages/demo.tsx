import { PythonDemo } from "../components/PythonDemo";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-lg pt-24">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/">
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Home
                </Button>
              </a>
              <div className="h-6 w-px bg-border"></div>
              <div>
                <h1 className="text-2xl text-foreground">
                  Interactive Demo on Topological Code
                </h1>
                <p className="text-sm text-muted-foreground">
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
          <div className="bg-card p-6 border border-border">
            <h2 className="text-xl text-foreground mb-3">
              About This Demo
            </h2>
            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
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
              <p className="text-xs italic text-muted-foreground mt-4">
                For relevant details, please refer to:{" "}
                <a
                  href="https://arxiv.org/abs/2505.10162"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  arXiv:2505.10162
                </a>{" "}
                and{" "}
                <a
                  href="https://arxiv.org/abs/2510.08056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  arXiv:2510.08056
                </a>
              </p>
            </div>
          </div>

          {/* Demo Component */}
          <PythonDemo />

          {/* Technical Details */}
          <div className="bg-card border-2 border-primary/30 p-8 text-foreground">
            <h2 className="text-2xl mb-4">Technical Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg mb-2 text-primary">
                  Algorithm
                </h3>
                <p className="text-muted-foreground text-sm">
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
                <h3 className="text-lg mb-2 text-primary">
                  Performance
                </h3>
                <p className="text-muted-foreground text-sm">
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
                <h3 className="text-lg mb-2 text-primary">
                  Boundary Conditions
                </h3>
                <p className="text-muted-foreground text-sm">
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
                <h3 className="text-lg mb-2 text-primary">
                  Error Models & Syndrome Tracking
                </h3>
                <p className="text-muted-foreground text-sm">
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

      <Footer />
    </div>
  );
}
