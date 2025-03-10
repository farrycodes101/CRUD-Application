import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(result => {
                console.log("Backend Response:", result.data);
                setUsers(result.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(result => {
                console.log("Data Deleted Successfully !",result);
                window.location.reload();
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className='mt-20 mx-auto my-auto w-1/3 md:w-2/3 h-auto bg-gray-800 flex flex-col items-center p-5 '>
                <h2 className='mb-5 p-3 text-2xl md:text-4xl text-red-500 font-serif mx-auto'>
                    <span className='p-2 text-center bg-teal-200 rounded'>CRUD APPLICATION</span>
                </h2>
                <button type='button' className='mb-2 p-2 bg-green-600 rounded-md text-amber-300 font-mono font-bold'
                    onClick={() => navigate('/add')}>Add +</button>
                <table className='w-full text-white border-collapse font-thin'>
                    <thead>
                        <tr className=' font-serif '>
                            <th className='p-3 border border-dashed'>Name</th>
                            <th className='p-3 border border-dashed'>Email</th>
                            <th className='p-3 border border-dashed'>Age</th>
                            <th className='p-3 border border-dashed'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                         {users && users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id} className='bg-gray-700 hover:bg-gray-600 transition-colors'>
                                    <td className='p-3 border border-dashed'>{user.name}</td>
                                    <td className='p-3 border border-dashed'>{user.email}</td>
                                    <td className='p-3 border border-dashed'>{user.age}</td>
                                    <td className='p-3 border border-dashed'>
                                        <button
                                            type='button'
                                            className='m-1 p-2 text-white font-mono bg-blue-600 rounded-md hover:bg-blue-700 transition-colors'
                                            onClick={() => navigate(`/update/${user._id}`)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            type='button'
                                            className='ml-3 p-2  text-white font-mono bg-red-600 rounded-md hover:bg-red-700 transition-colors'
                                            onClick={() => handleDelete(user._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className='p-3 text-center text-gray-400'>No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;
