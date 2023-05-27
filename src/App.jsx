import styled from "styled-components"
// import Sidebar from "./components/molecules/Sidebar"
import 'boxicons';
import LandingPages from "./components/organims/LandingPages";
import fondo from './assets/images/Fondo.png'
import Navbar from "./components/molecules/Navbar";


function App() {

  return (
    <>
      <ConatinerApp>
        <LandingPages/>
        <Navbar/>
      </ConatinerApp>
    </>
  )
}

export default App

const ConatinerApp = styled.div`
  background-image: url(${fondo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 100vh;   */
`

