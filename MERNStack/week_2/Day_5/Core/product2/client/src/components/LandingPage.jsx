import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

function LandingPage() {
    const [manager, setManager] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/manager")
            .then((response) => setManager(response.data))
            .catch((err) => console.log(err))
    }, [])
    const deleteProduct = (id) => {
        axios
        .delete(`http://localhost:8000/api/manager/${id}`)
        .then((res) => {
            console.log(res);
            const filteredProducts = manager.filter((eachProduct) => {
            return eachProduct._id !== id;
            });
            setManager(filteredProducts);
            })
            .catch((err) => console.log(err));
        };
    return (
        <div>
            {manager.map((oneManager) => {
                return (
                    <div key={oneManager._id}>
                        <Link to={`/manager/${oneManager._id}`}>
                            <h2>{oneManager.title}</h2>
                        </Link>
                        <button>
                            <Link to={`/manager/${oneManager._id}/update`}>Edit</Link>
                            <button onClick={()=>deleteProduct(oneManager._id)} className='btn btn-danger '  >Delete</button>
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default LandingPage;
