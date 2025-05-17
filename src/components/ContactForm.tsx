"use client";

import React from "react";

export default function ContactForm() {
  const [status, setStatus] = React.useState<'idle'|'success'|'error'|'loading'>('idle');
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setError(result.error || "Erreur lors de l'envoi du message.");
      }
    } catch (err) {
      setStatus('error');
      setError("Erreur réseau ou serveur.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-background border border-foreground/10 rounded-lg p-6 flex flex-col gap-4 shadow-md">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">Nom</label>
        <input type="text" id="name" name="name" required className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition" />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">E-mail</label>
        <input type="email" id="email" name="email" required className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition" />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium">Message</label>
        <textarea id="message" name="message" required rows={5} className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition" />
      </div>
      <button type="submit" disabled={status==='loading'} className="bg-primary text-background font-semibold py-2 px-6 rounded hover:bg-primary/90 transition disabled:opacity-60">
        {status==='loading' ? 'Envoi en cours...' : 'Envoyer'}
      </button>
      {status==='success' && <p className="text-green-600 text-center mt-2">Message envoyé avec succès !</p>}
      {status==='error' && <p className="text-red-600 text-center mt-2">{error}</p>}
    </form>
  );
} 