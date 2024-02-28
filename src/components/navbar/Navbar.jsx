import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.companyLogo}>Lama</h1>
      <Links />
    </nav>
  );
};

export default Navbar;
