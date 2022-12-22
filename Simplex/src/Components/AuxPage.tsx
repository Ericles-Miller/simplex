import { useEffect, useState } from "react";
import { Card3 } from "./Card3";
import { Box, CircularProgress } from "@mui/material";
import { GraphFunction } from "./GraphFunction";



export function AuxPage(){
    const [receivedData, newReceivedData] = useState<Object>()

  const getData = async () => {
    const response = await fetch('./../../problem/functionGraph.json');
    const data = await response.json();
    newReceivedData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  
  if (receivedData === undefined) {
    console.log()
    return (
      <div>
        <Card3>
          <Box>
            <CircularProgress />
            <h2>Carregando Dados</h2>
          </Box>
        </Card3> 
      </div>   
    );
  }

  else {
    return (
        <Card3>
          <GraphFunction></GraphFunction>
        </Card3>
      )
  }

}