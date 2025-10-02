import { BrowserRouter,Routes,Route } from "react-router-dom"
import React from "react"

//Pages
import Packages from "./pages/Packages"
import Home from './pages/Home';
import Contact from './pages/Contact';

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/packages" element={<Packages/>}/>


    </Routes>
    </BrowserRouter>
    </>

  )

}

export default App;