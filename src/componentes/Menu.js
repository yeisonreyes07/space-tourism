import React from 'react'
import styled from 'styled-components'
import {Tituloh1, Tituloh5, ContenidoSpan} from '../elementos/Textos'
import Logo from '../imagenes/shared/logo.svg'

const Menu = () => {
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

        </Div>
        </DivFixed> 
    )
}

export default Menu

const DivFixed = styled.div`

position:fixed;
width:100%;
padding:1% 0;
z-index:9; 
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

`

const LiMenu = styled.li`
display:flex;

`

