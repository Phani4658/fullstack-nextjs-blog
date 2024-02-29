import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <section className={styles.textContainer}>
        <h1 className={styles.mainHeading}>Creative Thoughts Agency</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          officia adipisci unde dolores.
        </p>
        <div className={styles.buttonsContainer}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
          <div className={styles.brands}>
            <Image
              src="/brands.png"
              alt="brands"
              fill
              className={styles.brands}
            />
          </div>
        </div>
      </section>
      <section className={styles.imageContainer}>
        <Image src="/hero.gif" alt="main image" fill />
      </section>
    </main>
  );
};

export default Home;
