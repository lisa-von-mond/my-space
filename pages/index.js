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

      <BGgrey as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 3 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGgrey>

      <BGyellow as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 4 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGyellow>

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


const BGpink = styled.div`
height: 120vh;
width:120vw;
z-index:0;
position:fixed;
top:-10vh;
left:-10vw;
background: pink;
`

const BGblue = styled.div`
height: 120vh;
width:120vw;
z-index:0;
position:fixed;
top:-10vh;
left:-10vw;
background: skyblue;
`

const BGyellow = styled.div`
height: 120vh;
width:120vw;
z-index:0;
position:fixed;
top:-10vh;
left:-10vw;
background: yellow;
`

const BGgrey = styled.div`
height: 120vh;
width:120vw;
z-index:0;
position:fixed;
top:-10vh;
left:-10vw;
background: lightgrey;
`

const BGgold = styled.div`
height: 120vh;
width:120vw;
z-index:0;
position:fixed;
top:-10vh;
left:-10vw;
background: goldenrod;
`

const SwitchButton = styled.div`
height: 3rem;
width: 3rem;
position:fixed;
top:20vh;
left:20vw;
background: white;
bborder-radius: 50&;
z-index: 50;
`
