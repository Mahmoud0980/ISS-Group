"use client";

import { useTranslations } from "next-intl";
import "./Content.css";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      className="contact-section py-5"
      id="contact"
      dir={t("dir") || "ltr"}
    >
      <div className="container">
        <h2 className="text-center mb-5 display-5">{t("title")}</h2>

        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <div className="map-wrapper rounded shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d338.3948004363872!2d37.13912937937083!3d36.206151266424335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1751616451908!5m2!1sar!2snl"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("title")}
              ></iframe>
            </div>
          </div>
          {/* Contact Info Section */}
          <div className="col-lg-5">
            <div className="contact-card p-5 rounded shadow-sm bg-white">
              <h4 className="mb-4 fw-bold main-color">{t("contactInfo")}</h4>
              <ul className="list-unstyled fs-5 text-dark">
                <li className="mb-4 d-flex align-items-center gap-3 hover-effect">
                  <i className="bi bi-telephone-fill fs-2 main-color"></i>
                  <a
                    href={`tel:${t("phone")}`}
                    className="text-decoration-none main-color"
                    style={{ direction: "ltr" }}
                  >
                    {t("phone")}
                  </a>
                </li>
                <li className="mb-4 d-flex align-items-center gap-3 hover-effect">
                  <i className="bi bi-envelope-fill fs-2 main-color"></i>
                  <a
                    href={`mailto:${t("email")}`}
                    className="text-decoration-none main-color"
                  >
                    {t("email")}
                  </a>
                </li>
              </ul>

              <h4 className="mt-5 mb-4 fw-bold main-color">{t("followUs")}</h4>
              <div className="d-flex gap-4 fs-3">
                <a
                  href="https://www.facebook.com/share/16VpFF7X3r/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-icon facebook main-color"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/iss.group.sy?igsh=YjE1Y212NmcwZnZv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon instagram main-color"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://wa.me/963984900500"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="social-icon whatsapp main-color"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
