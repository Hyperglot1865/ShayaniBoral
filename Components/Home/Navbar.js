import React from 'react'
import styles from "../../src/styles/Home/Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.logo}><div className={styles.initials}>LS</div><div className={styles.name}>Lorem Ipsum</div></div>
            <ul className={styles.list}>
                <li>Home</li>
                <li>Exhibition</li>
                <li>Gallery</li>
                <li>About</li>
                <li>News and Event</li>
                <li>Blog</li>
            </ul>
    </div>
  )
}
