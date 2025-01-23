import Button from "./Button";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>About me</h2>
      <div className={styles.aboutContent}>
        <img
          src="./assets/images/AboutAround.svg"
          alt="Around"
          className={styles.aboutImage}
        />
        <div className={styles.aboutText}>
          <div className={styles.separator} />
          <article className="mt-[24px]">
            <p className={styles.aboutDescription}>
              <span className="font-semibold text-black">Nick Richardson</span>{" "}
              - specialist in Frontend development. Clear code is my passion.
              Solving issues through negotiations.
            </p>
          </article>
          <Button
            className="mobile:hidden desktop:flex tablet:flex tablet:mt-[44px] desktop:mt-[64px]"
            href="#GetInTouch"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
