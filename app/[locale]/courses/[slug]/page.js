"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import "../courseDetails.css";

export default function CourseDetailsPage() {
  const { slug } = useParams();
  const t = useTranslations("coursesDetail"); // حسب ملف الترجمة عندك

  // الحصول على بيانات الكورس حسب slug
  // هنا نفترض أن ملف الترجمة يحتوي على هيكل مشابه لهذا:
  // "courses": {
  //   "uiux-beginner": { title, description, image, duration, level, instructor }
  // }

  const course = t.raw(slug);

  if (!course) {
    return (
      <p className="text-center py-5">
        <Link href="/courses">العودة إلى الدورات</Link>
      </p>
    );
  }

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
              <strong>{t("durationLabel")}</strong> {course.duration}
            </li>
            <li>
              <strong>{t("levelLabel")}</strong> {course.level}
            </li>
            <li>
              <strong>{t("instructorLabel")}</strong> {course.instructor}
            </li>
          </ul>
          <Link href="#" className="btn btn-primary btn-course-link mt-4">
            {t("registerNow")}
          </Link>
        </div>
      </div>
    </section>
  );
}
