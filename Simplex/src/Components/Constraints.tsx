import { Autocomplete, TextField } from "@mui/material";

const options = [
	{ label: '<=', id: 1 },
	{ label: '=', id: 2 },
	{ label: '=>', id: 3 },
];

const restricao = 3;





export function Constraints() {
	return (
		<div>
			<h1>fdsfdsfsdfs</h1>
			<div id="divSelections"></div>
			<div>
				{/* <Autocomplete
					disablePortal
					id="combo-box-objective"
					options={options}
					sx={{ width: 300 }}
					renderInput={(params) => <TextField {...params} label="Funcao Objetivo" />}
				/> */}

			</div>
		</div>
	);
}