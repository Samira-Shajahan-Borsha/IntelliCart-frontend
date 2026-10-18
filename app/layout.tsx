import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

const company = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = {
  title: `${company}`,
  description: "Your AI Assisted e-Commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body
        suppressHydrationWarning>
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
