import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PreNavBar from './Components/PreNavBar.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Product from './Components/Product.jsx'

function App() {

  return (
    <>
      <PreNavBar/>
      <Navbar/>
      <Hero/>
      <Product/>
    </>
  )
}

export default App
