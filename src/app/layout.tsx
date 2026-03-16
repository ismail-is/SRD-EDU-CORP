import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SRD EDU CORP | Research • Education • Placement",
  description: "Empowering Talent. Building Futures. Connecting Opportunities. SRD Edu Corp provides comprehensive employment and placement support.",
};

import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-transparent text-foreground`}>
        <AnimatedBackground />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
