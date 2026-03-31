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

  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-background crt-screen transition-colors duration-300 overflow-hidden">
      {/* Scanlines effect */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Terminal Window */}
        <div className="terminal-window bg-card matrix-bg transition-colors duration-300 relative">
          {/* Terminal header bar */}
          <div className="h-8 flex items-center gap-2 px-4 border-b border-[var(--terminal-primary)]/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 border border-[var(--terminal-secondary)]"></div>
              <div className="w-3 h-3 border border-[var(--terminal-primary)]"></div>
              <div className="w-3 h-3 border border-[var(--terminal-primary)]/50"></div>
            </div>
            <span className="text-[var(--terminal-primary)] text-[10px] sm:text-xs font-mono ml-2 truncate">root@edencode:~/quantum_ai</span>
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-6 space-y-5">
            {/* Main Heading with Typing Effect */}
            <div>
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--terminal-secondary)] text-glow-orange font-mono tracking-wider">
                {'>'} {displayedText}
                <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>▮</span>
              </div>
              <p className="mt-3 text-foreground text-xs sm:text-sm font-mono">
                <span>root@edencode:~$ </span>
                <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>▮</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
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

            {/* Inline status */}
            <div className="flex flex-wrap gap-4 text-[var(--terminal-secondary)] text-xs font-mono pt-1 border-t border-[var(--terminal-primary)]/20">
              <span>[QUANTUM] ACTIVE</span>
              <span>[AI-DECODER] READY</span>
              <span className="ml-auto hidden sm:inline">edencode.ai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
