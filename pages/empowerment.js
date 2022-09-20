import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import empowerment from "../public/empowerment-logo.jpg"
import { Header } from '../components/header'
import { BackButton } from '../components/back-button'

export default function Kirindou() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa Lu * logo for didactic research project</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

        <Header/>

    <main className={pstyles.project_main}>

      <div className={pstyles.intro}>
      <Image src={empowerment} alt="empowerment im CHemieunterricht"></Image>

      <div className={pstyles.intro_text}>
          <h2>Empowerment im Chemieunterricht / Empowerment in Chemistry Lesson</h2>
          <p className={pstyles.project_text}>The research project of post-doc Lilith Rüschenpöhler seeks to develop a class concept for science didactic, that integrates thoughts about gender, social-economic status and migration . With the background of postcolonial and literature-based approached, the goal is to increase chances and reach more equality of opportunity in divers and heterogene classes.</p>
          <div className={pstyles.spacer}></div>
          <BackButton/>
       </div>
      </div>
    
    </main>
    </div>
  )
}
