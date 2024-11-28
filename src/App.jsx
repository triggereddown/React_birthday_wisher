import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment7 from './components/Assignment7'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Assignment7/>
   </div>
  )
}

export default App
