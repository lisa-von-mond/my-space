import styled, {css} from "styled-components";
import Image from "next/image";
import mfc_teaser from "../public/mfc_TEASER.png"
import fp_teaser from "../public/fp_TEASER.jpg"
import rwsa_teaser from "../public/rwsa_TEASER.jpg"
import lush_teaser from "../public/lush_TEASER.png"
import kirindou_teaser from "../public/kirindou_TEASER.jpg"
import Link from "next/link";
import { useState, useEffect } from "react";

export function PrettyElement({title, desc, pic, spacer, link}){


    return(
    <Link href={`/${link}`}>
    <ElementFrame>
      
        <ElementPic picname="mfc_teaser" currentpic={pic} alt="mfc_teaser">
            <Image src={mfc_teaser}></Image>
        </ElementPic>
        <ElementPic picname="fp_teaser" currentpic={pic} alt="fp_teaser">
            <Image src={fp_teaser}></Image>
        </ElementPic>
        <ElementPic picname="rwsa_teaser" currentpic={pic} alt="rwsa_teaser">
            <Image src={rwsa_teaser}></Image>
        </ElementPic>
        <ElementPic picname="lush_teaser" currentpic={pic} alt="lush_teaser">
            <Image src={lush_teaser}></Image>
        </ElementPic>
        <ElementPic picname="kirindou_teaser" currentpic={pic} alt="kirindou_teaser">
            <Image src={kirindou_teaser}></Image>
        </ElementPic>
        <ElementTitle>{title}</ElementTitle>
        <ElementDesc>{desc}</ElementDesc>
        <RandomSpacer spacer={spacer}></RandomSpacer>
     
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


&:hover{
    transform:scale(105%);
    }

${props =>
    props.visible === false &&
    css`
    border:5px solid red;
    `}
    
`

const ElementPic = styled.div`
width:auto;
aspect-ratio:1;
border-radius: 5rem;
overflow:hidden;
filter: grayscale(70%);

&:hover{
filter: grayscale(0%);
}


${props =>
    props.picname !== props.currentpic &&
    css`
      display:none;
    `}
`

const ElementTitle = styled.h2`
font-size:2rem;
font-weight:400;
text-transform:uppercase;
padding:0;
margin:0;
text-align:center;
`
const ElementDesc = styled.p`
font-size:1.3rem;
font-weight:300;
text-transform:uppercase;
padding:0;
margin:0;
text-align:center;
`

const RandomSpacer = styled.div`
margin-bottom:5rem;
${props =>
    props.spacer !== "yes" &&
    css`
      display:none;
    `}

@media only screen and (max-width:700px){
    display:none;
}
`

