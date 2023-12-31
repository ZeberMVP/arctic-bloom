import Navbar from "@/components/Navbar";
import "./globals.css";
import { alexandria, playfair_display } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Arctic Bloom",
  description:
    "Embracing the Technological Revolution: A Journey into the Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <body
        className={`${alexandria.variable} ${playfair_display.variable} bg-white`}
      >
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
