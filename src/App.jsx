import styled from "styled-components"
// import Sidebar from "./components/molecules/Sidebar"
import 'boxicons';
import LandingPages from "./components/organims/LandingPages";
import fondo from './assets/images/Fondo.png'
import Navbar from "./components/molecules/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import FormRegister from "./components/organims/FormRegister";
import FormLogin from "./components/organims/FormLogin";
function App() {
  const ConatinerApp = styled.div`
  background-image: url(${fondo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 100vh;   */
`

  return (
    <>
    <ConatinerApp>
    <Routes>
      <Route path="/" element={<LandingPages/>}/>
      <Route path="/register" element={<FormRegister/>}/>
      <Route path="/login" element={<FormLogin/>}/>
    </Routes>
    </ConatinerApp>
    
    {/* <ConatinerApp>
        <LandingPages/>
        <Navbar/>
      </ConatinerApp> */}
    
    </>
  )
}

export default App



