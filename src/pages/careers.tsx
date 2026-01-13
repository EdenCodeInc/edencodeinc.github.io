import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mail, MapPin, Briefcase, Users, Zap, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export default function CareersPage() {
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

            <Card className="border-[#F4A135]/20 overflow-hidden shadow-lg max-w-3xl mx-auto">
              <CardContent className="p-0">
                {/* Position Header */}
                <div className="p-8 bg-gradient-to-br from-[#FFF9D0]/50 to-white">
                  <h3 className="text-2xl text-[#553128] mb-6">We're Hiring! For both internship and full-time positions of the following roles:</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-[#EB612E] mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-[#553128]/90 mb-2">Positions:</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-white border border-[#F4A135]/30 text-[#553128] rounded-full text-sm">
                            Machine Learning Engineer
                          </span>
                          <span className="px-3 py-1 bg-white border border-[#F4A135]/30 text-[#553128] rounded-full text-sm">
                            Quantum Computing Researcher
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#EB612E] flex-shrink-0" />
                      <span className="text-[#553128]/90">Palo Alto or San Jose, California</span>
                    </div>
                  </div>
                </div>

                {/* Apply Section */}
                <div className="p-8 border-t border-[#F4A135]/10">
                  <h4 className="text-lg text-[#553128] mb-3">Interested in joining us?</h4>
                  <p className="text-[#553128]/70 mb-6">
                    Send your CV to either of our co-founders:
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:hwanda@edencode.ai"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F4A135] to-[#EB612E] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      hwanda@edencode.ai
                    </a>
                    <a
                      href="mailto:yzyou@edencode.ai"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F4A135] to-[#EB612E] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      yzyou@edencode.ai
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}