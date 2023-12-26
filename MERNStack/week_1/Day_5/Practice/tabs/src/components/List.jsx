import { useState } from "react";
import Btn from "./Btn";
function List() {
    const list=["Tab 1 content is showing here","Tab 2 content is showing here","Tab 3 content is showing here"]
    const [info,setInfo]=useState("")
    const onClickHandler = ((tab) => {
        setInfo(tab)
        })
    return (
    <div>
        {list.map((tab,idx)=>{
        return(<Btn tab={tab} idx={idx} onClickHandler={onClickHandler}/>)
        })}
        <hr/>
        <textarea  onChange={(e)=>{setInfo(e.target.value)}} value={info}></textarea>
        
    </div>
    )
}
export default List
