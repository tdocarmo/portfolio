import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_TO_EMAIL, // expéditeur (doit être validé sur Resend)
        to: process.env.CONTACT_TO_EMAIL,   // destinataire (toi)
        subject: `Nouveau message de contact de ${name}`,
        reply_to: email,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><b>Nom:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error: error.message || "Erreur lors de l'envoi de l'e-mail." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur. Veuillez réessayer plus tard." }, { status: 500 });
  }
} 