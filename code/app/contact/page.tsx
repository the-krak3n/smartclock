"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("[v0] Submitting form with data:", formData)

      const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]")
      const newMessage = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
        read: false,
      }
      messages.push(newMessage)
      localStorage.setItem("contactMessages", JSON.stringify(messages))

      console.log("[v0] Message saved to localStorage:", newMessage)

      alert("Thank you for your message! We will get back to you shortly.")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      alert("Error sending message. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">Contact Us</span>
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about Smart Clock? We're here to help. Reach out to us through any of the following
              channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information Cards */}
            <ContactInfoCard
              icon={<Phone className="w-6 h-6" />}
              title="Phone Support"
              details={[
                { label: "Main Line", value: "+91 (222) 456-7890" },
                { label: "Sales", value: "+91 (999) 123-4567" },
                { label: "Support", value: "+91 (888) 654-3210" },
                { label: "Hours", value: "Mon-Fri, 9 AM - 6 PM IST" },
              ]}
            />

            <ContactInfoCard
              icon={<Mail className="w-6 h-6" />}
              title="Email Addresses"
              details={[
                { label: "General Inquiries", value: "hello@smartclock.in" },
                { label: "Sales Team", value: "sales@smartclock.in" },
                { label: "Support Team", value: "support@smartclock.in" },
                { label: "Partnerships", value: "partnerships@smartclock.in" },
              ]}
            />

            <ContactInfoCard
              icon={<MapPin className="w-6 h-6" />}
              title="Office Location"
              details={[
                { label: "Address", value: "123 Tech Park, Mumbai 400001" },
                { label: "State", value: "Maharashtra, India" },
                { label: "Phone", value: "+91 (222) 456-7890" },
                { label: "Hours", value: "Mon-Fri, 10 AM - 6 PM" },
              ]}
            />
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="p-8 rounded-xl border border-border bg-card/50">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request Demo</option>
                    <option value="bulk">Bulk Orders</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold mb-3">Frequently Asked Questions</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <p className="font-medium">What is the delivery time?</p>
                    <p className="text-muted-foreground">
                      Standard delivery takes 7-10 business days. Express delivery available.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Do you offer installation?</p>
                    <p className="text-muted-foreground">
                      Yes, free installation and training included with all orders.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">What's your warranty?</p>
                    <p className="text-muted-foreground">
                      2-year comprehensive warranty with optional extended coverage.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-accent/10">
                <h3 className="text-lg font-semibold mb-3">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our support team is available 24/7 to help with any urgent issues.
                </p>
                <Link href="tel:+919999999999">
                  <Button variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Call Support Line
                  </Button>
                </Link>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">All times are in IST (Indian Standard Time)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card/30 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">© 2025 Smart Clock. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ContactInfoCard({
  icon,
  title,
  details,
}: { icon: React.ReactNode; title: string; details: { label: string; value: string }[] }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {details.map((detail, idx) => (
          <div key={idx} className="text-sm">
            <p className="text-muted-foreground">{detail.label}</p>
            <p className="font-medium">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
