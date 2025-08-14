import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import FooterWrapper from "@/components/common/footer-wrapper";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECOMMERCE - Moda e Estilo | Roupas, Calçados e Acessórios",
  description:
    "Descubra as melhores marcas de moda: Nike, Adidas, Puma, Zara e muito mais. Roupas, calçados e acessórios com estilo e qualidade. Envio rápido e seguro para todo Brasil.",
  keywords:
    "moda, roupas, calçados, nike, adidas, puma, zara, converse, new balance, polo, estilo, fashion, ecommerce, loja online",
  authors: [{ name: "Fernando Souza" }],
  creator: "Fernando Souza",
  publisher: "Fernando Souza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ecommerce-fernando-souza.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ecommerce-fernando-souza.vercel.app",
    title: "ECOMMERCE - Moda e Estilo | Roupas, Calçados e Acessórios",
    description:
      "Descubra as melhores marcas de moda: Nike, Adidas, Puma, Zara e muito mais. Roupas, calçados e acessórios com estilo e qualidade.",
    siteName: "ECOMMERCE",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "ECOMMERCE - Sua loja de moda online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ECOMMERCE - Moda e Estilo | Roupas, Calçados e Acessórios",
    description:
      "Descubra as melhores marcas de moda: Nike, Adidas, Puma, Zara e muito mais.",
    images: ["/logo.svg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ReactQueryProvider>
          {children}
          <FooterWrapper />
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
