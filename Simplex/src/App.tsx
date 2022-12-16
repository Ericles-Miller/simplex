import { useState } from 'react'
import './App.css'
import { Autocomplete, Card, TextField } from '@mui/material'
import { CardProblem } from './Components/Card';
import './global.css';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CardProblem />
        
        

    </div>
  )
}

export default App
