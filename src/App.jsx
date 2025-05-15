import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Page404 from './pages/page404.jsx'
import Remove from './pages/remove'
import Add from './pages/add'

import Navbar from './components/Navbar'

function App() {
  return (<>
  
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/rm' element={<Remove />}></Route>
      <Route path='/add' element={<Add />}></Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
 
  </>)
}

export default App
