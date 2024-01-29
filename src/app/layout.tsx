import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WApp",
  description: "The next big Weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-body-background bg-cover`}
        style={{height: '100vh'}}
      >
        {children}
      </body>
    </html>
  );
}
