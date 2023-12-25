import React  from 'react';
import './boxs.css';
function Boxs({color}) {
    console.log({color})
    return (
    <div>
        {color.map((onecolor,idx)=>{ return (<div key={idx} style={{backgroundColor:onecolor,width:"100px",height:"100px"}}>
        </div>)})}
    </div>
    )
}
export default Boxs
