import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <main className={styles.homeContainer}>
      <section className={styles.textContainer}>
          <h2>About Agency</h2>
        <h1 className={styles.mainHeading}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.paragraph}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.statsContainer}>
          <div className={styles.statsCard}>
            <h3>10 K+</h3>
            <p>Years of experience</p>
          </div>
          <div className={styles.statsCard}>
            <h3>234 K+</h3>
            <p>People Reached</p>
          </div>
          <div className={styles.statsCard}>
            <h3>5 K+</h3>
            <p>Services and plugins</p>
          </div>
        </div>
      </section>
      <section className={styles.imageContainer}>
        <Image src="/about.png" alt="main image" fill />
      </section>
    </main>
  );
};

export default About;
