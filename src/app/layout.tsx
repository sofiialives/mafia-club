import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import cn from "@/utils/cn";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "4,6 Budapest Mafia Club Home Page",
    template: "4,6 Budapest Mafia Club %s",
  },
  description: "Homepage of the mafia club 4,6 in Budapest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          font.className
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
