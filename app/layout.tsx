import type { Metadata } from "next";
import "./globals.css";
import { Preloader } from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Enterprise Forge",
  description: "Intelligent AI agents for enterprise automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
