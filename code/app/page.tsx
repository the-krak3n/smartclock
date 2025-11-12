"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Clock, Camera, Brain, Globe, Zap, BookOpen, ArrowRight, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">SmartClock</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/product-details" className="text-sm hover:text-accent transition">
                Product
              </Link>
              <Link href="/#features" className="text-sm hover:text-accent transition">
                Features
              </Link>
              <Link href="/#pricing" className="text-sm hover:text-accent transition">
                Pricing
              </Link>
              <Link href="/contact" className="text-sm hover:text-accent transition">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-card rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
              <Link href="/product-details" className="block text-sm hover:text-accent transition py-2">
                Product
              </Link>
              <Link href="/#features" className="block text-sm hover:text-accent transition py-2">
                Features
              </Link>
              <Link href="/#pricing" className="block text-sm hover:text-accent transition py-2">
                Pricing
              </Link>
              <Link href="/contact" className="block text-sm hover:text-accent transition py-2">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
                  Transform Your Classroom with AI-Powered Intelligence
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Smart Clock brings the future of education to every classroom. Automated note capture, real-time
                  translation, and AI-powered summaries—all in one intelligent device.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/checkout?plan=premium">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                    Explore Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/product-details">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-border overflow-hidden">
              <img
                src="/modern-futuristic-smart-wall-clock-with-retractabl.jpg"
                alt="Smart Clock - AI-powered classroom device"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features Built for Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to revolutionize your teaching and enhance student learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Camera className="w-8 h-8" />}
              title="Retractable NoteCam"
              description="AI-powered OCR captures handwritten notes and diagrams instantly, converting them to editable digital text."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="AI Lecture Summarizer"
              description="Real-time speech-to-text transcription with intelligent key-point extraction and automated note summarization."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Live Translation"
              description="Instantly translate lectures into 50+ languages with auto-generated subtitles for inclusive learning."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Smart Reminders"
              description="Intelligent scheduling system with customizable notifications for class transitions and deadlines."
            />
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="LMS Integration"
              description="Seamless connectivity with Google Classroom, Microsoft Teams, and major learning management systems."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Always Connected"
              description="Dual Wi-Fi and Bluetooth connectivity ensures real-time synchronization with all devices."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Schools & Colleges Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 500+ institutions transforming education with Smart Clock
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <TestimonialCard
              name="Dr. Rajesh Patel"
              institution="Delhi Public School, Mumbai"
              role="Principal"
              testimonial="Smart Clock has completely transformed how our teachers conduct classes. Students are more engaged, and we've seen a 40% improvement in information retention."
              rating={5}
            />
            <TestimonialCard
              name="Prof. Ananya Singh"
              institution="IIT Mumbai"
              role="Computer Science Professor"
              testimonial="The AI summarization feature saves me 5+ hours per week on lecture notes. My students love having instant access to accurate, organized content."
              rating={5}
            />
            <TestimonialCard
              name="Sarah Williams"
              institution="Global International School, Bangalore"
              role="English Department Head"
              testimonial="Live translation is a game-changer for our diverse student population. Students from different backgrounds can now fully participate in every class."
              rating={5}
            />
            <TestimonialCard
              name="Mr. Vikram Kumar"
              institution="Xaviers Sr. Secondary School"
              role="Head of Technology"
              testimonial="Implementation was seamless, and the technical support has been exceptional. It's rare to find education tech that actually works as promised."
              rating={5}
            />
            <TestimonialCard
              name="Dr. Emily Thompson"
              institution="Stanford Educational Institute"
              role="Teaching Coordinator"
              testimonial="The retractable camera and OCR accuracy are impressive. Students get professional-quality notes without manual transcription."
              rating={5}
            />
            <TestimonialCard
              name="Principal Ashok Verma"
              institution="Delhi International School"
              role="Principal"
              testimonial="Smart Clock has become essential infrastructure in our classrooms. The ROI is evident in both student satisfaction and academic outcomes."
              rating={5}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Institutions using Smart Clock</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <p className="text-muted-foreground">Students benefited</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <p className="text-muted-foreground">Average rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your institution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              name="Standard"
              price="6,999"
              description="Perfect for getting started"
              features={[
                "10-inch Full HD Display",
                "Wi-Fi Connectivity",
                "Smart Reminders",
                "Basic Translation (10 languages)",
                "Email Support",
                "1-Year Warranty",
              ]}
              highlighted={false}
              plan="standard"
            />

            <PricingCard
              name="Premium"
              price="9,999"
              description="Full-featured for advanced teaching"
              features={[
                "Everything in Standard +",
                "Retractable NoteCam with OCR",
                "AI Lecture Summarizer",
                "Live Translation (50+ languages)",
                "LMS Integration",
                "Priority Support 24/7",
                "2-Year Warranty",
                "Free Installation & Training",
              ]}
              highlighted={true}
              plan="premium"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">All prices include free shipping and installation</p>
            <p className="text-sm text-muted-foreground">30-day money-back guarantee on all plans</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl border border-accent/20 p-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Transform Your Classroom?</h2>
            <p className="text-lg text-muted-foreground">
              Join schools worldwide using Smart Clock to enhance education and improve student outcomes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/checkout?plan=premium">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Order Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-semibold">SmartClock</span>
              </div>
              <p className="text-sm text-muted-foreground">Transforming education with AI-powered technology.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/product-details" className="hover:text-accent transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-accent transition">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-accent transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-accent transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-accent transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-accent transition">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Smart Clock. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-background hover:bg-card transition group cursor-pointer">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function TestimonialCard({
  name,
  institution,
  role,
  testimonial,
  rating,
}: {
  name: string
  institution: string
  role: string
  testimonial: string
  rating: number
}) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial}"</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
        <p className="text-xs text-accent mt-1">{institution}</p>
      </div>
    </div>
  )
}

function PricingCard({
  name,
  price,
  description,
  features,
  highlighted,
  plan,
}: {
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
  plan: string
}) {
  return (
    <div
      className={`rounded-xl border-2 p-8 transition ${
        highlighted ? "border-accent bg-accent/5 shadow-lg scale-105" : "border-border bg-card/50 hover:bg-card"
      }`}
    >
      {highlighted && (
        <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">Most Popular</div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>

      <div className="mb-8">
        <span className="text-5xl font-bold">₹{price}</span>
        <span className="text-muted-foreground ml-2">one-time</span>
      </div>

      <Link href={`/checkout?plan=${plan}`} className="w-full block mb-8">
        <Button
          size="lg"
          className={`w-full ${
            highlighted ? "bg-accent text-accent-foreground hover:bg-accent/90" : "border border-border hover:bg-card"
          }`}
        >
          Order Now
        </Button>
      </Link>

      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
