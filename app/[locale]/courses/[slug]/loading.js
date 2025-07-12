export default function Loading() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="skeleton-course__image skeleton-animated rounded"></div>
        </div>
        <div className="col-md-6">
          <div className="skeleton-course__title skeleton-animated mb-3"></div>
          <div className="skeleton-course__line skeleton-animated mb-2"></div>
          <div className="skeleton-course__line skeleton-animated mb-2"></div>
          <div className="skeleton-course__line skeleton-animated mb-2"></div>
          <div className="skeleton-course__button skeleton-animated mt-4"></div>
        </div>
      </div>
    </section>
  );
}
