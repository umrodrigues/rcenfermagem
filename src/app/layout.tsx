import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "RC Enfermagem Para Você - Cuidados Especializados em Enfermagem | Consulta, Procedimentos e Atendimento Domiciliar",
  description: "Oferecemos serviços especializados em enfermagem com qualidade, segurança e humanização. Consulta de enfermagem, procedimentos, atendimento domiciliar, teleconsulta, laserterapia e mais. Atendimento em Porto Alegre e região.",
  keywords: "enfermagem, consulta de enfermagem, atendimento domiciliar, teleconsulta, procedimentos de enfermagem, cuidados de saúde, enfermeiro, Porto Alegre, laserterapia, tratamento de lesões, administração de medicamentos, atendimento capilar, RC educação, ozonioterapia, consultoria amamentação",
  authors: [{ name: "RC Enfermagem Para Você", url: "https://rcenfermagemparavoce.com.br" }],
  creator: "RC Enfermagem Para Você",
  publisher: "RC Enfermagem Para Você",
  category: "Saúde",
  classification: "Serviços de Enfermagem",
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
  metadataBase: new URL('https://rcenfermagemparavoce.com.br'), 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RC Enfermagem Para Você - Cuidados Especializados em Enfermagem",
    description: "Oferecemos serviços especializados em enfermagem com qualidade, segurança e humanização. Consulta, procedimentos, atendimento domiciliar e teleconsulta.",
    url: 'https://rcenfermagemparavoce.com.br', 
    siteName: 'RC Enfermagem Para Você',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/backgrounds/fundo1.jpeg',
        width: 1200,
        height: 630,
        alt: 'RC Enfermagem Para Você - Cuidados Especializados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "RC Enfermagem Para Você - Cuidados Especializados em Enfermagem",
    description: "Oferecemos serviços especializados em enfermagem com qualidade, segurança e humanização.",
    images: ['/images/backgrounds/fundo1.jpeg'],
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  other: {
    'geo.region': 'BR-RS',
    'geo.placename': 'Porto Alegre',
    'geo.position': '-30.0346;-51.2177',
    'ICBM': '-30.0346, -51.2177',
    'DC.title': 'RC Enfermagem Para Você - Cuidados Especializados em Enfermagem',
    'DC.creator': 'RC Enfermagem Para Você',
    'DC.subject': 'Enfermagem, Saúde, Cuidados Especializados',
    'DC.description': 'Serviços especializados em enfermagem com qualidade e humanização',
    'DC.publisher': 'RC Enfermagem Para Você',
    'DC.contributor': 'RC Enfermagem Para Você',
    'DC.date': '2024-01-01T00:00:00.000Z',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://rcenfermagemparavoce.com.br',
    'DC.language': 'pt-BR',
    'DC.coverage': 'Porto Alegre, RS, Brasil',
    'DC.rights': '© 2024 RC Enfermagem Para Você. Todos os direitos reservados.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16967651340"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16967651340');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
