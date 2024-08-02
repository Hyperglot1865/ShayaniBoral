import React from 'react'
import styles from '../../src/styles/Home/Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.left}>
            <div>
                <div className={styles.name}>Artist Name</div>
                <div className={styles.tag}>Some tag line</div>
            </div>
        </div>
        <div className={styles.right}>
            <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
        </div>
    </div>
  )
}
