import React from 'react'
import tw from "tailwind-styled-components"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { SignIn } from './components/SignIn'

// import './App.css'

export default function App() {
  return (
    <Router>
      <div className='app w-full h-full flex flex-col bg-black'>
      <Routes> 
         <Route exact path='/' element={<Home />} />
         <Route exact path='/signin' element={<SignIn />} />
      </Routes>
      </div>
    </Router>
  )
}



// const AppContainer = tw.main`w-full h-screen flex flex-col `
