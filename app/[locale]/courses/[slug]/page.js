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
    <section className="container py-4">
      <div className="course-card-mini">
        <img src={course.image} alt={course.title} />
        <div className="course-info">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <ul>
            <li>
              <strong>{t("levelLabel")}</strong> {course.level}
            </li>
            <li>
              <strong>{t("instructorLabel")}</strong> {course.instructor}
            </li>
            <li>
              <strong>{t("trainingDaysLabel")}</strong> {course.trainingDays}
            </li>
            <li>
              <strong>{t("trainingTimeLabel")}</strong> {course.trainingTime}
            </li>
            <li>
              <strong>{t("trainingHoursLabel")}</strong> {course.trainingHours}
            </li>
          </ul>
          <a
            href={course.link}
            className="course-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("registerNow")}
          </a>
        </div>
      </div>
    </section>
  );
}
