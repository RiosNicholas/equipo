import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar.jsx'
import CreatePlayer from './routes/CreatePlayer.jsx'
import SquadInfo from './routes/SquadInfo.jsx'
import UpdatePlayer from './routes/UpdatePlayer.jsx'
import PlayerDetails from './routes/PlayerDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index={true} path='/' element={<App />} />
        <Route index={true} path='/create-player' element={<CreatePlayer />} />
        <Route index={true} path='/squad-info' element={<SquadInfo />} />
        <Route index={true} path='/update-player/:id' element={<UpdatePlayer />} />
        <Route index={true} path='/player-details/:id' element={<PlayerDetails />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
