import React from 'react'
import style from './navigation.module.css'
import Link from 'next/link'

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
    </div>
  )
}
