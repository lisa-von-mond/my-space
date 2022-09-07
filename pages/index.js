import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { cardData } from '../../portfolio/card-data'
import { PrettyElement } from '../components/element-component'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

      <Header/>

      <main className={styles.main}>
      
{cardData.map((element)=>(
<PrettyElement 
title={element.title} 
desc={element.desc}
pic={element.pic}
spacer={element.spacer}
link={element.link}
key={element.title}
/>


))}

      </main>

      <footer className={styles.footer}>
  <p>CONTACT / ABOUT / LEGAL+PRIVACY</p>
  <p>@ 2022 Lisa Lu.</p>
      </footer>
    </div>
  )
}
