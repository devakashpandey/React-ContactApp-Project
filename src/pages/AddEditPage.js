import React, { useEffect, useState } from 'react';
import "./Add.css"
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify"
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const initialState = {
   name: "",
   email: "",
   contact: ""
}

const AddEditPage = () => {

  const [ state, setState ] = useState(initialState)
  const [data, setData] = useState({})

   const navigate = useNavigate()

   const { name, email, contact } = state;

  return (
     <>
      <div className='contact'>
        <form className='contact-form'>
          
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField 
      id="standard-basic" 
      label="Name" 
      variant="standard" 
      name="name"
      value={name}
      onChange={null}
      />

     <TextField 
      id="standard-basic" 
      label="Email" 
      variant="standard" 
      name="email"
      value={email}
      onChange={null}
      />

     <TextField 
      id="standard-basic" 
      label="Contact" 
      variant="standard" 
      name="contact"
      value={contact}
      onChange={null}
      />

    </Box>

             <Button type="submit" variant="outlined">SUBMIT</Button>


        </form>
      </div>
     </>
  )
}

export default AddEditPage;
