import React, {useState, useEffect} from 'react'
import "./Home.css"
import { db } from '../Firebase';
import { NavLink } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';


const Home = () => {

  const [data, setData] = useState("")


  useEffect(() => {
    onValue(ref(db), snapshot => {
       const data = snapshot.val();

       if(data !== null){
          setData({...snapshot.val()})
       }else{
         setData("")
       }
    });
  }, [])

  console.log(data)

  return (
      <>
      <div className="contact-table">
       <table className='styled-table'>
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
           
           </tbody>
       </table>

      </div>
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