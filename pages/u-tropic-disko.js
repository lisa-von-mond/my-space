import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import utropic from "../public/utropic.gif"
import utropic_ammonit from "../public/utropic disko_ammonit.jpg"
import { Header } from '../components/header'
import { BackButton } from '../components/back-button'

export default function RauschendeWolken() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa Lu * female:pressure flyer</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>
        <Header/>

    <main className={pstyles.project_main}>

      <div className={pstyles.intro}>

        <Image src={utropic_ammonit} alt="utropic disko poster"></Image>
 
      <div className={pstyles.intro_text}>
          <h2>u*tropic disko</h2>
          <p className={pstyles.project_text}>Poster + flyer for event series of political music collective in Zurich</p>
     <div className={pstyles.spacer}></div>
          <BackButton/>
          <div className={pstyles.spacer}></div>
          <Image src={utropic} alt="utropic disko poster"></Image>
      </div>
      </div>

    
    </main>

      <footer className={styles.footer}>
  <p>CONTACT / ABOUT / LEGAL+PRIVACY</p>
  <p>@ 2022 Lisa Lu.</p>
      </footer>

    </div>
  )
}
