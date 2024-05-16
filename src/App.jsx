import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='w-[44rem] m-5'>

    <Home />

  </div>
    
  </>
  )
}

export default App
