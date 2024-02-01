import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import QueryProvider from "@/components/queryclient";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/display/navbar";
// import SearchBar from "@/components/display/search";

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
      <body className={`${inter.className} bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-slate-100 p-1`}>
        <QueryProvider>
          <Providers>
            <div className="flex flex-row gap-1">
              <section className="md:basis-1/6 xl:basis-1/4 hidden md:block"></section>
              <section className="md:basis-4/6 xl:basis-2/4 mx-auto">
                <Navbar />
                {/* <SearchBar /> */}
                {children}
              </section>
              <section className="md:basis-1/6 xl:basis-1/4 hidden md:block"></section>
            </div>
          </Providers>
        </QueryProvider>
      </body>
    </html>
  )
};
