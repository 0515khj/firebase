import { useState } from 'react'
import Login from './components/Login/Login'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Join from './components/Login/Join'
import Good from './components/Login/Good'
import Main from './components/Login/Main'
import MainStyle from './MainStyle'

function App() {

  return (
    <>
    <MainStyle/>
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Main/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/join' element={<Join/>} />
      <Route path='/good' element={<Good/>} />

      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
