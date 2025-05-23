"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_ID,
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        form.reset();
        toast.success("Message envoyé avec succès !");
      } else {
        throw new Error(result.message || "Erreur lors de l'envoi du message");
      }
    } catch (error) {
      setStatus('error');
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
      console.error('Erreur:', error);
    } finally {
      setStatus('idle');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <Input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            className="peer"
            required
          />
          <label
            htmlFor="name"
            className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Nom
          </label>
        </div>

        <div className="relative">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            className="peer"
            required
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Email
          </label>
        </div>
      </div>

      <div className="relative">
        <Input
          type="text"
          id="subject"
          name="subject"
          placeholder=" "
          className="peer"
          required
        />
        <label
          htmlFor="subject"
          className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Sujet
        </label>
      </div>

      <div className="relative">
        <Textarea
          id="message"
          name="message"
          placeholder=" "
          className="peer min-h-[150px] resize-none"
          required
        />
        <label
          htmlFor="message"
          className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Message
        </label>
      </div>

      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
    </form>
  );
}