import React, { useState, useEffect } from "react"
import { Card2 } from "./Card2";




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
        
      </Card2>
    </div>
  )
}

