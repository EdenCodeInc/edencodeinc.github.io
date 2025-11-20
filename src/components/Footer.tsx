import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import logo from "figma:asset/424b43ad566f9cfdcdb898312921e75e3eb3e12c.png";

export function Footer() {
  return (
    <footer className="bg-[#553128] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="EdenCode" className="w-10 h-10 rounded-lg" />
              <span className="text-xl">EdenCode</span>
            </div>
            <p className="text-white/70">
              Pioneering the future of fault-tolerant quantum computing through AI-powered error correction.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Product</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="/demo" className="hover:text-[#F4A135] transition-colors">Demo</a></li>
              <li><a href="/blogs" className="hover:text-[#F4A135] transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-[#F4A135] transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="/" className="hover:text-[#F4A135] transition-colors">About</a></li>
              <li><a href="/team" className="hover:text-[#F4A135] transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-[#F4A135] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#F4A135] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F4A135] transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F4A135] transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F4A135] transition-colors flex items-center justify-center">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F4A135] transition-colors flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60">© 2025 EdenCode. All rights reserved.</p>
          <div className="flex gap-6 text-white/60">
            <a href="#" className="hover:text-[#F4A135] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F4A135] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#F4A135] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}