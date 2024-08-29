// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-800 w-full h-screen flex items-center justify-center flex-wrap'>
      <img src={reactLogo} alt="" />
      <img src={viteLogo} alt="" />
      <h1 className="text-gray-300 text-4xl font-bold">Hello My Project</h1>
    </div>
  )
}

export default App
