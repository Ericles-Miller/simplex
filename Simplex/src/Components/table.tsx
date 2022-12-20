import styles from './table.module.css'



export function Table() {
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
              <td>Z</td>
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
    </div>
  );
}