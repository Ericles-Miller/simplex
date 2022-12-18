import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import { CardProblem } from './Components/Card';
import { GenerateProblem } from './Components/GenerateProblem';
import './global.css';
import { PivotArray } from './Components/PivotArray';
import {ContextProblem} from './context/ProblemContentex';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProblem>
    <Router>
  
      <Routes>
        <Route path='/' element={<CardProblem />}/>
        <Route path='/GenerateProblem' element={<GenerateProblem />}/>
        <Route path='/PivotArray' element={<PivotArray />}/>
      </Routes>
    </Router>
    </ContextProblem>
  );

}

export default App
