"use client";

import "./courses.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

function FlipCard({ course, viewText }) {
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
            {viewText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const t = useTranslations("coursesSection");
  const courses = t.raw("courses");
  const viewText = t("viewCourse");

  return (
    <section className="courses-section">
      <div className="courses-container">
        {courses.map((course, i) => (
          <FlipCard key={i} course={course} viewText={viewText} />
        ))}
      </div>
    </section>
  );
}
