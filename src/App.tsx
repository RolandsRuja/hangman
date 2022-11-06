import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Hangman } from './components/Hangman/Hangman'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hangman />
    </div>
  )
}

export default App
