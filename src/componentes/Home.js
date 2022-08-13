import React from 'react'
import styled, { keyframes } from 'styled-components'
import {Tituloh1, Tituloh5,Tituloh4, Contenidop} from '../elementos/Textos'


const Home = () => {
    return (
    <DivSlides>
    <Div>
        <Tituloh5 fontSize={'28px'} fontColor={'#D0D6F9'}>
           SO, YOU WANT TO TRAVEL TO 
        </Tituloh5>
        <Tituloh1 fontSize={'150px'} fontColor={'#fff'} gridcolumn={'1'}>SPACE</Tituloh1>
        <Contenidop fontSize fontColor={'#D0D6F9'}>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
        and not hover kind of on the edge of it. Well sit back, and relax because we’ll 
        give you a truly out of this world experience!
        </Contenidop>
        </Div>
        <Divcirculo>
            <Link href="#">
            <Circulo onMouseEnter="exploreEnter">
                <Tituloh4 fontColor={'#000'} fontSize={'32px'}>EXPLORE</Tituloh4>
            </Circulo>
            </Link>
        </Divcirculo>
    </DivSlides>
    )
}

export default Home

const DivSlides = styled.div`

  scroll-snap-align:start;
  display:contents;

`

const Div = styled.div`

display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-content: flex-start;
grid-row:2;
margin:5%;
`

const Divcirculo = styled.div`

grid-column:2;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
grid-row:2;


`
const PulseAnimation = keyframes `
100% {
    box-shadow: 0 0 0 30px rgb(255 255 255 / 15%);
  }

  50% {
    box-shadow: 0 0 0 60px rgb(255 255 255 / 15%);
  }

  0% {
    box-shadow: 0 0 0 30px rgb(255 255 255 / 15%);
  }
}
`
const Circulo = styled.div` 
width:274px;
height:274px;
background-color:#fff;
border-radius:100%;
display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: box-shadow 0.2s;
    -moz-transition: box-shadow 0.2s;
    transition: box-shadow 0.2s;
&:hover{

    box-shadow: 0 0 0 60px rgb(255 255 255 / 30%);
    animation-name:;
    animation:${PulseAnimation} 4s ease 0s infinite normal both;
}

&:after {
    top: 0;
    left: 0;
    padding: 0;
    box-shadow: 0 0 0 3px #fff;
    -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
    -moz-transition: -moz-transform 0.2s, opacity 0.2s;
    transition: transform 0.2s, opacity 0.2s;
}
&:hover:after {
    -webkit-transform: scale(0.85);
    -moz-transform: scale(0.85);
    -ms-transform: scale(0.85);
    transform: scale(0.85);
}

`


const Link = styled.a`

    text-decoration:none;

`


