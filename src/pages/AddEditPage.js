import React, { useEffect, useState } from 'react';
import "./Add.css"
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify"
import { Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { db } from '../Firebase';
import { onValue, ref, set } from 'firebase/database';


const initialData = {
   name: "",
   email: "",
   contact: ""
}

const AddEditPage = () => {

  const [ state, setState ] = useState(initialData)
  const [data, setData] = useState("")

  const { id } = useParams();

 
useEffect(() => {
    onValue(ref(db), snapshot => {
      const data =  snapshot.val();

      if(data === null){
         setData("")
      }else{
        setData({...snapshot.val()})
      }
   });

   return () => {
    setData("")
  }

}, [id])   // this runs when we have the id


useEffect(() => {

  if(id) {  // if we have the id which means user perform the update operation
    setState({ ...data[id] })
  }else{
    setState({...initialData})
  }

  // cleanup function
 
   return () => {
     setState({...initialData})
   }


}, [id, data])  // this run when we have the id and the data


   const navigate = useNavigate()

   const { name , email, contact } = state // destructuring for the input value

   const handleInputChange = (e) =>{
      const {name, value} = e.target
      setState({ ...state, [name]:value })
   }


   const addContact = async (eve) => {
     eve.preventDefault()

     const { name , email, contact } = state // destructuring for validation and adding data in firebase
     
     if(!name || !email || !contact ){
      toast.warn("Please fill all the field!!",{
        theme:"dark"
      })

    } else{
        
      if(!id){
        const result = await fetch("https://react-contact-app-6f23b-default-rtdb.firebaseio.com/.json",{
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
          toast.success("Contact Added Successfully",{
            theme:"dark"
          });
          eve.target.reset()
         }

      }else{
        set(ref(db , `${id}`),{
          name: name,
          email: email,
          contact: contact
        })

        toast.success("Contact Updated Successfully",{
          theme:"dark"
        })
      }

      setTimeout(() => navigate("/"), 500)
    }
  
   };



  return (
     <>
  <Container >
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
                           value={name || ""}
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
                           value={email || ""}
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
                          value={contact || ""}
                          onChange={handleInputChange}
                          
                            />
                        </div>     

           </div>                                
  </Box>

   { id ? (
       <Button type="submit" variant="outlined"
       className='add-btn'>   Update  </Button>
      ) : (
       <Button type="submit" variant="outlined"
        className='add-btn'>   Add Contact  </Button>
      )
    }
    
          </form>
             
       </div>

       </Container>

       <div className="custom-shape-divider-bottom-1677332198">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

     </>
  )
}

export default AddEditPage;




  
