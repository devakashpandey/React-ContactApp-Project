import React, {useState, useEffect} from 'react'
import "./Home.css"
import { db } from '../Firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress, Container, } from '@mui/material';



const Home = () => {

  const [data, setData] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  const fetchData = () => {
   onValue(ref(db), snapshot => {
      const data =  snapshot.val();

      if(data === null){
         setLoading(true)
        //  setData("")
      }else{
        setData({...snapshot.val()})
        setLoading(false)
      }
   });
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  return (
      <>
      <Container>
      <div className="contact-table">
      <TableContainer component={Paper}>
              {
                loading ? ( <CircularProgress className='progress-bar'/> ) :
                 (
                  <Table sx={{ minWidth: 500 }} >

                  <TableHead className='head-table-row'>
                    <TableRow className="data-row">

                      <TableCell className='table-cell'>No.</TableCell>
                      <TableCell className='table-cell' align="right">Name</TableCell>
                      <TableCell className='table-cell' align="right">Email</TableCell>
                      <TableCell className='table-cell' align="right">Contact</TableCell>
                      <TableCell className='table-cell' align="right">Action</TableCell>
                    
                    </TableRow>
                  </TableHead>


                  <TableBody>
                    {Object.keys(data).map((id, index) => (
                      <TableRow hover key={id} onClick={()=> navigate(`/detail/${id}`)} className="data-row">

                        <TableCell className='table-cell' component="th" scope="row">
                                    {index + 1}.
                        </TableCell>
                        <TableCell className='table-cell' align="right">{data[id].name}</TableCell>
                        <TableCell className='table-cell' align="right">{data[id].email}</TableCell>
                        <TableCell className='table-cell' align="right">{data[id].contact}</TableCell>

                        
                        <TableCell align="right">     
                          <NavLink to={`/update/${id}`}>
                            <button>Edit</button>
                          </NavLink>

                          <button>Delete</button>
                        </TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                 )
              }
    </TableContainer>
      </div>
      </Container>
      </>
  )
}

export default Home;


{/* <table className='styled-table'>
<thead style={{textAlign:"center"}}>
 <tr>
    <th>No.</th>
    <th>Name</th>
    <th>Email</th>
    <th>Contact</th>
    <th>Action</th>
 </tr>
</thead>

<tbody>
    {Object.keys(data).map((index, id) => {
      return(
        <tr key={id}>
          <th scope='row'>{index + 1}</th>
          <td>{data[0]}</td>
         </tr>
      )
    })}
</tbody>
</table> */}