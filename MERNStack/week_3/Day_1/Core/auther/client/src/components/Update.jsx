import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Update() {
  const { id } = useParams();
const naviagte = useNavigate();
const [name, setName] = useState("");
useEffect(() => {
  axios
    .get(`http://localhost:8000/api/auther/${id}`)
    .then((res) => {
      setName(res.data.name);      
    })
    .catch((err) => console.log(err));
}, [id]);
const handleSubmit = (e) => {
  e.preventDefault();
  const updatedMe = {
    name,
  };
  axios
    .patch("http://localhost:8000/api/api/auther/" + id, updatedMe)
    .then((res) => {
      naviagte("/");
    })
    .catch((err) => console.log(err));
  setName("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >Name:</label>
        <input type="text"  onChange={(e)=>{setName(e.target.value)}} value={name} />
        <button>Cancel</button>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default Update
