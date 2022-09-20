import styled from 'styled-components'
import { motion } from 'framer-motion'

export function ColourBackground({spaceFilter}){

  const myvariants = {
    one: { opacity: 1 },
    two: { opacity: 0 },
  }

return(
<>
<BgContainer>

      <BGblue as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 1 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGblue>

      <BGpink as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 2 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGpink>

      <BGpurple as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 3 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGpurple>

      <BGcyan as={motion.div}
    variants={myvariants}
    animate={spaceFilter === 4 ? "one" : "two"}
    transition={{ duration: 2 }}>
      </BGcyan>

  </BgContainer>
</>
)
}

const BgContainer = styled.div`
z-index: 1;
background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);`

const BGblue = styled.div`
height: 120vh;
width:120vw;
position:fixed;
position:fixed;
top:-10vh;
left:-10vw;
background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
`
const BGpink = styled.div`
height: 120vh;
width:120vw;
position:fixed;
top:-10vh;
left:-10vw;
background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
`

const BGpurple = styled.div`
height: 120vh;
width:120vw;
position:fixed;
top:-10vh;
left:-10vw;
background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
`
const BGcyan = styled.div`
height: 120vh;
width:120vw;
position:fixed;
top:-10vh;
left:-10vw;
background-image: linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%);
`
