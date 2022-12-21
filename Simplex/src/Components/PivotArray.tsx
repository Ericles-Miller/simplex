import React, { useState, useEffect } from "react"
import { Card2 } from "./Card2";
import { Table } from "./Table";


export function PivotArray() {

  const [receivedData, newReceivedData] = useState([] as any)

  

  return (
    <div>
      <Card2>
        <Table></Table>
      </Card2>
    </div>
  )
}

