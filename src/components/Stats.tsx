import { TrendingUp, Users, Zap, FlaskConical } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "500+",
      label: "Qubits Supported",
      color: "#F4A135"
    },
    {
      icon: Users,
      value: "50+",
      label: "Research Partners",
      color: "#EB612E"
    },
    {
      icon: FlaskConical,
      value: "8+",
      label: "Partner Labs",
      color: "#F4A135"
    },
    {
      icon: Zap,
      value: "10K+",
      label: "Simulations Run",
      color: "#EB612E"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#FFF9D0] to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#553128] mb-6">
            Trusted by Leaders in Quantum Computing
          </h2>
          <p className="text-xl text-[#553128]/70">
            Our technology powers cutting-edge quantum research and commercial applications worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-white border-2 border-[#F4A135]/20 hover:border-[#F4A135] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </div>
              <div className="text-3xl md:text-4xl text-[#553128] mb-2">{stat.value}</div>
              <p className="text-[#553128]/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
