import Link from "next/link";
import React from "react";
import styles from './links.module.css'
import NavLink from "./navLinks/NavLink";

const Links = () => {
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
    <ul className={styles.linksContainer}>  
      {links.map((link) => (
        <NavLink key={link.title} link={link} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink link={{title: "Admin",path: '/admin'}} /> }
          <button className={styles.logoutBtn}>Logout</button>
        </>
      ) : (
        <NavLink key='Login' link={{title: 'Login',path: '/login'}} />
      )}
    </ul>
  );
};

export default Links;
