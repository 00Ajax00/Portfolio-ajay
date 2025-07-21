export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic input validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Basic sanitization
  if (name.length > 100 || email.length > 100 || message.length > 1000) {
    return res.status(400).json({ message: 'Input length exceeded' });
  }

  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `**New Message**\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      }),
    });
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Discord error:', error);
    return res.status(500).json({ message: 'Failed to send message' });
  }
}