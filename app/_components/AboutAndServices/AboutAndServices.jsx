"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import "./AboutAndServices.css";

export default function AboutAndServices() {
  const t = useTranslations("about");

  const slides = t.raw("slides");
  const services = t.raw("services");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 100);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="container py-5">
      <section
        className="mb-5 text-center container"
        id="aboutandservies"
        dir="rtl"
      >
        <h3 className="display-5 mb-4">
          {t.rich("title", {
            span: (chunks) => (
              <span style={{ color: "#19224d" }}>{chunks}</span>
            ),
          })}
        </h3>

        <div
          className="p-4 rounded shadow-sm min-height"
          style={{ minHeight: "100px" }}
        >
          <p
            className={`text-muted fs-5 m-0 transition-text ${
              animate ? "fade-in-up" : ""
            }`}
          >
            {slides[currentIndex]}
          </p>
        </div>
      </section>

      <section>
        <div className="row">
          {services.map((service, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4 mb-4">
              <div className="service-card text-center p-4 h-100">
                <div className="icon-wrapper mx-auto mb-3">
                  <i className={`${service.icon} fs-1 text-white`}></i>
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted small">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
