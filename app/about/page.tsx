import Image from "next/image";
import styles from "./style.module.css";
import Header from "../components/header/Header";
import MapContent from "../components/map/Map";
import Footer from "../components/footer/Footer";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <Header />
      <Breadcrumbs />
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
          details will make your experience with us second to none. Guaranteed.
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
      <div className={styles.glad}>
        <h3 className={styles.gladTitle}>Glad to present you Dubai Get Car</h3>
        <div className={styles.rowText}>
          <p className={styles.miniText}>
            A company founded by a team of professional enthusiasts who have set
            themselves the goal of creating a truly exclusive car rental service
            that is unique for our country. With us, you do not need to spend
            time and money on regular repairs, paying high taxes and seasonal
            storage of your car. You just have to enjoy the indescribable
            emotions from driving the car of your dreams.
          </p>
          <div>
            <p className={styles.miniText2}>
              Your safety is our most important concern. The strictest control
              over the technical and sanitary-hygienic condition of our vehicles
              is one of the distinctive features and fundamental ideas that
              guide us. We guarantee that any car from the Dubai Get Car vehicle
              fleet will leave a bright mark and unforgettable impressions in
              your soul.
            </p>
          </div>
          <button className={styles.btn}>READ MORE</button>
        </div>
      </div>
      <div className={styles.gladText}>
        <h3 className={styles.gladItem}>
          We invite you to familiarize yourself with our fleet of vehicles,
          which are extremely rare in full complete sets of brands: McLaren,
          Rolls-Royce, Lamborghini, Ferrari, Bentley, Porsche, Mercedes-Benz,
          etc.
        </h3>
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
      <MapContent />
      <Footer />
    </div>
  );
}
