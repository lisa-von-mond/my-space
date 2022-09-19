import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import lush1 from "../public/lush screenshot 1.png"
import lush2 from "../public/lush screenshot 2.png"
import lush3 from "../public/lush whole screen.png"
import lush4 from "../public/lush console 1.png"
import lush5 from "../public/lush console 2.png"
import { Header } from '../components/header'
import { BackButton } from '../components/back-button'

export default function RauschendeWolken() {
  return (
    <div className={styles.container}>
      <Head>
        <title>lush3000</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>
        <Header/>

    <main className={pstyles.project_main}>

      <div className={pstyles.intro}>
      <div className={pstyles.intro_pic}>
        <Image src={lush1} alt="lush3000 screenshot"></Image>
      </div>
      <div className={pstyles.intro_text}>
          <h1 className={pstyles.project_title}>LUSH3000</h1>
          <p className={pstyles.project_text}>lush:3000 gives an understanding of coding-principles in a playful way. As environmental activist of the future, your task is shipping resources from planets to the next. Program your route in a way so that energy supplies are used consciously and the system will not crash.</p>
          <p className={pstyles.project_text}>The game is my capstone project of neue fische web development bootcamp, that I absolved 2022.</p>
          <a href="https://lush3000.vercel.app" target="blank" rel="noopener"><p className={pstyles.project_text}>see deployment here</p></a>
       <BackButton/>
      </div>
      </div>

      <div className={pstyles.gallery}>
      <Image alt="lush3000 screenshot" src={lush2} width="600" height="500"></Image>
      <Image alt="lush3000 screenshot" src={lush3} width="800" height="500"></Image>
      <Image alt="lush3000 console screenshot" src={lush4} width="450" height="500"></Image>
      <Image alt="lush3000 console screenshot" src={lush5} width="450" height="500"></Image>
    
      </div>
    
    </main>

      <footer className={styles.footer}>
  <p>CONTACT / ABOUT / LEGAL+PRIVACY</p>
  <p>@ 2022 Lisa Lu.</p>
      </footer>
    </div>
  )
}
