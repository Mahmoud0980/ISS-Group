import Image from "next/image";

const news = [
  {
    title: "إطلاق النسخة الجديدة من موقعنا",
    date: "2025-06-15",
    summary:
      "أطلقنا نسخة جديدة بالكامل من موقعنا بميزات أسرع وتجربة مستخدم أفضل.",
    image: "/portfolio.jpg",
    link: "/news/launch-new-site",
  },
  {
    title: "مؤتمر الويب العالمي 2025",
    date: "2025-05-30",
    summary: "مشاركتنا في المؤتمر التقني الأكبر كانت مليئة بالإلهام والابتكار.",
    image: "/portfolio.jpg",
    link: "/news/web-conference-2025",
  },
  {
    title: "تحديثات أمنية مهمة",
    date: "2025-04-12",
    summary: "أضفنا طبقات حماية إضافية لحماية خصوصيتك بشكل أقوى.",
    image: "/portfolio.jpg",
    link: "/news/security-update",
  },
];

export default function NewsSection() {
  return (
    <>
      <section className="news-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">اخر الأخبار</h2>
          <div className="row gy-4">
            {news.map((item, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="news-card p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="news-img-wrapper mb-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={220}
                        style={{
                          objectFit: "cover",
                          borderRadius: "10px",
                          width: "100%",
                        }}
                      />
                    </div>
                    <h5 className="text-white">{item.title}</h5>
                    <small className="text-muted d-block mb-2">
                      {new Date(item.date).toLocaleDateString("ar-EG")}
                    </small>
                    <p className="text-light">{item.summary}</p>
                  </div>
                  <a href={item.link} className="btn btn-outline-light mt-3">
                    اقرأ المزيد
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
