import Image from "next/image";
import style from "./Block.module.css";

export default function BlockContent() {
  return (
    <div className={style.container}>
      <div className={style.cardImage}>
       
          <h2 className={style.cardText}>Get a discount of up to <span className={style.cardToText}>60%</span> </h2>
        
    
        <h4 className={style.blockText}>
          Get the latest articles and business updates that you need to know,
          you’ll even get special recommendations weekly.
        </h4>

        <Image
          className={style.image1}
          src="/lines.svg"
          alt="Block"
          width={390}
          height={320}
        />
        <Image
          className={style.image2}
          src="/lines.svg"
          alt="Block"
          width={285}
          height={290}
        />

        <div className={style.inputContainer}>
          <input
            className={style.inputStroce}
            type=" email "
            placeholder="✉ Your email"
          />
          <button className={style.bButton}>Receive</button>
        </div>
      </div>
    </div>
  );
}
