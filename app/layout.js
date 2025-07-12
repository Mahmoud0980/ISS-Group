import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../app/_components/Header/Header";
import Footer from "../app/_components/Footer/Footer";
import "../app/globals.css";
import "../i18n"; // حمّل التهيئة
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
  title: "ISS Group1",
  description: "",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <Header />
          {children}
          <BootstrapJS />
        </div>
        <Footer />
      </body>
    </html>
  );
}
