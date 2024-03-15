import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900' ],
  style: ['italic', 'normal']
 });


export const metadata: Metadata = {
  title: "Wine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
