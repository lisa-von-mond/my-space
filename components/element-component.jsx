import styled, {css} from "styled-components";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { gridMatrix } from "../grid-matrix";
import { useState, useEffect} from "react";
import Image from "next/image";

export function PrettyElement({title, desc, pic, link, border, lengthx, indexx, background}){

const [isVisible, setIsVisible] = useState("false")

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
        onMouseEnter={() => setIsVisible("true")}
        onMouseLeave={() => setIsVisible("false")}>

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


@media only screen and (min-width:700px){
    height:14rem;
    width: 14rem;
    grid-column: ${props=>props.colt} / span 2;
    grid-row: ${props=>props.rowt} / span 2;
}

@media only screen and (min-width:1000px){
    height:10rem;
    width: 10rem;
    grid-column: ${props=>props.cold} / span 2;
    grid-row: ${props=>props.rowd} / span 2;
}

@media only screen and (min-width:1300px){
    height:12rem;
    width: 12rem;
}

@media only screen and (min-width:1600px){
    height:14rem;
    width: 14rem;
}

@media only screen and (min-width:1800px){
    height:16rem;
    width: 16rem;
}

`
const ElementTextScroll = styled.div`
  
    position: absolute;
    height:100%;
    width:100%;
    top:40%;
    right: 20%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    gap:0.5rem;
    opacity:0;
    padding: 0.5rem;
    border-radius:50%;
    display:none;


${props =>
    props.background === 1 &&
    css`
    background-colour: royalblue;
`}

${props =>
    props.background === 2 &&
    css`
    background-colour: darkviolet;
`}

${props =>
    props.background === 3 &&
    css`
    background-colour: indigo;
`}

${props =>
    props.background === 4 &&
    css`
    background-colour: teal;
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
    opacity:0;
    padding: 0.5rem;
    border-radius:0.5rem;
    color:white;

${props =>
    props.visible === "true" &&
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
const ElementTitle = styled.h3`
    font-size:0.7rem;
    letter-spacing: 0.1rem;
    font-weight:400;
    text-transform:uppercase;
    text-align:center;
    margin: 0;
    padding: 0;
`
const ElementDesc = styled.p`
    font-size:0.7rem;
    letter-spacing: 0.1rem;
    font-weight:300;
    text-transform:uppercase;
    padding:0;
    margin:0;
    text-align:center;
    margin: 0;
    padding: 0;

${props =>
    props.desc === null &&
    css`
      display:none;
    `}
`