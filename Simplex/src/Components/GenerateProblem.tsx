import { FormEvent, useState } from "react";
import { Card2 } from "./Card2";
import { useContentxProblem } from "../context/ProblemContentex";
import { TextField } from "@mui/material";



interface IDataProblem {
  numberVariable: number,
  numberConstraints: number,
  method: string,
  option: string
}


export function GenerateProblem() {
  const object = useContentxProblem()
  console.log(object.data)

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
              />
              {index != object.data.numberConstraints - 1 ? <label >+</label> : null}
            </div>
          })}
        </div>


        <div >
          {Array.from({
            length: object.data.numberVariable,

          }).map(() => {
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
                  />
                    {column != object.data.numberConstraints - 1 ? <label >+</label> : null}
                  </div>
                })}
                <select name="" id="">
                  <option>{'<='}</option>
                  <option>{'='}</option>
                  <option>{'=>'}</option>
                </select>
                <TextField
                  name="InputRestrictions"
                  id="InputRestrictions"
                  type='number'
                  color="success"
                  focused
                />
              </div>
            )
          })}
        </div>
      </Card2>
    </div>
  )
}