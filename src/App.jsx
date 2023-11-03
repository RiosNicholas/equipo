import { useState } from 'react'
import './app.css'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './routes/Home'
import Header from './components/Header'
import PlayerCreation from './routes/CreatePlayer'
import SquadInfo from './routes/SquadInfo'
import PlayerDetails from './routes/PlayerDetails'
import UpdatePlayer from './routes/UpdatePlayer'

function App() {

  return (
    <div>
      <NavBar />
      <Header />

    </div>
  )
}

export default App
