import React from 'react'
import styles from './Page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <>
    <div>
        <p className={styles.p}>Best Things to Do in Dubai</p>


    </div>
    <div className={styles.xiomi}>
    <Link href="/about" className={styles.Link}>Content for stories </Link>
    <Link href="/about" className={styles.Link}>Things to Do</Link>
    <Link href="/about" className={styles.Link}>Beaches</Link>
    <Link href="/about" className={styles.Link}>Extreme</Link>
    <Link href="/about" className={styles.Link}>Food</Link>
    </div>
    <div className={styles.ImagesContainer}>
    <Image src="/content-image/Dubai.png" width={414} height={450} alt='sdsdas' />
    <Image src="/content-image/Beach.png" width={414} height={450} alt='sdsdas' />
    <Image src="/content-image/Girl.png" width={414} height={450} alt='sdsdas' />
    <Image src="/content-image/Beautiful.png" width={414} height={450} alt='sdsdas' />
    <Image src="/content-image/Palma.png" width={414} height={450} alt='sdsdas' />
    <Image src="/content-image/Mosque.png" width={414} height={450} alt='sdsdas' />
    <Image src="/content-image/Rolls-Royce.png" width={414} height={450} alt='sdsdas' />
    <Image src="/content-image/Dreams.png" width={414} height={450} alt='sdsdas' />
    <Image src="/content-image/Boobs.png" width={414} height={450} alt='sdsdas' />

  </div>
    </>
  )
}
