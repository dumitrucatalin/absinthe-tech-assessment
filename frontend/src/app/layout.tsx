import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen flex flex-col">
      <body className={`${inter.className} flex flex-col h-full w-full`}>
        <>
          <Navbar />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </>
        {/* {didMount ? (
          <><Navbar /><main className="flex-grow w-full">
            {children}
          </main><Footer /></>
        ) : (<div className="root__loading">Loading</div>)} */}
      </body>
    </html>
  );
}
