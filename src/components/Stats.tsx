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
    null
  );
}
