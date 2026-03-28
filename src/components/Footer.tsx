import logo from "figma:asset/424b43ad566f9cfdcdb898312921e75e3eb3e12c.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t-2 border-[var(--terminal-primary)] text-[var(--terminal-primary)] py-12 scanlines transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 border-2 border-[var(--terminal-primary)] p-1">
                <img src={logo} alt="EdenCode" className="w-full h-full" />
              </div>
              <div>
                <div className="text-[var(--terminal-primary)] text-xl font-bold tracking-wider">EDENCODE</div>
                <div className="text-[var(--terminal-secondary)] text-[10px] tracking-widest">QUANTUM_LAB_V1.0</div>
              </div>
            </div>
            <div className="text-[var(--terminal-secondary)] text-sm font-mono space-y-1">
              <p>$ cat ./mission.txt</p>
              <p className="text-xs text-[var(--terminal-primary)]/70">
                {'>'} Real-time AI-Decoder technology<br />
                {'>'} for quantum error correction<br />
                {'>'} ecosystems
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[var(--terminal-secondary)] font-bold mb-3 text-sm">[NAVIGATION]</div>
            <div className="space-y-2 text-sm">
              <a href="/" className="block hover:text-[var(--terminal-secondary)] transition-colors">{'>'} Home</a>
              <a href="/blogs" className="block hover:text-[var(--terminal-secondary)] transition-colors">{'>'} System_Log</a>
              <a href="/careers" className="block hover:text-[var(--terminal-secondary)] transition-colors">{'>'} Careers</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[var(--terminal-secondary)] font-bold mb-3 text-sm">[CONNECT]</div>
            <div className="space-y-2 text-sm">
              <a href="https://github.com/EdenCodeInc" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--terminal-secondary)] transition-colors">{'>'} GitHub</a>
              <a href="https://www.linkedin.com/company/edencode-inc" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--terminal-secondary)] transition-colors">{'>'} LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--terminal-primary)]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--terminal-secondary)]">
            <div className="font-mono">
              © {currentYear} EDENCODE_INC. ALL_RIGHTS_RESERVED
            </div>
            <div className="flex gap-6">



            </div>
          </div>
        </div>

        {/* Terminal Line */}

      </div>
    </footer>
  );
}
