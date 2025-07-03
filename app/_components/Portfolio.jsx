import Image from "next/image";

const projects = [
  {
    title: "موقع شركة ABC",
    description: "موقع تعريفي تفاعلي باستخدام React وNext.js.",
    image: "/portfolio.jpg",
    link: "https://abc-company.com",
  },
  {
    title: "تطبيق متجر إلكتروني",
    description: "تطبيق متكامل للتجارة الإلكترونية باستخدام React وNode.js.",
    image: "/portfolio.jpg",
    link: "https://myecommerceapp.com",
  },
  {
    title: "مدونة تقنية",
    description: "مدونة شخصية بتقنيات حديثة مثل Next.js وMarkdown.",
    image: "/portfolio.jpg",
    link: "https://mytechblog.com",
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-section position-relative">
        <div className="overlay"></div>
        <h2 className="portfolio-title">اخر الاعمال</h2>

        <div className="container">
          <div className="row gy-4">
            {projects.map((project, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="card">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={220}
                      priority={idx === 0}
                      style={{
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <button className="btn btn-primary">شاهد المشروع</button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <a
              href="/portfolio"
              className="btn btn-lg btn-outline-light px-5 py-2 rounded-pill shadow"
            >
              معرض الأعمال
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
