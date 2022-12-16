import { useState } from 'react'
import './App.css'
import { Autocomplete, Card, TextField } from '@mui/material'
import { MultiActionAreaCard } from './Components/Card';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MultiActionAreaCard />
        
        

    </div>
  )
}

export default App
