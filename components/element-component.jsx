import styled, {css} from "styled-components";
import styles from '../styles/Home.module.css'
import Image from "next/image";
import mfc_teaser from "../public/mfc_TEASER_mono.png"
import fp_teaser from "../public/fp_TEASER.png"
import rwsa_teaser from "../public/rwsa_TEASER.png"
import lush_teaser from "../public/lush_TEASER_sw.png"
import kirindou_teaser from "../public/kirindou_TEASER_mono.png"
import empowerment_teaser from "../public/empowerment_TEASER_mono.png"
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { gridMatrix } from "../grid-matrix";


export function PrettyElement({title, desc, pic, link, id, row, col, rowt, colt, border}){

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


    return(
    <Link href={`/${link}`}>
    <ElementFrame col={col} row={row} colt={colt} rowt={rowt} border={border}>
   
        <ElementPic picname="mfc_teaser" currentpic={pic}>
            <Image src={mfc_teaser} width="600" height="600" alt="mfc_teaser"></Image>
        </ElementPic>
        <ElementPic picname="fp_teaser" currentpic={pic}>
            <Image src={fp_teaser} width="600" height="600" alt="fp_teaser"></Image>
        </ElementPic>
        <ElementPic picname="rwsa_teaser" currentpic={pic}>
            <Image src={rwsa_teaser} width="600" height="600" alt="rwsa_teaser"></Image>
        </ElementPic>
        <ElementPic picname="lush_teaser" currentpic={pic}>
            <Image src={lush_teaser} width="600" height="600" alt="lush_teaser"></Image>
        </ElementPic>
        <ElementPic picname="kirindou_teaser" currentpic={pic} className={styles.borderimage}>
            <Image src={kirindou_teaser} width="600" height="600" alt="kirindou_teaser"></Image>
        </ElementPic>
        <ElementPic picname="empowerment_teaser" currentpic={pic}>
            <Image src={empowerment_teaser} width="600" height="600" alt="empowerment_teaser"></Image>
        </ElementPic>
        <ElementTextScroll as={motion.div}
        
            variants={elementVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 1 }}
        
        >
        <ElementTitle>{title}</ElementTitle>
        <ElementDesc>{desc}</ElementDesc>
        </ElementTextScroll>

        <ElementTextHover >
                <ElementTitle>{title}</ElementTitle>
                <ElementDesc>{desc}</ElementDesc>

        </ElementTextHover>
     
    </ElementFrame>
    </Link>)
}


const ElementFrame = styled.div`
height:250px;
width: 250px;
  aspect-ratio:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  align-content:center;
  gap: 1rem;
  padding:1rem;
  cursor:pointer;
  position:relative;
  overflow:hidden;
  border-radius:50%;
  grid-column: ${props=>props.col} / span 2;
  grid-row: ${props=>props.row} / span 2;

@media only screen and (max-width:1200px){
    grid-column: ${props=>props.colt} / span 2;
    grid-row: ${props=>props.rowt} / span 2;
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
    top:0;
    left:0;
    height:100%;
    width:100%;
    border-radius:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:2rem;
    background: black;

@media(hover:hover){
    display:none;
}

@media screen and (max-width:1000px){
    gap:1rem;
    }


`

const ElementTextHover = styled.div`
  
    position: absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    border-radius:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:2rem;
    background: black;
    opacity:0;

&:hover{
    opacity:100;
    animation: fade 2s;
}

@media(hover:none){
    display:none;
}

@media screen and (max-width:1000px){
    gap:1rem;
    }
`

const ElementPic = styled.div`
width:120%;
height:120%;
margin-top:-10%;
filter: grayscale(70%);

${props =>
    props.picname !== props.currentpic &&
    css`
      display:none;
    `}
`

const ElementTitle = styled.h2`
font-size:1.5rem;
width:70%;
font-weight:400;
text-transform:uppercase;
color:white;
text-align:center;

@media screen and (max-width:1000px){
font-size:0.9rem;
}
`
const ElementDesc = styled.p`
font-size:1.2rem;
font-weight:300;
width:70%;
text-transform:uppercase;
padding:0;
margin:0;
text-align:center;
color:white;

@media only screen and (max-width:1000px){
    font-size:0.5rem;
}
`



