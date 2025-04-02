import styles from "./page.module.css";
import Header from "./components/header/Header";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import VerticalThumbsGallery from "./components/swiper-car/CarSwiper";
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
      <div className={styles.slideCar}>
        <div className={styles.search}>
          <p className={styles.popular}>Most Popular</p>
          <div className={styles.input}>
            <div className={styles.parentInput}>
              <input
                type="search"
                placeholder="Car Search"
                className={styles.inputSearch}
              />

              <button className={styles.btnSearch}>
                <CiSearch className={styles.icon} />
              </button>
              <VerticalThumbsGallery />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
