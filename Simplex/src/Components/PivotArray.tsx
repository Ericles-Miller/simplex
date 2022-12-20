import React, { useState, useEffect } from "react"
import { Card2 } from "./Card2";
import { Table } from "./table";




export  function PivotArray() {

  const [receivedData, newReceivedData] = useState({} as any)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('./../../dados.json');
      const data = await response.json();
      newReceivedData(data);
    }
    getData();
  }, []);


  console.log(receivedData)





  return (
    <div>
      <Card2>
        <Table></Table>
      </Card2>
    </div>
  )
}

