import React from "react";
import Header from "./Header";
import Button from "./Button";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <Header />
      <article className={styles.container} id="MainPage">
        <article className="text-left">
          <h1 className={styles.title}>Hey, I’m Nick</h1>
          <h2 className={styles.subtitle}> Frontend Developer</h2>
          <div className={styles.separator} />

          <p className={styles.description}>
            Help you create high-quality digital products that your clients will
            love and let your business thrive.
          </p>

          <Button href="#GetInTouch">Get in touch</Button>
        </article>

        <img
          src="./assets/images/MainPageMobile.svg"
          alt="background"
          className=" flex tablet:hidden desktop:hidden absolute z-1  bottom-0  right-0"
        />

        <img
          src="./assets/images/MainPageTablet.svg"
          alt="background"
          className=" hidden tablet:flex desktop:hidden absolute z-1  bottom-0  right-0"
        />

        <img
          src="./assets/images/MainPageDesktop.svg"
          alt="background"
          className=" hidden tablet:hidden desktop:flex absolute z-1  bottom-0  right-0"
        />
      </article>
    </>
  );
};

export default MainPage;
