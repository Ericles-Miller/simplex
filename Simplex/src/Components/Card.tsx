import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { FormCreateProblem } from './FormCreateProblem';
import styles from './Card.module.css';


export  function MultiActionAreaCard() {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gerar Problema
          </Typography>
          <Typography variant="body2" color="text.secondary">   
            Coloque o numero de variaveis de decisao e o numero de restricoes. Alem disso selecione 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FormCreateProblem />
      </CardActions>
    </Card>
  );
}
