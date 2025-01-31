import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../Components/Home/Navbar.js"
import Hero from "../../Components/Home/Hero.js"
import Story from "../../Components/Home/Story.js";
import Paintings from "../../Components/Home/Paintings.js";
import Sculpture from "../../Components/Home/Sculpture.js";
import Events from "../../Components/Home/Events.js";
import Footer from "../../Components/Home/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <Hero />
        <Story />
        <Paintings />
        <Sculpture />
        <Events />
        <Footer/>
      </main>
    </>
  );
}
