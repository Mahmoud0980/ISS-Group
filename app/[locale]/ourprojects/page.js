"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OurProjectsPage() {
  const t = useTranslations("ourprojects");
  const projects = t.raw("projects");

  return (
    <section className="container py-5">
      <h2 className="display-4 text-center fw-bold mb-5">{t("title")}</h2>
      <div className="row gy-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="portfolio-card h-100 shadow rounded-4 overflow-hidden">
              <div className="portfolio-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-3">
                <h5 className="text-dark fw-bold">{project.title}</h5>
                <p className="text-muted small">{project.description}</p>
                <a
                  href={project.disabled ? undefined : project.link}
                  className={`btn btn-primary rounded-pill px-4 ${
                    project.disabled ? "disabled" : ""
                  }`}
                  onClick={
                    project.disabled ? (e) => e.preventDefault() : undefined
                  }
                >
                  {project.buttonText || t("view")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
