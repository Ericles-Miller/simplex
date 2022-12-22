import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Card2 } from "./Card2";
import { useContextProblem } from "../context/ProblemContentex";
import {  Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TIMEOUT } from "dns";
import DeleayComponent from "./Test";


interface IDataProblem {
  numberVariable: number,
  numberConstraints: number,
  method: string,
  option: string,
  type: string
}

export function GenerateProblem() {
  const object = useContextProblem() // recebi as var do content
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

  async function loadData() {
    console.log('load')
    const response = await fetch('http://localhost:3000/data',{
      method: 'get'
    });
    const data = await response.json();
    console.log(data)
  }
  useEffect (() => {
    loadData();
    
}, [])

  async function postData() {
    console.log('post')
    fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": Math.random(),
        "numberVariablesMethod": result.numberVariablesMethod,
        "constraintsMethod"    : result.constraintsMethod,
        "method": object.data.method,
        "option": object.data.option,
        "type"  : object.data.type,
      })
    }).then(data => data.json())
  }

   // funcao do json server 
   function handleCreateNewData(event: FormEvent){
    console.log('handle')
    event.preventDefault();
    postData();
    //object.setData(result)
  }

  // funcao do json server
  function handleNewDataChange(event: ChangeEvent<HTMLInputElement>){
    console.log('entrou');
    event.target.setCustomValidity("")
    setResult({ ...result, [event.target.name]: event.target.value})
  }


  /**
   * ==========================================================================================
   * ===========================================================================================
   */
  

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
  // nao mexa
  async function handleSubmit(event: any) {
    await postData()
    

    
    

    

    

    if(object.data.type === 'Graph') {
      navigate('/AuxPage')
    }
    else{
      navigate('/PivotArray')
      
    }
  }

  return (
    <div>
        <Card2 >
        <form onSubmit={handleCreateNewData}>
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
                    required
                  > 
                  <option value="" selected disabled hidden></option>
                    <option value='<='>{'<='}</option>
                    <option value='='> { '='}</option>
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
