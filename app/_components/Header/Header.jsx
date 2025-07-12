"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

export default function Header() {
  const { t } = useTranslation();

  const headerLinks = [
    { href: "/", label: "home" },
    { href: "/#aboutandservies", label: "about" },
    { href: "/#ourprojects", label: "projects" },
    { href: "/#courses", label: "courses" },
    { href: "/#news", label: "news" },
    { href: "/#contact", label: "contact" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3 shadow mb-4 mt-2">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
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
                  fontSize: "16px",
                  color: "#a6b5ff",
                }}
              >
                <a className="nav-link active fw-semibold" href={link.href}>
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>

          {/* زر تغيير اللغة */}
          <div className="d-flex">
            <button
              className="btn btn-outline-primary"
              onClick={toggleLanguage}
            >
              {t("language")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
