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
    // Función helper para enviar emails con EmailJS via fetch
    const sendEmail = async (templateId: string, templateParams: any) => {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: templateId,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          accessToken: process.env.EMAILJS_PRIVATE_KEY,
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        throw new Error(`EmailJS API error: ${response.status}`);
      }
      
      return response;
    };

    // 📩 Email al usuario
    await sendEmail(process.env.EMAILJS_TEMPLATE_USER_ID!, {
      from_name: name,
      from_email: email,
      plan,
      whatsapp_link: "https://chat.whatsapp.com/IjGG6twA6T7Am3olLhkvmO",
      reply_to: email,
    });

    // 📩 Email al administrador
    await sendEmail(process.env.EMAILJS_TEMPLATE_ADMIN_ID!, {
      from_name: name,
      from_email: email,
      phone,
      plan,
      message,
      to_email: "espaciorecreartexxi@gmail.com",
      reply_to: email,
    });

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error("EmailJS error:", error);
    return res.status(500).json({ ok: false, error: "Error enviando email" });
  }
}