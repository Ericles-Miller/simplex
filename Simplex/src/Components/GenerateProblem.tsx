import { FormEvent, useState } from "react";
import { Card2 } from "./Card2";
import { useContextProblem } from "../context/ProblemContentex";
import { TextField } from "@mui/material";
import styles from './GenerateProblem.module.css'

interface IDataProblem {
  numberVariable: number,
  numberConstraints: number,
  method: string,
  option: string,
  type  : string,
}

export function GenerateProblem() {
  const object = useContextProblem()
  console.log(object.data)

  const [result, setResult ] = useState({
    constraintsMethod: {

    },
    numberVariablesMethod: Array.from({
      length:object.data.numberVariable
    }).map(()=>{}),
    method: object.data.method,
    option: object.data.option,
    type  : object.data.type
  })

  function HandleChangesVariable(row:any, item:any, value:any) {
    setResult((previousState)=>{
      return {
        ...previousState,
        numberVariablesMethod: previousState.numberVariablesMethod.map((original, index)=>{
          if(index == row){
            return {
              ...original, 
              [item]: value,
            }
          }
          return original
        })
      }
    })
  }
  
  function HandleChangesConstraints(item: any,value:any){
    setResult((previousState)=>{
      return {
        ...previousState,
        constraintsMethod:{
          ...previousState.constraintsMethod, 
          [item]:value
        }
      }
    })
  }

  function handleSubmit(){
    const link = document.createElement('a')

    link.download = `data.json`

    const blob = new Blob([JSON.stringify(result)], {
      type: "application/json",
    })

    link.href = window.URL.createObjectURL(blob)
    link.click()
  }


  console.log(result)
  return (
    <div>
      <Card2 >
        <div style={{ display: 'flex' }}>
          {Array.from({
            length: object.data.numberConstraints
          }).map((item, index) => {
            
            return <div>
              <TextField
                name="InputRestrictions"
                id="InputRestrictions"
                label={`x${index + 1}`}
                type='number'
                color="success"
                focused
                onChange={(event)=>HandleChangesConstraints(`x${index + 1}`,event.target.value )}
              />
              {index != object.data.numberConstraints - 1 ? <label >+</label> : null}
            </div>
          })}
        </div>


        <div >
          {Array.from({
            length: object.data.numberVariable,

          }).map((_,row) => {
            return (
              <div style={{ display: 'flex' }}>
                {Array.from({
                  length: object.data.numberConstraints,
                }).map((item, column) => {
                  return <div><TextField
                    name="InputRestrictions"
                    id="InputRestrictions"
                    label={`x${column + 1}`}
                    type='number'
                    color="success"
                    focused
                    onChange={(event)=>HandleChangesVariable(row,`x${column + 1}`, event.target.value)}
                  />
                    {column != object.data.numberConstraints - 1 ? <label >+</label> : null}
                  </div>
                })}
                <select name="" id=""
                  onChange={(event)=>HandleChangesVariable(row,'simbol', event.target.value)}
                >
                  <option value='<='>{'<='}</option>
                  <option value='=' >{'=' }</option>
                  <option value='=>'>{'=>'}</option>
                </select>
                <TextField
                  name="InputRestrictions"
                  id="InputRestrictions"
                  type='number'
                  color="success"
                  focused
                  onChange={(event)=>HandleChangesVariable(row,'result', event.target.value)}
                />
              </div>
            )
          })}
        </div>
        <div>
          <button className={styles.button}onClick={handleSubmit}>Enviar Dados</button>
        </div>
      </Card2>
    </div>
  )
}