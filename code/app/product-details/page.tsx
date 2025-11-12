"use client"

import type React from "react"

import { ArrowLeft, Camera, Brain, Globe, Zap, BookOpen, Clock, ShieldCheck, Battery } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold">SmartClock</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
                Smart Clock: The Intelligent Classroom Companion
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Experience the future of education technology. Our Smart Clock is engineered to revolutionize how
                teachers and students interact with classroom content.
              </p>
            </div>

            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border flex items-center justify-center mb-12">
              <img
                src="/professional-high-tech-smart-wall-clock-with-ai-re.jpg"
                alt="Smart Clock Premium - Detailed product view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Comprehensive Feature Overview</h2>

            <div className="space-y-8">
              <DetailedFeature
                icon={<Camera className="w-8 h-8" />}
                title="Retractable NoteCam with AI-Powered OCR"
                description="Our advanced retractable camera system captures everything written on the board with exceptional clarity. The integrated AI-powered OCR technology instantly converts handwritten notes and diagrams into editable digital text. This ensures no student misses important content and provides an accessible digital record of all lessons."
                image="/retractable-camera-mechanism-smart-clock-detailed-.jpg"
              />

              <DetailedFeature
                icon={<Brain className="w-8 h-8" />}
                title="Real-Time Lecture Summarizer with AI"
                description="Turn lengthy lectures into concise, organized summaries automatically. Our AI-powered speech-to-text engine captures every word, then intelligently extracts key points and creates bullet-point summaries in real-time. Students get structured notes without distraction, and teachers receive valuable insights about lesson effectiveness."
                image="/ai-powered-speech-recognition-display-interface-sm.jpg"
              />

              <DetailedFeature
                icon={<Globe className="w-8 h-8" />}
                title="Live Translation & Multilingual Support"
                description="Break down language barriers with instant real-time translation. Support students from diverse backgrounds with simultaneous translation into 50+ languages. Subtitles display automatically, ensuring every student fully understands the lesson regardless of their native language."
                image="/multilingual-translation-interface-display-multipl.jpg"
              />

              <DetailedFeature
                icon={<Zap className="w-8 h-8" />}
                title="Smart Reminders & Notifications"
                description="Intelligent scheduling system that sends gentle, non-disruptive alerts for class transitions, homework deadlines, and important announcements. Customizable notification settings ensure teachers maintain full control over classroom disruptions while keeping everyone informed."
                image="/smart-reminder-notification-classroom-display.jpg"
              />

              <DetailedFeature
                icon={<BookOpen className="w-8 h-8" />}
                title="Seamless Learning Integration"
                description="Connect with your existing educational ecosystem. Smart Clock integrates with Google Classroom, Microsoft Teams, Apple Schoolwork, school portals, and major LMS platforms. All data syncs automatically for a unified classroom management experience."
                image="/smart-clock-lms-integration-display.jpg"
              />

              <DetailedFeature
                icon={<Battery className="w-8 h-8" />}
                title="Always Connected Connectivity"
                description="Dual Wi-Fi and Bluetooth connectivity keeps your Smart Clock synchronized with all devices in real-time. Weather-resistant design ensures reliable performance in any educational environment, from bustling classrooms to outdoor learning spaces."
                image="/smart-clock-connectivity-features.jpg"
              />
            </div>
          </div>
        </section>

        {/* Product Gallery Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Smart Clock in Action</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-80 rounded-xl overflow-hidden border border-border hover:border-accent transition">
                <img
                  src="/modern-futuristic-smart-wall-clock-with-retractabl.jpg"
                  alt="Smart Clock modern design in classroom"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative h-80 rounded-xl overflow-hidden border border-border hover:border-accent transition">
                <img
                  src="/professional-high-tech-smart-wall-clock-with-ai-re.jpg"
                  alt="Smart Clock premium view with AI features"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative h-80 rounded-xl overflow-hidden border border-border hover:border-accent transition">
                <img
                  src="/retractable-camera-mechanism-smart-clock-detailed-.jpg"
                  alt="Detailed retractable camera mechanism"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative h-80 rounded-xl overflow-hidden border border-border hover:border-accent transition">
                <img
                  src="/ai-powered-speech-recognition-display-interface-sm.jpg"
                  alt="AI speech recognition interface"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Technical Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <SpecGroup
                title="Hardware"
                specs={[
                  { label: "Processor", value: "Raspberry Pi 4 (4GB RAM) or ESP32" },
                  { label: "Display", value: "10-inch LED/LCD Full HD (1920x1200)" },
                  { label: "Camera", value: "12MP HD Retractable Wide-Angle" },
                  { label: "Microphone", value: "Noise-cancelling array microphone" },
                  { label: "Speaker", value: "Stereo mini speakers with 3W output" },
                ]}
              />

              <SpecGroup
                title="Connectivity & Power"
                specs={[
                  { label: "Wi-Fi", value: "802.11 a/b/g/n/ac dual-band" },
                  { label: "Bluetooth", value: "5.0 with extended range" },
                  { label: "Battery", value: "12-hour power-efficient operation" },
                  { label: "Charging", value: "USB-C fast charging (30W)" },
                  { label: "Standby Time", value: "Up to 48 hours" },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SpecGroup
                title="Sensors & Features"
                specs={[
                  { label: "Light Sensor", value: "Auto-adjust display brightness" },
                  { label: "Temperature Sensor", value: "Environment monitoring" },
                  { label: "Proximity Sensor", value: "Presence detection" },
                  { label: "Accelerometer", value: "Drop detection and orientation" },
                ]}
              />

              <SpecGroup
                title="Software & Security"
                specs={[
                  { label: "Operating System", value: "Custom Linux-based OS" },
                  { label: "AI Engine", value: "TensorFlow Lite support" },
                  { label: "Security", value: "Military-grade encryption" },
                  { label: "Data Privacy", value: "GDPR & FERPA compliant" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Why Choose Smart Clock?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitCard
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Proven Education Impact"
                description="Teachers report 40% improvement in student engagement and 35% increase in information retention with Smart Clock."
              />
              <BenefitCard
                icon={<Zap className="w-6 h-6" />}
                title="Saves 5+ Hours Per Week"
                description="Automated note digitization and summarization eliminates manual preparation work, freeing teachers for meaningful student interaction."
              />
              <BenefitCard
                icon={<Globe className="w-6 h-6" />}
                title="Inclusive Learning"
                description="Live translation and accessibility features ensure every student, regardless of ability or background, can fully participate."
              />
              <BenefitCard
                icon={<Clock className="w-6 h-6" />}
                title="Future-Ready Technology"
                description="Regular software updates and AI improvements keep your classroom at the cutting edge of educational innovation."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">Ready to Upgrade Your Classroom?</h2>
              <p className="text-lg text-muted-foreground">
                Join hundreds of schools already transforming their teaching with Smart Clock.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/checkout?plan=premium">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Order Premium Plan
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
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-accent" />
            <span className="font-semibold">SmartClock</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Smart Clock. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function DetailedFeature({
  icon,
  title,
  description,
  image,
}: {
  icon: React.ReactNode
  title: string
  description: string
  image?: string
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition">
      <div className="w-full lg:w-1/3 flex-shrink-0">
        {image ? (
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 object-cover rounded-lg border border-border/50"
          />
        ) : (
          <div className="w-full h-48 bg-accent/10 rounded-lg border border-border/50 flex items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center text-accent/50">{icon}</div>
          </div>
        )}
      </div>
      <div className="w-full lg:w-2/3">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function SpecGroup({ title, specs }: { title: string; specs: { label: string; value: string }[] }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card/50">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {specs.map((spec, idx) => (
          <li key={idx} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{spec.label}</span>
            <span className="font-medium">{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
