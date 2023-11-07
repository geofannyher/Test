import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className=''>

      </div>
    </>
  )
}


