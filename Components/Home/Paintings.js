import React from 'react'
import styles from '../../src/styles/Home/Paintings.module.css'
import Image from 'next/image'

export default function Paintings() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.heading}>Paintings</div>
        <div className={styles.flex}>

            <div className={styles.card}>
                <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
                <div className={styles.info}>
                    <div className={styles.name}>Name</div>
                    <button className={styles.btn}>View All</button>
                </div>
            </div>

            <div className={styles.card}>
                <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
                <div className={styles.info}>
                    <div className={styles.name}>Name</div>
                    <button className={styles.btn}>View All</button>
                </div>
            </div>

            <div className={styles.card}>
                <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
                <div className={styles.info}>
                    <div className={styles.name}>Name</div>
                    <button className={styles.btn}>View All</button>
                </div>
            </div>

            <div className={styles.card}>
                <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
                <div className={styles.info}>
                    <div className={styles.name}>Name</div>
                    <button className={styles.btn}>View All</button>
                </div>
            </div>
        </div>
    </div>
  )
}
