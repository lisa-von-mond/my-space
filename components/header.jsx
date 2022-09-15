import styles from '../styles/Home.module.css'
import { useState } from 'react'
import styled, {css} from 'styled-components'

export function Header({spaceFilter, setSpaceFilter, menu}){


return(

<header className={styles.header}>
<Lisa>LISA LU</Lisa>
<FilterMenu menu={menu}>
    <FilterItem state="1" current={spaceFilter} onClick={() => setSpaceFilter(1)}>all
    </FilterItem>
    <FilterItem state="2" current={spaceFilter} onClick={() => setSpaceFilter(2)}>graphic</FilterItem>
    <FilterItem state="3" current={spaceFilter} onClick={() => setSpaceFilter(3)}>layout</FilterItem>
    <FilterItem state="4" current={spaceFilter} onClick={() => setSpaceFilter(4)}>web / UI</FilterItem>
</FilterMenu>
</header>)

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

const Lisa = styled.h1`

    width:100%;
    height: 5rem;
    font-size: 2rem;
    font-weight: 400;
    position:fixed;
    top:1rem;
    left:0;
    letter-spacing: 0.3rem;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0;
    line-height: 2.2rem;

@media only screen and (min-width:800px){
  
    width: 5rem;
    font-size: 1.6rem;
    position:fixed;
    top:2rem;
    left:2rem;
    height:auto;
    justify-content: flex-start;
    }

}`

const FilterMenu = styled.div`

    width:100%;
    height: auto;
    position:fixed;
    top:5rem;
    left:0;
    font-size:1.6rem;
    letter-spacing: 0.3rem;
    font-weight: 400;
    padding: 1rem;
    list-style-type:none;
    text-transform:uppercase;
    display:flex;
    flex-wrap:wrap;
    gap: 0.3rem;
    justify-content:space-between;

    @media only screen and (min-width:800px){
  
    position:fixed;
    width: 13rem;
    left:auto;
    right:2rem;
    top:2rem;
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



