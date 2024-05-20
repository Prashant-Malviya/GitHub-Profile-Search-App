import { useState } from 'react'
import Home from './Components/Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './Components/Pages/User/User'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='w-[44rem] m-5'>

    <BrowserRouter>

    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/user/:login' element={<User />} />

    </Routes>

    </BrowserRouter>

    

  </div>
    
  </>
  )
}

export default App
