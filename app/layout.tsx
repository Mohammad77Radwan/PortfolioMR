import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor, CommandTerminal, NebulaBackdrop } from "@/components";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ReadingProgress } from "@/components/reading-progress";
import { BackToTop } from "@/components/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://radwan-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mohammad Radwan - Développeur Web Full-Stack",
    template: "%s | Mohammad Radwan",
  },
  description:
    "Portfolio avancé de Mohammad Radwan - BTS SIO SLAM. Découvrez mes projets, compétences et réalisations en développement web moderne avec Next.js, React et TypeScript.",
  keywords: [
    "développeur web",
    "full-stack",
    "Next.js",
    "React",
    "TypeScript",
    "BTS SIO",
    "SLAM",
    "saint-étienne",
    "portfolio",
    "développeur frontend",
    "développeur backend",
  ],
  authors: [{ name: "Mohammad Radwan", url: BASE_URL }],
  creator: "Mohammad Radwan",
  publisher: "Mohammad Radwan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mohammad Radwan - Développeur Web Full-Stack",
    description:
      "Portfolio avancé avec projets, compétences et réalisations en développement web moderne",
    url: BASE_URL,
    siteName: "Portfolio Mohammad Radwan",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Mohammad Radwan - Développeur Web Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Radwan - Développeur Web Full-Stack",
    description:
      "Portfolio avancé avec projets, compétences et réalisations en développement web moderne",
    images: ["/og-cover.svg"],
    creator: "@Mohammad77Radwan",
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.github.com" />
      </head>
      <body className="relative min-h-full flex flex-col bg-slate-950 text-slate-50 transition-colors">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Aller au contenu principal
        </a>

        <NebulaBackdrop />
        <CustomCursor />
        <ReadingProgress />
        <CommandTerminal />
        <Navbar />
        <BackToTop />
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
