import { Cpu, Zap, Network, Brain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Technology() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decoding",
      description: "Advanced neural networks trained on quantum error patterns for unprecedented accuracy"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Sub-millisecond error correction enabling practical quantum computation at scale"
    },
    {
      icon: Network,
      title: "Scalable Architecture",
      description: "Modular ecosystem designed to grow with your quantum computing infrastructure"
    },
    {
      icon: Cpu,
      title: "Hardware Agnostic",
      description: "Compatible with all major quantum computing platforms and architectures"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#553128] mb-6">
            Next-Generation Technology
          </h2>
          <p className="text-xl text-[#553128]/70">
            Our real-time AI decoder combines quantum mechanics expertise with state-of-the-art machine learning to solve the most critical challenge in quantum computing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border-2 border-[#F4A135]/20 bg-gradient-to-br from-[#FFF9D0]/30 to-white hover:border-[#F4A135] transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F4A135] to-[#EB612E] flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-[#553128] mb-3">{feature.title}</h3>
              <p className="text-[#553128]/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1752451399416-faef5f9fe572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1MjgxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Quantum Computing Technology"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#553128]/80 via-[#553128]/40 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl mb-2">Quantum Error Correction Reimagined</h3>
              <p className="text-white/90">Leveraging AI to achieve fault tolerance at unprecedented scales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
