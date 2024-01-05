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

    return (
        <div>
            {manager.map((oneManager) => {
                return (
                    <div key={oneManager._id}>
                        <Link to={`/manager/${oneManager._id}`}>
                            <h2>{oneManager.Title}</h2>
                        </Link>
                        <button>
                            <Link to={`/manager/${oneManager._id}/update`}>Edit</Link>
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default LandingPage;
