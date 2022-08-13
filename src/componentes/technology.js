import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Contenidop, ContenidoSpan } from '../elementos/Textos'
import SliderInfo from '../elementos/SliderInfo'
import VerticalTabs from '../elementos/VerticalTabs'

const Technology = () => {



    return (
        <>
        <VerticalTabs gridColumnImgs={'2/3'} gridColumnTxts={'1/2'} name={'Crew'}></VerticalTabs>
		<Contenidop fontSize={'28px'} letterSpacing={'4.72px'} padding={'0% 5%'} display={'flex'} Row={'2 / 3'} >
        <ContenidoSpan fontSize={'28px'} margin={'0 5px'} opacity={'0.25'} fontWeight={'600'}>03</ContenidoSpan>SPACE LAUCNH 101</Contenidop>
        
        

       
        </>
    )
}

export default Technology


