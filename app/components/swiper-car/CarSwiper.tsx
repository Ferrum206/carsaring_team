"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import styles from "./CarSwiper.module.css";

const cars = [
  {
    id: 1,
    brand: "Lamborghini",
    model: "Huracan EVO Spyder RS6",
    image: "/foto.car/lamborghini.png",
    price: 300,
  },
  {
    id: 2,
    brand: "Lamborghini",
    model: "Urus",
    image: "/foto.car/1.png",
    price: 350,
  },
  {
    id: 3,
    brand: "Mercedes Benz",
    model: "G-63",
    image: "/foto.car/6.png",
    price: 400,
  },
  {
    id: 4,
    brand: "Ferrari",
    model: "Roma",
    image: "/foto.car/2.png",
    price: 380,
  },
  {
    id: 5,
    brand: "Range Rover",
    model: "Autobiography New 2022",
    image: "/foto.car/7.png",
    price: 320,
  },
  {
    id: 6,
    brand: "BMW",
    model: "M5 F90",
    image: "/foto.car/5.png",
    price: 280,
  },
  {
    id: 7,
    brand: "Rolls Royce",
    model: "Ghost",
    image: "/foto.car/3.png",
    price: 450,
  },
];

const CarSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.imageSection}>
          <Image
            src={cars[activeIndex].image}
            alt={`${cars[activeIndex].brand} ${cars[activeIndex].model}`}
            layout="fill"
            objectFit="cover"
            className={styles.carImage}
          />
          <div className={styles.carDetails}>
            <h2 className={styles.carDetailsTitle}>
              RENT {cars[activeIndex].brand.toUpperCase()}
            </h2>
            <h3 className={styles.carDetailsModel}>
              {cars[activeIndex].model.toUpperCase()}
            </h3>
            <p className={styles.carDetailsPrice}>
              {cars[activeIndex].price}${" "}
              <span className={styles.carDetailsPriceSpan}>per day</span>
            </p>
          </div>
        </div>

        <div className={styles.generalMain}>
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
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.innerContainer}>
              <button
                className={styles.arrowUp}
                onClick={() => thumbsSwiper?.slidePrev()}
              >
                ▲
              </button>

              <div className={styles.gallery}>
                <div className={styles.timeline}></div>
                <div className={styles.centerIndicator}></div>

                <Swiper
                  onSwiper={setThumbsSwiper}
                  direction="vertical"
                  slidesPerView={5}
                  spaceBetween={20}
                  centeredSlides={true}
                  loop={true}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  className={styles.swiperThumbs}
                >
                  {cars.map((car, index) => (
                    <SwiperSlide key={car.id}>
                      <div
                        className={`${styles.carItem} ${
                          activeIndex === index ? styles.active : ""
                        } ${styles[`carItem${index + 1}`]}`} // Добавляем уникальный класс для каждой машины
                      >
                        <div className={styles.carInfo}>
                          <p className={styles.brand}>{car.brand}</p>
                          <p className={styles.model}>{car.model}</p>
                        </div>
                        {activeIndex === index && (
                          <div className={styles.activeLine}></div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <button
                className={styles.arrowDown}
                onClick={() => thumbsSwiper?.slideNext()}
              >
                ▼
              </button>
            </div>
            <button className={styles.viewAll}>VIEW ALL</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarSwiper;
