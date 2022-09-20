import styled, {css} from 'styled-components'
import Link from 'next/link'

export function Header({spaceFilter, setSpaceFilter, menu}){

return(

<HeaderFrame>
<Link href="/">
<Lisa>LISA LU</Lisa>
</Link>
<FilterMenu menu={menu}>
    <FilterItem state="1" current={spaceFilter} onClick={() => setSpaceFilter(1)}>all</FilterItem>
    <FilterItem state="2" current={spaceFilter} onClick={() => setSpaceFilter(2)}>graphic</FilterItem>
    <FilterItem state="3" current={spaceFilter} onClick={() => setSpaceFilter(3)}>layout</FilterItem>
    <FilterItem state="4" current={spaceFilter} onClick={() => setSpaceFilter(4)}>web / UI</FilterItem>
</FilterMenu>
</HeaderFrame>)

}

const FilterItem = styled.li`
cursor:pointer;
padding: 0.3rem;
border-radius:0.2rem;

&:hover{
background:black;
color:white;
}

${props =>
    props.state === props.current &&
    css`
     font-weight:500;
    `}

`

const HeaderFrame = styled.div`

height:12rem;
width:100%;
z-index:100;
position:fixed;
top:0;
left:0;

@media only screen and (min-width:800px){
height:0;
}

`


const Lisa = styled.h1`

    width:100%;
    font-size: 1.2rem;
    font-weight: 500;
    position:fixed;
    top:1rem;
    left:0;
    letter-spacing: 0.3rem;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    padding: 0;
    margin: 0;
    cursor:pointer;
    

@media only screen and (min-width:800px){
  
    width: 5rem;
    position:fixed;
    top:1.6rem;
    left:1.6rem;
    height:auto;
    justify-content: flex-start;
    line-height: 2rem;
    }

}`

const FilterMenu = styled.div`

    width:100%;
    height: auto;
    position:fixed;
    top:4rem;
    left:0;
    font-size:1.2rem;
    letter-spacing: 0.3rem;
    font-weight: 400;
    list-style-type:none;
    text-transform:uppercase;
    display:flex;
    flex-wrap:wrap;
    gap: 0.3rem;
    justify-content:space-between;
    padding: 0 0.6rem 0 0.6rem;

@media only screen and (min-width:700px){
  
    position:fixed;
    width: 13rem;
    left:auto;
    right:1.6rem;
    top:1.6rem;
    padding: 0;
    gap:0.3rem;
    flex-direction:column;
    align-items:flex-end;
    flex-wrap:nowrap;
        }
    
    ${props =>
        props.menu !== true &&
        css`
        display:none;
        `}
    
    `



