import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beatriz Alves | Software, Data & AI",
  description:
    "Portfólio de Beatriz Alves, estudante de Ciência de Dados e Inteligência Artificial, desenvolvedora de software e criadora de soluções digitais.",
  metadataBase: new URL("https://beatrizalves.dev"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Beatriz Alves | Software, Data & AI",
    description:
      "Portfólio de Beatriz Alves, estudante de Ciência de Dados e Inteligência Artificial, desenvolvedora de software e criadora de soluções digitais.",
    type: "website",
    locale: "pt_BR",
    siteName: "Beatriz Alves",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beatriz Alves | Software, Data & AI",
    description:
      "Portfólio de Beatriz Alves — software, dados e inteligência artificial.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-bg font-sans text-text">
        <BackgroundEffects />
        <CustomCursor />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
