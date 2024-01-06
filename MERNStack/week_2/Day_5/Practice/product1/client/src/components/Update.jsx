import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Update() {
  const { id } = useParams();
const naviagte = useNavigate();
const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
useEffect(() => {
  axios
    .get(`http://localhost:8000/api/manager/${id}`)
    .then((res) => {
      setTitle(res.data.title);
      setPrice(res.data.price);
      setDescription(res.data.description);
      
    })
    .catch((err) => console.log(err));
}, [id]);
const handleSubmit = (e) => {
  e.preventDefault();
  const updatedProduct = {
    title,
    price,
    description,
  };
  axios
    .patch("http://localhost:8000/api/manager/" + id, updatedProduct)
    .then((res) => {
      naviagte("/");
    })
    .catch((err) => console.log(err));
  setTitle("");
  setPrice("");
  setDescription(1800);
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input onChange={(e) => setTitle(e.target.value)} value={title}  />
        </div>
        <div>
          <label>Price</label>
          <input onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        
        <div>
          <label>Description</label>
          <input onChange={(e) => setDescription(e.target.value)}value={description} />
        </div>
        <button>Create</button>
      </form>
    </div>
  )
}

export default Update
