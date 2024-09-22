import { motion } from "framer-motion";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="container">
      <motion.div className="section" {...fadeInUp}>
        <HeroSection />
      </motion.div>

      <motion.div className="section" {...fadeInUp}>
        <MySkills />
      </motion.div>

      <motion.div className="section" {...fadeInRight}>
        <AboutMe />
      </motion.div>

      <motion.div className="section" {...fadeInLeft}>
        <MyPortfolio />
      </motion.div>

      <motion.div className="section" {...fadeInUp}>
        <ContactMe />
      </motion.div>

      <div className="section">
        <Footer />
      </div>
    </div>
  );
}