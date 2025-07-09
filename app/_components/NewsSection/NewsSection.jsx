import "./NewsSection.css";

export default function NewsTimeline() {
  const news = [
    {
      title: "إطلاق النسخة الجديدة من موقعنا",
      date: "2025-06-15",
      summary: "أطلقنا موقعًا بتجربة جديدة وأداء أسرع.",
    },
    {
      title: "مشاركة في مؤتمر تقني عالمي",
      date: "2025-05-10",
      summary: "قدمنا أحدث حلول البرمجة في مؤتمر دولي.",
    },
    {
      title: "تحديث سياسة الخصوصية",
      date: "2025-04-02",
      summary: "قمنا بتعديل سياسة الخصوصية بما يتماشى مع اللوائح.",
    },
  ];

  return (
    <section className="timeline-section py-5" id="news">
      <div className="container">
        <h2 className="text-center mb-5 display-5">آخر الأخبار</h2>
        <div className="timeline-wrapper">
          <div className="timeline-horizontal">
            {news.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-inner">
                  <div className="timeline-front">{item.title}</div>
                  <div className="timeline-back">
                    <span className="timeline-date">{item.date}</span>
                    <p className="timeline-summary">{item.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
