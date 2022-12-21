import { useEffect, useRef, useState } from 'react';
import styles from './table.module.css'
import { object } from 'prop-types';



export function Table() {
  const [receivedData, setReceivedData] = useState<object[]>()
  const [nicePoint, setNicePoint] = useState<object[]>()
  const pivot: Array<any> = []
  // const test:  Array<number, number> = []
  let row: Array<any> = []
  let column:Array<any> = []
  //#F2E399
  const [backgroundColorPivot, setBackgroundColorPivot] = useState('')
  const [colorPivot, setColorPivot] = useState('')

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


  return (
    <>
     {/* { receivedData != undefined && receivedData.map((rd:any)=>{
        rd.pivo.map(((pivot: any, indexPivot: number) => console.log(pivot)))      
     })}   */}

      { receivedData != undefined && receivedData.map((rd: any) => (
        (rd.base).map((item: string, index: number) => (
          rd.table[index].map((value: any, cont:number ) => (
              index == (rd.pivo[0]) && cont == (rd.pivo[1]) && console.log(index)
            ))
          ))
        ))  
    }
      <div>
        <div className={styles.divText}>
          <strong style={{ color: '#1C724B' }}>Ponto Ótimo:</strong>
          {nicePoint != undefined && nicePoint.map((item: any) => (
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
        {receivedData != undefined && receivedData.map((rd: any) => (
          <p>{rd.erro}</p>
        ))}

        {receivedData != undefined && receivedData.map((rd: any) => (
          pivot.push(rd.pivo)
        ))}

        {console.log(pivot)}


        <div>
          {receivedData != undefined && receivedData.map((rd: any) => (
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <td>Table 1</td>
                  <td></td>
                  <td></td>
                  {
                    (rd.z).map((item: string) => (
                      <td>{item}</td>
                    ))
                  }
                  <tr>
                    <th>BASE</th>

                    {
                      (rd.variable).map((item: string) => (
                        <th>{item}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  <tr>

                  </tr>             
                  { 
                    (rd.base).map((item: string, index: number) => (
                      
                      <tr>
                        <td>{item}</td>
                        {                         
                          rd.table[index].map((subItem: any, indexNumber: number) => (
                            index == (rd.pivo[0]) && indexNumber == (rd.pivo[1]) ? <td style={{backgroundColor: '#F2E399', color: '#000'}}>{subItem}</td>
                            : <td>{subItem}</td>
                          ))
                        }
                        
                      </tr>
                    ))
                  }
                  
                  <td>Z</td>
                  <td></td>
                  {
                    rd.table[rd.table.length - 1].map((value: any) => (
                      <td>{value}</td>
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