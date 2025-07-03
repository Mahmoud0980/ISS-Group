import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css"; // ← هنا
export default function AboutAndServices() {
  const services = [
    {
      title: "تصميم مواقع",
      description: "نصمم مواقع عصرية ومتجاوبة تناسب كل الأجهزة.",
      icon: "bi bi-laptop",
    },
    {
      title: "تطوير التطبيقات",
      description: "نبني تطبيقات قوية باستخدام أحدث التقنيات.",
      icon: "bi bi-phone",
    },
    {
      title: "تحسين محركات البحث",
      description: "نساعدك في الظهور في نتائج البحث الأولى.",
      icon: "bi bi-bar-chart-line-fill",
    },
    {
      title: "التسويق الرقمي",
      description: "نزيد من ظهورك وانتشارك على الإنترنت.",
      icon: "bi bi-megaphone-fill",
    },
  ];

  return (
    <main className="container py-5">
      {/* قسم من نحن */}
      <section className="mb-5 text-center">
        <h2 className="fw-bold mb-3">من نحن</h2>
        <p className="text-muted fs-5">
          نحن شركة متخصصة في تقديم حلول تقنية مبتكرة تساعدك على تطوير مشروعك، من
          التصميم إلى البرمجة والتسويق.
        </p>
      </section>

      {/* قسم الخدمات */}
      <section>
        <div className="row">
          {services.map((service, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3 mb-4">
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
