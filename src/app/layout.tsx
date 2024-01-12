import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
};
