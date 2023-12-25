import { useState } from "react";
import './form.css';
import Boxs from "./Boxs";
function Formm(props) {
    const [color, setColor] = useState([])
    const [col, setCol] = useState("")
    const newColor = (e) => {
        e.preventDefault();
        setColor([...color, col]);
    
    };
    return (
        <div>
            <form action="" onSubmit={newColor}>
                <label htmlFor="">Color</label>
                <input type="text" placeholder="Add color" onChange={(e) => { setCol(e.target.value) }} />
                <button >add Color</button>
                <hr />
            </form>
            <Boxs color={color} />
        </div>
    )
}
export default Formm
