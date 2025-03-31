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
      <div className={styles.generalLinks}>
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
        <div className={styles.numberTwo}>+971 58 590 7875 </div>
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
    </footer>
  );
}
