import { useEffect, useState } from 'react'
import './App.css'
import FullbodyContent from './components/FullbodyContent'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<FullbodyContent/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/*' element={<FullbodyContent/>}></Route>

    </Routes>
      
    </>
  )
}

export default App
