import { useState, useEffect, useCallback } from "react";

const COLS = 28;
const ROWS = 14;
const TOTAL = COLS * ROWS;

type CellType = "normal" | "syndrome" | "correction" | "active";

function randomCells(): CellType[] {
  return Array.from({ length: TOTAL }, () => {
    const r = Math.random();
    if (r < 0.024) return "syndrome";
    if (r < 0.044) return "correction";
    if (r < 0.05) return "active";
    return "normal";
  });
}

export function PrototypeShowcase() {
  const [cells, setCells] = useState<CellType[]>(() => randomCells());
  const [corrections, setCorrections] = useState(847);
  const [timeStep, setTimeStep] = useState(1203);
  const [synDensity, setSynDensity] = useState(2.4);

  const tick = useCallback(() => {
    setCells((prev) => {
      const next = [...prev];
      // flip a handful of cells each tick
      const mutations = Math.floor(Math.random() * 6) + 3;
      for (let m = 0; m < mutations; m++) {
        const idx = Math.floor(Math.random() * TOTAL);
        const r = Math.random();
        if (r < 0.024) next[idx] = "syndrome";
        else if (r < 0.044) next[idx] = "correction";
        else if (r < 0.05) next[idx] = "active";
        else next[idx] = "normal";
      }
      return next;
    });
    setCorrections((c) => c + Math.floor(Math.random() * 4 + 1));
    setTimeStep((t) => t + 1);
    setSynDensity(+(2.0 + Math.random() * 0.8).toFixed(1));
  }, []);

  useEffect(() => {
    const id = setInterval(tick, 900);
    return () => clearInterval(id);
  }, [tick]);

  const syndromeCount = cells.filter((c) => c === "syndrome").length;
  const correctionCount = cells.filter((c) => c === "correction").length;

  return (
    <section className="py-28 bg-black border-t border-[#27272A]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-4">
          <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#F4A135] mb-3">Live Demo</p>
          <h2
            className="text-[52px] font-extralight text-white tracking-wide leading-tight"
            style={{ letterSpacing: "0.02em" }}
          >
            Unlock Quantum with AI
          </h2>
        </div>
        <p className="text-center text-[18px] text-[#A1A1AA] mb-12">
          Our real-time AI decoder runs directly in your browser — no
          installation required.
        </p>

        {/* Main container */}
        <div className="max-w-[960px] mx-auto rounded-2xl border border-[#27272A] bg-[#18181B] overflow-hidden min-h-[480px]">
          {/* Top bar */}
          <div className="bg-[#0D0D0F] px-5 py-3 flex items-center justify-between border-b border-[#27272A]">
            <span className="font-mono text-[12px] text-[#52525B] tracking-widest uppercase">
              EdenCode Decoder · Live Simulation
            </span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="font-mono text-[12px] text-[#A1A1AA]">
                Running
              </span>
            </div>
          </div>

          {/* Grid area */}
          <div className="p-6 flex items-center justify-center">
            <div
              className="grid gap-[3px]"
              style={{
                gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                width: "100%",
                maxWidth: "860px",
              }}
            >
              {cells.map((cell, i) => (
                <div
                  key={i}
                  className="rounded-[2px] transition-colors duration-300"
                  style={{
                    aspectRatio: "1",
                    backgroundColor:
                      cell === "syndrome"
                        ? "rgba(244, 161, 53, 0.75)"
                        : cell === "correction"
                          ? "rgba(96, 165, 250, 0.45)"
                          : cell === "active"
                            ? "rgba(235, 97, 46, 0.6)"
                            : "#1C1C1E",
                    boxShadow:
                      cell === "syndrome"
                        ? "0 0 4px rgba(244,161,53,0.5)"
                        : cell === "active"
                          ? "0 0 4px rgba(235,97,46,0.4)"
                          : "none",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Stats bottom bar */}
          <div className="border-t border-[#27272A] px-5 py-3 flex items-center gap-0">
            <span className="font-mono text-[11px] text-[#52525B] flex-1 text-center">
              Syndrome density: {synDensity}%
            </span>
            <div className="w-px h-4 bg-[#27272A]" />
            <span className="font-mono text-[11px] text-[#52525B] flex-1 text-center">
              Corrections applied: {corrections.toLocaleString()}
            </span>
            <div className="w-px h-4 bg-[#27272A]" />
            <span className="font-mono text-[11px] text-[#52525B] flex-1 text-center">
              Time step: {timeStep.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Demo link */}
        <div className="text-center mt-6">
          <a
            href="/demo"
            className="text-[14px] text-[#F4A135] hover:text-[#EB612E] transition-colors"
          >
            Try the interactive demo →
          </a>
        </div>

        {/* Pill tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          {["Grid 40×40", "Bit flip rate 2%", "Real-time decoding"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] font-mono text-[11px] text-[#52525B]"
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
