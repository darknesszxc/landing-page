import ExperienceItem from "./ExperienceItem";
import Button from "./Button";
import styles from "./EducationExperience.module.css"

const EducationExperience = () => {
  return (
    <section className={styles.educationExperience}>
      <h2 className={styles.heading}>
        Education & Experience
      </h2>
      <div className={styles.experienceList}>
        {/* Mobile */}
        <div className=" mobile:block tablet:hidden desktop:hidden">
          <ExperienceItem year="2008 - Present" title="Middle Frontend developer" company="Ozon" />
          <ExperienceItem year="2006 - 2007" title="Junior Frontend developer" company="Facebook" />
          <ExperienceItem year="2000 - 2005" title="Frontend developer" company="Stanford University" />
        </div>

        {/* Tablet */}
        <div className="mobile:hidden desktop:hidden tablet:block">
          <ExperienceItem year="2008 - Present" title="Middle Frontend developer" company="Ozon" />
          <ExperienceItem year="2006 - 2007" title="Frontend development courses" company="Stepik" />
          <ExperienceItem year="2000 - 2005" title="Frontend developer" company="Saint Petersburg State University" />
        </div>

        {/* Desktop */}
        <div className="mobile:hidden tablet:hidden desktop:block">
          <ExperienceItem year="2008 - Present" title="Middle Frontend developer" company="Ozon" />
          <ExperienceItem year="2006 - 2007" title="Frontend development courses" company="Stepik" />
          <ExperienceItem year="2000 - 2005" title="Frontend developer" company="Saint Petersburg State University" />
        </div>
      </div>
      <Button className="desktop:hidden tablet:hidden mobile:mt-[48px]" href="#GetInTouch">Get in touch</Button>
    </section>
  );
};

export default EducationExperience;
