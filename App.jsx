import GeneraMovieList from "./Components/GeneraMovieList"
import Header from "./Components/Header"
import ProductionHouse from "./Components/ProductionHouse"
import GlobalApi from "./Components/Services/GlobalApi"
import Slider from "./Components/Slider"

function App() {

  return (
    <>
      <div className="app">

        <Header />
       
        <Slider />
            <hr></hr>
        <ProductionHouse />

        <GeneraMovieList />
      </div>
     </>
  )
}

export default App
