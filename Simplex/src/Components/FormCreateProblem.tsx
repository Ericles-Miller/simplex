import { Autocomplete, TextField } from "@mui/material";
import styles from './formCreateProblem.module.css';


const options = [
    { label: 'Maximizar', id: 1 },
    { label: 'Minimizar', id: 2 },
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
                <link to='/GenerateProblem' >Continuar</link>
            </button>
          </footer>
        </form>
        </div>
    );
}