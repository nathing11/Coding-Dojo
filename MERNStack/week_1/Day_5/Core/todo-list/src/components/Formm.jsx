import { useState } from 'react';
function Formm({updatePosts}) {
    const [title , setTitle] = useState("")
    const handleTitle = (e) =>{
        e.preventDefault();
        if (!title) {
            return;
        }
        const newPost= {
            title,
        }
        updatePosts(newPost);
        setTitle("")
    }
    return (
    <div>
        <form onSubmit={handleTitle}>
            <input type="text" value={title} placeholder='add' onChange={(e)=> {setTitle(e.target.value)}}/>
            <button>Add</button>
        </form>
    </div>
)
}
export default Formm
