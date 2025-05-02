import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

// Suisse Font
const suisse = localFont({
  src: [
    {
      path: "fonts/Suisse/SuisseIntl-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Suisse/SuisseIntl-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Suisse/SuisseIntl-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-suisse",
});

export const metadata: Metadata = {
  title: "Future Unit",
  description:
    "Future Unit - A creative studio combining industrial design, interaction design, and think tank research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suisse.variable}`}>{children}</body>
    </html>
  );
}
