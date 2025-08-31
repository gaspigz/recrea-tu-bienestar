// /api/registration.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const required = (v?: string) => (typeof v === 'string' && v.trim().length > 0);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, plan, message, website } = req.body || {};

    // Honeypot anti-bot (si viene con contenido, descartamos)
    if (website && String(website).trim().length > 0) {
      // Fingimos OK (para no dar feedback a bots)
      return res.status(200).json({ ok: true });
    }

    // Validaciones mínimas
    if (!required(name) || !required(email) || !required(phone) || !required(plan)) {
      return res.status(400).json({ ok: false, error: 'Faltan campos obligatorios.' });
    }

    // Transport Gmail (App Password requerido)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const to = process.env.TO_EMAIL || process.env.GMAIL_USER;

    const subject = `Nueva inscripción: ${name} (${plan})`;
    const text = `
Nueva inscripción desde el sitio:

Nombre:  ${name}
Email:   ${email}
Tel:     ${phone}
Plan:    ${plan}
Mensaje: ${message || '(sin mensaje)'}
`.trim();

    // Un HTML simple y prolijo
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5">
        <h2>Nueva inscripción</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Plan:</strong> ${escapeHtml(plan)}</p>
        <p><strong>Mensaje:</strong><br>${escapeHtml(message || '(sin mensaje)').replace(/\n/g, '<br>')}</p>
        <hr>
        <small>Enviado automáticamente desde el formulario.</small>
      </div>
    `;

    await transporter.sendMail({
      from: `"Inscripciones" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      text,
      html,
      replyTo: email, // para que puedas responder directo al postulante
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Error enviando email:', err);
    return res.status(500).json({ ok: false, error: 'Error al enviar el email.' });
  }
}

// Sanitizador simple
function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
