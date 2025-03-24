export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
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

    
        <div className="footer-contact">
          <p className="contact-phone">+971 58 590 7875</p>
          <div className="contact-icons">
            <a href="#"><img src="/telegram-icon.svg" alt="Telegram" /></a>
            <a href="#"><img src="/whatsapp-icon.svg" alt="WhatsApp" /></a>
          </div>
          <button className="callback-btn">REQUEST A CALLBACK</button>
          <p className="contact-address">
            24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai
          </p>
          <div className="email-form">
            <input type="email" placeholder="Write your E-mail" />
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </div>

  
      <div className="footer-bottom">
        <div className="payment-icons">
          <img src="/visa.svg" alt="VISA" />
          <img src="/mastercard.svg" alt="MasterCard" />
          <img src="/amex.svg" alt="American Express" />
          <img src="/unionpay.svg" alt="UnionPay" />
          <img src="/tether.svg" alt="Tether" />
          <img src="/gpay.svg" alt="Google Pay" />
          <img src="/applepay.svg" alt="Apple Pay" />
          <img src="/giropay.svg" alt="GiroPay" />
          <img src="/cash.svg" alt="Cash" />
          <img src="/safetypay.svg" alt="SafetyPay" />
        </div>
        <p>©2023 TRINITY. All rights reserved</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

