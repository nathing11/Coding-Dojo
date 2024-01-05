
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Update() {
  const { id } = useParams();
   // use navigate
const naviagte = useNavigate();
// inputs state
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
      <form className="col-3" onSubmit={handleSubmit}>
        <div className="form-group ">
          <label className="form-label mt-4" >
            Title
          </label>
          <input className="form-control" onChange={(e) => setTitle(e.target.value)} value={title}  />
        </div>
        
        <div className="form-group ">
          <label className="form-label mt-4" >
          Price
          </label>
          <input className="form-control" onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        
        <div className="form-group ">
          <label className="form-label mt-4" >
          Description
          </label>
          <input className="form-control" onChange={(e) => setDescription(e.target.value)}
            value={description} />
        </div>
        <button className="btn btn-primary mt-4">Create</button>
      </form>
    </div>
  )
}

export default Update
