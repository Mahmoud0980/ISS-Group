import AboutAndServices from "./_components/AboutAndServices/AboutAndServices.jsx";
import Hero from "./_components/Hero/Hero.jsx";
import Portfolio from "./_components/OurProjects/OurProjects.jsx";
import NewsSection from "./_components/NewsSection/NewsSection.jsx";
import Contact from "./_components/Contact/Contact.jsx";
import Courses from "./_components/Courses/Courses.jsx";

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
