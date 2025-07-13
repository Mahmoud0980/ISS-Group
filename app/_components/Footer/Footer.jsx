"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/router";
import "./Footer.css";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="footer-new" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="footer-grid">
        {/* الشعار والنبذة */}
        <div className="footer-brand">
          <h3>{t("brandTitle")}</h3>
          <p>{t("brandDesc")}</p>
        </div>

        {/* روابط سريعة */}
        <div className="footer-links">
          <h5>{t("quickLinksTitle")}</h5>
          <ul>
            <li>
              <a href="/">{t("links.projects")}</a>
            </li>
            <li>
              <a href="/about">{t("links.courses")}</a>
            </li>
            <li>
              <a href="/services">{t("links.services")}</a>
            </li>
            <li>
              <a href="/contact">{t("links.contact")}</a>
            </li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div className="footer-contact">
          <h5>{t("contactTitle")}</h5>
          <ul>
            <li>
              <i className="bi bi-telephone-fill me-2"></i>
              <a href={`tel:${t("phone")}`}>
                <span dir="ltr">{t("phone")}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${t("email")}`}>
                <i className="bi bi-envelope-fill me-2"></i>
                {t("email")}
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/963984900500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2"></i>
                {t("whatsapp")}
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram me-2"></i>
                {t("instagram")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <p>
          © {new Date().getFullYear()} {t("brandTitle")} - {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
