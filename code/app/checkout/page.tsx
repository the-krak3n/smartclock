"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Lock, CreditCard, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "premium"
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    upiId: "",
  })

  const planDetails = {
    standard: { name: "Standard", price: 6999, features: ["Wi-Fi connectivity", "Smart reminders"] },
    premium: {
      name: "Premium",
      price: 9999,
      features: ["Everything in Standard", "Retractable NoteCam", "AI Lecture Summarizer"],
    },
  }

  const selectedPlan = planDetails[plan as keyof typeof planDetails] || planDetails.premium

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Order submitted:", { plan, paymentMethod, ...formData })
    alert("Order placed successfully! You will receive a confirmation email shortly.")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">Smart Clock Checkout</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Delivery Information */}
                <section className="p-6 rounded-xl border border-border bg-card/50">
                  <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <label className="block text-sm font-medium mb-2">Email *</label>
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
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Institution Name *</label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="School/College Name"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Street address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Mumbai"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Maharashtra"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="400001"
                      />
                    </div>
                  </div>
                </section>

                {/* Payment Method Selection */}
                <section className="p-6 rounded-xl border border-border bg-card/50">
                  <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-lg border-2 transition flex items-center gap-3 ${
                        paymentMethod === "card" ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <CreditCard className="w-6 h-6" />
                      <div className="text-left">
                        <div className="font-semibold">Credit/Debit Card</div>
                        <div className="text-xs text-muted-foreground">Visa, Mastercard, Amex</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("upi")}
                      className={`p-4 rounded-lg border-2 transition flex items-center gap-3 ${
                        paymentMethod === "upi" ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <Smartphone className="w-6 h-6" />
                      <div className="text-left">
                        <div className="font-semibold">UPI Payment</div>
                        <div className="text-xs text-muted-foreground">Google Pay, PhonePe, BHIM</div>
                      </div>
                    </button>
                  </div>

                  {/* Card Payment Form */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Card Number *</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          maxLength={19}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Expiry Date *</label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            required
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">CVV *</label>
                          <input
                            type="text"
                            name="cardCVV"
                            value={formData.cardCVV}
                            onChange={handleInputChange}
                            required
                            maxLength={4}
                            placeholder="123"
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI Payment Form */}
                  {paymentMethod === "upi" && (
                    <div>
                      <label className="block text-sm font-medium mb-2">UPI ID *</label>
                      <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        required
                        placeholder="yourname@bankname"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        You will be redirected to your UPI app to complete the payment
                      </p>
                    </div>
                  )}
                </section>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Lock className="w-4 h-4 mr-2" />
                  Complete Purchase
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 rounded-xl border border-border bg-card/50">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{selectedPlan.name} Plan</span>
                    <span className="font-semibold">₹{selectedPlan.price.toLocaleString("en-IN")}</span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-2">Includes:</h3>
                    <ul className="space-y-1">
                      {selectedPlan.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{selectedPlan.price.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>₹200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (10%)</span>
                    <span>₹{Math.round((selectedPlan.price + 200) * 0.1).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-500">
                    <span>Discount (10%)</span>
                    <span>-₹{Math.round((selectedPlan.price + 200) * 0.1).toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <div className="flex justify-between font-bold text-lg pt-6 border-t border-border">
                  <span>Total</span>
                  <span className="text-accent">₹{(selectedPlan.price + 200).toLocaleString("en-IN")}</span>
                </div>

                <div className="mt-6 p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="flex items-start gap-2 text-xs">
                    <Lock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Your payment is secured with 256-bit encryption and PCI DSS compliant</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <p>30-day money back guarantee</p>
                  <p>Free installation & training</p>
                  <p>2-year warranty included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
