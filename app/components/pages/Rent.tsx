import React from 'react'
import  Image  from 'next/image';
import styles from "./Rent.module.css"

export default function Rent() {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.link}>Main</div>
    <Image src="./arrows.svg" width={8} height={7} alt='o'/>
    <div className={styles.bank}>Conditions</div>
    </div>
    <div className={styles.btn}>Car rental conditions</div>
    <div className={styles.customer}>Requirements for Customers</div>
    <div className={styles.drive}>
    <div className={styles.poco}>
      <p className={styles.from}>From <span className={styles.oppo}>19</span>y.o.</p>
      <p className={styles.age}>Age</p>
    </div>
    <div className={styles.stick}></div>
    
    <div className={styles.poco}>
      <p className={styles.from}>From <span className={styles.oppo}>1</span>year</p>
   
    <p className={styles.age}>Driving</p>
     </div>
    </div>
    </>
  )
}