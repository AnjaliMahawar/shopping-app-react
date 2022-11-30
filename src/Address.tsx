import { Button, TextField } from '@mui/material'

import React, { useState } from 'react'
import './App.css';

function Address() {
    const[val,setVal]=useState<any>('')
    const[val2,setVal2]=useState('')
    const add=(e:React.SyntheticEvent)=>{
        e.preventDefault()
         setVal2(val)
         setVal("")     
    }
  return (
    <div>
       <form  onSubmit={add}>
         <TextField className='address' onChange={(e)=>{setVal(e.target.value)}} id="outlined-basic" label="Address" variant="outlined" />
         <Button className='address2' onClick={add} variant="outlined">ADD</Button>
       </form>
       <div  className='address2'>
            {val2?<div>
                <h3 >Address :-</h3>
                 <h5>{val2}</h5>
                 </div>:''}
         </div>
    </div>
  )
}

export default Address