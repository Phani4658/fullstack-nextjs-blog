"use client";

import React from "react";
import "./navlinks.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navlinks.module.css";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={link.path}
        className={`${styles.linkText} ${
          pathName === link.path && styles.active
        }`}
      >
        {link.title}
      </Link>
    </li>
  );
};

export default NavLink;
