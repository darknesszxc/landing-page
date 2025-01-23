import styles from "./InterestItem.module.css"
const InterestItem = ({ icon, title, description }) => {
    return (
      <div className="flex flex-row mt-[24px] tablet:mt-[44px]">
        <img
          src={icon}
          alt={title}
          className={styles.icon}
        />
        <p className={styles.description}>
          <span className="font-semibold text-black mb-[8px]">{title}</span> <br />
          {description}
        </p>
      </div>
    );
  };
  
  export default InterestItem;
  