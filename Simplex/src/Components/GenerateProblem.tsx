import { Autocomplete, TextField } from "@mui/material";


const options = [
    { label: '<=', id: 1 },
    { label: '=',  id: 2 },
    { label: '=>',  id: 3},
];

export function GenerateProblem() {
    return (
        <div>
          <TextField 
            id="x1"
            label="Xi"
            type='number'
          />

            <Autocomplete 
            disablePortal
            id="combo-box-objective"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Funcao Objetivo" />}
          />
        </div>
    ); 
}