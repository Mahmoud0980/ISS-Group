"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./AboutAndServices.css";

export default function AboutAndServices() {
  const slides = [
    "نؤمن بأن التكنولوجيا والتعليم هما مفتاح المستقبل.",
    "نقدم حلولاً برمجية إبداعية وتدريبات تؤهل الأفراد لسوق العمل.",
    "رسالتنا هي تمكين كل شخص لديه فكرة، شغف، أو طموح، وتحويله إلى محترف رقمي.",
  ];
  const services = [
    {
      title: "تصميم وتطوير المواقع الإلكترونية",
      description: "نصمم مواقع عصرية ومتجاوبة تناسب كل الأجهزة.",
      icon: "bi bi-laptop",
    },
    {
      title: "تطوير تطبيقات الموبايل",
      description: "نبني تطبيقات موبايل قوية باستخدام أحدث التقنيات.",
      icon: "bi bi-phone",
    },
    {
      title: "تصميم واجهات المستخدم وتجربة المستخدم (UI/UX)",
      description: "تنسيق المظهر الخارجي وتحسين تفاعل المستخدم",
      icon: "bi bi-window-desktop",
    },
    {
      title: "تنفيذ مشاريع برمجية حسب الطلب (Custom Software)",
      description: "تطوير برامج مخصصة حسب احتياجات العميل",
      icon: "bi bi-code-slash",
    },
    {
      title: "الاستشارات التقنية ودعم المشاريع الناشئة",
      description: "تقديم نصائح تقنية ومساعدة للشركات الناشئة",
      icon: "bi bi-bar-chart-line",
    },
    {
      title: "إدارة قواعد البيانات والاستضافة",
      description: "تنظيم البيانات وتوفير سيرفرات للتشغيل",
      icon: "bi bi-database-check",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false); // لإعادة تشغيل الأنميشن
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 100); // وقت قصير جداً لإعادة تعيين الكلاس
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main className="container py-5">
      {/* <section className="mb-5" id="aboutandservies">
        <h3 className="display-5 mb-4 text-center">
          نحن في <span style={{ color: "#19224d" }}>ISS Group</span>
        </h3>

        <div
          id="aboutCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="1500"
        >
          <div className="carousel-inner text-center">
            <div className="carousel-item active">
              <p className="text-muted fs-5">
                نؤمن بأن التكنولوجيا والتعليم هما مفتاح المستقبل.
              </p>
            </div>
            <div className="carousel-item">
              <p className="text-muted fs-5">
                نعمل على بناء حلول برمجية إبداعية، ونقدّم تدريبات عملية تؤهّل
                الأفراد لدخول سوق العمل بثقة.
              </p>
            </div>
            <div className="carousel-item">
              <p className="text-muted fs-5">
                رسالتنا هي تمكين كل شخص لديه فكرة، شغف، أو طموح، وتحويله إلى
                محترف رقمي قادر على التغيير.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="mb-5 text-center container"
        id="aboutandservies"
        dir="rtl"
      >
        <h3 className="display-5 mb-4">
          نحن في <span style={{ color: "#19224d" }}>ISS Group</span>
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

      {/* قسم الخدمات */}
      <section>
        <div className="row">
          {services.map((service, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4 mb-4">
              <div className="service-card text-center p-4 h-100">
                <div className="icon-wrapper mx-auto mb-3">
                  <i className={`${service.icon} fs-1 text-white`}></i>
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted small">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
