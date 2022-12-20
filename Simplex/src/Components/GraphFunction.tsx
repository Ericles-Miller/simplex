import { Card2 } from "./Card2";
import styles from './GraphFunction.module.css';
import Graph from './../assets/graph.jpg';
import { useEffect, useState } from "react";



export function GraphFunction() {
  
  const [receivedData, newReceivedData] = useState([] as any)

  const getData = async () => {
    const response = await fetch('./../../teste.json');
    const data = await response.json();
    newReceivedData(data);
    console.log("no get", receivedData.base)
    const item = data;
  }

  useEffect(() => {
    getData();
  }, []);
  
  console.log(receivedData.nicePoint)

  
  
  return (
    <div>
      <Card2>
        <div>
          <div className={styles.divText}>
            <strong style={{ color: '#1C724B' }}>Ponto Ótimo:</strong>
            <label style={{marginLeft: '0.5rem'}}>{receivedData.nicePoint}</label>
          </div>
          <div className={styles.divText}>
            <strong style={{ color: '#1C724B' }}>Valor Otimo: </strong>
            <label style={{marginLeft: '0.5rem'}}>{receivedData.niceValue}</label>
          </div>

          <img src={Graph} className={styles.img} />
        </div>
      </Card2>
    </div>
  );
}