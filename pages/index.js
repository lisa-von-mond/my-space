import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { PrettyElement } from '../components/element-component'
import { cardData } from '../card-data'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function Home() {

const [spaceFilter, setSpaceFilter] = useState(0)

const currentFilter = cardData.filter((element)=>(element.cat.includes(spaceFilter) === true))

const myvariants = {
  one: { opacity: 1 },
  two: { opacity: 0 },
}

  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
      </Head>

      <Header spaceFilter={spaceFilter} setSpaceFilter={setSpaceFilter}/>

<BgContainer>
      <BGblue as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 0 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGblue>

      <BGpink as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 1 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGpink>

      <BGgold as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 2 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGgold>

      <BGpurple as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 3 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGpurple>

      <BGyellow as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 4 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGyellow>

      </BgContainer>
<div className={styles.outer_main}>
      <main className={styles.main}>
      
      {currentFilter.map((element, index)=>(
          <PrettyElement 
          title={element.title} 
          desc={element.desc}
          pic={element.pic}
          id={element.id}
          link={element.link}
          key={element.title}
          lengthx={currentFilter.length}
          border={element.border}
          indexx={index}/>))}


      </main>
      </div>

      <footer className={styles.footer}>
  <p>CONTACT / ABOUT / LEGAL+PRIVACY</p>
  <p>@ 2022 Lisa Lu.</p>
      </footer>
    </div>
  )
}

const BgContainer = styled.div`
z-index: 1;`

const BGpink = styled.div`
height: 120vh;
width:120vw;
position:fixed;
top:-10vh;
left:-10vw;
background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
`

const BGblue = styled.div`
height: 120vh;
width:120vw;
position:fixed;
top:-10vh;
left:-10vw;
background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
`

const BGyellow = styled.div`
height: 120vh;
width:120vw;
position:fixed;
top:-10vh;
left:-10vw;
background: yellow;
background-image: linear-gradient(120deg, white 0%, #f093fb 100%);
`

const BGpurple = styled.div`
height: 120vh;
width:120vw;
position:fixed;
top:-10vh;
left:-10vw;
background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
`

const BGgold = styled.div`
height: 120vh;
width:120vw;
position:fixed;
top:-10vh;
left:-10vw;
background: goldenrod;
`