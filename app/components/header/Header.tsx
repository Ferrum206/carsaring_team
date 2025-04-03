import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { headerData } from "./headerData";
import Link from "next/link";
import Dropdowns from "./../dropdown/Dropdown";
import BurgerMenu from "../burger-menu/BurgerMenu";

export default function Header() {
  return (
    <>
      <BurgerMenu />
      <header className={styles.header}>
        <div className={styles.fotBurger}></div>
        <div className={styles.navbar}>
          <nav className={styles.nav}>
            {headerData.map((link) => {
              return (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className={styles.logo}>
          <Image src="/logo.svg" width={71} height={57} alt="logo" />
          <Image
            src="/trinity.svg"
            width={147}
            height={28}
            alt="logo"
            className={styles.logotype}
          />
          <Image
            src="/car-rental-botique.svg"
            width={147}
            height={11}
            alt="logo"
            className={styles.rental}
          />
        </div>
        <div className={styles.dropdowns}>
          <p className={styles.number}>+971 58 590 7875</p>
          <Dropdowns />
        </div>
      </header>
    </>
  );
}
