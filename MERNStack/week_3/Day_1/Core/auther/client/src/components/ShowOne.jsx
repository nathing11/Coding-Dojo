import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ShowOne() {
  const {id} = useParams();
  const [auther , setAutheer] = useState({})
  useEffect(()=>{
    axios.get("http://localhost:8000/api/auther/"+id)
    .then((oneAuther)=>setAutheer(oneAuther.data))
    .catch((err)=>console.log(err))
  },[id])
  return (
    <div>
      <h2>{auther.name}</h2>
    </div>
  )
}

export default ShowOne
