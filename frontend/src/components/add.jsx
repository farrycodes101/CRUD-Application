import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/add', {name, email, age})
        .then(result => {
            console.log(result);
            navigate('/');
        }).catch(err => {
            console.log(err);
            setError("An error occurred while adding the user. Please try again.");
        })
    }

    return (
        <div>
            <div className='mt-20 mx-auto my-auto w-1/3 h-[80vh] bg-gray-800 flex flex-col items-center p-5 '>
                <h2 className='mb-5 p-3 text-4xl text-red-500 font-serif mx-auto'>
                    <span className='p-2 bg-teal-200 rounded'>Add User</span>
                </h2>
                <form onSubmit={handleSubmit} className='flex-1 justify-center items-center'>
                    <div>
                        <label className='text-2xl text-white font-mono'>Name</label>
                        <input type='text' placeholder='Enter Your Full Name'
                            className='my-2 p-2 rounded-md w-full block text-center'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label className='text-2xl text-white font-mono'>Email</label>
                        <input type='text' placeholder='Enter Email'
                            className='my-2 p-2 rounded-md w-full block text-center' 
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label className='text-2xl text-white font-mono'>Age</label>
                        <input type='text' placeholder='Enter Your Age'
                            className='my-2 p-2 rounded-md w-full block text-center' 
                            onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit' className='mt-5 p-2 rounded-md text-white text-center font-serif bg-green-700'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add;
