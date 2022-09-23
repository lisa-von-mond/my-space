import styled, {css} from "styled-components";
import Link from "next/link";

export function Footer({}){
return(

<MyFooter>
    <Link href="/about">
    <FooterElement>ABOUT</FooterElement>
    </Link>
    <Link href="mailto:lisalue@posteo.de">
    <FooterElement>CONTACT</FooterElement>
    </Link>
    <FooterElement>●</FooterElement>
    <Link href="/legal">
    <FooterElement>LEGAL</FooterElement>
    </Link>
    <Link href="/privacy">
    <FooterElement>PRIVACY</FooterElement>
    </Link>
</MyFooter>

)

}

const MyFooter = styled.footer`

    position:relative;
    display: flex;
    flex-direction:row;
    gap: 1rem;
    padding: 0;
    border-top: 2px solid black;
    justify-content: center;
    align-items: center;
    z-index: 120;
    width: 80%;
    margin:2rem 10% 0 10%;
    padding: 1.6rem;
  
  
@media only screen and (min-width:1000px){
    position:fixed;
    left: 1.6rem;
    bottom:1.6rem;
    gap: 0.4rem;
    border:none;
    margin: 0;
    padding: 0;
    flex-direction:column;
    align-items:flex-start;
    width: 8rem;

    }
`

const FooterElement = styled.p`
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
    padding: 0.3rem;
    margin: 0;
    border-radius: 6px;
    cursor:pointer;


    &:hover{
    color:white;
    background:black;
    }
`