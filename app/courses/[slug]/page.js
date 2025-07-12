"use client";

import { useParams } from "next/navigation";
import "../../../styles/courseDetails.css";
import Link from "next/link";

const coursesData = {
  "uiux-beginner": {
    title: "كورس UI/UX - المستوى الأول",
    description:
      "مقدمة في تصميم تجربة المستخدم وواجهة الاستخدام باستخدام أدوات مثل Figma وAdobe XD.",
    image: "/uiux.jpg",
    duration: "6 أسابيع",
    level: "مبتدئ",
    instructor: "أ. رزان دعبول",
  },
  "uiux-pro": {
    title: "كورس UI/UX - مستوى محترف",
    description:
      "تصميم متقدم، أبحاث المستخدم، واختبارات الاستخدام لتطبيقات احترافية.",
    image: "/uiux-pro.jpg",
    duration: "8 أسابيع",
    level: "محترف",
    instructor: "أ. رزان دعبول",
  },
  "programming-basics": {
    title: "أساسيات البرمجة - PHP / Java / C#",
    description:
      "مفاهيم البرمجة الأساسية باستخدام لغات متعددة لبناء قاعدة برمجية قوية.",
    image: "/programming-basics.jpg",
    duration: "7 أسابيع",
    level: "مبتدئ",
    instructor: "م. خالد الأسعد",
  },
  "frontend-beginner": {
    title: "Frontend - React + Next.js (المستوى الأول)",
    description:
      "تعلم إنشاء واجهات تفاعلية باستخدام React وNext.js مع مفاهيم أساسية في CSS وJavaScript.",
    image: "/frontend.jpg",
    duration: "10 أسابيع",
    level: "مبتدئ إلى متوسط",
    instructor: "م. سليم الخطيب",
  },
  "backend-laravel-beginner": {
    title: "Backend - Laravel (المستوى الأول)",
    description:
      "مقدمة في تطوير التطبيقات باستخدام Laravel، قواعد البيانات، والـ MVC Pattern.",
    image: "/backend.png",
    duration: "8 أسابيع",
    level: "مبتدئ",
    instructor: "م. حسام دياب",
  },
};

export default function CourseDetailsPage() {
  const { slug } = useParams();
  const course = coursesData[slug];

  if (!course)
    return <p className="text-center py-5">{<Link href={"/courses"} />}</p>;

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
          <Link href="#" className=" btn btn-primary btn-course-link mt-4">
            سجّل الآن
          </Link>
        </div>
      </div>
    </section>
  );
}
