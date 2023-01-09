import React from 'react'
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Header from '../Components/Header/Header'
import About from '../Container/About/About'
import Details from '../Container/Details/Details'
import Home from '../Container/Home/Home'
import Movies from '../Container/Movies/Movies'
import Search from '../Container/Search/Search'
import Tvseries from '../Container/TVSERIES/Tvseries'



const Pages = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/series" element={<Tvseries/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/details/:movieid/:mediatype" element={<Details/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Pages