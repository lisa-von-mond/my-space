import styled from 'styled-components'

export function Bowls(){

return(
    <BowlBg>
      <BowlWrapper>
            <OneBowl gridrow="1" gridcol="3"></OneBowl>
            <OneBowl gridrow="2" gridcol="4"></OneBowl>
            <OneBowl gridrow="3" gridcol="5"></OneBowl>
            <OneBowl gridrow="5" gridcol="5"></OneBowl>
            <OneBowl gridrow="7" gridcol="5"></OneBowl>
            <OneBowl gridrow="8" gridcol="4"></OneBowl>
            <OneBowl gridrow="9" gridcol="3"></OneBowl>
            <OneBowl gridrow="8" gridcol="2"></OneBowl>
            <OneBowl gridrow="7" gridcol="1"></OneBowl>
            <OneBowl gridrow="5" gridcol="1"></OneBowl>
            <OneBowl gridrow="3" gridcol="1"></OneBowl>
            <OneBowl gridrow="2" gridcol="2"></OneBowl>
      </BowlWrapper>
    </BowlBg>

)
}

const BowlBg = styled.div`
height: 110vh;
width: 110vw;
position: fixed;
top: -5vh;
left: -5vw;
background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
display:flex;
align-items:center;
justify-content:center;
`

const BowlWrapper = styled.div`
display:grid;
grid-template-rows: repeat(9, 1rem);
grid-template-columns: repeat(5, 2rem);
row-gap: 0.24rem;
column-gap: 0.2rem;

`

const OneBowl = styled.div`
height: 1rem;
width: 1rem;
border: 2px solid black;
grid-column-start: ${props=>props.gridcol};
grid-row-start: ${props=>props.gridrow};
align-self:center;
border-radius: 50%;

`