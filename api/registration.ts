import nodemailer from 'nodemailer';

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
    // Configurar el transportador de nodemailer
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // o tu proveedor de email
      auth: {
        user: process.env.EMAIL_USER, // tu email
        pass: process.env.EMAIL_PASS, // tu contraseña de aplicación
      },
    });

    // Email al usuario
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '¡Gracias por tu inscripción! - Espacio Recrearte',
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; color: #333;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #6c3eb9; text-align: center;">¡Gracias por tu inscripción, ${name}! 🎉</h2>
            <p style="font-size: 16px; line-height: 1.6;">
              Hola <strong>${name}</strong>,<br><br>
              ¡Estamos felices de que te unas a nuestro taller! 🙌  
              Confirmamos que elegiste el plan: <strong>${plan}</strong>.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              En breve nos pondremos en contacto contigo para confirmar tu inscripción y enviarte los detalles de pago.
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://chat.whatsapp.com/IjGG6twA6T7Am3olLhkvmO" target="_blank" style="background: #25D366; color: #fff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">
                👉 Unirme a la Comunidad de WhatsApp
              </a>
            </div>
            <p style="font-size: 16px; line-height: 1.6;">
              ¡Nos alegra mucho que seas parte de esta experiencia!  
            </p>
            <p style="font-weight: bold; color: #6c3eb9;">El equipo de Espacio Recrearte 💜</p>
          </div>
        </div>
      `,
    });

    // Email al administrador
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'espaciorecreartexxi@gmail.com',
      subject: 'Nueva Inscripción al Taller - Espacio Recrearte',
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; color: #333;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #e63946; text-align: center;">🚀 Nueva inscripción recibida</h2>
            <p style="font-size: 16px; line-height: 1.6;">
              Tenés una nueva inscripción al taller:
            </p>
            <ul style="list-style: none; padding: 0; font-size: 16px; line-height: 1.8;">
              <li><strong>📌 Nombre:</strong> ${name}</li>
              <li><strong>📧 Email:</strong> ${email}</li>
              <li><strong>📱 Teléfono:</strong> ${phone}</li>
              <li><strong>💳 Plan elegido:</strong> ${plan}</li>
              <li><strong>📝 Mensaje:</strong> ${message || 'Sin mensaje'}</li>
            </ul>
            <p style="margin-top: 20px; font-size: 15px; color: #555;">
              Recordá contactar a la persona cuanto antes 😉
            </p>
            <p style="font-weight: bold; color: #e63946;">Espacio Recrearte – Notificación automática</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error("Email error:", error);
    return res.status(500).json({ ok: false, error: "Error enviando email" });
  }
}