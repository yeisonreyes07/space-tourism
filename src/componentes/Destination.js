import React from 'react'
import { Contenidop, ContenidoSpan } from '../elementos/Textos'
import TabsInfo from '../elementos/TabsInfo'

const Destination = () => {



    return (
        <>
		<Contenidop fontSize={'28px'} letterSpacing={'4.72px'} padding={'0% 5%'} display={'flex'} Row={'2 / 3'}><ContenidoSpan fontSize={'28px'} margin={'0 5px'} opacity={'0.25'} fontWeight={'600'}>01</ContenidoSpan>PICK YOUR DESTINATION</Contenidop>
        
        <TabsInfo gridColumnImgs={'1/2'} gridColumnTxts={'2/3'} name={'.destinations'}></TabsInfo>

       
        </>
    )
}

export default Destination



