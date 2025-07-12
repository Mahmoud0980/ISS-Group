"use client";
import "./Hero.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const phrases = ["حلول برمجية متكاملة", "تصميم مواقع ويب", "تصميم UI UX"];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const typingSpeed = 150;
    const deletingSpeed = 150;

    const timeout = setTimeout(
      () => {
        const currentPhrase = phrases[phraseIndex];

        if (!deleting) {
          setText((prev) => prev + currentPhrase[letterIndex]);

          if (letterIndex + 1 === currentPhrase.length) {
            // الكلمة اكتملت
            if (currentPhrase === "حلول برمجية متكاملة") {
              setPause(true);
              setTimeout(() => {
                setDeleting(true);
                setPause(false);
              }, 3000); // توقف 3 ثواني فقط لكلمة "حلول برمجية"
            } else {
              setDeleting(true); // لا تأخير لباقي الكلمات
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
  }, [text, letterIndex, deleting, phraseIndex, pause]);

  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 text-white text-center">
            <h1 className="display-4 fw-bold mb-3">
              نحن نقدم&nbsp;
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="lead mb-4">
              حلول رقمية متكاملة تساعدك على النمو والنجاح في عالم الإنترنت.
            </p>
            <Link
              href="../ourprojects"
              className="btn-hero btn-outline-light btn-lg px-4"
            >
              اكتشف أعمالنا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
