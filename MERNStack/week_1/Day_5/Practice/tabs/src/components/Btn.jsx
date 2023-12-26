import React from 'react'
import './btn.css';
const Btn = ({tab,idx,onClickHandler}) => {

    return (
    <div className='btn'> 
            <div>
                <button key={idx} onClick={() => onClickHandler(tab,idx)} className="btn1" >Tab {idx+1}</button>  
            </div>
        
    </div>
    )
    }
export default Btn

