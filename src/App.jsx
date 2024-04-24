import { useState } from "react"
import About from "./components/About"
import Navbar from "./components/Navbar"
// import TextForm from "./components/TextForm"

function App() {
  const [darkmode, setdarkmode]=useState(false);
  return (
    <>
    <Navbar appName="My React App"/>
    <TextForm head="Enter your text here!!" heading='Enter your text and change it the way you want it'/>
    {/* <About/> */}
    </>
  )
}

export default App
