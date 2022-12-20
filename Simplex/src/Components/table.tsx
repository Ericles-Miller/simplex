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


      <table className={styles.table}>
        <tr>
          <th><strong>Base</strong></th>
          <th><strong>Z</strong></th>
          <th><strong>variable x1</strong></th>
          <th><strong>variable x2</strong></th>
          <th><strong>variable x3</strong></th>
          <th><strong>variable x4</strong></th>
          <th><strong>variable x5</strong></th>
          <th><strong>variable x6</strong></th>
          <th><strong>B</strong></th>
        </tr>

        <tr>
          <td><strong>Z</strong></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <td><strong>SX1</strong></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><strong>SX2</strong></td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td><strong>SX3</strong></td>

          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        
      </table>
    </div>
  );
}