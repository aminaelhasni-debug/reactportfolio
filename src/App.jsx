import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import image from './assets/protfolio.jpg';
import Hero from './Hero';
import About from './About';
import DataSection from './DataSection';
import Boxes from './Boxes';
import Footer from './Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/> 
    <About/>
    <DataSection/>
    <Boxes/>
    <Footer/>
    </>
  )
}

export default App
