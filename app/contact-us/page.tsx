import React from "react";
import styles from "./Contact.module.css";
import Header from "../components/header/Header";
import MapContent from "../components/map/Map";
import BlockContent from "../components/block/Block";
import Footer from "../components/footer/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className={styles.contactAbout}>
        <div className={styles.contact}>
          <h1 className={styles.contactTitle}>Contact Us</h1>
        </div>
        <div className={styles.phone}>
          <h4 className={styles.phoneTitle}>Phone</h4>
          <span className={styles.phoneNomber}>+971 58 548 9080</span>
        </div>
        <div className={styles.address}>
          <h3 className={styles.addressTitle}>Address</h3>
          <span className={styles.addressText}>
            24 4th St - Al Quoz - Al Quoz <br /> Industrial Area 3 - Dubai
          </span>
        </div>
      </div>
      <MapContent />
      <BlockContent />
      <Footer />
    </>
  );
}
