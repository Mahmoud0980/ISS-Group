import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "تطبيق علمني",
    description: "تطبيق يساعد الطلاب على الدراسة في مختلف المراحل العمرية.",
    image: "/portfolio.jpg",
    link: "https://abc-company.com",
  },
];

export default function ProjectsSection() {
  const isSingle = projects.length === 1;

  return (
    <section className="project-section py-5" id="ourprojects">
      <div className="container">
        <h2 className="text-center mb-5 display-5 project-title">
          المشاريع البرمجية
        </h2>

        {isSingle ? (
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                width={500}
                height={350}
                className="img-fluid rounded-4"
                priority
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 className="fw-bold">{projects[0].title}</h4>
              <p className="text-muted">{projects[0].description}</p>
              <Link
                href={projects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-pill px-4 py-2"
              >
                <i className="bi bi-hourglass"></i> قريبا
              </Link>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {projects.map((project, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div className="card project-card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="card-img-top"
                    priority={idx === 0}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text text-muted">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill px-4 py-2"
                    >
                      شاهد المشروع
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-5">
          <Link
            href="/ourprojects"
            className="btn btn-outline-secondary rounded-pill px-5 py-2"
          >
            معرض الأعمال
          </Link>
        </div>
      </div>
    </section>
  );
}
