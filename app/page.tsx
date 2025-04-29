import styles from "./page.module.css";
import Header from "./components/header/Header";
import Image from "next/image";
import Link from "next/link";

import VerticalThumbsGallery from "./components/swiper-car/CarSwiper";
import Footer from "./components/footer/Footer";
import CarSection from "./components/car-section/CarSection";
import MapContent from "./components/map/Map";
export default function HomePage() {
  return (
    <>
      <div className={styles.bg}>
        <Header />
        <div className={styles.centerText}>
          <p className={styles.dubai}>Dubai</p>
          <p className={styles.underText}>LUXURY CAR RENTAL</p>
        </div>
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
          <Link
            href="https://wa.me/+996552477020?text=Здравствуйте!%20Хочу%20арендовать%20авто."
            target="_blank"
            rel="noopener noreferrer"
          >
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
      <div className={styles.slideCar}>
        <div className={styles.search}>
          <p className={styles.popular}>Most Popular</p>

          <VerticalThumbsGallery />
        </div>
      </div>
      <CarSection />
      <div className={styles.about}>
        <h1 className={styles.title}>About Us</h1>
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <div className={styles.featureData}>
              <span className={styles.count}>8</span>
              <span className={styles.featureCount}>year</span>
            </div>
            <p className={styles.featureDesc}>
              {
                "We've come a long way from a 2-people company to winning at Webby's."
              }
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureData}>
              <span className={styles.count}>72</span>
              <span className={styles.featureCount}>cras</span>
            </div>
            <p className={styles.featureDesc}>
              {
                "We've come a long way from a 2-people company to winning at Webby's."
              }
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureData}>
              <span className={styles.count}>190</span>
              <span className={styles.featureCount}>people</span>
            </div>
            <p className={styles.featureDesc}>
              {
                "We've come a long way from a 2-people company to winning at Webby's."
              }
            </p>
          </div>
        </div>

        <div className={styles.coment}>
          <h3 className={styles.comentTitle}>
            I’m with cars for over 18 years. My auto passion and attention to
            details will make your experience with us second to none.
            Guaranteed.
          </h3>
        </div>
        <div className={styles.comentText}>
          <h3 className={styles.comentKiril}>Kirill Aliev, MBA</h3>
          <p>CEO Trinity car rental boutique</p>
        </div>

        <div className={styles.banners}>
          <Image
            className={styles.aboutBanner}
            src="/about/about-banner.jpg"
            width={400}
            height={300}
            alt="about-banner"
          />
        </div>

        <div className={styles.advantages}>
          <h3 className={styles.advantagesTitle}>Advantages</h3>
          <div className={styles.advantagesImg}>
            <div className={styles.parentImage}>
              <Image
                src="/about/Advantages/cars_1.jpg"
                width={505}
                height={315}
                alt="image"
                className={styles.imageHover}
              />
              <p className={styles.textImage}>
                <span className={styles.point}></span> 40+ unique cars for rent
                from our fleet
              </p>
            </div>
            <div className={styles.parentImage}>
              <Image
                src="/about/Advantages/cars_2.png"
                width={505}
                height={315}
                alt=""
                className={styles.imageHover}
              />
              <p className={styles.textImage}>
                {" "}
                <span className={styles.point}></span>
                Delivery and return of cars in Dubai 24/7{" "}
              </p>
            </div>
            <div className={styles.parentImage}>
              <Image
                src="/about/Advantages/cars_3.png"
                width={505}
                height={315}
                alt=""
                className={styles.imageHover}
              />
              <p className={styles.textImage}>
                <span className={styles.point}></span>
                Insurance without a deductible for each car
              </p>
            </div>
            <div className={styles.parentImage}>
              <Image
                src="/about/Advantages/cars_4.jpg"
                width={505}
                height={315}
                alt=""
                className={styles.imageHover}
              />
              <p className={styles.textImage}>
                {" "}
                <span className={styles.point}></span>
                No video or audio recording in the car
              </p>
            </div>
            <div className={styles.parentImage}>
              <Image
                src="/about/Advantages/cars_5.jpg"
                width={505}
                height={315}
                alt=""
                className={styles.imageHover}
              />
              <p className={styles.textImage2}>24/7 technical support</p>
            </div>
            <div className={styles.parentImage}>
              <Image
                src="/about/Advantages/cars_6.jpg"
                width={505}
                height={315}
                alt=""
                className={styles.imageHover}
              />
              <p className={styles.textImage2}>
                All models have a premium package
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/about/About-background.png"
          width={866}
          height={800}
          alt="logo"
          className={styles.realtive}
        />
      </div>
      <MapContent />
      <Footer />
    </>
  );
}
