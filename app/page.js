import AboutAndServices from "./_components/AboutAndServices";
import Hero from "./_components/Hero";
import Portfolio from "./_components/Portfolio";
import NewsSection from "./_components/NewsSection/NewsSection";
import styles from "./page.module.css";
import Contact from "./_components/Contact";
import Courses from "./_components/Courses/Courses";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <AboutAndServices />
      <Portfolio />
      <NewsSection />
      <Courses />
      <Contact />
    </div>
  );
}
