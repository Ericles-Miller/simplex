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
    }).map(() => {}),

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
      <div>
        <strong>Ponto Ótimo:</strong>
        <label > [ -2,0; 3,0; -0,0; 0,0; 0,0; 0,0; ]</label>
      </div>
      <div >
        <strong>Valor Otimo:</strong>
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
        <table className={styles.table}>
          <tr>
            <th><strong>Base</strong></th>
            <li></li>
          </tr>

          <tr>
            <td><strong>{/*{rd.base[0]}*/}</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>{/*{rd.base[0]}*/}</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>{/*{rd.base[0]}*/}</strong></td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          
        </table>
      {/* ))} */}
            </div>
        })}
      </div>

      
    </div>
  );
}