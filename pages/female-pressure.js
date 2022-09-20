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
        <title>Lisa Lu * female:pressure flyer</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>
        <Header/>

    <main className={pstyles.project_main}>

      <div className={pstyles.intro}>

        <Image src={front} alt="open session flyer"></Image>
 
      <div className={pstyles.intro_text}>
          <h2>female:pressure open session</h2>
          <p className={pstyles.project_text}>Flyer for music and networking event of Hamburg female:pressure group</p>
          <p className={pstyles.project_text}>female:pressure is a worldwide network of and for FLINTA* persons in electronic music and visual arts, with the goal to achieve more gender equality in these areas.</p>
          <div className={pstyles.spacer}></div>
          <BackButton/>
          <div className={pstyles.spacer}></div>
          <Image src={back} alt="open session flyer"></Image>
      </div>
      </div>

      <div className={pstyles.gallery}>
      <Image src={flyer} alt="open session flyer"></Image>
    
      </div>
    
    </main>
    </div>
  )
}
