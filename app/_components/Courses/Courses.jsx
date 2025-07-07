import Link from "next/link";
import "./Courses.css";

export default function Courses() {
  const courses = [
    {
      title: "كورس UI/UX - المستوى الأول",
      image: "/uiux.jpg",
      slug: "uiux-beginner",
    },
    {
      title: "كورس UI/UX - مستوى محترف",
      image: "/uiux-pro.jpg",
      slug: "uiux-pro",
    },
    {
      title: "أساسيات البرمجة - PHP / Java / C#",
      image: "/programming-basics.jpg",
      slug: "programming-basics",
    },
  ];

  return (
    <section className="course-categories py-5">
      <div className="container text-center">
        <h2 className="mb-5 text-white">الدورات التدريبية</h2>
        <div className="row g-4 justify-content-center">
          {courses.map((course, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="course-card shadow-sm rounded">
                <img
                  src={course.image}
                  alt={course.title}
                  className="img-fluid rounded-top"
                />
                <div className="p-3">
                  <h5 className="fw-bold text-black">{course.title}</h5>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="btn btn-outline-primary mt-3">
                      عرض التفاصيل
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href={"/courses"}
          className="btn btn-lg btn-outline-light px-5 py-2 rounded-pill shadow mt-5"
        >
          عرض المزيد من الدورات التدريبية
        </Link>
      </div>
    </section>
  );
}
