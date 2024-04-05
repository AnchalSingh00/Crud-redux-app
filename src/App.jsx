import React from 'react'
import './App.css'
import NavbarTop from './Component/NavbarTop'
import { Route, Routes } from 'react-router-dom'
import AllData from './Component/AllData'
import CreateData from './Component/CreateData'
import Edit from './Component/Edit'

function App() {
  return (
    <div className='home'>
    <NavbarTop/>
    <Routes>
      <Route path='/' element={<AllData/>}/>
      <Route path='create' element={<CreateData/>}/>
      <Route path='/user/:id' element={<Edit/>}/>
    </Routes>
    </div>
  )
}

export default App

