import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import styles from './Card.module.css';
import { Constraints } from "./Constraints";
import { GenerateProblem } from "./GenerateProblem";

export function Card2({ children }) {
  return (
    <Card className={styles.card}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gerar Problema
          </Typography>
          <Typography variant="body2">
            Coloque o numero de variaveis de decisao e o numero de restricoes. Alem disso selecione
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions style={{display:'block'}}>
        {children}
      </CardActions>
    </Card>
  )
}