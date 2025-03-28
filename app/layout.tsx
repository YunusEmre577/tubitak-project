import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans } from "next/font/google"
import NextTopLoader from 'nextjs-toploader';

const font = Instrument_Sans({subsets:["latin"]})
export const metadata: Metadata = {
  title: "Tubitak Project",
  description: "Tübitak Projemiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
                <NextTopLoader showSpinner={false} color={"#6a3ddc"} />
        {children}
      </body>
    </html>
  );
}
