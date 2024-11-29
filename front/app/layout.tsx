import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
export const metadata: Metadata = {
  title: "Portal MaisFoco",
  description: "Portal MaisFoco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="vsc-initialized">
        <Navbar>
          {children}
        </Navbar>
      </body>
    </html>
  );
}
