import { Card2 } from "./Card2";
import styles from './GraphFunction.module.css';
import Graph from './../assets/graph.jpg';
export function GraphFunction() {
  return (
    <div>
      <Card2>
        <div>
          <div className={styles.divText}>
            <strong style={{ color: '#1C724B' }}>Ponto Ótimo:</strong>
            <label > P1</label>
          </div>
          <div className={styles.divText}>
            <strong style={{ color: '#1C724B' }}>Valor Otimo: </strong>
            <label >2.5</label>
          </div>

          <img src={Graph} className={styles.img} />
        </div>
      </Card2>
    </div>
  );
}