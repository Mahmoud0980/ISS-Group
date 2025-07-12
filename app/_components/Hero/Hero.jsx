"use client";

import "./Hero.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();

  const phrases = [
    t("hero.solutions"),
    t("hero.web_design"),
    t("hero.uiux_design"),
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    // تحديث اتجاه الصفحة عند تغيير اللغة
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    if (pause) return;

    const typingSpeed = 150;
    const deletingSpeed = 100;

    const timeout = setTimeout(
      () => {
        const currentPhrase = phrases[phraseIndex];

        if (!deleting) {
          setText((prev) => prev + currentPhrase[letterIndex]);

          if (letterIndex + 1 === currentPhrase.length) {
            if (phraseIndex === 0) {
              setPause(true);
              setTimeout(() => {
                setDeleting(true);
                setPause(false);
              }, 3000);
            } else {
              setDeleting(true);
            }
          } else {
            setLetterIndex(letterIndex + 1);
          }
        } else {
          setText((prev) => prev.slice(0, -1));
          if (text.length === 0) {
            setDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
            setLetterIndex(0);
          }
        }
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, letterIndex, deleting, phraseIndex, pause, phrases]);

  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 text-white text-center">
            <h1 className="display-4 fw-bold mb-3">
              {t("hero.intro")}&nbsp;
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="lead mb-4">{t("hero.description")}</p>
            <Link
              href="/ourprojects"
              className="btn-hero btn-outline-light btn-lg px-4"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
