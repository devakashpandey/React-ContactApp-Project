import React,{useState, useEffect} from 'react';
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { db } from '../Firebase';
import { child, ref, get } from "firebase/database"
import DetailCard from '../components/DetailCard';



const ViewDetail = () => {

  const [user, setUser] = useState("")

  const {id} = useParams()

  const getDetails = () => {
     const dbRef = ref(db);
     get(child(dbRef, `${id}`)).then((snapshot) => {
         if(snapshot.exists()){
            setUser({...snapshot.val()})
         }else{
             setUser("")
         }
     })
  }

  useEffect(() => {
    getDetails()

  }, [id])


  return (
     <>
     <div style={{ alignItems:"center", display:"flex", justifyContent:"center"  }} >
       <DetailCard  user={user} id={id}/>
     </div>
  
     </>
  )
}

export default ViewDetail;
