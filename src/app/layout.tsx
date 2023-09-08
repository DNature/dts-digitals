import { MainLayout } from "@/components/Layouts/MainLayout";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";

const inter = Open_Sans({ subsets: ["greek-ext"] });

export const metadata: Metadata = {
  title: "DTS- Digitals",
  description:
    "Leading software company to turn your ideas into technological wonders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <MainLayout>{children}</MainLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
