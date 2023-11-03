import { useState } from 'react'
import './app.css'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Header from './components/Header'
import PlayerCreation from './routes/PlayerCreation'
import SquadInfo from './routes/SquadInfo'
import PlayerDetails from './routes/PlayerDetails'
import UpdatePlayer from './routes/UpdatePlayer'

function App() {

  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='player-creation' element={<PlayerCreation/>}/>
        <Route path='squad-info' element={<SquadInfo/>}/>
        <Route path='player-details/:id' element={<PlayerDetails />}/>
        <Route path='player-details/update-player/:id' element={<UpdatePlayer/>}/>
      </Routes>
      <Header />

    </div>
  )
}

export default App
