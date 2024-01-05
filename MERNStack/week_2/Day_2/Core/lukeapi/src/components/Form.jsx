import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const [selected, setSelected] = useState("people");
  const [Id, setId] = useState(1);
  const navigate = useNavigate();
  const handleSelect = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${selected}/${Id}`);
  };
return (
<div>
<form onSubmit={handleSubmit}>
    <label>Search For:</label>
    <select onChange={handleSelect} >
		<option>people</option>
		<option>planets</option>
	</select>
    <div>
        <h2>ID:</h2>
        <input onChange={(e) => {
            setId(e.target.value);}} type="number" 
			/>
    </div>
    <div>
        <button type="submit">Search</button>
    </div>
</form>
</div>
)
}
export default Form