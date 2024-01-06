import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Create() {
  const [name, setName] = useState("");
    const navigate = useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault();
        const creatMe= {
          name
        };
        axios.post("http://localhost:8000/api/auther", creatMe)
            .then((res)=>{
                navigate("/");
            })
            .catch((err)=>console.log(err));
        setName("");
          }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label >Name:</label>
        <input type="text"  onChange={(e)=>{setName(e.target.value)}} value={name}/>
        <button>Cancel</button>
        <button>Submit</button>
      </form>
    </div>
    
  )
}
export default Create