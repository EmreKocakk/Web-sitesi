import { useState } from 'react'
import './App.css'
import Home from './comp/Home'
import {Routes, Route } from 'react-router-dom'
import Main from './comp/Main'
import Weather from './comp/Weather'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='weather' element={<Weather />} />
      </Routes>
    </div>
  )
}

export default App
