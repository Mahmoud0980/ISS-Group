import "../../styles/courses.css";
import Link from "next/link";
const courses = [
  {
    title: "كورس UI/UX - المستوى الأول",
    description:
      "مقدمة في تصميم تجربة المستخدم وواجهة الاستخدام باستخدام Figma و Adobe XD.",
    link: "/courses/uiux-beginner",
    image: "/uiux.jpg",
  },
  {
    title: "كورس UI/UX - مستوى محترف",
    description:
      "تصميم متقدم، أبحاث المستخدم، واختبارات الاستخدام لتطبيقات احترافية.",
    link: "/courses/uiux-pro",
    image: "/uiux-pro.jpg",
  },
];

function FlipCard({ course }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={course.image} alt={course.title} />
          <div className="overlay">
            <h3>{course.title}</h3>
          </div>
        </div>
        <div className="flip-card-back">
          <p>{course.description}</p>
          <Link href={course.link} className="btn-course">
            عرض الكورس
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <section className="courses-section">
      <div className="courses-container">
        {courses.map((course, i) => (
          <FlipCard key={i} course={course} />
        ))}
      </div>
    </section>
  );
}
