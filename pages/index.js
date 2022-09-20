import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { PrettyElement } from '../components/element-component'
import { cardData } from '../card-data'
import { useState } from 'react'
import { ColourBackground } from '../components/colour-background'

export default function Home() {

const [spaceFilter, setSpaceFilter] = useState(1)

const currentFilter = cardData.filter((element)=>(element.cat.includes(spaceFilter) === true))

  return (
    <div className={styles.container}>

      <Head>
        <title>Lisa Lu * portfolio</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

      <ColourBackground spaceFilter={spaceFilter} />
      <Header spaceFilter={spaceFilter} setSpaceFilter={setSpaceFilter} menu={true}/>

  
<div className={styles.outer_main}>
      <main className={styles.main}>
      {currentFilter.map((element, index)=>(
          <PrettyElement 
          title={element.title} 
          desc={element.desc}
          pic={element.pic}
          link={element.link}
          key={element.title}
          lengthx={currentFilter.length}
          border={element.border}
          background={spaceFilter}
          indexx={index}/>))}
      </main>
      </div>
    </div>
  )
}

