import React, {useState , useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import Data from '../Data/data.json'
import { Tituloh2, Tituloh5, Contenidop, ContenidoSpan} from './Textos'
import Launch from '../imagenes/technology/image-launch-vehicle-portrait.jpg'
import LaunchMobile from '../imagenes/technology/image-launch-vehicle-landscape.jpg'
import Spaceport from '../imagenes/technology/image-spaceport-portrait.jpg'
import SpaceportMobile from '../imagenes/technology/image-spaceport-landscape.jpg'
import Capsule from '../imagenes/technology/image-space-capsule-portrait.jpg'
import CapsuleMobile from '../imagenes/technology/image-space-capsule-landscape.jpg'



const VerticalTabs = (props) => {

	const section = props.name;
	const require = Data + props.section;
	const Technology = (Data.technology)
	const [tab, tabActiva] = useState(0)
	const images = [Launch, Spaceport, Capsule]
	const imagesMobile = [LaunchMobile , SpaceportMobile, CapsuleMobile]
	//console.log(imageVehicle)

	return (
		<>
		<Contenidop fontSize={'28px'} letterSpacing={'4.72px'} padding={'0% 5%'} display={'flex'} Row={'2 / 3'} >
        <ContenidoSpan fontSize={'28px'} margin={'0 5px'} opacity={'0.25'} fontWeight={'600'}>03</ContenidoSpan>SPACE LAUCNH 101</Contenidop>
		<DivSlides>
			{images.map((info , index ) => {
				return <Div gridColumn={`${props.gridColumnImgs}`} backgroundImage={tab === index ? info : ""} displayBlocks={tab === index ? 'flex' : 'none'}></Div>
			})}

			{imagesMobile.map((info , index ) => {
				return <DivMobile gridColumn={`${props.gridColumnImgs}`} backgroundImage={tab === index ? info : ""} displayBlocks={tab === index ? 'flex' : 'none'}></DivMobile>
			})}
		
		<DivContenido gridColumn={`${props.gridColumnTxts}`}>
		
        
		
		<>{Technology === undefined ? <h2> OOps! ocurrio un error, intentelo de nuevo</h2> : Technology.map((info, index) => {
			return <DivTitulosDescripciones>{tab === index ?  <><Tituloh5 fontSize={'28px'} fontSizeMobile={'16px'} fontColor={'#D0D6F9'} fontFamily={'Bellefair'} margin={'0 0 15px 0'} letterSpacing={'2.75px'}>THE TERMINOLOGY…</Tituloh5>
												<Tituloh2 fontSizeMobile={'40px'} key={index} fontSize={'46px'} margin={'20px 0'} >{info.name}</Tituloh2>
													<Contenidop className='tabs' fontSize={'18px'} fontColor={'#D0D6F9'} key={info.index}>{info.description}</Contenidop></>
			:
			""
		}
		
		</DivTitulosDescripciones>

		
			
		})}</>
		

<DivTabs>{Technology === undefined ? <h2> OOps! ocurrio un error, intentelo de nuevo</h2> : Technology.map((info, index) => {
			return <LiTabs className='buttons' key={info.index}>
				<LinkTabs border={tab === index ? '3px #D0D6F9 solid' : ''} onClick={(() => tabActiva(index))}>
					
					<Dots background={tab === index ? '#fff' : 'transparent'} color={tab === index ? '#000' : '#fff'}>{index + 1}</Dots>
				</LinkTabs>
			</LiTabs>	
			
		})}

		</DivTabs>

		</DivContenido>
		</DivSlides>
		</>
	)
}

export default VerticalTabs

const apperAnimation = keyframes`

0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }

`
const DivSlides = styled.div`

  scroll-snap-align:start;
  display:contents;

  @media(max-width:767px){
	display:grid;
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
  width:100%;
	
  }
`

const DivTitulosDescripciones = styled.div`

    grid-column: 2 / 3;
	grid-row:1 / 2;
	display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
	padding:5%;

	@media(max-width:767px){

		grid-row:2;
		align-items: center;


	}

`

const Div = styled.div`

display: ${(props) => props.displayBlocks ? props.displayBlocks : '' };
flex-direction: column;
flex-wrap: wrap;
justify-content: flex-end;
align-content: center;
grid-row:3 / 4;
align-items: center;
background-image:url('${(props) => props.backgroundImage ? props.backgroundImage : '' }');
background-repeat:no-repeat;
background-size:80%;
background-position:center right;
grid-column:${(props) => props.gridColumn ? props.gridColumn : '' };

@media(max-width:767px){

	display:none;
}

`
const DivMobile = styled.div`

display: ${(props) => props.displayBlocks ? props.displayBlocks : '' };
flex-direction: column;
flex-wrap: wrap;
justify-content: flex-end;
align-content: center;
grid-row:3 / 4;
align-items: center;
background-image:url('${(props) => props.backgroundImage ? props.backgroundImage : '' }');
background-repeat:no-repeat;
background-size:cover;
background-position:center;
grid-column:${(props) => props.gridColumn ? props.gridColumn : '' };
display:none;

@media(max-width:767px){

	width:100%;
	height:70%;
	margin:auto;
	grid-row:1 ;
	grid-column:1;
	display:block;
	object-fit:cover;
}

`

const DivContenido = styled.div`

grid-column:${(props) => props.gridColumn ? props.gridColumn : ''};
grid-row:3 / 4;
width:100%;
display: grid;
grid-template-columns:20% 80%;

@media(max-width:767px){

	grid-template-columns:1fr;
	grid-template-rows:50px 1fr;
	grid-row:2;
}

   
`
const LinkTabs = styled.div`

	cursor:pointer;
	animation:${apperAnimation} 1s ease 0s 1 normal forwards;
	padding-bottom:20px;
	transition:.3s ease-in;
	user-select: none;
	
	&:hover h5{
		color:white;
		

	}
	@media(max-width:767px){

		padding:0 10px;
	}

`

const DivTabs = styled.div`

	width: 100%;
    list-style: inherit;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    list-style:none;
    padding: 0;
	grid-column:1 / 2;
	grid-row:1 / 2 ;

	@media(max-width:767px){

		grid-row:1;
		flex-direction: row;
		grid-column:1 / 3;
		padding:10px 0;
		height: fit-content;
	}

`
const LiTabs = styled.div`
display:flex;

@media(max-width:767px){

	
	margin:0;
}

`

const Dots = styled.div`
	width:80px;
	height: 80px;
	border-radius: 50%;
	background-color: ${(props) => props.background ? props.background : ''};
	font-size: 36px;
    text-align: center;
	display:flex;
	align-items:center;
	justify-content:center;
	align-content:center;
	border:white solid 1px;
	color:${(props) => props.color ? props.color : ''};
	animation:${apperAnimation} 1s ease 0s 1 normal forwards;
	transition:.3s ease-in;

	@media(max-width:767px){

		width:58px;
		height: 58px;
		font-size: 24px;
		margin:0;
	}
`