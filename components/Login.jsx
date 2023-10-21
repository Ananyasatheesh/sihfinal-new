import React, { useState } from 'react'
import img from '../assets/land.png'
import frame from '../assets/frame.png'
import img1 from '../assets/ci.png'
import img2 from '../assets/gi.png'
import img3 from '../assets/sup.png'
import log from '../assets/logo.png'
import '../components/Home.css'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log("fndjkn")
        let result = await fetch(
            'http://localhost:4000/login', {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        result = await result.json();
        if (result?.stream) {
            console.log(result)
            if (result.stream === "Unani" || "Ayurvedha" || "Siddha" || "Yoga" || "Homeopathy" || "Admininistrator") navigate('/home')

        }
        else {
            alert(result)
        }
    }
    return (
        <>
        <div className="flex flex-row gap-44  from-green-500  border-black h-20 p-2 w-screen fixed z-10">
                    <div className="flex flex-row gap-44 mx-auto">
                    <div><img src={img1} className="shadow-md shadow-green-800 rounded-xl  p-2 h-14 bg-white hover:shadow-green-400"></img></div>
                    <div><img src={log} className="shadow-md shadow-green-800 rounded-xl h-14 hover:shadow-green-400"></img></div>
                    <div><img src={img2} className="shadow-md shadow-green-800 rounded-xl  p-2 h-14 bg-white hover:shadow-green-400"></img></div>
                    <div><img src={img3} className="shadow-md shadow-green-800 rounded-xl h-14 hover:shadow-green-400"></img></div></div></div> 
        <div className='flex w-screen h-screen overflow-y-hidden fixed'>
            <div className=' w-2/5 h-full '>
                <h1 className='absolute mt-44 ml-40 text-black'>Ministry Of Ayush</h1>
                <img src={img} alt="" className='mt-72 ml-10 absolute h-1/2 ml-40 border-0 rounded-full' />
                <div className='h-full w-screen bg-gradient-to-r from-green-500 ' />
            </div>
            <div className='flex  w-full h-full items-center justify-center mt-12 ' >
                {/* <img src={frame} className='img absolute' alt="" /> */}
                <form className='relative mb-4'>
                    <input type="text" value={email} placeholder='Enter Email' onChange={e => setEmail(e.target.value)} className='bg-white-200
                    border-green-700 border-2 text-xl px-12  py-3 my-4 rounded-lg w-full focus:outline-none' />
                    <br />
                    <input type="text" value={password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} className=' text-xl px-12 w-96 py-3 my-4 rounded-lg border-green-700 border-2 bg-white-200 focus:outline-none' />
                    <br />
                    <Link to="/home" type="button" value="login" className='bg-[#009c00] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#009c0080]' onClick={handleOnSubmit}> Login </Link>
                </form>
            </div>
        </div></>
    )
}

export default Login