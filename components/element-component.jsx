import styled, {css} from "styled-components";
import Image from "next/image";
import clouds_one from "../public/clouds.jpg"
import clouds_two from "../public/clouds_cyan.jpg"
import clouds_three from "../public/clouds_pink.jpg"
import Link from "next/link";

export function PrettyElement({title, desc, pic, spacer, link}){

    return(
    <Link href={`/${link}`}>
    <ElementFrame>
      
        <ElementPic picname="clouds_one" currentpic={pic} alt="clouds_two">
            <Image src={clouds_one}></Image>
        </ElementPic>
        <ElementPic picname="clouds_two" currentpic={pic} alt="clouds_two">
            <Image src={clouds_two}></Image>
        </ElementPic>
        <ElementPic picname="clouds_three" currentpic={pic} alt="clouds_two">
            <Image src={clouds_three}></Image>
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

