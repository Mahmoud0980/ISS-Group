const projects = [
  {
    title: "موقع تعليمي",
    description: "منصة تعليمية متكاملة تقدم تجربة تعلم سهلة.",
    image: "./Portfolio.jpg",
    link: "#",
  },
  {
    title: "تطبيق موبايل",
    description: "تطبيق لإدارة المهام اليومية باحترافية.",
    image: "./Portfolio.jpg",
    link: "#",
  },
  {
    title: "موقع عقارات",
    description: "موقع يعرض العقارات للبيع والإيجار بطريقة منظمة.",
    image: "/Portfolio.jpg",
    link: "#",
  },
  {
    title: "موقع عقارات",
    description: "موقع يعرض العقارات للبيع والإيجار بطريقة منظمة.",
    image: "/Portfolio.jpg",
    link: "#",
  },
  {
    title: "موقع عقارات",
    description: "موقع يعرض العقارات للبيع والإيجار بطريقة منظمة.",
    image: "/Portfolio.jpg",
    link: "#",
  },
  {
    title: "موقع عقارات",
    description: "موقع يعرض العقارات للبيع والإيجار بطريقة منظمة.",
    image: "/Portfolio.jpg",
    link: "#",
  },
];

export default async function ourprojects() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <section className="container py-5">
      <h2 className="display-2 text-center">أعمالنا</h2>
      <div className="row gy-4">
        {projects.map((project, i) => (
          <div className="col-md-4" key={i}>
            <div className="portfolio-card">
              <div className="portfolio-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
              </div>
              <div className="p-3">
                <h5 className="text-dark">{project.title}</h5>
                <p className="text-muted small">{project.description}</p>
                <a
                  href={project.link}
                  className="btn priamry-bgcolor"
                  style={{ color: "#fff" }}
                >
                  عرض المشروع
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
