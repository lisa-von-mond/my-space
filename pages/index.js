import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { PrettyElement } from '../components/element-component'
import { cardData } from '../card-data'
import { useState } from 'react'


export default function Home() {

const [spaceFilter, setSpaceFilter] = useState(0)

const currentFilter = cardData.filter((element)=>(element.cat.includes(spaceFilter) === true))


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

      <Header spaceFilter={spaceFilter} setSpaceFilter={setSpaceFilter}/>

      <main className={styles.main}>
      
      {currentFilter.map((element)=>(
          <PrettyElement 
          title={element.title} 
          desc={element.desc}
          pic={element.pic}
          spacer={element.spacer}
          link={element.link}
          key={element.title}/>))}


      </main>

      <footer className={styles.footer}>
  <p>CONTACT / ABOUT / LEGAL+PRIVACY</p>
  <p>@ 2022 Lisa Lu.</p>
      </footer>
    </div>
  )
}
