import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ImageSlider from "@/components/ImgeSlider";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Internee.pk",
  description: "Internee.pk | Pakistan's Virtual Internship Platform",
  icons: {
    icon: [
      { url: "https://www.internee.pk/assets/icon-BT8woF2N.jpg", media: "(prefers-color-scheme: light)" },
      { url: "https://www.internee.pk/assets/icon-BT8woF2N.jpg", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    title: "Internee.pk",
    description: "Internee.pk | Pakistan's Virtual Internship Platform",
    url: "https://interneeportal.vercel.app/",
    siteName: "interneeportal.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dsfm7zxhg/image/upload/v1738184931/Screenshot_248_th9gj9.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internee.pk",
    description: "Internee.pk | Pakistan's Virtual Internship Platform",
    images: ["https://res.cloudinary.com/dsfm7zxhg/image/upload/v1738184931/Screenshot_248_th9gj9.png"], // Replace with your OG image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <ImageSlider/>
        {children}
        <SanityLive/>
      </body>
    </html>
  );
}
