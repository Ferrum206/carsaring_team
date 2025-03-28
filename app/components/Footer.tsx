import styles from "../styles/Footer.module.css"; 

export default function Footer() {
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerLinks}>
          <div>
            <h4>For Customers</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Conditions</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
          <div>
            <h4>Car List</h4>
            <ul>
              <li><a href="#">SUVs</a></li>
              <li><a href="#">Convertibles</a></li>
              <li><a href="#">Sports Cars</a></li>
              <li><a href="#">Premium</a></li>
              <li><a href="#">Coupe</a></li>
            </ul>
          </div>
          <div>
            <h4>Service</h4>
            <ul>
              <li><a href="#">Car List</a></li>
              <li><a href="#">Yacht List</a></li>
              <li><a href="#">Chauffeur</a></li>
            </ul>
          </div>
        </div>

    
        <div className={styles.footerContact}>
          <p className={styles.contactPhone}>+971 58 590 7875</p>
          <div className={styles.contactIcons}>


        <a href="#" className={styles.iconsTabler}>Telegram
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
</a>
           
        <a href="#" className={styles.iconsTabler}>WhatsApp
         <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
</a>

          </div>
          <button className={styles.callbackBtn}>REQUEST A CALLBACK</button>
          <p className={styles.contactAddress}>
            24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai
          </p>
          <div className={styles.emailForm}>
            <input type="email" placeholder="Write your E-mail" />
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </div>

  
      <div className={styles.footerBottom}>
        <div className={styles.paymentIcons}>
          {/* <img src="/visa.svg" alt="VISA" />
          <img src="/mastercard.svg" alt="MasterCard" />
          <img src="/amex.svg" alt="American Express" />
          <img src="/unionpay.svg" alt="UnionPay" />
          <img src="/tether.svg" alt="Tether" />
          <img src="/gpay.svg" alt="Google Pay" />
          <img src="/applepay.svg" alt="Apple Pay" /> 
          <img src="/giropay.svg" alt="GiroPay" />
          <img src="/cash.svg" alt="Cash" />
          <img src="/safetypay.svg" alt="SafetyPay" /> */}
        </div>
        <p>©2023 TRINITY. All rights reserved</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

