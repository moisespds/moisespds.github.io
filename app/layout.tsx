import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://moisespds.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Moisés Prado | Backend Software Engineer",
  description:
    "Portfólio de Moisés Prado, desenvolvedor com foco em Java, Spring Boot, APIs REST e sistemas confiáveis.",
  openGraph: {
    title: "Moisés Prado | Backend Software Engineer",
    description:
      "Java, APIs REST e sistemas confiáveis — conheça minha experiência e meus projetos.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Moisés Prado — Backend Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moisés Prado | Backend Software Engineer",
    description:
      "Java, APIs REST e sistemas confiáveis — conheça minha experiência e meus projetos.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
