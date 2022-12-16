import { TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './formCreateProblem.module.css';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

interface IDataProblem {
  numberVariable: number,
  numberConstraints: number
}


export function FormCreateProblem() {
  const [dataProblem, SetNewDataProblem] = useState<IDataProblem>({} as any)

  async function postTask() {
    fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: `{
              "numberVariable": ${dataProblem.numberVariable},
              "numberConstraints": ${dataProblem.numberConstraints}
            }`
    }).then(data => data.json())
  }

  function handleCreateNewData(event: FormEvent) {
    event.preventDefault();
    postTask();
  }

  async function loadTasks() {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();

    SetNewDataProblem(data);
  }

  const handleNewDataChange = (event: any) => {
    SetNewDataProblem({ ...dataProblem, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    loadTasks();
  }, [])

  console.log(dataProblem)


  return (
    <div>
      <form onSubmit={handleCreateNewData} className={styles.form} action="">
        <div className={styles.number}>
        <FormLabel id="demo-row-radio-buttons-group-label">Método</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Maximizar" control={<Radio />} label="Maximizar" />
        <FormControlLabel value="Minimizar" control={<Radio />} label="Minimizar" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Objetivo</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Tabular" control={<Radio />} label="Tabular" />
        <FormControlLabel value="Dual" control={<Radio />} label="Dual" />
        
      </RadioGroup>





          <TextField
            name="numberVariable"
            value={dataProblem?.numberVariable}
            onChange={handleNewDataChange}
            id="numberVariable"
            label="Numero de Variaveis de Decisao"
            type='number'
            color="success"
            focused
          />
          <TextField
            name="numberConstraints"
            value={dataProblem?.numberConstraints}
            onChange={handleNewDataChange}
            id="numberConstraints"
            label="Numero de Variaveis de Restricao"
            type='number'
            color="success"
            focused
          />
        </div>
        <footer>
          <button type="submit">
            <Link to='/GenerateProblem'>Continuar</Link>
          </button>
        </footer>
      </form>
    </div>
  );
}

/*
<Autocomplete className={styles.objective}
          disablePortal
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Funcao Objetivo" color="success" focused id="objective" name="method" value={dataProblem?.method} onChange={handleNewDataChange} />}
        />

        <Autocomplete className={styles.objective}
          disablePortal
          options={options2}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Funcao Objetivo" color="success" focused id="objective2" name="option" value={dataProblem?.option} onChange={handleNewDataChange} />}
        />

        */