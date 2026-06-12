import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

console.log(inter);

export const metadata = {
  icons: {
    icon: [
      {
        url: "/Biafo.svg",
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/Biafo.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/shortcut-icon.png",
  },

  title: "Biafo.Ai",
  description:
    "Biafo.ai combines AI diagnostics, blockchain-secured health data, and digital twin simulation to enable personalized healthcare, predictive treatment, and long-term patient data ownership.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col ">{children}</body>
    </html>
  );
}
