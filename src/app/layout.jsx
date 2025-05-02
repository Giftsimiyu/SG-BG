import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "Small Girl Big God",
  description: "A blog about my thoughts and experiences in christianity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${lora.variable} antialiased`}>{children}</body>
    </html>
  );
}
