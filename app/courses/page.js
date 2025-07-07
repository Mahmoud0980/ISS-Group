import "@/styles/courses.css";

const courses = [
  {
    title: "كورس UI/UX - المستوى الأول",
    description:
      "مقدمة في تصميم تجربة المستخدم وواجهة الاستخدام باستخدام Figma و Adobe XD.",
    link: "/courses/uiux-beginner",
  },
  {
    title: "كورس UI/UX - مستوى محترف",
    description:
      "تصميم متقدم، أبحاث المستخدم، واختبارات الاستخدام لتطبيقات احترافية.",
    link: "/courses/uiux-pro",
  },
  {
    title: "أساسيات البرمجة - PHP / Java / C#",
    description:
      "مفاهيم البرمجة الأساسية باستخدام لغات متعددة لبناء قاعدة برمجية قوية.",
    link: "/courses/programming-basics",
  },
  {
    title: "Frontend - React + Next.js (المستوى الأول)",
    description:
      "تعلم إنشاء واجهات تفاعلية باستخدام React وNext.js مع مفاهيم CSS و JavaScript.",
    link: "/courses/frontend-beginner",
  },
  {
    title: "Backend - Laravel (المستوى الأول)",
    description:
      "مقدمة في تطوير التطبيقات باستخدام Laravel، قواعد البيانات، والـ MVC.",
    link: "/courses/backend-laravel-beginner",
  },
];

export default async function CoursesPage() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <section className="container py-5">
      <div className="row gy-4">
        {courses.map((course, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front d-flex justify-content-center align-items-center">
                  <h4 className="text-center">{course.title}</h4>
                </div>
                <div className="flip-box-back text-center">
                  <p>{course.description}</p>
                  <a href={course.link} className="btn btn-light mt-2">
                    مشاهدة الكورس
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
