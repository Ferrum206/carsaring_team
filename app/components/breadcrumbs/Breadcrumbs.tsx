"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter(Boolean);

  const breadcrumbs = pathParts.map((part, index) => {
    const href = "/" + pathParts.slice(0, index + 1).join("/");
    const label = decodeURIComponent(part).replace(/-/g, " ");

    return {
      href,
      label: label.charAt(0).toUpperCase() + label.slice(1),
    };
  });

  return (
    <nav className={styles.breadcrumbs}>
      <Link href="/" className={styles.links}>
        Home
      </Link>
      {breadcrumbs.map((crumb, index) => (
        <span key={index}>
          <span className={styles.separator}> &gt;&gt; </span>
          <Link href={crumb.href}>{crumb.label}</Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
