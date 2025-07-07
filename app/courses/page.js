import "@/styles/courses.css";

const courses = [
  {
    title: "دورة الذكاء الاصطناعي",
    description: "مقدمة في الذكاء الاصطناعي",
    link: "/courses/ai-course",
  },
  {
    title: "دورة تطوير الويب",
    description: "HTML, CSS, JS, React",
    link: "/courses/web-development",
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
                <div className="flip-box-front">
                  <h4>{course.title}</h4>
                </div>
                <div className="flip-box-back">
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
