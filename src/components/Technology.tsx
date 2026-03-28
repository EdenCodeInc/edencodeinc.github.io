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
    null
  );
}
