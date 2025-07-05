"use client";

export default function CoursesAccordion() {
  const courses = [
    {
      title: "أساسيات تطوير الويب",
      content: "تعلم HTML وCSS وJavaScript لبناء مواقع من الصفر.",
    },
    {
      title: "React و Next.js",
      content: "اصنع واجهات تفاعلية باستخدام React مع Next.js.",
    },
    {
      title: "تصميم UI/UX",
      content: "تعلم مبادئ التصميم وتجربة المستخدم UX.",
    },
  ];

  return (
    <section className="courses-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-white display-5">
          الدورات التعليمية
        </h2>

        <div className="accordion" id="coursesAccordion">
          {courses.map((course, i) => (
            <div className="accordion-item mb-3 rounded shadow-sm" key={i}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button fw-bold ${
                    i !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                  aria-expanded={i === 0 ? "true" : "false"}
                >
                  {course.title}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className={`accordion-collapse collapse ${
                  i === 0 ? "show" : ""
                }`}
                data-bs-parent="#coursesAccordion"
              >
                <div className="accordion-body">{course.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* زر عام أسفل القسم */}
        <div className="text-center mt-5">
          <a href="/courses" className="btn btn-lg btn-outline-light px-5">
            مشاهدة جميع الدورات التعليمية
          </a>
        </div>
      </div>
    </section>
  );
}
