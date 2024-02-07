import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './container/Navbar/Navbar'
import HeroContent from './container/HeroContent/HeroContent'
import InfoLabel from './container/HeroContent/InfoContent/InfoLabel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='hero'>
      <Navbar/>
      <HeroContent/>
      <InfoLabel/>
      </div>
      <div className='parent-container'>
         
      </div>
    </>
  )
}

export default App
