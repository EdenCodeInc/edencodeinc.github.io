import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

export function Features() {
  const benefits = [
    "Reduce quantum error rates by up to 10x",
    "Enable longer coherence times for complex algorithms",
    "Seamless integration with existing quantum workflows",
    "Continuous learning and adaptation to hardware evolution",
    "Enterprise-grade security and reliability",
    "24/7 technical support and monitoring"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#553128] to-[#553128]/90">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-[#F4A135] rounded-full mb-4">
                <span className="text-sm text-white">The Quantum Advantage</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                Unlock the Full Potential of Quantum Computing
              </h2>
              <p className="text-xl text-white/80">
                Our AI decoder doesn't just correct errors — it learns from them, continuously improving performance and adapting to your specific quantum hardware configuration.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F4A135] flex-shrink-0 mt-1" />
                  <p className="text-white/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F4A135] to-[#EB612E] rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzYzNTQ3ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Neural Network Visualization"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
