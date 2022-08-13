import React, {useState , useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import Data from '../Data/data.json'
import { Tituloh2, Tituloh5, Contenidop, ContenidoSpan} from './Textos'
import Douglas from '../imagenes/crew/image-douglas-hurley.webp'
import Mark from '../imagenes/crew/image-mark-shuttleworth.webp'
import Victor from '../imagenes/crew/image-victor-glover.webp'
import Ansari from '../imagenes/crew/image-anousheh-ansari.webp'


const TabsInfo = (props) => {

	const section = props.name;
	const require = Data + props.section;
	const Crew = (Data.crew)
	const [tab, tabActiva] = useState(0)
	const images = [Douglas, Mark, Victor, Ansari]
	//console.log(require)

	return (
		<DivSlides>
			{images.map((info , index ) => {
				return <Div gridColumn={`${props.gridColumnImgs}`} backgroundImage={tab === index ? info : ""}></Div>
			})}
		
		<DivContenido gridColumn={`${props.gridColumnTxts}`}>
		
        
		

		<> {Crew === undefined ? "" : Crew.map((info, index) => {
            return <>{tab === index ? <><Tituloh5 fontSize={'28px'} fontColor={'#D0D6F9'} fontFamily={'Bellefair'} margin={'30px 0'} letterSpacing={'2.75px'}>{info.role}</Tituloh5><Tituloh2 key={index} fontSize={'46px'} margin={'20px 0'} >{info.name}</Tituloh2></> : "" }</>
            })}</>
		
		<>{Crew === undefined ? <h2> OOps! ocurrio un error, intentelo de nuevo</h2> : Crew.map((info, index) => {
			return <>{tab === index ?  <><Contenidop className='tabs' fontSize={'18px'} fontColor={'#D0D6F9'} key={info.index}>{info.bio}</Contenidop>

			
			</>

			:
			""
		}
		</>

		
			
		})}</>

<Ultabs>{Crew === undefined ? <h2> OOps! ocurrio un error, intentelo de nuevo</h2> : Crew.map((info, index) => {
			return <LiTabs className='buttons' key={info.index}>
				<LinkTabs border={tab === index ? '3px #D0D6F9 solid' : ''} onClick={(() => tabActiva(index))}>
					
					<Dots background={tab === index ? '#fff' : '#979797'} ></Dots>
				</LinkTabs>
			</LiTabs>	
			
		})}

		</Ultabs>

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
justify-content: flex-end;
align-content: center;
grid-row:3 / 4;
align-items: center;
background-image:url('${(props) => props.backgroundImage ? props.backgroundImage : '' }');
background-repeat:no-repeat;
background-size: contain;
background-position:bottom;
grid-column:${(props) => props.gridColumn ? props.gridColumn : '' };
`
const DivContenido = styled.div`

grid-column:${(props) => props.gridColumn ? props.gridColumn : ''};
grid-row:3 / 4;
width:100%;
display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
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

`

const Ultabs = styled.ul`

	width: 80%;
    list-style: inherit;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    list-style:none;
    padding:30px 0;

`
const LiTabs = styled.li`
display:flex;


`

const ImgPlaneta = styled.img`

width:auto;
height:602px;
animation:${apperAnimation} 1s ease 0s 1 normal forwards;
user-select: none;
position: absolute;
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
const Dots = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: ${(props) => props.background ? props.background : ''};
	margin-right: 30px;

`