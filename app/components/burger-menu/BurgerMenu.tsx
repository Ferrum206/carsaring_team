"use client";

import { useState } from "react";
import styles from "./BurgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.burger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.line}></div>

        <div className={styles.line}></div>
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
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
        <div className={styles.generalLinks}>
          <nav className={styles.nav}>
            <Link href="" className={styles.navLinks}>
              Car List
            </Link>
            <Link href="" className={styles.navLinks}>
              Yacht List
            </Link>
            <Link href="" className={styles.navLinks}>
              Chauffeur
            </Link>
            <Link href="" className={styles.navLinks}>
              Conditions
            </Link>
            <Link href="" className={styles.navLinks}>
              Car List
            </Link>
            <Link href="" className={styles.navLinks}>
              Testimonials
            </Link>
          </nav>
          <nav className={styles.nav2}>
            <Link href="" className={styles.navLinks}>
              Articles
            </Link>
            <Link href="/about" className={styles.navLinks}>
              About Us
            </Link>
            <Link href="" className={styles.navLinks}>
              Contacts
            </Link>
          </nav>
        </div>
        <div className={styles.footerBurger}>
          <div className={styles.contacts}>
            <p className={styles.address}>
              24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai
            </p>
            <div className={styles.mainContacts}>
              <p className={styles.number}>+971 58 590 7875</p>
              <div className={styles.social}>
                <Link href="/telegram">
                  <Image
                    src="/Telegram.svg"
                    width={22}
                    height={21}
                    alt="telegram"
                    className={styles.imageLogoTele}
                  />
                </Link>
                <Link href="/whatsapp">
                  <Image
                    src="/WhatsApp.svg"
                    width={22}
                    height={21}
                    alt="whatsapp"
                    className={styles.imageLogoWhats}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
