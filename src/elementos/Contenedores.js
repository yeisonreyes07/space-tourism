import styled from "styled-components";


const Contenedor = styled.div`

background-image:url(${(props) => props.imagenFondo});
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
height:100vh;
display:grid;
grid-template-columns: ${(props) => props.gridTemplateColumns};
grid-template-rows: ${(props) => props.gridTemplateRows ? props.gridTemplateRows : ''};
min-height:100vh;
justify-content: center;
user-select: none;
padding: ${(props) => props.padding ? props.padding : ''};
width:100%;

@media(max-width: 767px) {
	display:flex;
	justify-content:center;
	align-content:center;
	align-items:center;
	flex-direction:row;
    flex-wrap:wrap;
	height:100vh;
	width:100%;
	background-image:url(${(props) => props.imagenFondoMobile});
	padding-top:3.5rem;
  }

`



export default Contenedor;