import styled, {css} from "styled-components";
import styles from '../styles/Home.module.css'
import Image from "next/image";
import mfc_teaser from "../public/mfc_TEASER.png"
import fp_teaser from "../public/fp_TEASER.jpg"
import rwsa_teaser from "../public/rwsa_TEASER.jpg"
import lush_teaser from "../public/lush_TEASER.png"
import kirindou_teaser from "../public/kirindou_TEASER.jpg"
import empowerment_teaser from "../public/empowerment_TEASER.jpg"
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";


export function PrettyElement({title, desc, pic, spacer, link}){

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
    <ElementFrame>
      
        <ElementPic picname="mfc_teaser" currentpic={pic}>
            <Image src={mfc_teaser} width="800" height="800" alt="mfc_teaser"></Image>
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
        <ElementPic picname="kirindou_teaser" currentpic={pic}>
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
    
min-width:150px;
  max-width:20rem;
  aspect-ratio:1;
  display:flex;
  border-radius:100%;
  flex-direction:column;
  align-items:center;
  align-content:center;
  gap: 1rem;
  padding:1rem;
  margin-bottom:1rem;
  cursor:pointer;
  position:relative;
  overflow:hidden;
  
  
&:hover{
  filter: grayscale(0%);
  }`

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
    background: rgba(0,0,0,0.5);

@media(hover:hover){
    display:none;
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
    background: rgba(0,0,0,0.5);
    opacity:0;

&:hover{
    opacity:100;
    animation: fade 2s;
}

@media(hover:none){
    display:none;
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
const TextFrame = styled.div`

`
const ElementTitle = styled.h2`
font-size:1.7rem;
width:70%;
font-weight:400;
text-transform:uppercase;
color:white;
text-align:center;

@media screen and (max-width:1000px){
font-size:0.8rem;
}
`
const ElementDesc = styled.p`
font-size:1.3rem;
font-weight:300;
width:70%;
text-transform:uppercase;
padding:0;
margin:0;
text-align:center;
color:white;

@media only screen and (max-width:1000px){
    font-size:0.3rem;
}
`



