import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'DRs Hauling Services | Junk Removal & Dumpster Rentals Porterville',
  description: 'Professional junk removal and dumpster rental services in Tulare County. Same-day service, affordable rates starting at $60. Call 559-920-7414 for a free quote!',
  openGraph: {
    "title": "DRs Hauling | Junk Removal Tulare County",
    "description": "Clear your home, yard, or job site today with our fast, reliable hauling services.",
    "siteName": "DRs Hauling"
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
