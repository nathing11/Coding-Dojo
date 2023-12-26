import React from 'react'
function Todolistt({list , deletePost , readPost}) {

    return (
    <div>
        {list.map((onePost,idx)=>{
            return  <>
                <div key={idx}>
                <h3 style={onePost.check ? { textDecoration: "line-through" } : { backgroundColor: 'white' }}>{onePost.title}</h3>
                <input type="checkbox"  onChange={(e) => {readPost(idx);}} checked={onePost.check} className='cmp' />
                <button onClick={() => deletePost(idx)}>Delete</button>
                </div>
                </>
        })}
    </div>
)
}
export default Todolistt
