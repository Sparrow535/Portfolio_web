import type { Metadata } from "next";
import "@fontsource-variable/fira-code";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SocialSidebar } from "@/components/SocialSidebar";
import { Decor } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Rohan Rai — AI, data and web developer",
  description: "Portfolio of Rohan Rai, a computer science student in Bhutan building AI, data and full-stack web projects.",
  icons: {
    icon: "/images/logo-outline.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <Decor />
        <SocialSidebar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
