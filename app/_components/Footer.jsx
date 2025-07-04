export default function Footer() {
  return (
    <footer className="site-footer mt-5">
      <div className="container py-5">
        <div className="row">
          {/* شعار أو نبذة */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="footer-logo">ISS Group</h4>
            <p className="text-light">
              حلول رقمية عصرية لمستقبل واعد. نعمل على بناء مشاريعك بأفضل
              المعايير التقنية.
            </p>
          </div>

          {/* روابط سريعة */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-white mb-3">روابط سريعة</h5>
            <ul className="list-unstyled text-light">
              <li>
                <a href="/" className="footer-link">
                  المشاريع
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  الدورات التعليمية
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* تواصل اجتماعي */}
          <div className="col-md-4">
            <h5 className="text-white mb-3">تابعنا</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="social-icon-footer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon-footer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon-footer">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="social-icon-footer">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light my-4" />

        {/* الحقوق */}
        <p className="text-center text-light mb-0">
          © {new Date().getFullYear()} جميع الحقوق محفوظة | ISS Group
        </p>
      </div>
    </footer>
  );
}
