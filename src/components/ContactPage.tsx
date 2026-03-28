import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { Label } from "./ui/label";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const payload = {
        access_key: "aa046548-cc97-471f-9a7d-3611a93c7f71",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        from_name: "EdenCode Contact Form",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClasses =
    "border-[#27272A] bg-[#18181B] text-[#FAFAFA] placeholder-[#52525B] focus:border-[#F4A135]/50 focus:ring-0";

  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-[#FAFAFA]">
              Get in{" "}
              <span className="bg-gradient-to-r from-[#F4A135] to-[#EB612E] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-[#A1A1AA] max-w-xl mx-auto">
              Have questions about our quantum error correction technology?
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div className="rounded-xl border border-[#27272A] bg-[#18181B]/50 p-8">
              <h2 className="text-xl text-[#FAFAFA] mb-6">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#A1A1AA] text-sm">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={inputClasses}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#A1A1AA] text-sm">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className={inputClasses}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#A1A1AA] text-sm">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your organization"
                    className={inputClasses}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#A1A1AA] text-sm">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className={inputClasses}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#A1A1AA] text-sm">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#EB612E] hover:bg-[#EB612E]/90 text-white py-5"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/10 text-green-400 text-sm">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/10 text-red-400 text-sm">
                    Sorry, there was an error. Please try again or email us
                    directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="rounded-xl border border-[#27272A] bg-[#18181B]/50 p-8">
                <h2 className="text-xl text-[#FAFAFA] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#F4A135]/10 border border-[#F4A135]/20">
                      <Mail className="w-5 h-5 text-[#F4A135]" />
                    </div>
                    <div>
                      <h3 className="text-sm text-[#FAFAFA] mb-1">Email</h3>
                      <a
                        href="mailto:hwanda@edencode.ai"
                        className="text-sm text-[#A1A1AA] hover:text-[#F4A135] transition-colors"
                      >
                        hwanda@edencode.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#F4A135]/10 border border-[#F4A135]/20">
                      <MapPin className="w-5 h-5 text-[#F4A135]" />
                    </div>
                    <div>
                      <h3 className="text-sm text-[#FAFAFA] mb-1">Location</h3>
                      <p className="text-sm text-[#A1A1AA]">
                        Palo Alto, California, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#27272A] bg-[#18181B]/50 p-8">
                <h3 className="text-lg text-[#FAFAFA] mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-[#A1A1AA]">
                  <p>Monday – Friday: 9:00 AM – 6:00 PM PST</p>
                  <p>Saturday – Sunday: Closed</p>
                </div>
                <p className="mt-4 text-xs text-[#52525B]">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
