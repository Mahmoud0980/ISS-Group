"use client";

import { useParams } from "next/navigation";
import "@/styles/courseDetails.css";
import Link from "next/link";

const coursesData = {
  "web-development": {
    title: "دورة تطوير الويب",
    description:
      "تعلم HTML و CSS و JavaScript و React و Next.js لتصبح مطور واجهات محترف.",
    image: "/Portfolio.jpg",
    duration: "12 أسبوع",
    level: "مبتدئ إلى متقدم",
    instructor: "م. أحمد السعدي",
  },
  "ai-course": {
    title: "دورة الذكاء الاصطناعي",
    description:
      "أساسيات تعلم الآلة، الشبكات العصبية، والتعلم العميق باستخدام Python.",
    image: "/Portfolio.jpg",
    duration: "10 أسابيع",
    level: "متوسط",
    instructor: "د. نور الدين الزعبي",
  },
};

export default function CourseDetailsPage() {
  const { slug } = useParams();
  const course = coursesData[slug];

  if (!course)
    return <p className="text-center py-5">{<Link href={"../courses"} />}</p>;

  return (
    <section className="container py-5 course-details">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded shadow"
            style={{ width: "700px", height: "300px" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3 fw-bold">{course.title}</h1>
          <p className="lead">{course.description}</p>
          <ul className="list-unstyled mt-4">
            <li>
              <strong>المدة:</strong> {course.duration}
            </li>
            <li>
              <strong>المستوى:</strong> {course.level}
            </li>
            <li>
              <strong>المدرب:</strong> {course.instructor}
            </li>
          </ul>
          <a href="#" className="btn btn-primary mt-4">
            سجّل الآن
          </a>
        </div>
      </div>
    </section>
  );
}
