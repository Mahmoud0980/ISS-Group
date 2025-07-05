export default function Loading() {
  return (
    <section className="container py-5">
      <div className="row gy-4">
        {[...Array(3)].map((_, i) => (
          <div className="col-md-4" key={i}>
            <div className="portfolio-card skeleton-card">
              <div className="portfolio-image skeleton-image"></div>
              <div className="p-3">
                <div className="skeleton-text title"></div>
                <div className="skeleton-text desc"></div>
                <div className="skeleton-btn"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
