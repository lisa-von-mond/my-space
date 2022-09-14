import styled, {css} from "styled-components";
import Image from "next/image";
import mfc_teaser from "../public/mfc_TEASER.png"
import fp_teaser from "../public/fp_TEASER.jpg"
import rwsa_teaser from "../public/rwsa_TEASER.jpg"
import lush_teaser from "../public/lush_TEASER.png"
import kirindou_teaser from "../public/kirindou_TEASER.jpg"
import empowerment_teaser from "../public/empowerment_TEASER.jpg"
import Link from "next/link";
import { useState, useEffect } from "react";

export function PrettyElement({title, desc, pic, spacer, link}){


    return(
    <Link href={`/${link}`}>
    <ElementFrame>
      
        <ElementPic picname="mfc_teaser" currentpic={pic}>
            <Image src={mfc_teaser} width="500" height="500" alt="mfc_teaser"></Image>
        </ElementPic>
        <ElementPic picname="fp_teaser" currentpic={pic}>
            <Image src={fp_teaser} width="500" height="500" alt="fp_teaser"></Image>
        </ElementPic>
        <ElementPic picname="rwsa_teaser" currentpic={pic}>
            <Image src={rwsa_teaser} width="500" height="500" alt="rwsa_teaser"></Image>
        </ElementPic>
        <ElementPic picname="lush_teaser" currentpic={pic}>
            <Image src={lush_teaser} width="500" height="500" alt="lush_teaser"></Image>
        </ElementPic>
        <ElementPic picname="kirindou_teaser" currentpic={pic}>
            <Image src={kirindou_teaser} width="500" height="500" alt="kirindou_teaser"></Image>
        </ElementPic>
        <ElementPic picname="empowerment_teaser" currentpic={pic}>
            <Image src={empowerment_teaser} width="500" height="500" alt="empowerment_teaser"></Image>
        </ElementPic>
        <TextFrame>
        <ElementTitle>{title}</ElementTitle>
        <ElementDesc>{desc}</ElementDesc>
        </TextFrame>
     
    </ElementFrame>
    </Link>)
}


const ElementFrame = styled.div`
min-width:250px;
max-width:25rem;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
align-content:center;
gap: 1rem;
padding:1rem;
margin-bottom:1rem;
cursor:pointer;
position:relative;

&:hover{
    transform:scale(105%);
    filter: grayscale(0%);
    }
`

const ElementPic = styled.div`
width:auto;
aspect-ratio:1;
border-radius: 100%;
overflow:hidden;
filter: grayscale(70%);

${props =>
    props.picname !== props.currentpic &&
    css`
      display:none;
    `}
`
const TextFrame = styled.div`
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
}
`
const ElementTitle = styled.h2`
font-size:1.7rem;
width:70%;
font-weight:400;
text-transform:uppercase;
color:white;
text-align:center;
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
`



