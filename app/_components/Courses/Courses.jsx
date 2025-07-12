"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import "./Courses.css";

export default function Courses() {
  const t = useTranslations("courses");
  const courses = t.raw("list"); // استدعاء بيانات الكورسات من ملف الترجمة

  return (
    <section
      className="py-5 bg-white shadow text-white"
      id="courses"
      style={{ padding: "20px", borderRadius: "15px" }}
    >
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold text-gradient">
          {t("title")}
        </h2>

        <div className="row g-5 justify-content-center">
          {courses.map((course, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card course-card bg-dark border-0 rounded-4 shadow-lg overflow-hidden h-100">
                <div className="course-img-wrapper">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="img-fluid course-img"
                  />
                </div>
                <div className="card-body card-body-detail text-center">
                  <h5 className="card-title fw-bold">{course.title}</h5>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="btn btn-primary rounded-pill px-4 mt-3">
                      {t("view")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link href="/courses">
            <button className="btn btn-outline-secondary rounded px-5 py-2">
              {t("more")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
