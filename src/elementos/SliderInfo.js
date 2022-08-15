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
		<>
		<Contenidop fontSize={'28px'} letterSpacing={'4.72px'} padding={'0% 5%'} display={'flex'} Row={'2 / 3'} >
        <ContenidoSpan fontSize={'28px'} margin={'0 5px'} opacity={'0.25'} fontWeight={'600'}>02</ContenidoSpan>MEET YOUR CREW</Contenidop>
		<DivSlides>
			{images.map((info , index ) => {
				return <Div gridColumn={`${props.gridColumnImgs}`} backgroundImage={tab === index ? info : ""} displayBlock={tab === index ? 'flex' : 'none'} ></Div>
			})}
		<Separator/>

		<DivContenido gridColumn={`${props.gridColumnTxts}`}>
		
        
		

		<> {Crew === undefined ? "" : Crew.map((info, index) => {
            return <>{tab === index ? <><Tituloh5 fontSize={'28px'} fontfontSizeMobileSizeMobile={'24px'} fontColor={'#D0D6F9'} fontFamily={'Bellefair'} margin={'30px 0'} letterSpacing={'2.75px'}>{info.role}</Tituloh5><Tituloh2 key={index} fontSizeMobile={'24px'} fontSize={'46px'} margin={'20px 0'} >{info.name}</Tituloh2></> : "" }</>
            })}</>
		
		<>{Crew === undefined ? <Tituloh2 fontSizeMobile={'24px'}> OOps! ocurrio un error, intentelo de nuevo</Tituloh2> : Crew.map((info, index) => {
			return <>{tab === index ?  <><Contenidop widthContainer={'80%'} className='tabs' fontSize={'18px'} fontColor={'#D0D6F9'} key={info.index}>{info.bio}</Contenidop>

			
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
		</>
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

  @media(max-width:767px){
	display:grid;
	flex-direction:column;
	flex-wrap:wrap;
	justify-content:center;
	align-content:center;
	align-items:center;
	width:100%;
	height:100vh;
	grid-template-columns:1fr;
	grid-template-rows:1fr 1fr 1px 1fr 1fr 1fr 1fr;
  }

`
const Div = styled.div`

display: ${(props) => props.displayBlock ? props.displayBlock : props.displayBlock };
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

@media(max-width:767px){

	width:60%;
	height:417px;
	margin:auto;
	grid-row:7 ;
	grid-column:1;
}
@media(max-width:467px){

	width:50%;
	height:300px;
	margin:auto;
	grid-row:2 ;
	grid-column:1;
}


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

	@media(max-width:767px){
		display:flex;
		justify-content:center;
		flex-direction:column;
		width:100%;
		align-items: center;
		grid-column:1;
		grid-row:4;
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

		justify-content:center;
		flex-direction:row;
		width:35px;
		margin:auto;
		text-align:center;
		display:flex;
		padding:0;
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

	@media(max-width:767px){

		justify-content:center;
		flex-direction:row;
		width:100%;
		margin:auto;
		text-align:center;
		display:flex;
		grid-row:2;
	}

`
const LiTabs = styled.li`
display:flex;


`

const Separator = styled.hr`
	width: 90%;
    grid-column: 1;
	grid-row:2;
    border: none;
    background-color: #979797;
    height: 1px;
    z-index: 9;
	opacity:0.25;
	display:none;
	
	
	@media(max-width:467px){
		grid-row:3;
		grid-column:1;
		margin:0 auto;
		display:block;
	}
`


const Dots = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: ${(props) => props.background ? props.background : ''};
	margin-right: 30px;

	@media(max-width:767px){

		margin:auto;
		width: 10px;
		height: 10px;
	}

`