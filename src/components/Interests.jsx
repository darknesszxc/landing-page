import InterestItem from "./InterestItem";
import styles from "./Interests.module.css"

const Interests = () => {
  return (
    <section className="flex flex-col desktop:w-[750px]">
      <h2
        className={styles.title}
      >
        Interests
      </h2>
      <InterestItem
        icon="./assets/icons/Music.svg"
        title="Music"
        description="Indie rock | Reggae"
      />
      <InterestItem
        icon="./assets/icons/drawing.svg"
        title="Art"
        description="Edvard Munch | Frida Kahlo"
      />
      <InterestItem
        icon="./assets/icons/Photo.svg"
        title="Photography"
        description="Portraits"
      />
    </section>
  );
};

export default Interests;
