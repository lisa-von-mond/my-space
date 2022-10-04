import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { PrettyElement } from '../components/element-component'
import { cardData } from '../card-data'
import { useState, useEffect } from 'react'
import { ColourBackground } from '../components/colour-background'
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from '../components/footer'

export default function Home() {

function reloadMe(){window.location.reload();}

const [spaceFilter, setSpaceFilter] = useState(1)

const currentFilter = cardData.filter((element)=>(element.cat.includes(spaceFilter) === true))

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2
    }
  }
}

  return (
  <div className={styles.container}>

      <Head>
        <title>Lisa Lu * portfolio</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

      <ColourBackground spaceFilter={spaceFilter} />
      <Header spaceFilter={spaceFilter} setSpaceFilter={setSpaceFilter} menu={true}/>

  
<main className={styles.outer_main}>
 
      <motion.div className={styles.main}
      
      variants={container}
      initial="hidden"
      animate="show">
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
      </motion.div>

  </main>
  <Footer/>
</div>
  )
}
