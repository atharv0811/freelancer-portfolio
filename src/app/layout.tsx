import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import UpperNavbar from "@/components/upper-navbar";
import ScrollToTop from "@/components/scroll-to-top";
import Link from "next/link";
import "./globals.css";

const roboto = Roboto({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Atharv Karnekar | Freelancer",
  description: "Showcasing modern web development projects with expertise in React, Next.js, and MongoDB. Let’s build innovative, responsive, and user-friendly digital experiences together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className}`}
        data-new-gr-c-s-check-loaded="14.1215.0"
        data-gr-ext-installed=""
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UpperNavbar />
          <Navbar />
          <main className="min-h-screen mx-auto">
            {children}
            <ScrollToTop />
          </main>
          <footer className="border-t backdrop:blur py-9 supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-[1200px] mx-auto px-4 text-center text-white flex items-center justify-between">
              <p className="text-[#221b68]">© {new Date().getFullYear()} <a href="#" className="text-[#6930c3]">AK Web Developers</a>. All rights reserved.</p>
              <div className="divide-x-2 divide-[#6930c3]">
                <Link href="/sitemap.xml" className="text-[#221b68] pr-4">Sitemap</Link>
                <Link href="" className="text-[#221b68] px-4">Privacy Policy</Link>
                <Link href="" className="text-[#221b68] pl-4">Contact Us</Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
