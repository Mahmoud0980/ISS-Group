"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const phrases = [
    "تصميم مواقع عصرية",
    "تطوير تطبيقات قوية",
    "حلول تسويق رقمية",
    "تحسين محركات البحث",
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!deleting) {
        // كتابة الحروف
        setText((prev) => prev + phrases[phraseIndex][letterIndex]);
        if (letterIndex + 1 === phrases[phraseIndex].length) {
          setDeleting(true);
          setTimeout(() => {}, 1000); // تأخير بعد كتابة الكلمة كاملة
        } else {
          setLetterIndex(letterIndex + 1);
        }
      } else {
        // حذف الحروف
        setText((prev) => prev.slice(0, -1));
        if (text.length === 0) {
          setDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setLetterIndex(0);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, letterIndex, deleting, phraseIndex]);

  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* النصوص */}
          <div className="col-lg-12 text-white text-center">
            <h1 className="display-4 fw-bold mb-3">
              نحن نقدم&nbsp;
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="lead mb-4">
              حلول رقمية متكاملة تساعدك على النمو والنجاح في عالم الإنترنت.
            </p>
            <a href="#portfolio" className="btn btn-outline-light btn-lg px-4">
              اكتشف أعمالنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
