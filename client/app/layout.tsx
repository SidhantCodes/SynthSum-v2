import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SynthSum",
  description: "A web application to summarize YouTube videos and articles using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} px-10`}>
        <Navbar />
        <h1 className='font-extrabold text-center text-[45px]'>SynthSum</h1>
        {children}
        <Footer />
      </body>
    </html>
  );
}
