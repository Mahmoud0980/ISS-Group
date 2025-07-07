import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="container">
        <div className="footer-grid">
          {/* الشعار والنبذة */}
          <div className="footer-brand">
            <h3>ISS Group</h3>
            <p>نطوّر حلولًا رقمية مبتكرة تساعدك على النجاح في العالم الرقمي.</p>
          </div>

          {/* روابط سريعة */}
          <div className="footer-links">
            <h5>روابط سريعة</h5>
            <ul>
              <li>
                <a href="/">المشاريع</a>
              </li>
              <li>
                <a href="/about">الدورات التعليمية</a>
              </li>
              <li>
                <a href="/services">الخدمات</a>
              </li>
              <li>
                <a href="/contact">تواصل معنا</a>
              </li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div className="footer-contact">
            <h5>تواصل معنا</h5>
            <ul>
              <li>
                <a href="tel:+963984900500">
                  <i
                    className="bi bi-telephone-fill me-2"
                    style={{ marginLeft: "10px" }}
                  ></i>
                  +963 984 900 500
                </a>
              </li>
              <li>
                <a href="mailto:iss.group.sy@gmail.com">
                  <i
                    className="bi bi-envelope-fill me-2"
                    style={{ marginLeft: "10px" }}
                  ></i>
                  iss.group.sy@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/963984900500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bi bi-whatsapp me-2"
                    style={{ marginLeft: "10px" }}
                  ></i>
                  واتساب مباشر
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bi bi-instagram me-2"
                    style={{ marginLeft: "10px" }}
                  ></i>
                  تابعنا على إنستغرام
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ISS Group - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
