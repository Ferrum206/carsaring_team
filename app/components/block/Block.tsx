import Image from "next/image";
import style from "./Block.module.css"


export default function BlockContent() {
  return (
  <div className={style.container}>

      

      <div className={style.cardImage}>
        <div className={style.cardImage2}>
          <h2 className={style.cardText}>Get a discount of up to</h2>
          <div className={style.cardToText}>60%</div>
          </div>
          <h4 className={style.blockText}>Get the latest articles and business updates that you need to know, you’ll even get special recommendations weekly.</h4>


     <Image className={style.image1} src="/lines.svg" alt="Block" width={390} height={320}/>
    <Image className={style.image2} src="/lines.svg" alt="Block" width={285} height={290}/>

  <div className={style.inputContainer}>
    <input className={style.inputStroce} type=" email " placeholder="✉ Your email"  /> 
    {/* <svg className={style.emailcom} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg> */}
    <button className={style.bButton}>Receive</button>    
  </div>

    </div>
      

 
    </div>
  );
}
