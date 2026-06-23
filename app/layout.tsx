import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.firstName} ${personalInfo.lastName} | Software Engineer & Full Stack Developer`,
  description: personalInfo.tagline,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI ML Enthusiast",
    "React Developer",
    "Next.js",
    "Spring Boot",
    "Portfolio",
    personalInfo.name,
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.firstName} ${personalInfo.lastName} | Software Engineer`,
    description: personalInfo.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.firstName} ${personalInfo.lastName} | Software Engineer`,
    description: personalInfo.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="relative bg-background font-sans text-white antialiased">
        <AuroraBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
