import React from 'react'
import style from './navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Car List in Dubai</h1>
      <div className={style.containerLink}>
        <Link href='#' className={style.carNav}>All Cars</Link>
        <Link href='#' className={style.carNav}>SUVs</Link>
        <Link href='#' className={style.carNav}>Convertibles</Link>
        <Link href='#' className={style.carNav}>Sports Cars</Link>
        <Link href='#' className={style.carNav}>Coupe</Link>
        <Link href='#' className={style.carNav}>Premium</Link>
      </div>
<div className={style.fotoImage}>
<Image src="/foto.car/1.png" width={955} height={550} alt="car" className={style.foto}/>

<button className={style.but}>RENT</button>


<Image src="/foto.car/2.png" width={955} height={550} alt="car" className={style.foto}/>
<Image src="/foto.car/3.png" width={955} height={550} alt="car" className={style.foto}/>
<Image src="/foto.car/4.png" width={955} height={550} alt="car" className={style.foto}/>
<Image src="/foto.car/5.png" width={955} height={550} alt="car" className={style.foto}/>
<Image src="/foto.car/6.png" width={955} height={550} alt="car" className={style.foto}/>
<Image src="/foto.car/7.png" width={955} height={550} alt="car" className={style.foto}/>
<Image src="/foto.car/8.png" width={955} height={550} alt="car" className={style.foto}/>
</div>


    </div>
  )
}
