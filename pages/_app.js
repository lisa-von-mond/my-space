import '../styles/globals.css'
import { useState } from 'react'
import styled, {css} from 'styled-components'



function MyApp({ Component, pageProps }) {


  return (
  <Component {...pageProps} />)

}

export default MyApp


/*background-image: linear-gradient(to top, ${props => props.bgone} 1%, ${props => props.bgtwo} 100%);*/
