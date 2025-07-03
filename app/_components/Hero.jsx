// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 d-none d-md-block text-center">
          <Image
            src="/hero.gif"
            alt="Animated Illustration"
            width={500}
            height={500}
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 mb-4 text-start text-md-start">
          <h1 className="display-5 fw-bold text-end mb-3">
            مرحبًا بك في ISS group
          </h1>
          <p className="lead text-muted text-end">
            نحن نقدم حلولاً رقمية مبتكرة تساعدك على تطوير أعمالك والوصول لعملائك
            بسهولة. نجمع بين التصميم الجذاب والتقنيات الحديثة لنضمن لك التميز.
          </p>
          <button className="priamry-bgcolor priamry-bgcolor:hover btn btn-primary btn-lg mt-3 float-end">
            ابدأ الآن
          </button>
        </div>
      </div>
    </section>
  );
}
