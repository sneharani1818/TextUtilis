import { useState } from "react"
import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert";

function App() {
  const[mode, setmode]=useState('light');//tells light mode or dark mode of application
  const [alert, setalert]=useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#37474F";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","info");
    }
  }
  return (
    <>
    <Navbar appName="My React App" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm head="Enter your text here!!" heading='Enter your text and change it the way you want it' mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </>
  )
}

export default App
