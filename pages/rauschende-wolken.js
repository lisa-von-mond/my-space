import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import rauschendewolken from "../public/rauschende wolken.jpg"
import rinde from "../public/rinde.jpg"
import schnecke from "../public/schnecke.jpg"
import linol from "../public/linol.jpg"
import wolke from "../public/wolke.jpg"
import baum from "../public/baum.jpg"
import moos from "../public/moos.jpg"
import { Header } from '../components/header'
import { BackButton } from '../components/back-button'
import styled from 'styled-components'

export default function RauschendeWolken() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa Lu * design research Project</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

        <Header/>

    <main className={pstyles.project_main}>

      <div className={pstyles.intro}>
      <div className={pstyles.intro_pic}>
        <Image src={rauschendewolken} alt="rauschende wolken poster"></Image>
      </div>
      <div className={pstyles.intro_text}>
          <h2>Rauschende Wolken, schöne Atome</h2>
          <p className={pstyles.project_text}>With the discourse of computational creativity, the so called AI is finding its way into the world of design. ut what does it mean to say, a computer is creative? <em>Rauschende Wolken, schöne Atome</em> &#091;swooshing clouds, beautiful atoms&#093; tries to deconstruct creativity system-theoretically.</p>
          <p className={pstyles.project_text}>It is about finding the difference between what is and what we create, and what we can understand through systems; leaving known shapes and processes without getting lost. The result is an essay as well as a series of graphic system-based self-experiments. Exhiited 2016 at Gleishallen, Güterbahnhof Bremen.</p>
          <BackButton/>
      </div>
      </div>

      <div className={pstyles.gallery}>
      <GalleryRow>
          <Image src={wolke} objectFit="contain" alt="photo cloud"></Image>
          <Image src={rinde} objectFit="contain" alt="photo tree"></Image>
      </GalleryRow>
      <GalleryRow>
          <Image src={schnecke} objectFit="contain" alt="graphic slug"></Image>
          <Image src={baum} objectFit="contain" alt="tree"></Image>
      </GalleryRow>
      <GalleryRow>
         <Image src={moos} alt="photo moola"></Image>
        <Image src={linol} alt="linocut"></Image>
      </GalleryRow>
 </div>
    
    </main>
    </div>
  )
}

const GalleryRow = styled.div`
display:flex;
flex-direction: column;
gap: 3rem;
justify-content: space-between;

@media only screen and (min-width:1000px){
flex-direction: row;
gap: 6rem;
}
`