import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/424b43ad566f9cfdcdb898312921e75e3eb3e12c.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-[#F4A135]/10 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="EdenCode" className="w-10 h-10 rounded-lg" />
            <span className="text-xl text-[#553128]">EdenCode</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-[#553128] hover:text-[#EB612E] transition-colors">
              Home
            </a>
            <a href="/team" className="text-[#553128] hover:text-[#EB612E] transition-colors">
              Team
            </a>
            <a href="/demo" className="text-[#553128] hover:text-[#EB612E] transition-colors">
              Demo
            </a>
            <a href="/blogs" className="text-[#553128] hover:text-[#EB612E] transition-colors">
              Blogs
            </a>
            <a href="/careers" className="text-[#553128] hover:text-[#EB612E] transition-colors">
              Careers
            </a>
            <a href="/contact" className="text-[#553128] hover:text-[#EB612E] transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-[#EB612E] hover:bg-[#EB612E]/90 text-white">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#553128]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="/" className="block text-[#553128] hover:text-[#EB612E] transition-colors">
              Home
            </a>
            <a href="/team" className="block text-[#553128] hover:text-[#EB612E] transition-colors">
              Team
            </a>
            <a href="/demo" className="block text-[#553128] hover:text-[#EB612E] transition-colors">
              Demo
            </a>
            <a href="/blogs" className="block text-[#553128] hover:text-[#EB612E] transition-colors">
              Blogs
            </a>
            <a href="/careers" className="block text-[#553128] hover:text-[#EB612E] transition-colors">
              Careers
            </a>
            <a href="/contact" className="block text-[#553128] hover:text-[#EB612E] transition-colors">
              Contact
            </a>
            <div className="pt-2">
              <Button asChild className="w-full bg-[#EB612E] hover:bg-[#EB612E]/90 text-white">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}