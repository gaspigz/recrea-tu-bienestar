import emailjs from "@emailjs/nodejs";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Método no permitido" });
  }

  const { name, email, phone, plan, message, website } = req.body;

  // Honeypot anti-spam
  if (website && website.trim() !== "") {
    return res.status(400).json({ ok: false, error: "Spam detectado" });
  }

  // Validación de campos obligatorios
  if (!name || !email || !phone || !plan) {
    return res.status(400).json({ ok: false, error: "Campos obligatorios faltantes" });
  }

  try {
    // 📩 Email al usuario
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_USER_ID!,
      {
        from_name: name,
        from_email: email,
        plan,
        whatsapp_link: "https://chat.whatsapp.com/IjGG6twA6T7Am3olLhkvmO",
        replyTo: email,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    );

    // 📩 Email al administrador
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ADMIN_ID!,
      {
        from_name: name,
        from_email: email,
        phone,
        plan,
        message,
        to_email: "espaciorecreartexxi@gmail.com",
        replyTo: email,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    );

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error("EmailJS error:", error);
    return res.status(500).json({ ok: false, error: "Error enviando email" });
  }
}