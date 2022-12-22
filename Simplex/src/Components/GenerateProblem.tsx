import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Card2 } from "./Card2";
import { useContextProblem } from "../context/ProblemContentex";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IDataProblem {
  numberVariable: number,
  numberConstraints: number,
  method: string,
  option: string,
  type: string
}

export function GenerateProblem() {
  const object = useContextProblem()
  console.log(object.data, 'aa')
  const navigate = useNavigate()



  // nao mexa
  const [result, setResult] = useState({
    constraintsMethod: {

    },
    numberVariablesMethod: Array.from({
      length: object.data.numberVariable
    }).map(() => { }),
    method: object.data.method,
    option: object.data.option,
    type  : object.data.type
  })

  async function postData() {
    fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: `{
              "numberVariablesMethod": ${result.numberVariablesMethod}
              "constraintsMethod"    : ${result.constraintsMethod},
              "method": ${object.data.method},
              "option": ${object.data.option},
              "type"  : ${object.data.type}
            }`
    }).then(data => data.json())
  }

  async function loadData() {
    const response = await fetch('http://localhost:3000/data');
    const data = await response.json();

    setResult(data);
  }

  useEffect (() => {
    loadData();
}, [result])

  // nao mexa
  function HandleChangesVariable(row: any, item: any, value: any,) {
    setResult((previousState) => {
      return {
        ...previousState,
        numberVariablesMethod: previousState.numberVariablesMethod.map((original, index) => {
          if (index == row) {
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
  // nao mexa
  function HandleChangesConstraints(item: any, value: any) {
    setResult((previousState) => {
      return {
        ...previousState,
        constraintsMethod: {
          ...previousState.constraintsMethod,
          [item]: value
        }
      }
    })
  }

  // funcao do json server 
  function handleCreateNewData(event: FormEvent){
    event.preventDefault();
    postData();
    object.setData(result)
  }

  // nao mexa

  const delay = (time:any) => {  return new Promise(res => {
    setTimeout(navigateGraph,time)
  })
}


  const navigateGraph = () => {
    navigate('/GraphFunction') 
  }  

  async function handleSubmit(event: any) {

    const link = document.createElement('a')
    link.download = `data.json`

    const blob =  new Blob([JSON.stringify(result)], {
      type: "application/json",
    })

    link.href = window.URL.createObjectURL(blob)
    link.click()
  }

  // funcao do json server
  function handleNewDataChange(event: ChangeEvent<HTMLInputElement>){
    console.log('entrou');
    event.target.setCustomValidity("")
    setResult({ ...result, [event.target.name]: event.target.value})
  }
  console.log(result)

  return (
    <div>
        <Card2 >
        <form>
          <div style={{ display: 'flex', marginBottom: '1.5rem', justifyContent: 'center', alignItems: "center" }}>
            <strong style={{ paddingRight: "1rem" }}>Função</strong>
            {Array.from({
              length: object.data.numberConstraints
            }).map((item, index) => {

              return <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  style={{ marginLeft: '0.5rem' }}
                  name="InputRestrictions"
                  id="InputRestrictions"
                  label={`x${index + 1}`}
                  type='number'
                  color="success"
                  focused
                  onChange={(event) => HandleChangesConstraints(`x${index + 1}`, event.target.value)}
                  InputProps={{ inputProps: { min: 0 } }}
                  required
                />
                {index != object.data.numberConstraints - 1 ? <strong style={{ marginLeft: '0.5rem' }}>+</strong> : null}
              </div>
            })}
          </div>


          <div>
            {Array.from({
              length: object.data.numberVariable,

            }).map((_, row) => {
              return (
                <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
                  {Array.from({
                    length: object.data.numberConstraints,
                  }).map((item, column) => {
                    return <div style={{ display: 'flex', alignItems: 'center' }}>
                      <TextField
                        name="InputRestrictions"
                        id="InputRestrictions"
                        label={`x${column + 1}`}
                        type='number'
                        color="success"
                        focused
                        onChange={(event) => HandleChangesVariable(row, `x${column + 1}`, event.target.value)}
                        InputProps={{ inputProps: { min: 0 } }}
                        required
                      />
                      {column != object.data.numberConstraints - 1 ? <strong style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>+</strong> : null}
                    </div>
                  })}
                  <select 
                    onChange={(event) => HandleChangesVariable(row, 'simbol', event.target.value)}
                    style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
                  >
                    <option value='<='>{'<='}</option>
                    <option value='='>{'='}</option>
                    <option value='>='>{'>='}</option>
                  </select>
                  <TextField
                    name="InputRestrictions"
                    id="InputRestrictions"
                    type='number'
                    color="success"
                    focused
                    onChange={(event) => HandleChangesVariable(row, 'result', event.target.value)}
                    required
                    //InputProps={{ inputProps: { min: 0 } }}
                  />
                </div>
              )
            })}
          </div>
          <div style={{ marginTop: '2rem' }}>
            {/* {object.data.type == 'Graph' ? <Button ></Button>} */}
            <Button onClick={handleSubmit} type="submit" variant="contained" color="success">
              Enviar Dados
            </Button>
          </div>
      </form>
        </Card2>
    </div>
  )
}


