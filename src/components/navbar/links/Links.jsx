"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLinks/NavLink";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/posts",
    },
  ];

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <section className={styles.container}>
      <ul className={styles.linksContainer}>
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <NavLink key="Login" link={{ title: "Login", path: "/login" }} />
        )}
      </ul>
      <button
        className={styles.menuIcon}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image src="/menu.png" alt="menu icon" width={24} height={24} />
      </button>
      {open && (
        <ul className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink link={link} key={link.path} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Links;
