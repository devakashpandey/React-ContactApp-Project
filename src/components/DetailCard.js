import React from 'react';
import "./DetailCard.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/material';
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md"
import { CgAlignMiddle } from "react-icons/cg"
import { IoIosContact } from "react-icons/io"
import { useNavigate } from 'react-router-dom';





const DetailCard = ({user, id}) => {
 
  const { name, email, contact } = user; 
   const navigate = useNavigate()

  return (
     <>
     <div className='wrapper'>
     <Container>
         <Box sx={{ minWidth: 305 }}>

            <Card variant="outlined" className='my-card'>
               <CardContent>
                      <h2 className='heading'>User Contact Detail</h2><br/>
                        <div className='user-details'>
                         <p className='id'><CgAlignMiddle className='icon' />&nbsp;<span>Contact ID :</span>&nbsp;{id}</p>
                          <p className='name'><IoIosContact  className='icon'/>&nbsp;<span>Name : </span>&nbsp;{name}</p>
                          <p><MdOutlineEmail className='icon' />&nbsp;<span>Email : </span>&nbsp;{email}</p>
                          <p><MdOutlinePhone className='icon'/>&nbsp;<span>Contact : </span>&nbsp;+91 {contact}</p>
                      </div>
             </CardContent>           
                          <button onClick={() => navigate("/")}  className='back-btn'>Go Back</button>
                     
            </Card>
          </Box>
</Container>

</div>
<div className="custom-shape-divider-bottom-1677333200">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

     </>
  )
}

export default DetailCard;
