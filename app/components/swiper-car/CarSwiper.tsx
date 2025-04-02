"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image"; // Импортируем Image из next/image
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import styles from "./CarSwiper.module.css";

// Данные о машинах с дополнительной информацией
const cars = [
  {
    id: 1,
    brand: "Audi",
    model: "Huracan EVO Spyder RS6",
    image: "/images/audi.jpg", // Локальный путь или внешний URL
    price: 300,
  },
  {
    id: 2,
    brand: "Lamborghini",
    model: "Urus",
    image: "/images/lamborghini-urus.jpg",
    price: 350,
  },
  {
    id: 3,
    brand: "Lamborghini",
    model: "Huracan EVO Spyder",
    image: "/images/lamborghini-huracan.jpg",
    price: 400,
  },
  {
    id: 4,
    brand: "Ferrari",
    model: "Roma",
    image: "/images/ferrari-roma.jpg",
    price: 380,
  },
  {
    id: 5,
    brand: "Range Rover",
    model: "Autobiography New 2022",
    image: "/images/range-rover.jpg",
    price: 320,
  },
  {
    id: 6,
    brand: "BMW",
    model: "M5 F90",
    image: "/images/bmw-m5.jpg",
    price: 280,
  },
  {
    id: 7,
    brand: "Rolls Royce",
    model: "Ghost",
    image: "/images/rolls-royce-ghost.jpg",
    price: 450,
  },
];

const CarSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={styles.mainContainer}>
        {/* Левая часть с фотографией */}
        <div className={styles.imageSection}>
          <Image
            src={cars[activeIndex].image}
            alt={`${cars[activeIndex].brand} ${cars[activeIndex].model}`}
            width={500} // Укажите ширину изображения
            height={300} // Укажите высоту изображения
            className={styles.carImage}
          />
          <div className={styles.carDetails}>
            <h2>RENT {cars[activeIndex].brand.toUpperCase()}</h2>
            <h3>{cars[activeIndex].model.toUpperCase()}</h3>
            <p>
              {cars[activeIndex].price}$ <span>per day</span>
            </p>
          </div>
        </div>

        {/* Правая часть со свайпером */}
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
                      }`}
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
    </>
  );
};

export default CarSwiper;
