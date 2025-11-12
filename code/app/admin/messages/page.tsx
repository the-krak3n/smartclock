"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, Trash2, Eye, EyeOff, Mail, Phone, Calendar, Tag, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ContactMessage {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  timestamp: string
  read: boolean
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all")

  useEffect(() => {
    fetchMessages()
    const interval = setInterval(fetchMessages, 2000)
    return () => clearInterval(interval)
  }, [])

  const fetchMessages = () => {
    try {
      const storedMessages = localStorage.getItem("contactMessages")
      const parsedMessages = storedMessages ? JSON.parse(storedMessages) : []
      console.log("[v0] Messages loaded from localStorage:", parsedMessages.length)
      setMessages(parsedMessages)
    } catch (error) {
      console.error("[v0] Error loading messages:", error)
    }
    setLoading(false)
  }

  const deleteMessage = (id: number) => {
    const updated = messages.filter((m) => m.id !== id)
    setMessages(updated)
    localStorage.setItem("contactMessages", JSON.stringify(updated))
    setSelectedMessage(null)
  }

  const toggleReadStatus = (id: number) => {
    const updated = messages.map((m) => (m.id === id ? { ...m, read: !m.read } : m))
    setMessages(updated)
    localStorage.setItem("contactMessages", JSON.stringify(updated))
    // Update selected message if it's the current one
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(updated.find((m) => m.id === id) || null)
    }
  }

  const filteredMessages = messages.filter((m) => {
    if (filter === "unread") return !m.read
    if (filter === "read") return m.read
    return true
  })

  const unreadCount = messages.filter((m) => !m.read).length

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Admin - Contact Messages</h1>
            <p className="text-xs text-muted-foreground">{unreadCount} unread messages</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={fetchMessages}>
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex gap-3 mb-6">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-accent text-accent-foreground" : ""}
            >
              All Messages ({messages.length})
            </Button>
            <Button
              variant={filter === "unread" ? "default" : "outline"}
              onClick={() => setFilter("unread")}
              className={filter === "unread" ? "bg-accent text-accent-foreground" : ""}
            >
              Unread ({unreadCount})
            </Button>
            <Button
              variant={filter === "read" ? "default" : "outline"}
              onClick={() => setFilter("read")}
              className={filter === "read" ? "bg-accent text-accent-foreground" : ""}
            >
              Read ({messages.length - unreadCount})
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading messages...</p>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No messages yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Messages List */}
              <div className="lg:col-span-2 space-y-3">
                {filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    onClick={() => {
                      setSelectedMessage(msg)
                      toggleReadStatus(msg.id)
                    }}
                    className={`p-4 rounded-lg border cursor-pointer transition hover:bg-card/80 ${
                      msg.read ? "bg-card/40 border-border" : "bg-accent/10 border-accent/50 font-semibold"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{msg.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{msg.email}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Tag className="w-3 h-3 text-accent" />
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded capitalize">
                            {msg.subject}
                          </span>
                        </div>
                      </div>
                      {!msg.read && <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 ml-2 mt-1"></div>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Details */}
              {selectedMessage && (
                <div className="p-6 rounded-lg border border-border bg-card/50 h-fit sticky top-20">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold">Message Details</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Name</p>
                      <p className="font-medium">{selectedMessage.name}</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground mb-1 flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        Email
                      </p>
                      <p className="font-medium break-all">{selectedMessage.email}</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground mb-1 flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        Phone
                      </p>
                      <p className="font-medium">{selectedMessage.phone || "Not provided"}</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground mb-1">
                        <Tag className="w-3 h-3 inline mr-2" />
                        Subject
                      </p>
                      <p className="font-medium capitalize">{selectedMessage.subject}</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground mb-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        Received
                      </p>
                      <p className="font-medium">{new Date(selectedMessage.timestamp).toLocaleString()}</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground mb-2">Message</p>
                      <p className="bg-background p-3 rounded-lg whitespace-pre-wrap break-words">
                        {selectedMessage.message}
                      </p>
                    </div>

                    <Button
                      onClick={() => toggleReadStatus(selectedMessage.id)}
                      variant="outline"
                      className="w-full mt-4"
                    >
                      {selectedMessage.read ? (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Mark as Unread
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4 mr-2" />
                          Mark as Read
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
