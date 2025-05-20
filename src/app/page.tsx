import { ProfilTabs } from "@/components/ProfilTabs";
import React from "react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { TechScroller } from "@/components/TechScroller";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Accueil */}
      <section id="accueil" className="w-full flex flex-col items-center gap-8 scroll-mt-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20 min-h-screen">
        {/* Section d'accueil avec texte à gauche et photo à droite */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12 py-32 px-4 sm:px-8">
          <div className="flex flex-col items-start gap-12 max-w-xl ml-1">
            <div className="flex items-center gap-2 border-[0.5px] border-blue-500 rounded-2xl px-4 py-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-blue-500 font-medium">Disponible pour de nouveaux projets</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-left bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent hover:from-blue-600 hover:to-blue-800 transition-all duration-300">Développeur Full-Stack</h1>
            <TechScroller />
            <p className="text-lg text-foreground/80 text-left">Passionné par le développement, je construis des applications qui répondent à des besoins précis. Mon objectif est de faire en sorte que la technologie serve un but clair.</p>
            <div className="flex gap-4 mt-4">
              <a 
                href="#projets" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Voir mes projets
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Me contacter
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 aspect-square relative rounded-lg overflow-hidden mt-8">
            <Image
              src="/images/profile.jpg"
              alt="Toni Do Carmo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      {/* Mon Profil */}
      <section id="profil" className="w-full max-w-3xl mx-auto py-32 scroll-mt-24 -mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Mon Profil</h2>
        <ProfilTabs />
      </section>
      {/* Mes Projets */}
      <section id="projets" className="w-full max-w-3xl mx-auto py-24 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-4">Mes Projets</h2>
        <p className="text-lg text-foreground/80">Quelques projets marquants, avec liens, images ou descriptions. (À personnaliser)</p>
      </section>
      {/* Contact */}
      <section id="contact" className="w-full max-w-3xl mx-auto py-24 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <ContactForm />
      </section>
    </div>
  );
}
