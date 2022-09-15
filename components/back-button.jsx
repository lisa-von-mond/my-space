import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import Link from 'next/link'
import styled from 'styled-components'

export function BackButton(){

return(
      <Link href="/" target="blank" rel="noopener">
      <BackToStartButton>
          back
      </BackToStartButton>
      </Link>

)
}

const BackToStartButton = styled.div`

  font-size:1.6rem;
  padding: 0.4rem;
  width: 5.4rem;
  text-transform:uppercase;
  background:none;
  box-shadow:none;
  border: 2px solid black;
  border-radius: 10px;
  cursor:pointer;

&:hover{
background: black;;
color:white;
}
`
