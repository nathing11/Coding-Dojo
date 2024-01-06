import  { useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
function LandingPage() {
    const [auther, setAutheer] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/auther")
            .then((response) => setAutheer(response.data))
            .catch((err) => console.log(err))
    },[])
    const deleteProduct = (id) => {
        axios
        .delete(`http://localhost:8000/api/auther/${id}`)
        .then((res) => {
            console.log(res);
            const filteredeAchAuther = auther.filter((eachAuther) => {
            return eachAuther._id !== id;
            });
            setAutheer(filteredeAchAuther);
            })
            .catch((err) => console.log(err));
        };
        return (
                <div>
                    <button><Link to={`/auther/create`}>create</Link></button>
                    {auther.map((oneAuther) => {
                            return (
                                <Table striped bordered hover>
                                    <thead>
                                            <tr>
                                                <th>Author</th>
                                                <th>Actions </th>
                                            </tr>
                                        </thead>
                                    <div key={oneAuther._id}>
                                        <tbody>
                                            <td><Link to={`/auther/${oneAuther._id}`}><h2>{oneAuther.name}</h2></Link></td>
                                            <td>
                                                <button><Link to={`/auther/${oneAuther._id}/update`}>Edit</Link></button>
                                                <button onClick={()=>deleteProduct(oneAuther._id)}>Delete</button>
                                            </td>
                                        </tbody>
                                    </div>
                                </Table>
                            )
                        })}
                </div>
    )
}
export default LandingPage