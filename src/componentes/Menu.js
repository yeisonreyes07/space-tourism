import React , {useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { Tituloh5, ContenidoSpan} from '../elementos/Textos'
import Logo from '../imagenes/shared/logo.svg'



const Menu = () => {

    const [iconMenu, setIcon] = useState(faBars);

    return (
       <DivFixed>
        <Div>
            <ImgLogo src={Logo} />
            <Separator></Separator>
            <UlMenu>
                <LiMenu>
                    <ContenidoSpan fontSize={'16px'} margin={'0 5px'}>00 </ContenidoSpan>
                    <Tituloh5 fontSize={'16px'}> HOME</Tituloh5>
                </LiMenu>
                <LiMenu>
                    <ContenidoSpan fontSize={'16px'} margin={'0 5px'}>01 </ContenidoSpan>
                    <Tituloh5 fontSize={'16px'}> DESTINATION</Tituloh5>
                </LiMenu>
                <LiMenu>
                    <ContenidoSpan fontSize={'16px'} margin={'0 5px'}>02 </ContenidoSpan>
                    <Tituloh5 fontSize={'16px'}> CREW</Tituloh5>
                </LiMenu>
                <LiMenu>
                    <ContenidoSpan fontSize={'16px'} margin={'0 5px'}>03 </ContenidoSpan>
                    <Tituloh5 fontSize={'16px'}> TECHNOLOGY</Tituloh5>
                </LiMenu>
                
            </UlMenu>
            <UlMenuMobile>
                <LiMenu backgroundColor="transparent">
                     <FontAwesomeIcon icon={ iconMenu } color={ '#D0D6F9' }  size={ 42 } onClick={() => iconMenu === faBars ? setIcon(faXmark) :  setIcon(faBars) }/>
                     
                </LiMenu>
            </UlMenuMobile>
           
        </Div>
        {iconMenu === faXmark ? 
            
            <DivOpenMenu>
                <UlMenuSidebar>
                <LiMenu>
                    <ContenidoSpan fontSize={'16px'} margin={'0 5px'}>00 </ContenidoSpan>
                    <Tituloh5 fontSize={'16px'}> HOME</Tituloh5>
                </LiMenu>
                <LiMenu>
                    <ContenidoSpan fontSize={'16px'} margin={'0 5px'}>01 </ContenidoSpan>
                    <Tituloh5 fontSize={'16px'}> DESTINATION</Tituloh5>
                </LiMenu>
                <LiMenu>
                    <ContenidoSpan fontSize={'16px'} margin={'0 5px'}>02 </ContenidoSpan>
                    <Tituloh5 fontSize={'16px'}> CREW</Tituloh5>
                </LiMenu>
                <LiMenu>
                    <ContenidoSpan fontSize={'16px'} margin={'0 5px'}>03 </ContenidoSpan>
                    <Tituloh5 fontSize={'16px'}> TECHNOLOGY</Tituloh5>
                </LiMenu>
                
            </UlMenuSidebar>
            </DivOpenMenu>
        
            :

            <></> 

            }
        </DivFixed> 
    )
}

export default Menu

const DivFixed = styled.div`

position:fixed;
width:100%;
padding:1% 0;
z-index:9; 

@media (max-width:767px){

    position:fixed ;
    top:1%;
    justify-content:space-between;
    background-color:transparent;
    align-content: center;
    align-items: center;
   
}
`
const DivOpenMenu = styled.div`
  height: 100%; 
  width: 70%; 
  position: fixed; 
  z-index: 9; 
  top: 0; 
  right: 0;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(18px);
  overflow-x: hidden; 
  padding-top: 60px; 
  transition: 0.5s;

@media (min-width:767px){

   display:none;
   
}
`

const Div = styled.div`

display: grid;
    grid-template-columns: 10% 30% 60%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    align-content: center;
    align-items: center;
    justify-items: center;
    @media (max-width:767px){

        display:flex ;
        justify-content:space-between;
        padding: 2% 2%;
        width: 100%;
        align-content: center;
        align-items: center;
    }
`
const ImgLogo = styled.img`
grid-column:1;

`
const Separator = styled.hr`
width: 105%;
    grid-column: 2;
    border: none;
    background-color: white;
    height: 1px;
    z-index: 9;

    @media (max-width:767px){

        display:none ;
    }
`
const UlMenu = styled.ul`

grid-column: 3 / 4;
    width: 100%;
    list-style: inherit;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: stretch;
    list-style:none;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    padding:30px 0;

    @media (max-width:767px){

        display:none ;
    }

`
const UlMenuMobile = styled.ul `
    color: white;
    cursor: pointer;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    font-size:32px;
    z-index:10;

    @media (min-width:767px){

        display:none !important;
    }
    @media(max-width: 467px) {
        
      }
  `
  const UlMenuSidebar = styled.ul `
    color: white;
    cursor: pointer;
    border-radius: 3px;
    font-size:32px;
    z-index:10;

    @media (min-width:767px){

        display:none ;
    }
    @media(max-width: 467px) {
        
      }
  `

const LiMenu = styled.li`
display:flex;
background-color:none;
z-index:10;
@media (max-width:767px){

    padding: 1rem 0;
}

`

