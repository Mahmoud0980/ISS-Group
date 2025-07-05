import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";
import BootstrapJS from "./_components/BootstrapJS";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ISS Group",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <Header />
          {children}
        </div>
        <Footer />
        <BootstrapJS />
      </body>
    </html>
  );
}
