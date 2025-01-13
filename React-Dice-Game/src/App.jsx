import { useState } from 'react'
import './App.css'
import Gamehome from './components/GameHomePage/Gamehome'
import Gameplay from './components/GamePlay/Gameplay'

function App() {
  const [isPlay, SetPlay] = useState(false)

  return (
    <>
       {
         isPlay ? <Gameplay/> : <Gamehome SetPlay = {SetPlay}/>
       }
    </>
  )
}

export default App
