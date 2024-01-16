import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "@/components/themeswitch";
import Navbar from "@/components/display/navbar";
import SearchBar from "@/components/display/search";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Sipil Corner",
  description: "Writings about civil engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-200 p-1`}>
        <Providers>
          <div className="flex flex-row gap-1">
            <section className="basis-1/6"></section>
            <section className="basis-4/6 border border-red-500">
              <Navbar />
              <SearchBar />
              {children}
            </section>
            <section className="basis-1/6">
              <ThemeSwitch />
            </section>
          </div>
        </Providers>
      </body>
    </html>
  )
};
