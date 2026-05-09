import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { RouteExperience } from "@/components/RouteExperience";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fritzch Ainsley Santos | PTF04 Digital Portfolio",
    template: "%s | Fritzch Ainsley Santos",
  },
  description:
    "Digital portfolio website for Fritzch Ainsley Santos, showcasing PTF04 – Professional Track 4 projects, learning reflections, and technical growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell flex min-h-screen flex-col">
          <RouteExperience />
          <Header />
          <main className="flex-1 pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
