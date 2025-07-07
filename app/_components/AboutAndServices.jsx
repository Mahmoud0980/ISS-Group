import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function AboutAndServices() {
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

  return (
    <main className="container py-5">
      {/* قسم من نحن */}
      <section className="mb-5 text-center">
        <h2 className="mb-3 display-5">
          نحن في <span style={{ color: "#19224d" }}>ISS Group</span>، نؤمن بأن
          التكنولوجيا والتعليم هما مفتاح المستقبل
        </h2>
        <p className="text-muted fs-5">
          نعمل على بناء حلول برمجية إبداعية، ونقدّم تدريبات عملية تؤهّل الأفراد
          لدخول سوق العمل بثقة
        </p>
        <p className="text-muted fs-5">
          رسالتنا هي تمكين كل شخص لديه فكرة، شغف، أو طموح، وتحويله إلى محترف
          رقمي قادر على التغيير
        </p>
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
