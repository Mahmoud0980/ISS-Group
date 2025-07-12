import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import "../globals.css";
import BootstrapJS from "../_components/BootstrapJS";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
  icons: {
    icon: "/logo.jpg",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params; // ✅ هذا هو التعديل
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="container">
            <Header />
            {children}
            <BootstrapJS />
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
