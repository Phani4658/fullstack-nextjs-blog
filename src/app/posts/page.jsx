import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

const BlogPage = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
