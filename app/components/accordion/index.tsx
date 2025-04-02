"use client"
import { useState } from "react";
import styles from "./style.module.css";
import { GoPlus } from "react-icons/go";
import clsx from "clsx";
import { AccordionData } from "@/interface/accordion";

interface Props {
    data: AccordionData[]
}
export const Accordion = ({data}: Props) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const clickHandler = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
      <ul className={styles.list}>
        {data.map((item, id) => (
          <li key={id} className={styles.accordion_item}>
            <button className={styles.accordion_btn} onClick={() => clickHandler(id)}>
              {item.q}
              <div className={clsx(styles.box, id === isOpen && styles.open)}>
                <GoPlus  className={clsx(styles.plus, id === isOpen && styles.open)} />
              </div>
            </button>
            <div className={clsx(styles.accordion_collapse, id === isOpen && styles.open)}>
              <div className={styles.accordion_body}>{item.d}</div>
            </div>
          </li>
        ))}
      </ul>
  );
};
