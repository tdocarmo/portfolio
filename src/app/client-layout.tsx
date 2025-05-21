"use client";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SectionProvider } from "@/context/SectionContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SectionProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <footer className="w-full py-4 text-center text-sm text-foreground/60 bg-background border-t border-foreground/10">
            © {new Date().getFullYear()} Toni Do Carmo. All Rights Reserved.
          </footer>
        </div>
        <Toaster richColors position="top-center" />
        <Analytics />
      </SectionProvider>
    </ThemeProvider>
  );
} 