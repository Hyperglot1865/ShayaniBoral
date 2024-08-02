import React from 'react'
import styles from '../../src/styles/Home/Footer.module.css'
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.cont}>
        <div className={styles.flex}>
            <div className={styles.left}>
                <IoIosMail className={styles.icon}/>
                <div className={styles.name}>Artist Name</div>
                <div className={styles.mail}>artist@gmail.com</div>
            </div>
            <div className={styles.right}>
                <div className={styles.righth}>Follow On</div>
                <div className={styles.icons}>
                    <FaFacebook className={styles.icon1}/>
                    <FaInstagram className={styles.icon2}/>
                    <FaTwitter className={styles.icon3}/>
                    <FaLinkedin className={styles.icon4}/>
                    <FaYoutube className={styles.icon5}/>
                </div>
            </div>
        </div>
        <div>Copyright 2024 | All rights reserved</div>
    </div>
  )
}
