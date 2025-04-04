"use client";
import React from "react";
import style from "./navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header/Header";
import MapContent from "@/app/components/map/Map";
import Footer from "@/app/components/footer/Footer";

export default function Navigation() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1 className={style.title}>Car List in Dubai</h1>
        <div className={style.containerLink}>
          <Link href="#" className={style.carNav}>
            All Cars
          </Link>
          <Link href="#" className={style.carNav}>
            SUVs
          </Link>
          <Link href="#" className={style.carNav}>
            Convertibles
          </Link>
          <Link href="#" className={style.carNav}>
            Sports Cars
          </Link>
          <Link href="#" className={style.carNav}>
            Coupe
          </Link>
          <Link href="#" className={style.carNav}>
            Premium
          </Link>
        </div>
        <div className={style.fotoImage}>
          <div className={style.mainPhoto}>
            <Image
              src="/foto.car/1.png"
              id="1"
              width={650}
              height={400}
              alt="car"
              className={style.foto}
            />
            <button className={style.but1}>RENT</button>
            <h2 className={style.carName1}>Lamborghini Urus</h2>
          </div>
          <div className={style.mainPhoto}>
            <Image
              src="/foto.car/2.png"
              id="2"
              width={650}
              height={400}
              alt="car"
              className={style.foto}
            />
            <button className={style.but2}>RENT</button>
            <h2 className={style.carName2}>Ferrari Roma</h2>
          </div>
          <div className={style.mainPhoto}>
            <Image
              src="/foto.car/3.png"
              id="3"
              width={650}
              height={400}
              alt="car"
              className={style.foto}
            />
            <button className={style.but3}>RENT</button>
            <h2 className={style.carName3}>Rolls-Royce Ghost</h2>
          </div>
          <div className={style.mainPhoto}>
            <Image
              src="/foto.car/4.png"
              id="4"
              width={650}
              height={400}
              alt="car"
              className={style.foto}
            />
            <button className={style.but4}>RENT</button>
            <h2 className={style.carName4}>Porsche 911 Turbo S</h2>
          </div>
          <div className={style.mainPhoto}>
            <Image
              src="/foto.car/5.png"
              id="5"
              width={650}
              height={400}
              alt="car"
              className={style.foto}
            />
            <button className={style.but5}>RENT</button>
            <h2 className={style.carName5}>BMW M5 F90</h2>
          </div>
          <div className={style.mainPhoto}>
            <Image
              src="/foto.car/6.png"
              id="6"
              width={650}
              height={400}
              alt="car"
              className={style.foto}
            />
            <button className={style.but6}>RENT</button>
            <h2 className={style.carName6}>Mercedes-Benz G63</h2>
          </div>
          <div className={style.mainPhoto}>
            <Image
              src="/foto.car/7.png"
              id="7"
              width={650}
              height={400}
              alt="car"
              className={style.foto}
            />
            <button className={style.but7}>RENT</button>
            <h2 className={style.carName7}>Range Rover Sport</h2>
          </div>
          <div className={style.mainPhoto}>
            <Image
              src="/foto.car/8.png"
              id="8"
              width={650}
              height={400}
              alt="car"
              className={style.foto}
            />
            <button className={style.but8}>RENT</button>
            <h2 className={style.carName8}>Mercedes AMG GTR</h2>
          </div>
        </div>
      </div>
      <MapContent />
      <Footer />
    </>
  );
}
