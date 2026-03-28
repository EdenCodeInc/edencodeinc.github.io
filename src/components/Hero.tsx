import { useEffect, useState } from "react";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "UNLOCK QUANTUM WITH AI";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const asciiLogo = `
    ╔═════════════════════════════════════════════════════════════════════════════╗
    ║   ███████╗██████╗ ███████╗███╗   ██╗     ██████╗ ██████╗ ██████╗ ███████╗   ║
    ║   ██╔════╝██╔══██╗██╔════╝████╗  ██║    ██╔════╝██╔═══██╗██╔══██╗██╔════╝   ║
    ║   █████╗  ██║  ██║█████╗  ██╔██╗ ██║    ██║     ██║   ██║██║  ██║█████╗     ║
    ║   ██╔══╝  ██║  ██║██╔══╝  ██║╚██╗██║    ██║     ██║   ██║██║  ██║██╔══╝     ║
    ║   ███████╗██████╔╝███████╗██║ ╚████║    ╚██████╗╚██████╔╝██████╔╝███████╗   ║
    ║   ╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═══╝     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝   ║
    ╚═════════════════════════════════════════════════════════════════════════════╝
  `;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background crt-screen transition-colors duration-300">
      {/* Simple corner brackets */}
      <div className="absolute top-2 left-2 sm:top-8 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-[var(--terminal-secondary)] pointer-events-none z-10"></div>
      <div className="absolute top-2 right-2 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-t-2 border-[var(--terminal-secondary)] pointer-events-none z-10"></div>
      <div className="absolute bottom-2 left-2 sm:bottom-8 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-b-2 border-[var(--terminal-secondary)] pointer-events-none z-10"></div>
      <div className="absolute bottom-2 right-2 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-[var(--terminal-secondary)] pointer-events-none z-10"></div>

      {/* Timeline lighter background penetrating upward into Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/70 via-[var(--card)]/40 to-transparent pointer-events-none z-0"></div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal Window */}
          <div className="terminal-window bg-card p-8 matrix-bg transition-colors duration-300 relative">
            {/* Terminal header bar */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center gap-2 px-4 border-b border-[var(--terminal-primary)]/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 border border-[var(--terminal-secondary)]"></div>
                <div className="w-3 h-3 border border-[var(--terminal-primary)]"></div>
                <div className="w-3 h-3 border border-[var(--terminal-primary)]/50"></div>
              </div>
              <span className="text-[var(--terminal-primary)] text-[10px] sm:text-xs font-mono ml-2 truncate">root@edencode:~/quantum_ai</span>
            </div>

            <div className="space-y-6 mt-4">
              {/* System Boot Messages */}
              <div className="text-[var(--terminal-primary)] text-sm space-y-1 font-mono">
                <p>[SYSTEM] Initializing Quantum Error Correction Protocol...</p>
                <p>[SYSTEM] Loading AI Decoder Neural Network...</p>
                <p className="text-[var(--terminal-secondary)]">[OK] All systems operational</p>
                <p className="text-[var(--terminal-secondary)]">---</p>
              </div>

              {/* ASCII Art Logo */}
              <div className="text-[var(--terminal-primary)] text-[6px] xs:text-[8px] md:text-xs leading-tight overflow-x-auto">
                <pre className="font-mono">{asciiLogo}</pre>
              </div>

              {/* Main Heading with Typing Effect */}
              <div className="my-8">
                <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--terminal-secondary)] text-glow-orange font-mono tracking-wider">
                  {'>'} {displayedText}
                  <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>▮</span>
                </div>
                <div className="mt-4 text-[var(--terminal-primary)] text-sm md:text-base">
                  <p>$ ./edencode --mode=realtime --platform=quantum</p>
                  <p className="text-[var(--terminal-secondary)]">{'>'} Real-time AI-Decoder technology for quantum error correction ecosystems</p>
                </div>
              </div>

              {/* System Stats Display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">



              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="/blogs"
                  className="group px-6 py-3 bg-primary border-2 border-primary text-primary-foreground font-bold hover:bg-accent transition-all inline-flex items-center gap-2"
                >
                  {'>'} READ_SYSTEM_LOG
                  <span className="group-hover:translate-x-1 transition-transform">▶</span>
                </a>
                <a
                  href="/careers"
                  className="px-6 py-3 border-2 border-[var(--terminal-primary)] text-[var(--terminal-primary)] font-bold hover:bg-[var(--terminal-primary)]/10 transition-all inline-flex items-center gap-2"
                >
                  {'>'} JOIN_TEAM.txt
                </a>
              </div>

              {/* Terminal Prompt */}
              <div className="mt-8 text-[var(--terminal-primary)] text-sm font-mono">
                <span>root@edencode:~$ <span className="typing-cursor"></span></span>
              </div>
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[var(--terminal-secondary)] text-xs border border-border bg-background p-3 transition-colors duration-300">
            <div className="flex flex-wrap gap-2 sm:gap-4 font-mono">
              <span className="whitespace-nowrap">[QUANTUM] ACTIVE</span>
              <span className="whitespace-nowrap">[AI-DECODER] READY</span>
              <span className="whitespace-nowrap">[ERRORS] 0</span>
            </div>
            <div className="font-mono">
              <span className="whitespace-nowrap">UPTIME: 99.99%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
