import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './formCreateProblem.module.css';


const options = [
    { label: 'Maximizar', id: 1 },
    { label: 'Minimizar', id: 2 },
];

const options2 = [
  { label: 'Deual', id: 1 },
  { label: 'Tabular', id: 2 },
];

export function FormCreateProblem () {
    return (
        <div>
            <form className={styles.form} action="">
          <Autocomplete className={styles.objective}
            disablePortal
            id="combo-box-objective"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Funcao Objetivo" />}
          />
          <Autocomplete className={styles.objective}
            disablePortal
            id="combo-box-objective"
            options={options2}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Modulo" />}
          />
          <div className={styles.number}>
          <TextField 
            id="numberVariable"
            label="Numero de Variaveis de Decisao"
            type='number'
          />
          <TextField
            id="numberConstraints"
            label="Numero de Variaveis de Restricao"
            type='number'
          />
          </div>
          <footer>
            <button>
                <Link to='/GenerateProblem' >Continuar</Link>
            </button>
          </footer>
        </form>
        </div>
    );
}