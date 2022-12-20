import { useEffect, useState } from 'react';
import styles from './table.module.css'



export function Table() {
  const [receivedData, newReceivedData] = useState([] as any)

  const getData = async () => {
    const response = await fetch('./../../dados.json');
    const data = await response.json();
    newReceivedData(data);
    console.log("no get", receivedData.base)
    const item = data;
  }

  useEffect(() => {
    getData();
  }, []);

  const renderData = () => {
    console.log("no render", receivedData.base)
  }

  const [generateTable, setGenerateTable] = useState({
    repeatTable: {

    },
    numberTable: Array.from({
      length: receivedData.length
    }).map(() => { }),

  })

  console.log(receivedData.length, 'aaaaa')

  // function handleChangesTable(number: any, item:any){
  //   setGenerateTable((previousState)=>{
  //     return {
  //       ...previousState,
  //       repeatTable : previousState.numberTable.map((original, index) =>{
  //         if(index == number){
  //           return {
  //             ...original,
  //           }
  //         }
  //         return original
  //       })

  //     }
  //   })
  // }


  return (
    <div>
      <div className={styles.divText}>
        <strong style={{ color: '#1C724B' }}>Ponto Ótimo:</strong>
        <label > [ -2,0; 3,0; -0,0; 0,0; 0,0; 0,0; ]</label>
      </div>
      <div className={styles.divText}>
        <strong style={{ color: '#1C724B' }}>Valor Otimo: </strong>
        <label >numero qualquer</label>
      </div>
      <div className={styles.goodPoint}>
        <strong>Nao foi possivel encontrar a solucao inteira </strong>
      </div>

      <div>
        {Array.from({
          length: receivedData.length
        }).map((item, index) => {
          return <div>
            {/* {receivedData.map((rd: any) => ( */}
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>BASE</th>
                    <th>Z</th>
                    <th>x1</th>
                    <th>x2</th>
                    <th>x3</th>
                    <th>x4</th>
                    <th>x5</th>
                    <th>x6</th>
                    <th>B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{/*{rd.base[0]}*/}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>SX1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>SX2</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>SX3</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* ))} */}
          </div>
        })}
      </div>
    </div>
  );
}