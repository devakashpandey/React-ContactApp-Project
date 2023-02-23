import React, { useEffect, useState } from 'react';
import "./Add.css"
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify"
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const userInfo = {
   name: "",
   email: "",
   contact: ""
}

const AddEditPage = () => {

  const [ state, setState ] = useState(userInfo)

   const navigate = useNavigate()

   const { name , email, contact } = state // destructuring for the input value

   const handleInputChange = (e) =>{
      const {name, value} = e.target
      setState({ ...state, [name]:value })
   }

   const addContact = async (eve) => {
     eve.preventDefault()

     const { name , email, contact } = state // destructuring for validation and adding data in firebase
     
     if(name && email && contact){
        
        const result = await fetch("https://react-contact-app-6f23b-default-rtdb.firebaseio.com/Contacts.json",{
          method: "POST",
          headers: {
           "Content_Type" : "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            contact:Number(contact), 
          })
      });
  
     if(result){
       toast.success("Contact added successfully");
       eve.target.reset()
     }

      setTimeout(() => navigate("/"), 500)

    }else{
      toast.warn("Please fill all the field!!",{
          theme:"dark"
        })
     }
   };

  return (
     <>

      <div className='contact-form'>
        <form  className='form' onSubmit={addContact}>
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
                    
<div className='container'>

                       <div className="inputBx">
                        <TextField 
                           id="" 
                           label="Name" 
                           variant="standard" 
                           name="name"
                           value={name}
                           onChange={handleInputChange}
                           />
                        </div>

                        <div className="inputBx">
                        <TextField 
                           id="" 
                           label="Email" 
                           type="mail"
                           variant="standard" 
                           name="email"
                           value={email}
                           onChange={handleInputChange}
                           />
                        </div>
                
                        <div className="inputBx">
                        <TextField 
                          id="" 
                          label="Contact" 
                          type="number"
                          variant="standard" 
                          name="contact"
                          value={contact}
                          onChange={handleInputChange}
                          
                            />
                        </div>     

           </div>                                
  </Box>

    <Button type="submit" variant="outlined" className='add-btn' >Add</Button>
    
          </form>
             
       </div>

     </>
  )
}

export default AddEditPage;




  
