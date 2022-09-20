import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import mfc from "../public/mfc_anthrazit.png"
import { Header } from '../components/header'
import { BackButton } from '../components/back-button'

export default function RauschendeWolken() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa Lu * poster for indie label event</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

        <Header/>

    <main className={pstyles.project_main}>

      <div className={pstyles.intro}>
      <div className={pstyles.intro_pic}>
        <Image src={mfc} alt="mfc_poster" width="1100" height="1500"></Image>
      </div>
      <div className={pstyles.intro_text}>
          <h1 className={pstyles.project_title}>My favourite chords</h1>
          <p className={pstyles.project_text}>Poster for a mini festival of the Hamburg indie and punk Label My Favourite Chords</p>
          <div className={pstyles.spacer}></div>
        <BackButton/>
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
