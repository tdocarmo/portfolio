import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ProfilTabs } from "@/components/ProfilTabs";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Accueil */}
      <section id="accueil" className="w-full flex flex-col items-center gap-8 scroll-mt-24">
        {/* Section d'accueil épurée pour portfolio moderne */}
        <div className="flex flex-col items-center justify-center py-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Bienvenue sur mon portfolio</h1>
          <p className="text-lg text-foreground/80 text-center max-w-xl">Je suis Toni Do Carmo, développeur web passionné par la création d'expériences numériques élégantes et performantes.</p>
        </div>
      </section>
      {/* Mon Profil */}
      <section id="profil" className="w-full max-w-3xl mx-auto py-24 scroll-mt-24">
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
        <p className="text-lg text-foreground/80">Formulaire ou informations de contact. (À personnaliser)</p>
      </section>
    </div>
  );
}
