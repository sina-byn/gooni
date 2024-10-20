import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gooni",
  description: "Beautifully designed components that you can copy and paste into your apps.",
  icons: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDYyZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYWNrYWdlLW9wZW4iPjxwYXRoIGQ9Ik0xMiAyMnYtOSIvPjxwYXRoIGQ9Ik0xNS4xNyAyLjIxYTEuNjcgMS42NyAwIDAgMSAxLjYzIDBMMjEgNC41N2ExLjkzIDEuOTMgMCAwIDEgMCAzLjM2TDguODIgMTQuNzlhMS42NTUgMS42NTUgMCAwIDEtMS42NCAwTDMgMTIuNDNhMS45MyAxLjkzIDAgMCAxIDAtMy4zNnoiLz48cGF0aCBkPSJNMjAgMTN2My44N2EyLjA2IDIuMDYgMCAwIDEtMS4xMSAxLjgzbC02IDMuMDhhMS45MyAxLjkzIDAgMCAxLTEuNzggMGwtNi0zLjA4QTIuMDYgMi4wNiAwIDAgMSA0IDE2Ljg3VjEzIi8+PHBhdGggZD0iTTIxIDEyLjQzYTEuOTMgMS45MyAwIDAgMCAwLTMuMzZMOC44MyAyLjJhMS42NCAxLjY0IDAgMCAwLTEuNjMgMEwzIDQuNTdhMS45MyAxLjkzIDAgMCAwIDAgMy4zNmwxMi4xOCA2Ljg2YTEuNjM2IDEuNjM2IDAgMCAwIDEuNjMgMHoiLz48L3N2Zz4='
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

