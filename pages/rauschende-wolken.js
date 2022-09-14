import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import rauschendewolken from "../public/rauschende wolken.jpg"
import rinde from "../public/rinde.jpg"
import schnecke from "../public/schnecke.jpg"
import schnecke2 from "../public/schnecke2.jpg"
import wolke from "../public/wolke.jpg"
import moos from "../public/moos.jpg"
import karogif from "../public/karo4gif.gif"
import karogif2 from "../public/karo4gif2.gif"
import Link from 'next/link'
import { SubPageHeader } from '../components/sub-page-header'

export default function RauschendeWolken() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

        <SubPageHeader/>

    <main className={pstyles.project_main}>

      <div className={pstyles.intro}>
      <div className={pstyles.intro_pic}>
        <Image src={rauschendewolken} alt="rauschende wolken poster"></Image>
      </div>
      <div className={pstyles.intro_text}>
          <h1 className={pstyles.project_title}>Rauschende Wolken, schöne Atome</h1>
          <p className={pstyles.project_text}>With the discourse of computational creativity, the so called AI is finding its way into the world of design. ut what does it mean to say, a computer is creative? <em>Rauschende Wolken, schöne Atome</em> &#091;swooshing clouds, beautiful atoms&#093; tries to deconstruct creativity system-theoretically.</p>
          <p className={pstyles.project_text}>It is about finding the difference between what is and what we create, and what we can understand through systems; leaving known shapes and processes without getting lost. The result is an essay as well as a series of graphic system-based self-experiments. Exhiited 2016 at Gleishallen, Güterbahnhof Bremen.</p>
      </div>
      </div>

      <div className={pstyles.gallery}>
      <Image src={wolke} width="500" height="350" alt="photo cloud"></Image>
      <Image src={rinde} width="500" height="350" alt="photo tree"></Image>
      <Image src={schnecke} width="400" height="400" alt="graphic slug"></Image>
      <Image src={moos} width="500" height="350" alt="photo moola"></Image>
      <Image src={schnecke2} width=" 400" height="400" alt="graphic slug"></Image>
      </div>
    
    </main>

      <footer className={styles.footer}>
  <p>CONTACT / ABOUT / LEGAL+PRIVACY</p>
  <p>@ 2022 Lisa Lu.</p>
      </footer>
    </div>
  )
}
