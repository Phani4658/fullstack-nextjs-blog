import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <section className={styles.topSection}>
        <div className={styles.imgContainer}>
          <Image
            src="/post.jpg"
            alt="blog post image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.24</span>
      </section>
      <section className={styles.bottomSection}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>lorem</p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </section>
    </div>
  );
};

export default PostCard;
