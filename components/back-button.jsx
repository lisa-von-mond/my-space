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

const BackToStartButton = styled.button`

  font-size:1.2rem;
  padding: 0.5rem;
  text-transform:uppercase;
  background:none;
  box-shadow:none;
  border:none;
  border-radius: 10px;
  cursor:pointer;
  border: 2px solid black;

&:hover{
background: black;;
color:white;
}
`
