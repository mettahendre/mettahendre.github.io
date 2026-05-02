"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./NavBar.module.css";

const links = [
  { href: "/",           label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education",  label: "Education" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${styles.nav}`}>
      <Link href="/" className="navbar-brand serif" onClick={() => setOpen(false)}>
        Metta
      </Link>

      {/* Hamburger button — visible only on mobile */}
      <button
        className={styles.burger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={`${styles.bar} ${open ? styles.bar1Open : ""}`} />
        <span className={`${styles.bar} ${open ? styles.bar2Open : ""}`} />
        <span className={`${styles.bar} ${open ? styles.bar3Open : ""}`} />
      </button>

      {/* Desktop links */}
      <ul className={`navbar-links ${styles.desktopLinks}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.drawerLink} ${pathname === href ? styles.drawerActive : ""}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Backdrop */}
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} />
      )}
    </nav>
  );
}
