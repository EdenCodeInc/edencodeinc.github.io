import { useState } from "react";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hwanda@edencode.ai");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const linkClass = "text-[15px] text-ink-2 hover:text-ink transition-colors";

  return (
    <footer className="border-t border-rule transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <a href="/" className="flex items-center gap-3">
              <Logo className="w-7 h-7" />
              <span className="font-display font-semibold text-[17px] tracking-tight text-ink">
                Eden<span className="text-rust">Code</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-2">
              Real-time AI decoder technology for quantum error correction
              ecosystems.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2.5">
              <li><a href="/" className={linkClass}>Home</a></li>
              <li><a href="/blogs" className={linkClass}>Research</a></li>
              <li><a href="/careers" className={linkClass}>Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a href="https://github.com/EdenCodeInc" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/edencode-inc" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  LinkedIn
                </a>
              </li>
              <li>
                <button onClick={handleCopyEmail} className={`${linkClass} text-left cursor-pointer`}>
                  {copied ? "Copied hwanda@edencode.ai" : "Email"}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-ink-3">
          <span>© {currentYear} EdenCode Inc.</span>
          <span>edencode.ai</span>
        </div>
      </div>
    </footer>
  );
}
