import GeneraMovieList from "./Components/GeneraMovieList"
import Header from "./Components/Header"
import React from 'react'
import ProductionHouse from "./Components/ProductionHouse"
import GlobalApi from "./Components/Services/GlobalApi"
import Slider from "./Components/Slider"

const Home = () => {
  return (
    <div>
       <Header />
       
       <Slider />

       <ProductionHouse />

       <GeneraMovieList />
    </div>
  )
}

export default Home
