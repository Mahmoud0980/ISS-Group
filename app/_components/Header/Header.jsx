"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import "./Header.css";
export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const headerLinks = [
    { href: "/", label: "home" },
    { href: "/#aboutandservies", label: "about" },
    { href: "/#ourprojects", label: "projects" },
    { href: "/#courses", label: "courses" },
    { href: "/#news", label: "news" },
    { href: "/#contact", label: "contact" },
  ];

  // تغيير اللغة مع الحفاظ على الصفحة الحالية
  const toggleLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, ""); // remove current locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3 shadow mb-4 mt-2">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          href={`/${locale}`}
        >
          <Image
            src="/logo.jpg"
            width={50}
            height={50}
            alt="Logo"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {headerLinks.map((link, index) => (
              <li
                className="nav-item link-hover priamry-text-color"
                key={index}
                style={{
                  marginLeft: "15px",
                  fontSize: "18px",
                  color: "#a6b5ff",
                }}
              >
                <Link
                  className="nav-link active fw-semibold"
                  href={`/${locale}${link.href}`}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex">
            <button className="btn-change-lang" onClick={toggleLanguage}>
              {locale === "ar" ? "En" : "Ar"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
