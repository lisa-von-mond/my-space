import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import flyer from "../public/flyer_os2.jpg"
import front from "../public/flyer_os_front.jpg"
import back from "../public/flyer_os_back.jpg"
import { Header } from '../components/header'
import { BackButton } from '../components/back-button'

export default function RauschendeWolken() {
  return (
    <div className={styles.container}>
      <Head>
        <title>female:pressure flyer</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>
        <Header/>

    <main className={pstyles.project_main}>

      <div className={pstyles.intro}>
      <div className={pstyles.intro_pic}>
        <Image src={front} alt="open session flyer"></Image>
      </div>
      <div className={pstyles.intro_text}>
          <h1 className={pstyles.project_title}>open session</h1>
          <p className={pstyles.project_text}>Flyer for open session event of Hamburg female:pressure group</p>
          <p className={pstyles.project_text}>female:pressure is a worldwide network of and for FLINTA* persons in electronic music and visual arts, with the goal to achieve gender equality in areas, where men are still overrepresented. </p>
          <BackButton/>
      </div>
      </div>

      <div className={pstyles.gallery}>
      <Image src={flyer} width="1000" height="500" alt="open session flyer"></Image>
      <Image src={back} width="350" height="500" alt="open session flyer"></Image>
    
      </div>
    
    </main>

      <footer className={styles.footer}>
  <p>CONTACT / ABOUT / LEGAL+PRIVACY</p>
  <p>@ 2022 Lisa Lu.</p>
      </footer>

    </div>
  )
}
