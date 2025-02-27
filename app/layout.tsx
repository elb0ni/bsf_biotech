import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mosca Soldado Negro Atlantico",
  description:
    "¡Descubre el poder de la naturaleza con las larvas de mosca soldado negro! " +
    "En [Nombre de tu sitio], ofrecemos larvas de mosca soldado negro de la más alta calidad, disponibles en preventa. " +
    "Estas larvas son una solución ecológica y sostenible para la alimentación animal, el compostaje y la reducción de residuos orgánicos. " +
    "¿Por qué elegir nuestras larvas? Alimento nutritivo para aves, peces, reptiles y más. " +
    "Sostenibilidad: contribuye a la economía circular. Fácil de usar para compostaje rápido y eficiente. " +
    "Calidad garantizada: criadas en condiciones controladas. ¡Reserva ahora y sé parte de la revolución verde!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
