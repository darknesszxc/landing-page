import styles from "./ExperienceItem.module.css"
const ExperienceItem = ({ year, title, company }) => {
    return (
      <div className={styles.experienceItem}>
        <p className={styles.year}>
          {year}
        </p>
        <p className={styles.details}>
          <span className="font-semibold text-black mb-[8px]">{title}</span> <br />
          {company}
        </p>
      </div>
    );
  };
  
  export default ExperienceItem;
  