import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ShowOne() {
  const {id} = useParams();
  const [manager , setManger] = useState({})
  useEffect(()=>{
    axios.get("http://localhost:8000/api/manager/"+id)
    .then((oneManger)=>setManger(oneManger.data))
    .catch((err)=>console.log(err))
  },[id])
  return (
    <div>
      <h2>{manager.Title}</h2>
      <p>{manager.Price}</p>
      <p>{manager.Description}</p>
    </div>
  )
}
export default ShowOne
