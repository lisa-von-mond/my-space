import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { BackButton } from '../components/back-button'


export default function AboutPage() {

return(

<div className={styles.container}>

    <Head>
        <title>Lisa Lu * about</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
    </Head>

<Header/>

    <div className={styles.outer_main_text}>
        <main>

        <h2>About</h2>
        <div className={styles.smallspacer}></div>
        <p>Lisa is a Junior Web Developer with a background on transdisciplinary design and culture &#47; media science.</p>

        <p><a href="https://github.com/lisa-von-mond" target="blank">↗ github</a></p>
        <p><a href="https://www.linkedin.com/in/lisa-luetkefedder/" target="blank">↗ linkedin</a></p>

        <div className={styles.smallspacer}></div>

        <BackButton/>
        </main>   

    </div>
<Footer/>
</div>
      
)
}
