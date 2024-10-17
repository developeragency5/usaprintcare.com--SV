import React from 'react'
import PreNavBar from '../Components/PreNavBar'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Product from '../Components/Product'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <PreNavBar/>
      <Navbar/>
      <Hero/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Home
