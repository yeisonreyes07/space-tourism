import "./App.css";
import "./custom.css";
import Menu from "./componentes/Menu";
import Home from "./componentes/Home";
import {Contenedor} from "./elementos/Contenedores";
import BackgroundHome from "./imagenes/home/background-home-desktop.jpg";
import BackgroundHomeMobile from "./imagenes/home/background-home-mobile.jpg";
import BackgroundDestination from "./imagenes/destination/background-destination-desktop.jpg";
import BackgroundDestinationMobile from "./imagenes/destination/background-destination-mobile.jpg";
import BackgroundCrew from "./imagenes/crew/background-crew-desktop.jpg"
import BackgroundCrewMobile from "./imagenes/crew/background-crew-mobile.jpg"
import BackgroundTechnology from "./imagenes/technology/background-technology-desktop.jpg"
import BackgroundTechnologyMobile from "./imagenes/technology/background-technology-mobile.jpg"
import Destination from "./componentes/Destination";
import Crew from "./componentes/Crew";
import Technology from "./componentes/technology";

function App() {
  return (
    <>
      <Menu />
      <Contenedor imagenFondo={BackgroundHome} imagenFondoMobile={BackgroundHomeMobile} gridTemplateColumns={'1fr 1fr'} gridTemplateRows={'50px 1fr'} paadding={'0 5%'}>
        <Home />
      </Contenedor>
      <Contenedor imagenFondo={BackgroundDestination} imagenFondoMobile={BackgroundDestinationMobile} gridTemplateColumns={'1fr 1fr'} gridTemplateRows={'50px 50px 1fr'} paadding={'0 5%'}>
        <Destination />
      </Contenedor>
      <Contenedor imagenFondo={BackgroundCrew} imagenFondoMobile={BackgroundCrewMobile} gridTemplateColumns={'1fr 50%'} gridTemplateRows={'50px 50px 1fr'} paadding={'0 5%'}>
       <Crew/>
      </Contenedor>
      <Contenedor imagenFondo={BackgroundTechnology} imagenFondoMobile={BackgroundTechnologyMobile} gridTemplateColumns={'1fr 50%'} gridTemplateRows={'50px 50px 1fr'} paadding={'5% 0 5% 5%'}>
        <Technology/>
      </Contenedor>
    </>
  );
}

export default App;
