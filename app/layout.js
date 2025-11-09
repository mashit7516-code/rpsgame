import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/compnents/Footer";
import Navbar from "@/compnents/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rock Paper Scissor",
    description: "Challenge the computer in a classic game of Rock-Paper-Scissors! Test your strategy, make your choice, and see if you can outsmart your digital opponent. With a simple and interactive interface, quick gameplay, and real-time results, this game is perfect for passing the time, sharpening your reflexes, and having fun. Play, track your wins and losses, and enjoy endless rounds of excitement in this modern twist on a timeless game!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar/>
        <div className="min-h-[90vh]">{children}
</div>
<Footer/>
              </body>
    </html>
  );
}
