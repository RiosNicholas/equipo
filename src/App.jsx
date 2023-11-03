import { useState } from 'react'
import './app.css'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Header from './components/Header'

function App() {

  return (
    <div>
      {/* <NavBar /> */}
      <Header />
    </div>
  )
}

export default App
