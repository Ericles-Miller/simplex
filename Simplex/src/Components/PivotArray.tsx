import { Table } from "./Table";
import { Card3 } from './Card3';
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function PivotArray() {

  const [receivedData, setReceivedData] = useState<object[]>()
  const [nicePoint, setNicePoint] = useState<object[]>()

  const getData = async () => {
    const response = await fetch('./../../result.json');
    const data = await response.json();
    setReceivedData(data);
  }

  const getDataNicePoint = async () => {
    const response = await fetch('./../../nicePoint.json');
    const dataNicePoint = await response.json();
    setNicePoint(dataNicePoint);
  }

  useEffect(() => {
    getData();
    getDataNicePoint();
  }, []);

  if (receivedData === undefined) {
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
        <Table></Table>
      </Card3>
    )
  }

}

