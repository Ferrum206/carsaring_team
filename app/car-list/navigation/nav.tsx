import style from './nav.module.css'
import React from 'react'
import { useState } from "react";


const cars = [
  { id: 1, name: "Lamborghini Huracan", category: "Sports Cars" },
  { id: 2, name: "Toyota Land Cruiser", category: "SUVs" },
  { id: 3, name: "Rolls-Royce Phantom", category: "Premium" },
  { id: 4, name: "Mazda MX-5", category: "Convertibles" },
  { id: 5, name: "Ford Mustang", category: "Sports Cars" },
];

const categories = ["All Cars", "SUVs", "Convertibles", "Sports Cars", "Premium"];

export default function CarFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All Cars");

  // Фильтруем автомобили
  const filteredCars = selectedCategory === "All Cars"
    ? cars
    : cars.filter(car => car.category === selectedCategory);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Car List in Dubai</h1>
      <div className={style.containerLink}>
        {categories.map(category => (
          <button
            key={category}
            className={`carNav ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <ul>
        {filteredCars.map(car => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </div>
  );
}
