import { useState } from "react"
const Together = (props) => {
    const {prop1}=props
    const [personObj, setPersonObj] = useState(prop1);
    const counter = () => {
    setPersonObj({ ...personObj, age: personObj.age + 1 });
    };    
    return (
    <div>
        <div>
            <h2>{personObj.lastName} {personObj.firstName}</h2>
            <p>Age :{personObj.age}</p>
            <p>Hair color : {personObj.hairColor}</p>
            <button  onClick={counter}>Happy Birthday </button>
        </div>
    </div>
    )
}
export default Together

