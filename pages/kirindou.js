import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import kirindou from "../public/kirindou.png"
import { Header } from '../components/header'
import { BackButton } from '../components/back-button'

export default function Kirindou() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa Lu * logo for mediation start up</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

      <Header/>

  <main className={pstyles.project_main}>

      <div className={pstyles.intro}>
      <div className={pstyles.intro_pic}>
        <Image src={kirindou} alt="kirindou"></Image>
      </div>
      <article className={pstyles.intro_text}>
        <h2>Kirindou</h2>
        <p className={pstyles.project_text}>The education officer Jan asked me to make a logo for his mediation and conflict management startup.</p>
        <div className={pstyles.spacer}></div>
        <BackButton/>
    
       </article>
      </div>
    
    </main>
    </div>
  )
}
