// data/cars.ts
export interface Car {
  name: string;
  image: string;
}

export interface Category {
  name: string;
  cars: Car[];
}

export const carData: Category[] = [
  {
    name: "Special Offer",
    cars: [
      { name: "Lamborghini Urus", image: "/foto.car/1.png" },
      { name: "Ferrari Roma", image: "/foto.car/2.png" },
      { name: "Rolls-Royce Ghost", image: "/foto.car/3.png" },
      { name: "Porsche 911 Turbo S", image: "/foto.car/4.png" },
    ],
  },
  {
    name: "New Car",
    cars: [
      { name: "BMW M5 F90", image: "/foto.car/5.png" },
      { name: "Mercedes G-63", image: "/foto.car/6.png" },
      { name: "Range Rover Sport", image: "/foto.car/7.png" },
      { name: "Mercedes AMG GTR", image: "/foto.car/8.png" },
    ],
  },
  {
    name: "Most Popular",
    cars: [
      { name: "Rolls-Royce Ghost", image: "/foto.car/3.png" },
      { name: "Ferrari Roma", image: "/foto.car/2.png" },
      {
        name: "Lamborghini Urus",
        image: "/foto.car/1.png",
      },
      { name: "Porsche 911 Turbo S", image: "/foto.car/4.png" },
    ],
  },
  {
    name: "Daily",
    cars: [
      { name: "Mercedes G-63", image: "/foto.car/6.png" },
      { name: "Range Rover Sport", image: "/foto.car/7.png" },
      { name: "BMW M5 F90", image: "/foto.car/8.png" },
      { name: "Mercedes AMG GTR", image: "/foto.car/5.png" },
    ],
  },
];
