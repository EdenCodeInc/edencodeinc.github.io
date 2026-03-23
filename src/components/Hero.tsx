import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF9D0] via-white to-[#FFF9D0]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#F4A135] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EB612E] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F4A135] rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
                  
          <h1 className="text-5xl md:text-7xl tracking-tight text-[#553128]">
            Real-Time AI Decoder for{" "}
            <span className="bg-gradient-to-r from-[#F4A135] to-[#EB612E] bg-clip-text text-transparent">
              Quantum Error Correction
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#553128]/80 max-w-3xl mx-auto">
            Pioneering the future of fault-tolerant quantum computing with cutting-edge AI-powered error correction ecosystems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-[#EB612E] hover:bg-[#EB612E]/90 text-white px-8 py-6">
              <a href="/demo" className="flex items-center">
                Try Live Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-[#F4A135] text-[#553128] hover:bg-[#FFF9D0] px-8 py-6">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 text-center">
            <div className="space-y-2">
              <div className="text-4xl text-[#EB612E]">99.9%</div>
              <p className="text-[#553128]/70">Error Detection Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl text-[#F4A135]">{"<1ms"}</div>
              <p className="text-[#553128]/70">Real-Time Decoding</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl text-[#EB612E]">10x</div>
              <p className="text-[#553128]/70">Faster Processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}