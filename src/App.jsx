import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {

  return (
    <>
    <Navbar appName="My React App"/>
    {/* <TextForm head="Enter your text here!!" heading='Enter your text and change it the way you want it'/> */}
    <About/>
    </>
  )
}

export default App
