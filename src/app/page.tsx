"use client";

import Image from 'next/image';
import { TechScroller } from '@/components/TechScroller';
import { ProfilTabs } from '@/components/ProfilTabs';
import ContactForm from '@/components/ContactForm';
import ProjectsSection from '@/components/projects/ProjectsSection';
import { useEffect } from 'react';
import { useSection } from '@/context/SectionContext';

export default function Home() {
  const { setActiveSection } = useSection();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = sectionElement.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // hauteur de la navbar en pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="section bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20">
        <div className="section-content">
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 pt-8 pb-16 md:pt-12 md:pb-32 px-4 sm:px-8">
            <div className="flex flex-col items-center md:items-start gap-6 max-w-2xl text-center md:text-left">
              <div className="flex items-center gap-2 border border-primary/20 rounded-2xl px-4 py-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-base font-medium text-primary">Disponible pour de nouveaux projets</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent hover:from-blue-600 hover:to-blue-800 transition-all duration-300 whitespace-nowrap">Développeur Full-Stack</h1>
              <TechScroller />
              <p className="text-base md:text-lg text-foreground/80">Passionné par le développement, je construis des applications qui répondent à des besoins précis. Mon objectif est de faire en sorte que la technologie serve un but clair.</p>
              <div className="flex gap-4 mt-2">
                <button 
                  onClick={() => scrollToSection('projets')}
                  className="px-6 py-3 bg-primary text-primary-foreground text-base font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Voir mes projets
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-primary text-primary-foreground text-base font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Me contacter
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden mt-4 md:mt-0">
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
      <section id="projets" className="section bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20">
        <div className="section-content">
          <h2 className="text-3xl font-bold mb-4 text-primary">Mes Projets</h2>
          <p className="text-lg text-foreground/80 mb-8">Une sélection de mes projets récents, démontrant mes compétences techniques et ma capacité à résoudre des problèmes complexes.</p>
          <ProjectsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section gradient-bg">
        <div className="section-content">
          <h2 className="text-3xl font-bold mb-4 text-primary">Contact</h2>
          
          {/* Bouton de téléchargement CV */}
          <div className="flex justify-center mb-8">
            <a
              href="/cv-toni-do-carmo.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-base font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Télécharger mon CV
            </a>
          </div>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
