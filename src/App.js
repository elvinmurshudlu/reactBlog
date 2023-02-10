import {Header} from "./components/Header"

import { Home } from "./components/Home"
import { Footer } from "./components/Footer"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Portfolios } from "./components/Portfolios"
import { Journey } from "./components/Journey"
import { BrowserRouter , Route ,Routes } from "react-router-dom"

import { useState } from "react"

import "./App.css"
import { Blog } from "./components/Blog"
function App(){

  let [currentPage,setCurrentPage] = useState()
    function changePage(pageName){
        setCurrentPage(pageName)
    }

  return(
  
    <BrowserRouter>
      <Header class="navbar" currentPage={currentPage}   />
          <Routes>
            <Route index  element={<Home changePage={changePage} ></Home>}></Route>
            <Route  path="/Home" element={<Home changePage={changePage}></Home>}></Route>
            <Route  path="/About" element={<About changePage={changePage}></About>}></Route>
            <Route  path="/Contact" element={<Contact main="true" changePage={changePage}></Contact>}></Route>
            <Route  path="/Portfolios" element={<Portfolios changePage={changePage}></Portfolios>}></Route>
            <Route  path="/Journey" element={<Journey changePage={changePage}></Journey>}></Route>
            <Route  path="/Blog" element={<Blog changePage={changePage}></Blog>}></Route>        
            
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    
  )
}
export default App;