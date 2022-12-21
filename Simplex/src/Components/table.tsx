import { useEffect, useState } from 'react';
import styles from './table.module.css'
import { object } from 'prop-types';



export function Table() {
  const [receivedData, setReceivedData] = useState<object[]>()
  const [nicePoint, setNicePoint]       = useState<object[]>()
  
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

  console.log(nicePoint)

  return (
    <>
    <div>
      <div className={styles.divText}>
        <strong style={{ color: '#1C724B' }}>Ponto Ótimo:</strong>
        { nicePoint != undefined &&  nicePoint.map((item:any)=>(
            <label >Z:{item.solution.Z} X1:{item.solution.X1} X2:{item.solution.X2} X3:{item.solution.X3} </label>
          ))
        }
      </div>
      <div className={styles.divText}>
        <strong style={{ color: '#1C724B' }}>Valor Otimo: </strong>
        <label >numero qualquer</label>
      </div>
      <div className={styles.goodPoint}>
        <strong>Nao foi possivel encontrar a solucao inteira </strong>
      </div>
      { receivedData != undefined && receivedData.map((rd: any)=> (
        <p>{rd.erro}</p>
      ))}

      <div>
      {receivedData != undefined && receivedData.map((rd: any)=> (
        <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>BASE</th>
              <th>z</th>
              {
                (rd.variable).map((item: string) =>(  
                  <th>{item}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Z</td>
                {
                  (rd.z).map((item: string) =>(
                      <td>{item}</td>
                  ))
                }
            </tr>

          {
            (rd.base).map((item: string, index:number) =>(  
                <tr>
                  <td>{item}</td>
                  {
                    rd.table[index].map((subItem: any) => <td>{subItem}</td>)
                  }
                </tr>
            ))
          }
          </tbody>
        </table>
      </div>
      ))}
    </div>
    </div>
    </>
  );
}