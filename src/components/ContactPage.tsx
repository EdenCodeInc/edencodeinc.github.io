import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "aa046548-cc97-471f-9a7d-3611a93c7f71",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          from_name: "EdenCode Contact Form",
        }),
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF9D0]/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-[#EB612E] to-[#F4A135] bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-[#553128]/70 max-w-3xl mx-auto">
              Have questions about our quantum error correction
              technology? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-[#F4A135]/20">
              <h2 className="text-3xl mb-6 text-[#553128]">
                Send us a message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-[#553128]"
                  >
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
                    className="border-[#F4A135]/30 focus:border-[#EB612E]"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[#553128]"
                  >
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
                    className="border-[#F4A135]/30 focus:border-[#EB612E]"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="company"
                    className="text-[#553128]"
                  >
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your organization"
                    className="border-[#F4A135]/30 focus:border-[#EB612E]"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-[#553128]"
                  >
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
                    className="border-[#F4A135]/30 focus:border-[#EB612E]"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-[#553128]"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="border-[#F4A135]/30 focus:border-[#EB612E] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#EB612E] to-[#F4A135] hover:opacity-90 text-white py-6"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! Your message has been sent
                    successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    Sorry, there was an error sending your
                    message. Please try again or email us
                    directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#EB612E] to-[#F4A135] rounded-2xl shadow-xl p-8 md:p-10 text-white">
                <h2 className="text-3xl mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Email</h3>
                      <a
                        href="mailto:info@edencode.ai"
                        className="text-white/90 hover:text-white"
                      >
                        info@edencode.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Phone</h3>
                      <p className="text-white/90">
                        Coming soon
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Location</h3>
                      <p className="text-white/90">
                        Palo Alto California, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#F4A135]/20">
                <h3 className="text-2xl mb-4 text-[#553128]">
                  Office Hours
                </h3>
                <div className="space-y-2 text-[#553128]/70">
                  <p>
                    <strong>Monday - Friday:</strong> 9:00 AM -
                    6:00 PM PST
                  </p>
                  <p>
                    <strong>Saturday - Sunday:</strong> Closed
                  </p>
                </div>
                <p className="mt-4 text-[#553128]/60">
                  We typically respond to all inquiries within
                  24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}