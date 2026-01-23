import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mail, MapPin, Briefcase, Users, Zap, Award, DollarSign, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useState } from "react";

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF9D0] via-white to-[#FFF9D0]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F4A135] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EB612E] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl tracking-tight text-[#553128]">
              Join the Future of{" "}
              <span className="bg-gradient-to-r from-[#F4A135] to-[#EB612E] bg-clip-text text-transparent">
                Quantum Computing
              </span>
            </h1>
            <p className="text-xl text-[#553128]/80 max-w-2xl mx-auto">
              Shape the future of quantum error correction and AI at EdenCode
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#F4A135]/20 to-[#EB612E]/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-[#EB612E]" />
                </div>
                <h3 className="text-xl text-[#553128]">Cutting-Edge Research</h3>
                <p className="text-[#553128]/70">
                  Work on breakthrough AI-decoder technology for quantum systems
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#F4A135]/20 to-[#EB612E]/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#EB612E]" />
                </div>
                <h3 className="text-xl text-[#553128]">World-Class Team</h3>
                <p className="text-[#553128]/70">
                  Collaborate with top researchers from Stanford, Berkeley, and Harvard
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#F4A135]/20 to-[#EB612E]/20 flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#EB612E]" />
                </div>
                <h3 className="text-xl text-[#553128]">Innovation Hub</h3>
                <p className="text-[#553128]/70">
                  Pioneer the integration of quantum computing and AI technologies
                </p>
              </div>
            </div>

            {/* Open Positions */}
            <div className="text-center mb-12">
              <h2 className="text-4xl text-[#553128] mb-3">Open Positions</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F4A135] to-[#EB612E] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {/* Job 1: Technical Marketing Manager */}
              <Card className="border-[#F4A135]/20 overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  {/* Position Header */}
                  <div 
                    className="p-8 bg-gradient-to-br from-[#FFF9D0]/50 to-white cursor-pointer hover:from-[#FFF9D0]/70 hover:to-white/90 transition-colors"
                    onClick={() => toggleJob(0)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl text-[#553128] mb-2">Technical Marketing Manager</h3>
                        <p className="text-[#553128]/70 mb-4">
                          Be the public face of our quantum AI technology
                        </p>
                      </div>
                      {expandedJob === 0 ? (
                        <ChevronUp className="w-6 h-6 text-[#EB612E] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#EB612E] flex-shrink-0" />
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#EB612E] flex-shrink-0" />
                        <span className="text-[#553128]/90">Palo Alto or San Jose, California</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedJob === 0 && (
                    <div className="border-t border-[#F4A135]/10">
                      <div className="p-8 space-y-6">
                        {/* Company Description */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Company Description</h4>
                          <p className="text-[#553128]/70 leading-relaxed">
                            We are a deep-tech startup dedicated to making fault-tolerant quantum computing a reality. 
                            By leveraging cutting-edge Artificial Intelligence to tackle the bottlenecks of Quantum Error 
                            Correction (QEC), we are building the software layer that defines the future of quantum scalability. 
                            Join our team of world-class physicists and engineers to solve the most challenging problems in 
                            the quantum stack.
                          </p>
                        </div>

                        {/* Role Description */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Role Description</h4>
                          <p className="text-[#553128]/70 leading-relaxed">
                            We are looking for a charismatic and organized Technical Marketing Manager to be the public face 
                            of our technology. You will bridge the gap between our internal R&D team and the global quantum 
                            community. Your primary focus will be planning and executing our presence at major industry 
                            conferences (e.g., Q2B, APS March Meeting, NeurIPS, IEEE Quantum). You will translate complex 
                            technical breakthroughs into compelling narratives, manage our ecosystem partnerships, and showcase 
                            our AI-driven solutions to potential customers and hardware partners.
                          </p>
                        </div>

                        {/* Compensation & Benefits */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Compensation & Benefits</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-[#EB612E] mt-1 flex-shrink-0" />
                              <span><strong>Equity:</strong> Competitive stock option package.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-[#EB612E] mt-1 flex-shrink-0" />
                              <span><strong>Benefits:</strong> Comprehensive health, dental, and vision insurance; 401(k) plan; flexible paid time off; and travel reimbursements.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Key Responsibilities */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EB612E] mt-2 flex-shrink-0"></div>
                              <span><strong>Conference & Event Strategy:</strong> Own the global event calendar. Plan, organize, and execute our presence at key Quantum and AI conferences, from booth design to speaking engagements.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EB612E] mt-2 flex-shrink-0"></div>
                              <span><strong>Technical Evangelism:</strong> Serve as the on-site representative. You will deliver demos, explain our "Neural Source-Aware Messaging" technology to non-experts, and answer initial technical inquiries.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EB612E] mt-2 flex-shrink-0"></div>
                              <span><strong>Content & Communications:</strong> Write high-quality technical blog posts, white papers, and LinkedIn updates that highlight our milestones. Ensure our external messaging aligns with our technical reality.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EB612E] mt-2 flex-shrink-0"></div>
                              <span><strong>Ecosystem Building:</strong> Act as the liaison for hardware partners (superconducting, ion trap, etc.) and industry associations. Identify opportunities for collaboration and generate leads for the technical team.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EB612E] mt-2 flex-shrink-0"></div>
                              <span><strong>Market Intelligence:</strong> Keep a pulse on the industry. Monitor competitor announcements and research trends to inform our product positioning.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Qualifications */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Qualifications</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Educational Background:</strong> Bachelor's degree in Physics, Engineering, Computer Science, or a related STEM field. (You don't need a PhD, but you must be comfortable reading technical abstracts).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Technical Literacy:</strong> Solid understanding of the basic concepts of Quantum Computing (qubits, gates, error correction) and Artificial Intelligence (neural networks, training). You can explain why QEC is hard and how AI helps.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Communication Skills:</strong> Exceptional public speaking and writing skills. You can distill complex physics into clear value propositions.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Event Experience:</strong> Proven experience organizing or participating in technology conferences, trade shows, or academic symposiums.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Willingness to Travel:</strong> This role requires significant travel (up to 40-50%) to attend domestic and international events.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Preferred Qualifications */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Preferred Qualifications</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Design Skills:</strong> Proficiency with tools like PowerPoint, Keynote, Figma, or Adobe Creative Cloud to create professional slide decks and marketing collateral.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Industry Network:</strong> Existing connections within the Quantum Computing or High-Performance Computing (HPC) ecosystem.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Startup Experience:</strong> Ability to work autonomously with minimal supervision and wear multiple hats (e.g., handling logistics one day, writing strategy the next).</span>
                            </li>
                          </ul>
                        </div>

                        {/* Apply Section */}
                        <div className="pt-6 border-t border-[#F4A135]/10">
                          <h4 className="text-lg text-[#553128] mb-3">How to Apply</h4>
                          <p className="text-[#553128]/70 mb-4">
                            Send your CV and a brief cover letter to either of our co-founders:
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href="mailto:hwanda@edencode.ai?subject=Application: Technical Marketing Manager"
                              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F4A135] to-[#EB612E] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                              <Mail className="w-4 h-4" />
                              hwanda@edencode.ai
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Job 2: AI Research Scientist – Quantum Error Correction */}
              <Card className="border-[#F4A135]/20 overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  {/* Position Header */}
                  <div 
                    className="p-8 bg-gradient-to-br from-[#FFF9D0]/50 to-white cursor-pointer hover:from-[#FFF9D0]/70 hover:to-white/90 transition-colors"
                    onClick={() => toggleJob(1)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl text-[#553128] mb-2">AI Research Scientist – Quantum Error Correction</h3>
                        <p className="text-[#553128]/70 mb-4">
                          Work at the intersection of Deep Learning and Quantum Physics
                        </p>
                      </div>
                      {expandedJob === 1 ? (
                        <ChevronUp className="w-6 h-6 text-[#EB612E] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#EB612E] flex-shrink-0" />
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#EB612E] flex-shrink-0" />
                        <span className="text-[#553128]/90">San Jose, California (On-site)</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedJob === 1 && (
                    <div className="border-t border-[#F4A135]/10">
                      <div className="p-8 space-y-6">
                        {/* Company Description */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Company Description</h4>
                          <p className="text-[#553128]/70 leading-relaxed">
                            We are a deep-tech startup dedicated to making fault-tolerant quantum computing a reality. 
                            By leveraging cutting-edge Artificial Intelligence to tackle the bottlenecks of Quantum Error 
                            Correction (QEC), we are building the software layer that defines the future of quantum scalability. 
                            Join our team of world-class physicists and engineers to solve the most challenging problems in 
                            the quantum stack.
                          </p>
                        </div>

                        {/* Role Description */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Role Description</h4>
                          <p className="text-[#553128]/70 leading-relaxed">
                            This is a full-time on-site role for an AI Research Scientist specializing in Quantum Error 
                            Correction, based in San Jose, CA. You will work at the intersection of Deep Learning and 
                            Quantum Physics. Your primary mission is to research and design advanced neural network 
                            architectures that improve the accuracy and decoding speed of Quantum Error Correction (QEC). 
                            You will collaborate closely with hardware architects to ensure these algorithms are scalable 
                            and can be deployed in real-time control systems, effectively bridging the gap between 
                            theoretical models and physical hardware.
                          </p>
                        </div>

                        {/* Compensation & Benefits */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Compensation & Benefits</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-[#EB612E] mt-1 flex-shrink-0" />
                              <span><strong>Equity:</strong> Competitive stock option package (Early-stage equity).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-[#EB612E] mt-1 flex-shrink-0" />
                              <span><strong>Benefits:</strong> Comprehensive health, dental, and vision insurance; 401(k) plan; flexible paid time off; and relocation assistance for qualified candidates.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Qualifications */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Qualifications</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Educational Background:</strong> Ph.D. or Master's degree in Physics, Computer Science, Electrical Engineering, Applied Mathematics, or a related field.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Deep Learning Expertise:</strong> Strong theoretical and practical understanding of modern deep learning architectures. Specifically, experience with Graph Neural Networks (GNNs), Probabilistic Graphical Models, or Sequence Modeling (Transformers/RNNs).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Coding Proficiency:</strong> Expert-level fluency in Python and comprehensive experience with deep learning frameworks (e.g., PyTorch, TensorFlow, JAX). Ability to write clean, modular, and version-controlled code.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Scientific Rigor:</strong> Demonstrated ability to read, implement, and improve upon state-of-the-art research papers. A track record of publications in top-tier conferences or journals is preferred (e.g., NeurIPS, ICML, CVPR, PRL, PRX, or similar).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Mathematical Foundation:</strong> Solid grounding in linear algebra, probability theory, and optimization techniques.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Preferred Qualifications */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Preferred Qualifications</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>QEC Domain Knowledge:</strong> Familiarity with Quantum Error Correction schemes (e.g., Surface Codes, LDPC codes, Color Codes) or topological quantum computing.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Information Theory:</strong> Background in classical error correction, channel coding theory, or Message Passing Algorithms (e.g., Belief Propagation).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>IP Generation:</strong> Experience with technical writing or assisting in the drafting of patents and intellectual property claims.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Hardware Awareness:</strong> Basic understanding of how algorithms are deployed onto hardware (FPGA/ASIC) or constraints regarding latency and throughput in real-time control systems.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Startup Mindset:</strong> Ability to thrive in a fast-paced, collaborative environment where specifications may evolve. Excellent communication skills to bridge the gap between ML engineers and Quantum Physicists.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Apply Section */}
                        <div className="pt-6 border-t border-[#F4A135]/10">
                          <h4 className="text-lg text-[#553128] mb-3">How to Apply</h4>
                          <p className="text-[#553128]/70 mb-4">
                            Send your CV, research statement, and links to relevant publications to either of our co-founders:
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href="mailto:hwanda@edencode.ai?subject=Application: AI Research Scientist – Quantum Error Correction"
                              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F4A135] to-[#EB612E] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                              <Mail className="w-4 h-4" />
                              hwanda@edencode.ai
                            </a>
                            <a
                              href="mailto:yzyou@edencode.ai?subject=Application: AI Research Scientist – Quantum Error Correction"
                              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F4A135] to-[#EB612E] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                              <Mail className="w-4 h-4" />
                              yzyou@edencode.ai
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Job 3: Head of Quantum Hardware Architecture */}
              <Card className="border-[#F4A135]/20 overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  {/* Position Header */}
                  <div 
                    className="p-8 bg-gradient-to-br from-[#FFF9D0]/50 to-white cursor-pointer hover:from-[#FFF9D0]/70 hover:to-white/90 transition-colors"
                    onClick={() => toggleJob(2)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl text-[#553128] mb-2">Head of Quantum Hardware Architecture</h3>
                        <p className="text-[#553128]/70 mb-4">
                          Lead hardware-software co-design at the speed of physics
                        </p>
                      </div>
                      {expandedJob === 2 ? (
                        <ChevronUp className="w-6 h-6 text-[#EB612E] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#EB612E] flex-shrink-0" />
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#EB612E] flex-shrink-0" />
                        <span className="text-[#553128]/90">San Jose, California</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedJob === 2 && (
                    <div className="border-t border-[#F4A135]/10">
                      <div className="p-8 space-y-6">
                        {/* Company Description */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Company Description</h4>
                          <p className="text-[#553128]/70 leading-relaxed">
                            We are a deep-tech startup dedicated to making fault-tolerant quantum computing a reality. 
                            By leveraging cutting-edge Artificial Intelligence to tackle the bottlenecks of Quantum Error 
                            Correction (QEC), we are building the software layer that defines the future of quantum scalability. 
                            Join our team of world-class physicists and engineers to solve the most challenging problems in 
                            the quantum stack.
                          </p>
                        </div>

                        {/* Role Description */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Role Description</h4>
                          <p className="text-[#553128]/70 leading-relaxed">
                            This is a leadership role for a Head of Quantum Hardware Architecture, based in San Jose, CA. 
                            You will lead the hardware-software co-design strategy, bridging the gap between our AI-based 
                            decoding algorithms and physical quantum processors. Your primary mission is to translate our 
                            neural network models into ultra-low latency hardware implementations that operate within the 
                            strict timing constraints of QEC cycles. You will define the control architecture that interfaces 
                            with various qubit modalities (Superconducting, Ion Trap, Neutral Atoms), ensuring our decoder 
                            runs "at the speed of physics."
                          </p>
                        </div>

                        {/* Compensation & Benefits */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Compensation & Benefits</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-[#EB612E] mt-1 flex-shrink-0" />
                              <span><strong>Equity:</strong> Significant early-stage stock option package.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-[#EB612E] mt-1 flex-shrink-0" />
                              <span><strong>Benefits:</strong> Comprehensive health, dental, and vision insurance; 401(k) plan; flexible paid time off; and relocation assistance.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Key Responsibilities */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EB612E] mt-2 flex-shrink-0"></div>
                              <span><strong>Hardware-Software Co-Design:</strong> Collaborate with the AI Research team to define hardware specifications for Neural Decoders. Determine the optimal tradeoff between algorithmic complexity and hardware latency.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EB612E] mt-2 flex-shrink-0"></div>
                              <span><strong>Architecture Implementation:</strong> Lead the design and FPGA implementation of real-time control logic. Convert high-level machine learning models into efficient RTL (Verilog/SystemVerilog).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EB612E] mt-2 flex-shrink-0"></div>
                              <span><strong>Platform Integration:</strong> Adapt our decoding architecture to interface with different quantum hardware backends (e.g., interfacing with control electronics for Superconducting Qubits or Optical Control systems for Neutral Atoms).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EB612E] mt-2 flex-shrink-0"></div>
                              <span><strong>Latency Optimization:</strong> Drive the engineering effort to minimize I/O latency and processing time to enable real-time feedback loops needed for Fault-Tolerance.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Qualifications */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Qualifications</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Educational Background:</strong> Ph.D. in Quantum Engineering, Experimental Physics, or a related field with a focus on Quantum Computing experiments.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Experimental Expertise:</strong> Deep hands-on experience with quantum control systems. You understand the physical constraints of controlling qubits (e.g., T1/T2 times, gate speeds, readout fidelity).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Hardware Modality Knowledge:</strong> Broad understanding of major qubit platforms, including Superconducting Circuits, Trapped Ions, and Neutral Atoms, and their respective control electronics requirements.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>FPGA & Digital Design:</strong> Proficiency in FPGA development (Xilinx/Altera) and RFSoC platforms. Experience with HDL (Verilog/VHDL) and high-speed signal processing.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Control Theory:</strong> Solid understanding of feedback loops, signal processing (DSP), and classical control electronics.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Preferred Qualifications */}
                        <div>
                          <h4 className="text-lg text-[#553128] mb-3">Preferred Qualifications</h4>
                          <ul className="space-y-2 text-[#553128]/70">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Cryogenic Electronics:</strong> Knowledge of cryogenic CMOS (Cryo-CMOS) or low-temperature electronic constraints is a huge plus.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>AI Acceleration:</strong> Experience implementing Neural Networks on FPGAs or designing custom accelerators for inference.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Strategic Leadership:</strong> Previous experience leading a technical team or managing a hardware roadmap in an academic or industrial setting.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A135] mt-2 flex-shrink-0"></div>
                              <span><strong>Protocol Knowledge:</strong> Familiarity with QEC protocols (Surface Code, etc.) from a hardware implementation perspective.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Apply Section */}
                        <div className="pt-6 border-t border-[#F4A135]/10">
                          <h4 className="text-lg text-[#553128] mb-3">How to Apply</h4>
                          <p className="text-[#553128]/70 mb-4">
                            Send your CV, portfolio of hardware projects, and relevant publications to either of our co-founders:
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href="mailto:hwanda@edencode.ai?subject=Application: Head of Quantum Hardware Architecture"
                              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F4A135] to-[#EB612E] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                              <Mail className="w-4 h-4" />
                              hwanda@edencode.ai
                            </a>
                            <a
                              href="mailto:yzyou@edencode.ai?subject=Application: Head of Quantum Hardware Architecture"
                              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F4A135] to-[#EB612E] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                              <Mail className="w-4 h-4" />
                              yzyou@edencode.ai
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}