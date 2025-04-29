import React from "react";
import Image from "next/image";
import styles from "./Rent.module.css";
import { Accordion } from "../components/accordion";
import { acord } from "./accordionData";
import Header from "../components/header/Header";
import MapContent from "../components/map/Map";
import BlockContent from "../components/block/Block";
import Footer from "../components/footer/Footer";

export default function Rent() {
  const data = "0";

  if (data) {
    console.log("правда");
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.link}>Main</div>
        <Image src="./arrows.svg" width={8} height={7} alt="o" />
        <div className={styles.bank}>Conditions</div>
      </div>
      <div className={styles.btn}>Car rental conditions</div>
      <div className={styles.customer}>Requirements for Customers</div>
      <div className={styles.drive}>
        <div className={styles.poco}>
          <p className={styles.from}>
            From <span className={styles.oppo}>19</span>y.o.
          </p>
          <p className={styles.age}>Age</p>
        </div>
        <div className={styles.stick}></div>

        <div className={styles.poco}>
          <p className={styles.from}>
            From <span className={styles.oppo}>1</span>year
          </p>

          <p className={styles.age}>Driving</p>
        </div>
      </div>
      <Accordion data={acord} />
      <MapContent />
      <BlockContent />
      <Footer />
    </>
  );
}
