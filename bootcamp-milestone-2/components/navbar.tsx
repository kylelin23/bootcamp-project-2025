import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1><Link href="index.html" className={style.logo}>Kyle Lin</Link></h1>
            <div className={style.navList}>
                <Link href="index.html" className = {style.navbarLink}>Home</Link>
                <Link href="blog.html" className = {style.navbarLink}>Blog</Link>
                <Link href="portfolio.html" className = {style.navbarLink}>Portfolio</Link>
                <Link href="resume.html" className = {style.navbarLink}>Resume</Link>
                <Link href="contact.html" className = {style.navbarLink}>Contact</Link>
            </div>
    </header>
  );
}