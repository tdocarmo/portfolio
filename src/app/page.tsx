import { TechScroller } from '@/components/TechScroller';
import { ProfilTabs } from '@/components/ProfilTabs';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20">
        <div className="section-content">
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-12 pt-8 pb-16 md:pt-12 md:pb-32 px-4 sm:px-8">
            <div className="flex flex-col items-center md:items-start gap-8 max-w-xl text-center md:text-left">
              <div className="flex items-center gap-2 border border-primary/20 rounded-2xl px-4 py-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-primary font-medium">Disponible pour de nouveaux projets</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent hover:from-blue-600 hover:to-blue-800 transition-all duration-300">Développeur Full-Stack</h1>
              <TechScroller />
              <p className="text-lg text-foreground/80">Passionné par le développement, je construis des applications qui répondent à des besoins précis. Mon objectif est de faire en sorte que la technologie serve un but clair.</p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="#projets" 
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Voir mes projets
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
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
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="section gradient-bg">
        <div className="section-content">
          <ProfilTabs />
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="section bg-background">
        <div className="section-content">
          <h2 className="text-3xl font-bold mb-4 text-primary">Mes Projets</h2>
          <p className="text-lg text-foreground/80">Quelques projets marquants, avec liens, images ou descriptions. (À personnaliser)</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section gradient-bg">
        <div className="section-content">
          <h2 className="text-3xl font-bold mb-4 text-primary">Contact</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
