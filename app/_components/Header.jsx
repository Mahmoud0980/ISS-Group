import Image from "next/image";
import "../globals.css";
import Link from "next/link";

export default function Header() {
  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/#aboutandservies", label: "من نحن" },
    { href: "/#ourprojects", label: "المشاريع البرمجية" },
    { href: "/#courses", label: "الدورات التدريبة" },
    { href: "/#news", label: "اخر الاخبار" },
    { href: "/#contact", label: "تواصل معنا" },
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3 shadow mb-4 mt-2">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <Image
            src="/logo.jpg"
            width={50}
            height={50}
            alt="Logo"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <li
                className="nav-item link-hover priamry-text-color"
                key={index}
                style={{
                  marginLeft: "15px",
                  fontSize: "16px",
                  color: " #a6b5ff",
                }}
              >
                <a className="nav-link active fw-semibold" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <form className="d-flex" role="search">
            {/* <button
              className="p-2 priamry-bgcolor priamry-bgcolor:hover btn btn-success "
              type="submit"
            >
              تواصل معنا
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
}
