import "@/styles/courses.css";
export default function CoursesLoading() {
  return (
    <section className="container py-5">
      <div className="row gy-4">
        {[...Array(3)].map((_, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front skeleton-front"></div>
                <div className="flip-box-back">
                  {/* ما منعرض شي بالخلف بهي المرحلة */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
