import styled, {css} from "styled-components";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { gridMatrix } from "../grid-matrix";
import { useState } from "react";
import Image from "next/image";


export function PrettyElement({title, desc, pic, link, border, lengthx, indexx, background, id}){

const [isVisible, setIsVisible] = useState(false)

const elementVariants = {
        offscreen: {
          opacity:0
        },
        onscreen: {
          opacity:100,
          transition: {
            duration: 12,
          }
        }
      };

const thisElement = (gridMatrix.find(element => element.idx === lengthx)).matrix[indexx]
const colD = thisElement.cold
const rowD = thisElement.rowd
const colT = thisElement.colt
const rowT = thisElement.rowt

    return(
    <Link href={`/${link}`}>
    
    <ElementFrame cold={colD} rowd={rowD} colt={colT} rowt={rowT} border={border}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>

        <ElementPic>
            <Image src={pic} width="600" height="600" alt="mfc_teaser"></Image>
        </ElementPic>
       
        <ElementTextScroll visible={isVisible} as={motion.div}

            background={background}
        
            variants={elementVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 1 }}
        
        >
            <ElementTitle>{title}</ElementTitle>
            <ElementDesc desc={desc}>{desc}</ElementDesc>
        </ElementTextScroll>

        <ElementTextHover visible={isVisible} background={background}>
            <ElementTitle>{title}</ElementTitle>
            <ElementDesc desc={desc}>{desc}</ElementDesc>
        </ElementTextHover>

    </ElementFrame>
    </Link>)
}

const ElementFrame = styled.div`
height:13rem;
width: 13rem;
  aspect-ratio:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  align-content:center;
  cursor:pointer;
  position:relative;
  grid-column: ${props=>props.cold} / span 2;
  grid-row: ${props=>props.rowd} / span 2;

@media only screen and (min-width:1400px){
    height:16rem;
    width: 16rem;
}

@media only screen and (max-width:1200px){
    height:16rem;
    width: 16rem;
    grid-column: ${props=>props.colt} / span 2;
    grid-row: ${props=>props.rowt} / span 2;
}

@media only screen and (min-width:1600px){
    height:20rem;
    width: 20rem;
}

&:hover{
  filter: grayscale(0%);
  }
  
  ${props =>
    props.border === true &&
    css`
    border: 2px solid black;
    `}
`
const ElementTextScroll = styled.div`
  
    position: absolute;
    width: auto;
    height: auto;
    top:-2rem;
    right: 3rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    gap:0.5rem;
    background: blue;
    opacity:0;
    padding: 0.5rem;
    border-radius:0.5rem;

@media(hover:hover){
    display:none;
}

${props =>
    props.background === 1 &&
    css`
    background: teal;
`}

${props =>
    props.background === 2 &&
    css`
    background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
`}

${props =>
    props.background === 3 &&
    css`
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
`}

${props =>
    props.background === 4 &&
    css`
    background-image: linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%);
`}

`
const ElementTextHover = styled.div`
  
position: absolute;
top:2rem;
right: 3rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
gap:0.5rem;
background: blue;
opacity:0;
padding: 0.5rem;
border-radius:0.5rem;

${props =>
    props.visible === true &&
    css`
    opacity:100;
    animation: fade 1s;
    `}

@media(hover:none){
    display:none;
}

${props =>
    props.background === 1 &&
    css`
    background: royalblue;
`}

${props =>
    props.background === 2 &&
    css`
    background: darkviolet
`}

${props =>
    props.background === 3 &&
    css`
    background: indigo;
`}

${props =>
    props.background === 4 &&
    css`
    background: teal;
`}
`
const ElementPic = styled.div`
width:100%;
height:100%;
filter: grayscale(70%);
border-radius: 100%;
overflow:hidden;
`
const ElementTitle = styled.h2`
font-size:1.5rem;
font-weight:400;
text-transform:uppercase;
color:white;
text-align:center;
margin: 0;
padding: 0;

@media screen and (max-width:1400px){
font-size:1.3rem;
}
`
const ElementDesc = styled.p`
font-size:1.5rem;
font-weight:300;
text-transform:uppercase;
padding:0;
margin:0;
text-align:center;
color:white;
margin: 0;
padding: 0;

${props =>
    props.desc === null &&
    css`
      display:none;
    `}

@media only screen and (max-width:1400px){
    font-size:1.3rem;
}
`