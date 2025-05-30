import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "Small Girl Big God",
  description: "A blog about my thoughts and experiences in Christianity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} antialiased`}>
        <Navbar />
        <main style={{ marginTop: "20px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
