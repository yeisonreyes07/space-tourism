import React, {useState , useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import Data from '../Data/data.json'
import { Tituloh2, Tituloh5, Contenidop, ContenidoSpan} from './Textos'
import Luna from '../imagenes/destination/image-moon.webp'
import Marte from '../imagenes/destination/image-mars.webp'
import Europa from '../imagenes/destination/image-europa.webp'
import Titan from '../imagenes/destination/image-titan.webp'

const TabsInfo = (props) => {

	const section = props.name;
	const require = Data + props.section;
	const Destinations = (Data.destinations)
	const [tab, tabActiva] = useState(0)
	const images = [Luna, Marte, Europa, Titan]
	//console.log(require)

	return (
		<DivSlides>
		<Div gridColumn={`${props.gridColumnImgs}`}>
			{images.map((info , index ) => {
				return <ImgPlaneta  key={info.toString()} src={tab === index ? info : ""}></ImgPlaneta>
			})}
		
		</Div>
		<DivContenido gridColumn={`${props.gridColumnTxts}`}>
		
        
		<Ultabs>{Destinations === undefined ? <h2> OOps! ocurrio un error, intentelo de nuevo</h2> : Destinations.map((info, index) => {
			return <LiTabs className='buttons' key={info.index}>
				<LinkTabs border={tab === index ? '3px #D0D6F9 solid' : ''} onClick={(() => tabActiva(index))}>
				<Tituloh5 fontColor={tab === index ? '#fff' : '#D0D6F9'} fontSize={'16px'}>
					{info.name}
				</Tituloh5>
				</LinkTabs>
			</LiTabs>	
			
		})}

		</Ultabs>

		<> {Destinations === undefined ? "" : Destinations.map((info, index) => {
            return <>{tab === index ? <Tituloh2 key={index} margin={'10% 0px'}>{info.name}</Tituloh2> : "" }</>
            })}</>
		
		<>{Destinations === undefined ? <h2> OOps! ocurrio un error, intentelo de nuevo</h2> : Destinations.map((info, index) => {
			return <>{tab === index ?  <><Contenidop className='tabs' fontSize={'18px'} key={info.index}>{info.description}</Contenidop>

			<Separator/>
			<DivExtra>
				<DivDistancia>
					<ContenidoSpan fontSize={'14px'} fontWeight={'100'}>AVG. DISTANCE</ContenidoSpan>
					<Contenidop fontSize={'28px'} fontFamily={'Bellefair'} textTransform={'uppercase'} padding={'10px 0'}>{info.distance}</Contenidop>
				</DivDistancia>
				<DivTravel>
					<ContenidoSpan fontSize={'14px'} fontWeight={'100'}>EST. TRAVEL TIME</ContenidoSpan>
					<Contenidop fontSize={'28px'} fontFamily={'Bellefair'} textTransform={'uppercase'} padding={'10px 0'}>{info.travel}</Contenidop>
				</DivTravel>
			</DivExtra>
			</>

			:
			""
		}
		</>
			
		})}</>
		</DivContenido>
		</DivSlides>
	)
}

export default TabsInfo

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

`

const Div = styled.div`

display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-content: center;
grid-row:3 / 4;
grid-column:${(props) => props.gridColumn ? props.gridColumn : '' };
`
const DivContenido = styled.div`

grid-column:${(props) => props.gridColumn ? props.gridColumn : ''};
grid-row:3 / 4;
width:100%;
display: flex;
    justify-content: center;
    align-items: stretch;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
`
const LinkTabs = styled.a`

	cursor:pointer;
	animation:${apperAnimation} 1s ease 0s 1 normal forwards;
	border-bottom:${(props) => props.border ? props.border : ''};
	padding-bottom:20px;
	transition:.3s ease-in;
	&:hover h5{
		color:white;
		

	}

`

const Ultabs = styled.ul`

	width: 80%;
    list-style: inherit;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: flex-start;
    list-style:none;
    padding:30px 0;

`
const LiTabs = styled.li`
display:flex;


`

const ImgPlaneta = styled.img`

width:445px;
animation:${apperAnimation} 1s ease 0s 1 normal forwards;

&:hover {

}


`
const Separator = styled.hr`
width: 90%;
    grid-column: 2;
    border: none;
    background-color: #979797;
    height: 1px;
    z-index: 9;
	opacity:0.25;
`

const DivExtra = styled.div`

display:grid;
grid-template-columns:1fr 1fr;
justify-content:center;
aling-content:center;
aling-items:center;
text-align:Left;


`
const DivDistancia = styled.div`

grid-column:1;
padding:20px 0;

`
const DivTravel = styled.div`

grid-column:2;
padding:20px 0;

`
