import React from "react";
import { Metadata } from "next";
import styles from "./Map.module.css";





export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us",
};

export default function MapContent(){
  return (
     
    <header className={styles.header}>
    <div className={styles.container}>
     <div className={styles.grid}>
        <div className={styles.mapContainer}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            className={styles.map}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=24%204th%20St%20-%20Al%20Quoz%20-%20Al%20Quoz%20Industrial%20Area%203%20-%20Dubai&output=embed"  allowFullScreen
          ></iframe>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            
           <div className={styles.container}>
              <h1 className={styles.title}>Ask us anything </h1>
           </div>
           
            <input type="text" className={styles.input1} placeholder="  Your Name" />
           
            <input type="email" className={styles.input2} placeholder="  Your Email" />
           
            <input type="tel" className={styles.input3} placeholder="  +7 (999) 999 - 99 - 99" />
           
            <textarea className={styles.textarea} placeholder="  Message"></textarea>

            <button type="submit" className={styles.button}>Send the request</button>
          </form>
        </div>
      </div>
    </div>
  </header> 
  );
};




