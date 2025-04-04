"use client";
import React, { useState } from "react";
import { carData, Car, Category } from "../data/cars";
import Image from "next/image";
import styles from "./CarSection.module.css";

const CarSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    carData[0]
  );

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.carSection}>
      <nav className={styles.categoryNav}>
        {carData.map((category) => (
          <a
            key={category.name}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick(category);
            }}
            className={`${styles.categoryLink} ${
              selectedCategory.name === category.name ? styles.active : ""
            }`}
          >
            {category.name}
          </a>
        ))}
      </nav>

      <div className={styles.carGrid}>
        {selectedCategory.cars.map((car: Car, index: number) => (
          <div key={index} className={styles.carCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={car.image}
                alt={car.name}
                width={300}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
              <div className={styles.carOverlay}>
                <h3 className={styles.carName}>{car.name}</h3>
                <button className={styles.rentButton}>RENT</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <button className={styles.viewAllButton}>VIEW ALL</button>
      </div>
    </div>
  );
};

export default CarSection;
