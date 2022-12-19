import { TextField, Button } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './formCreateProblem.module.css';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

interface IDataProblem {
  numberVariable: number,
  numberConstraints: number,
  method: string,
  option: string
}

export function FormCreateProblem() {
  const [dataProblem, SetNewDataProblem] = useState<IDataProblem>({} as any)

  const postData = () => {
    fetch('http://localhost:3003/dataProblem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: `{
        "numberVariable": ${ dataProblem.numberVariable },
        "numberConstraints": ${ dataProblem.numberConstraints }
        
      }`
    })
      .then((resp) => resp.json())
      .then((data) => {
        SetNewDataProblem(data.numberConstraints);
        console.log("ESSE É O DADO", dataProblem);
      })

  }

  function handleCreateNewData(event: FormEvent) {
    event.preventDefault();
    postData();
  }

  async function loadData() {
    const response = await fetch('http://localhost:3003/dataProblem');
    const data = await response.json();

  }

  const handleNewDataChange = (event: any) => {
    SetNewDataProblem({ ...dataProblem, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    loadData();
    postData();
  }, [])

  console.log(dataProblem)

  return (
    <div>
      <form onSubmit={handleCreateNewData} className={styles.form} action="">
        <div className={styles.number}>
          <div className={styles.inputText}>
            <TextField
              name="numberVariable"
              value={dataProblem.numberVariable}
              onChange={handleNewDataChange}
              id="numberVariable"
              label="Numero de Variaveis de Decisao"
              color="success"
              focused
            />
            <TextField
              name="numberConstraints"
              value={dataProblem.numberConstraints}
              onChange={handleNewDataChange}
              label="Numero de Variaveis de Restricao"
              color="success"
              focused
            />
          </div>
        </div>
        <footer>
          <Link to='/GenerateProblem'>
            <Button type="submit" variant="contained" color="success">
              Continuar
            </Button>
          </Link>
        </footer>
      </form>
    </div>
  );
}