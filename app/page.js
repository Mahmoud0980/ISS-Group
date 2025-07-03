import AboutAndServices from "./_components/AboutAndServices";
import Hero from "./_components/Hero";
import Portfolio from "./_components/Portfolio";
import NewsSection from "./_components/NewsSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <AboutAndServices />
      <Portfolio />
      <NewsSection />
    </div>
  );
}
