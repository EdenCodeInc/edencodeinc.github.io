import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ResearchPage() {
  const blogPosts = [
    {
      title:
        "How Focused Are LLMs? Understanding the Accuracy Cliff via Repetitive Deterministic Prediction Tasks",
      excerpt:
        "A quantitative study revealing why large language models fail at repetitive reasoning tasks and how statistical physics can explain—and mitigate—these failures through divide-and-conquer strategies.",
      author: "EdenCode Research Team",
      date: "November 15, 2025",
      category: "AI/ML Research",
      readTime: "12 min read",
      link: "/blog-llm-accuracy",
    },
    {
      title: "AI for Quantum Error Correction",
      excerpt:
        "Explore the role of quantum error correction, the necessity of leveraging artificial intelligence for error detection and correction, and how these technologies collaboratively enhance the performance of quantum algorithms.",
      author: "Dr. Wanda Hou",
      date: "March 15, 2025",
      category: "Quantum Error Correction",
      readTime: "8 min read",
      link: "/blog-ai-quantum-error-correction",
    },
  ];

  const categories = [
    "All",
    "Research",
    "Tutorial",
    "Benchmarks",
    "Technical",
    "Industry",
    "AI/ML",
    "Vision",
  ];

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
              EdenCode{" "}
              <span className="bg-gradient-to-r from-[#F4A135] to-[#EB612E] bg-clip-text text-transparent">
                Blogs
              </span>
            </h1>
            <p className="text-xl text-[#553128]/80">
              Exploring the frontiers of quantum error
              correction and AI-powered decoding
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-[#F4A135]/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {/* Category badges removed - not necessary for now */}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Link key={index} href={post.link}>
                <Card className="border-[#F4A135]/20 hover:border-[#F4A135] transition-all duration-300 hover:shadow-lg cursor-pointer group h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-[#EB612E] text-white hover:bg-[#EB612E]/90">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-[#553128]/60">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-[#553128] group-hover:text-[#EB612E] transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[#553128]/70">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#F4A135]/10">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-[#553128]/60">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#553128]/60">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#EB612E] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF9D0] to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl text-[#553128]">
              Stay Updated
            </h2>
            <p className="text-xl text-[#553128]/80">
              Subscribe to our newsletter for the latest
              research updates and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-[#F4A135]/30 focus:outline-none focus:border-[#F4A135] bg-white"
              />
              <button className="px-6 py-3 bg-[#EB612E] hover:bg-[#EB612E]/90 text-white rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}