import EducationExperience from "./EducationExperience";
import Interests from "./Interests";
import styles from "./About.module.css";
import AboutSection from "./AboutSection";
const About = () => {
  return (
    <>
      <article className={styles.container} id="About">
        <AboutSection />
        <section className={styles.containerSection}>
          <Interests />
          <EducationExperience />
        </section>
      </article>
    </>
  );
};

export default About;
