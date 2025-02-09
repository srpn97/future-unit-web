import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Cinderblock Font
const cinderblock = localFont({
  src: [
    {
      path: "./fonts/CinderBlock/Cinderblock_50.otf",
      weight: "100", // Assuming 50 represents a very thin weight, adjusting to 100
      style: "normal",
    },
    {
      path: "./fonts/CinderBlock/Cinderblock_75.otf",
      weight: "200", //Adjusting to fit known weights
      style: "normal",
    },
    {
      path: "./fonts/CinderBlock/Cinderblock_100.otf",
      weight: "300", //Adjusting to fit known weights
      style: "normal",
    },
    {
      path: "./fonts/CinderBlock/Cinderblock_125.otf",
      weight: "400", //Adjusting to fit known weights
      style: "normal",
    },
    {
      path: "./fonts/CinderBlock/Cinderblock_150.otf",
      weight: "500", //Adjusting to fit known weights
      style: "normal",
    },
    {
      path: "./fonts/CinderBlock/Cinderblock_175.otf",
      weight: "600", //Adjusting to fit known weights
      style: "normal",
    },
    {
      path: "./fonts/CinderBlock/Cinderblock_200.otf",
      weight: "700", //Adjusting to fit known weights
      style: "normal",
    },
    {
      path: "./fonts/CinderBlock/Cinderblock_400.otf",
      weight: "900", // Assuming 400 represents a bold weight, adjusting to 900.  May want to inspect font.
      style: "normal",
    },
  ],
  display: "swap", // Recommended for performance
  variable: "--font-cinderblock", // Assigning a CSS variable for easy use
});

// Suisse Font
const suisse = localFont({
  src: [
    {
      path: "./fonts/Suisse/SuisseIntl-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Book.otf",
      weight: "normal", // Typically corresponds to 400
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Book.ttf",
      weight: "normal", // Typically corresponds to 400
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-BookItalic.otf",
      weight: "normal", // Typically corresponds to 400
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-BookItalic.ttf",
      weight: "normal", // Typically corresponds to 400
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Thin.otf",
      weight: "100", // or 200
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Thin.ttf",
      weight: "100", // or 200
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-ThinItalic.otf",
      weight: "100", // or 200
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-ThinItalic.ttf",
      weight: "100", // or 200
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-UltraLight.otf",
      weight: "200", // or potentially 100 if it's even thinner than Thin
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Ultralight.ttf",
      weight: "200", // or potentially 100 if it's even thinner than Thin
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-UltraLightItalic.otf",
      weight: "200", // or potentially 100 if it's even thinner than Thin
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-UltralightItalic.ttf",
      weight: "200", // or potentially 100 if it's even thinner than Thin
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-SemiBoldIta.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCond-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlCondensed-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntlMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlMono-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntlMono-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseNeue-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Monitor.otf",
      weight: "400", //Assuming it's normal weight since it's a monitor version
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Monitor.ttf",
      weight: "400", //Assuming it's normal weight since it's a monitor version
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-MonitorItalic.otf",
      weight: "400", //Assuming it's normal weight since it's a monitor version
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-MonitorItalic.ttf",
      weight: "400", //Assuming it's normal weight since it's a monitor version
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseScreen-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-Book.otf",
      weight: "400", // Assuming book is the same as regular
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-Book.ttf",
      weight: "400", // Assuming book is the same as regular
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-BookItalic.otf",
      weight: "400", // Assuming book is the same as regular
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-BookItalic.ttf",
      weight: "400", // Assuming book is the same as regular
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseWorks-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-suisse",
});

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
    <html lang="en">
      <body
        className={`${cinderblock.variable} ${suisse.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
