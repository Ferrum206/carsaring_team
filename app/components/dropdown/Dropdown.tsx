"use client";

import { useState } from "react";
import styles from "./Dropdown.module.css"; // Импортируем стили
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";

const locations = ["Dubai", "Moscow", "Budapest", "Wiesbaden"];
const languages = ["ENG", "RUS", "DE"];

export default function Dropdowns() {
  const [selectedLocation, setSelectedLocation] = useState("Dubai");
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Локации */}
      <div className={styles.dropdown}>
        <button
          onClick={() => setIsLocationOpen(!isLocationOpen)}
          className={styles.button}
        >
          {selectedLocation}
          <div
            className={clsx(
              styles.arrow,
              isLocationOpen && styles.isLocationOpen
            )}
          >
            <IoIosArrowDown />
          </div>
        </button>
        {isLocationOpen && (
          <div className={styles.menu}>
            {locations.map((location) => (
              <div
                key={location}
                className={`${styles.menuItem} ${
                  selectedLocation === location ? styles.active : ""
                }`}
                onClick={() => {
                  setSelectedLocation(location);
                  setIsLocationOpen(false);
                }}
              >
                {location}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Языки */}
      <div className={styles.dropdown}>
        <button
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          className={styles.button2}
        >
          {selectedLanguage}{" "}
          <div
            className={clsx(
              styles.arrow,
              isLanguageOpen && styles.isLocationOpen
            )}
          >
            <IoIosArrowDown />
          </div>
        </button>
        {isLanguageOpen && (
          <div className={styles.menu}>
            {languages.map((lang) => (
              <div
                key={lang}
                className={`${styles.menuItem} ${
                  selectedLanguage === lang ? styles.active : ""
                }`}
                onClick={() => {
                  setSelectedLanguage(lang);
                  setIsLanguageOpen(false);
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
