import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Participation from "@/components/Participation";
import Partners from "@/components/Partners";
import ScheduleAndPrizes from "@/components/ScheduleAndPrizes";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Participation />
      <ScheduleAndPrizes />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
