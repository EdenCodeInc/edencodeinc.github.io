import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Mail, Linkedin, Github, Globe } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { Toaster } from "../components/ui/sonner";
import ceoImage from "figma:asset/8b24c05316d693e61260c89d7125a24e893b17c9.png";
import ctoImage from "figma:asset/5b00b049b4b7eac372ce20b02af55baf081e3b31.png";
import drHuImage from "figma:asset/310b0be04ed19cb9cf7586265c5ec59204a0da5d.png";
import profQiImage from "figma:asset/01a94125fbbcadca36f8f7bfdd75754fcbc21d8f.png";
import profAltmanImage from "figma:asset/69c403245d02e381aee3642bc6657d7adc466846.png";
import profChenImage from "figma:asset/77f9635fc1471e42c6cd3057fc6117722efc2e9b.png";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Wanda Hou",
      role: "CEO & Co-Founder",
      education: "PhD in Physics, UC San Diego",
      email: "hwanda@edencode.ai",
      linkedin:
        "https://www.linkedin.com/in/wanda-hou-986b61264/",
      github: "https://github.com/WandaHou",
      homepage: null,
      image: ceoImage,
    },
    {
      name: "Prof. Yi-Zhuang You",
      role: "CTO & Co-Founder",
      education: "Professor, UC San Diego Physics",
      email: "yzyou@edencode.ai",
      linkedin: "https://www.linkedin.com/in/yi-zhuang-you-1703a1272/",
      github: "https://github.com/everettyou",
      homepage: "https://everettyou.github.io/",
      image: ctoImage,
    },
    {
      name: "Dr. Hongye Hu",
      role: "Co-Founder",
      education: "Harvard Quantum Initiative (HQI)",
      email: "hongyehu@fas.harvard.edu",
      linkedin:
        "https://www.linkedin.com/in/hong-ye-hu-phd-a99b518b/",
      github: null,
      homepage: "https://hongyehu.scholars.harvard.edu/",
      image: drHuImage,
    },
  ];

  const advisors = [
    {
      name: "Prof. Xiao-Liang Qi",
      role: "Advisor",
      education: "Professor, Stanford Physics",
      email: "xlqi@stanford.edu",
      linkedin: null,
      github: null,
      homepage:
        "https://profiles.stanford.edu/xiaoliang-qi?releaseVersion=11.5.1",
      image: profQiImage,
    },
    {
      name: "Prof. Ehud Altman",
      role: "Advisor",
      education: "Professor, UC Berkeley Physics",
      email: "ehud.altman@berkeley.edu",
      linkedin: null,
      github: null,
      homepage: "https://physics.berkeley.edu/people/faculty/ehud-altman",
      image: profAltmanImage,
    },
    {
      name: "Prof. Yubei Chen",
      role: "Advisor",
      education: "Professor, UC Davis AI",
      email: "ybchen@ucdavis.edu",
      linkedin: "https://www.linkedin.com/in/yubei-chen-05998a39/",
      github: null,
      homepage: "https://yubeichen.com/",
      image: profChenImage,
    },
  ];

  const copyEmailToClipboard = (email: string) => {
    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => {
          toast.success("Email copied to clipboard!");
        })
        .catch(() => {
          // Fallback method
          fallbackCopyTextToClipboard(email);
        });
    } else {
      // Fallback method for older browsers
      fallbackCopyTextToClipboard(email);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        toast.success("Email copied to clipboard!");
      } else {
        toast.error("Failed to copy email");
      }
    } catch (err) {
      toast.error("Failed to copy email");
    }
    document.body.removeChild(textArea);
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
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl tracking-tight text-[#553128]">
              Meet the{" "}
              <span className="bg-gradient-to-r from-[#F4A135] to-[#EB612E] bg-clip-text text-transparent">
                EdenCode Team
              </span>
            </h1>
            <p className="text-xl text-[#553128]/80">
              World-class researchers and engineers pushing the
              boundaries of quantum computing and AI
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Founders Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-[#553128] mb-3">Founders</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F4A135] to-[#EB612E] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="border-[#F4A135]/20 hover:border-[#F4A135] transition-all duration-300 hover:shadow-md overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 p-5">
                      {/* Profile Image */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F4A135]/20 to-[#EB612E]/20 flex-shrink-0 overflow-hidden">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#553128]/30 text-2xl">
                            {member.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#553128] truncate">
                          {member.name}
                        </h3>
                        <p className="text-sm text-[#EB612E] mb-1">
                          {member.role}
                        </p>
                        <p className="text-xs text-[#553128]/60 line-clamp-2">
                          {member.education}
                        </p>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-1 px-5 pb-4 border-t border-[#F4A135]/10 pt-3">
                      <button
                        className="p-2 rounded-md bg-[#FFF9D0] hover:bg-[#F4A135]/20 transition-colors cursor-pointer"
                        title={member.email}
                        onClick={() => copyEmailToClipboard(member.email)}
                      >
                        <Mail className="w-4 h-4 text-[#553128]" />
                      </button>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md bg-[#FFF9D0] hover:bg-[#F4A135]/20 transition-colors cursor-pointer"
                        >
                          <Linkedin className="w-4 h-4 text-[#553128]" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md bg-[#FFF9D0] hover:bg-[#F4A135]/20 transition-colors cursor-pointer"
                        >
                          <Github className="w-4 h-4 text-[#553128]" />
                        </a>
                      )}
                      {member.homepage && (
                        <a
                          href={member.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md bg-[#FFF9D0] hover:bg-[#F4A135]/20 transition-colors cursor-pointer"
                          title="Personal Homepage"
                        >
                          <Globe className="w-4 h-4 text-[#553128]" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advisors Section */}
          {advisors.length > 0 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl text-[#553128] mb-3">Advisors</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F4A135] to-[#EB612E] mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {advisors.map((member, index) => (
                  <Card
                    key={index}
                    className="border-[#F4A135]/20 hover:border-[#F4A135] transition-all duration-300 hover:shadow-md overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 p-5">
                        {/* Profile Image */}
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F4A135]/20 to-[#EB612E]/20 flex-shrink-0 overflow-hidden">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#553128]/30 text-2xl">
                              {member.name.charAt(0)}
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[#553128] truncate">
                            {member.name}
                          </h3>
                          <p className="text-sm text-[#EB612E] mb-1">
                            {member.role}
                          </p>
                          <p className="text-xs text-[#553128]/60 line-clamp-2">
                            {member.education}
                          </p>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-1 px-5 pb-4 border-t border-[#F4A135]/10 pt-3">
                        <button
                          className="p-2 rounded-md bg-[#FFF9D0] hover:bg-[#F4A135]/20 transition-colors cursor-pointer"
                          title={member.email}
                          onClick={() => copyEmailToClipboard(member.email)}
                        >
                          <Mail className="w-4 h-4 text-[#553128]" />
                        </button>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-md bg-[#FFF9D0] hover:bg-[#F4A135]/20 transition-colors cursor-pointer"
                          >
                            <Linkedin className="w-4 h-4 text-[#553128]" />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-md bg-[#FFF9D0] hover:bg-[#F4A135]/20 transition-colors cursor-pointer"
                          >
                            <Github className="w-4 h-4 text-[#553128]" />
                          </a>
                        )}
                        {member.homepage && (
                          <a
                            href={member.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-md bg-[#FFF9D0] hover:bg-[#F4A135]/20 transition-colors cursor-pointer"
                            title="Personal Homepage"
                          >
                            <Globe className="w-4 h-4 text-[#553128]" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF9D0] to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl text-[#553128]">
              Join Our Team
            </h2>
            <p className="text-xl text-[#553128]/80">
              We're always looking for talented individuals
              passionate about quantum computing and AI
            </p>
            <button className="px-8 py-4 bg-[#EB612E] hover:bg-[#EB612E]/90 text-white rounded-lg transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </div>
  );
}