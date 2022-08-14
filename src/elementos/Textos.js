import styled, { createGlobalStyle, keyframes } from "styled-components";
import Bellefair from '../fuentes/Bellefair-Regular.ttf'
import Barlow from '../fuentes/BarlowCondensed-Regular.ttf'

export default createGlobalStyle`
@font-face {
    font-family: Bellefair;
    src: url('${Bellefair}');
    font-weight: regular;
  }
  @font-face {
    font-family: Barlow;
    src: url('${Barlow}');
    font-weight: regular;
  }
  `
  const apperAnimation = keyframes`

0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }

`
  
  const Body = styled.body`
      margin: 0;
      font-family:'', serif;
  `
  const Tituloh1 = styled.h1` 
  font-family:'Bellefair', serif;
  font-weight: 400;
  font-size:${(props) => props.fontSize ?  props.fontSize : '150px' };
  color:${(props) => props.fontColor ? props.fontColor : '#fff'};
  margin:0;
  text-align:left;
  grid-column:${(props) =>  props.gridColumn ? props.gridColumn : '1'};

  @media(max-width: 767px) {
    font-size:9rem;
    word-break: break-word;
    text-align:center;
    }
  @media(max-width: 467px) {
    font-size:5rem;
    word-break: break-word;
  }
`
const Tituloh2 = styled.h2` 
  font-family:'Bellefair', serif;
  font-weight: 400;
  line-height:32px;
  font-size:${(props) => props.fontSize ?  props.fontSize : '100px' };
  color:${(props) => props.fontColor ? props.fontColor : '#fff'};
  margin:${(props) => props.margin ? props.margin : '0' };
  text-align:left;
  text-transform:uppercase;
  grid-column:${(props) =>  props.gridColumn ? props.gridColumn : '1'};
  animation:${apperAnimation} 1s ease 0s 1 normal forwards;
  letter-spacing:${(props) => props.letterSpacing ? props.letterSpacing : '4.75px'};
  user-select: none;
`

const Tituloh4 = styled.h4` 
      font-family:'Bellefair', serif;
      font-weight: 300;
      font-size:${(props) => props.fontSize ? '28px' : props.fontSize};
        color:${(props) => props.fontColor ? props.fontColor : '#fff'};
        letter-spacing:4.75px;
        margin:0;
        grid-column:${(props) =>  props.gridColumn ? props.gridColumn : '1'};

        @media(max-width: 767px) {
          font-size:20px;
          
          }
        @media(max-width: 467px) {
          font-size:16px;
          
        }
    `
const Tituloh5 = styled.h5` 
      font-family:${(props) => props.fontFamily ? props.fontFamily : 'Barlow' };
      font-weight: 400;
      line-height:32px;
      text-transform:uppercase;
      text-align:left;
      font-size:${(props) => props.fontSize ? props.fontSize : '28px'};
        color:${(props) => props.fontColor ? props.fontColor : '#fff'};
        letter-spacing:${(props) => props.letterSpacing ? props.letterSpacing : '4.75px'};
        margin:${(props) => props.margin ? props.margin : '0' };
        grid-column:${(props) =>  props.gridColumn ? props.gridColumn : '1'};
        user-select: none;

        @media(max-width: 767px) {
          word-wrap:break-word;
          text-align:center;
          font-size:20px;
        }

        @media(max-width: 467px) {
          word-wrap:break-word;
          text-align:center;
          font-size:16px;
        }
    `
const Contenidop = styled.p` 
      font-family: ${(props) => props.fontFamily ? props.fontFamily : 'Barlow' };
      font-weight: 200;
      max-width:400px;
      font-size:${(props) => props.fontSize ? props.fontSize : '18px'};
      line-height:32px;
      color:${(props) => props.fontColor ? props.fontColor : '#fff'};
      grid-column:${(props) =>  props.gridColumn ? props.gridColumn : '1'};
      grid-row:${(props) => props.Row ? props.Row : ''};
      animation:${apperAnimation} 1s ease 0s 1 normal forwards;
      text-transform:${(props) => props.textTransform ? 'uppercase' : props.textTransform};
      margin:0;
      display:${(props) => props.display ? props.display : 'block'};
      align-items:end;
      padding:${(props) => props.padding ? props.padding : '0'};
      letter-spacing:${(props) => props.letterSpacing ? props.letterSpacing : ''};
      user-select: none;
      
      @media(max-width: 767px) {
          word-wrap:break-word;
          text-align:center;
          font-size:16px;
        }
      

      `

const ContenidoSpan = styled.span`
  font-family:${(props) => props.fontFamily ? props.fontFamily : 'Barlow' };
  font-weight:${(props) => props.fontWeight ? props.fontWeight : '600' };
  font-size:${(props) => props.fontSize ? props.fontSize : '20px'};
  letter-spacing:2.7px;
  color:${(props) => props.fontColor ? props.fontColor : '#fff'};
  margin-right:5px;
  opacity:${(props => props.opacity ? props.opacity : '1')};
  text-transform:${(props) => props.textTransform ? 'uppercase' : props.textTransform};
  margin:${(props) => props.margin ? props.margin : '0'};
  line-height: 32px;
  
`

export  {Body, Tituloh5, Contenidop, Tituloh1, Tituloh4, Tituloh2, ContenidoSpan};