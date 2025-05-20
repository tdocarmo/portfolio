import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Développeur Fullstack Toni Do Carmo",
  description: "Portfolio de Toni Do Carmo - Développeur Fullstack passionné par la création d'expériences web modernes et performantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <footer className="w-full py-4 text-center text-sm text-foreground/60 bg-background border-t border-foreground/10">
              © {new Date().getFullYear()} Toni Do Carmo. All Rights Reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
