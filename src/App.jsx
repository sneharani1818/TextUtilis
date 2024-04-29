import { useState } from "react"
import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
  const[mode, setmode]=useState('light');//tells light mode or dark mode of application

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#37474F";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    <Navbar appName="My React App" mode={mode} toggleMode={toggleMode}/>
    <TextForm head="Enter your text here!!" heading='Enter your text and change it the way you want it' mode={mode}/>
    {/* <About/> */}
    </>
  )
}

export default App
