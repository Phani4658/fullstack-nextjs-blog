import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.companyLogo}>
        Lama
      </Link>
      <Links />
    </nav>
  );
};

export default Navbar;
