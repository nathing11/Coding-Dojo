import React, { useState } from 'react'
import LandingPage from './LandingPage'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Create() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")
    const navigate = useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        const creatMe= {
            title,
            price,
            description,
        };
        axios.post("http://localhost:8000/api/manager", creatMe)
            .then((res)=>{
                navigate("/");
            })
            .catch((err)=>console.log(err));
        setTitle("");
        setPrice("");
        setDescription("");
    }
    return (
    <div>
        <form onSubmit={submitHandler}>
            <h1>Product Manager</h1>
            <label >Title:</label>
            <input onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
            <label>Price:</label>
            <input onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            <label>Description:</label>
            <input  onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
            <button>Create</button>
        </form>
        <LandingPage/>
    </div>
    )
}
export default Create
