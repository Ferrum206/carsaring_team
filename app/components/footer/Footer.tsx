"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import styles from "./Footer.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={50}
          loop
          freeMode={true}
          centeredSlides={true}
          speed={5000}
          autoplay={{
          delay: 0,
          disableOnInteraction: false,
        
          }}
          modules={[Autoplay, FreeMode]}
        >
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Lexus</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Audi</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>BMW</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Rolls-Royce</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Cadillac</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Maserati</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Lamborghini</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Bentley</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Porsche</div>
          </SwiperSlide>
            <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Koenigsegg–Agera RS</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Pagani–Zonda R</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Bugatti–Chiron</div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <div className={styles.slideItem}>Aston Martin–DBS Superleggera</div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.generalLinks}>
          <div className={styles.linksGroup}>
            <div className={styles.footerLinks}>
              <p className={styles.forCustomer}>For Customers</p>
              <Link href="/about" className={styles.links}>
                About Us
              </Link>
              <Link href="/about" className={styles.links}>
                Conditions
              </Link>
              <Link href="/about" className={styles.links}>
                Testimonials
              </Link>
              <Link href="/about" className={styles.links}>
                Articles
              </Link>
              <Link href="/about" className={styles.links}>
                Contacts
              </Link>
            </div>
            <div className={styles.footerLinks}>
              <p className={styles.forCustomer}>Car List</p>
              <Link href="/about" className={styles.links}>
                SUVs
              </Link>
              <Link href="/about" className={styles.links}>
                Convertibles
              </Link>
              <Link href="/about" className={styles.links}>
                Sports Cars
              </Link>
              <Link href="/about" className={styles.links}>
                Premium
              </Link>
              <Link href="/about" className={styles.links}>
                Coupe
              </Link>
            </div>
            <div className={styles.footerLinks}>
              <p className={styles.forCustomer}>Service</p>
              <Link href="/about" className={styles.links}>
                Car List
              </Link>
              <Link href="/about" className={styles.links}>
                Yacht List
              </Link>
              <Link href="/about" className={styles.links}>
                Chauffeur
              </Link>
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.numberTwo}>
              +971 58 590 7875
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

            <button className={styles.btn}>REQUEST A CALL BACK</button>
            <p className={styles.dubai}>
              24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai
            </p>
            <div className={styles.inputMain}>
              <input
                type="email"
                placeholder="Write your E-mail"
                className={styles.input}
              />
              <button className={styles.button}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paymentContainer}>
        <div className={styles.payment}>
          <Image src="/VISA.svg" width={90} height={27} alt="visa"></Image>
          <Image
            src="/Master-card.svg"
            width={78}
            height={43}
            alt="visa"
          ></Image>
          <Image
            src="/American-express.svg"
            width={99}
            height={39}
            alt="visa"
          ></Image>
          <Image src="/Union-pay.svg" width={72} height={44} alt="visa"></Image>
          <Image src="/tether.svg" width={124} height={27} alt="visa"></Image>
          <Image
            src="/Google-pay.svg"
            width={92}
            height={36}
            alt="visa"
          ></Image>
          <Image src="/apple-pay.svg" width={85} height={41} alt="visa"></Image>
          <Image src="/giropay.svg" width={84} height={36} alt="visa"></Image>
          <Image src="/tether.svg" width={124} height={27} alt="visa"></Image>
          <Image src="/sepa.svg" width={117} height={26} alt="visa"></Image>
          <Image src="/safetypay.svg" width={93} height={65} alt="visa"></Image>
        </div>
      </div>
      <div className={styles.footerEnd}>
        <Link href="#" className={styles.privat}>
          Privacy Policy
        </Link>
        <p className={styles.rights}>©2023 TRINITY. All rights reserved</p>
        <div className={styles.socialLinks}>
          <Image
            src="/Facebook.svg"
            width={26}
            height={26}
            alt="facebook"
          ></Image>
          <Image src="/TikTok.svg" width={26} height={26} alt="Tiktok"></Image>
          <Image
            src="/youtube.svg"
            width={26}
            height={26}
            alt="YouTube"
          ></Image>
          <Image
            src="/instagram.svg"
            width={22}
            height={22}
            alt="Instagram"
          ></Image>
        </div>
      </div>
    </footer>
  );
}
