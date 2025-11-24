import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Projects from './Components/Projects'


function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Projects />
      <Footer />

    </>
  )
}

export default App
