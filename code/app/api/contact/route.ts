import { promises as fs } from "fs"
import { join } from "path"

const messagesFile = join(process.cwd(), "data", "messages.json")

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.mkdir(join(process.cwd(), "data"), { recursive: true })
  } catch {
    // Directory already exists
  }
}

// Read messages from file
async function readMessages() {
  await ensureDataDir()
  try {
    const data = await fs.readFile(messagesFile, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

// Write messages to file
async function writeMessages(messages: unknown[]) {
  await ensureDataDir()
  await fs.writeFile(messagesFile, JSON.stringify(messages, null, 2))
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const messages = await readMessages()

    const newMessage = {
      id: Date.now(),
      name,
      email,
      phone: phone || "",
      subject,
      message,
      timestamp: new Date().toISOString(),
      read: false,
    }

    messages.push(newMessage)
    await writeMessages(messages)

    console.log("[v0] New message saved:", newMessage.id)

    return Response.json({ success: true, message: "Message saved successfully" })
  } catch (error) {
    console.error("Error saving message:", error)
    return Response.json({ error: "Failed to save message" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const messages = await readMessages()
    return Response.json({ messages })
  } catch (error) {
    console.error("Error retrieving messages:", error)
    return Response.json({ messages: [] })
  }
}
