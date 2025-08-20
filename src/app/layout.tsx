import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RC Enfermagem - Cuidados Especializados em Enfermagem",
  description: "Oferecemos serviços especializados em enfermagem com qualidade, segurança e humanização. Consulta de enfermagem, procedimentos, atendimento domiciliar, teleconsulta e mais.",
  keywords: "enfermagem, consulta de enfermagem, atendimento domiciliar, teleconsulta, procedimentos de enfermagem, cuidados de saúde",
  authors: [{ name: "RC Enfermagem" }],
  creator: "RC Enfermagem",
  publisher: "RC Enfermagem",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rcenfermagem.com.br'), 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RC Enfermagem - Cuidados Especializados em Enfermagem",
    description: "Oferecemos serviços especializados em enfermagem com qualidade, segurança e humanização.",
    url: 'https://rcenfermagem.com.br', 
    siteName: 'RC Enfermagem',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RC Enfermagem - Cuidados Especializados em Enfermagem",
    description: "Oferecemos serviços especializados em enfermagem com qualidade, segurança e humanização.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
