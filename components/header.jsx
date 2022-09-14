import styles from '../styles/Home.module.css'
import { useState } from 'react'
import styled, {css} from 'styled-components'

export function Header({spaceFilter, setSpaceFilter}){

function changeCurrentState(x){
    setSpaceFilter(parseInt(x))
}

const currentState = spaceFilter

return(

<header className={styles.header}>
<div className={styles.lisa_wrapper}>LISA LU</div>
<div className={styles.filter_wrapper}>
    <FilterItem state="0" current={currentState} onClick={() => changeCurrentState(0)}>all
    </FilterItem>
    <FilterItem state="1" current={currentState} onClick={() => changeCurrentState(1)}>graphic</FilterItem>
    <FilterItem state="3" current={currentState} onClick={() => changeCurrentState(3)}>layout</FilterItem>
    <FilterItem state="4" current={currentState} onClick={() => changeCurrentState(4)}>web / UI</FilterItem>
</div>
</header>)

}


const FilterItem = styled.li`
font-size: 1.5rem;
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