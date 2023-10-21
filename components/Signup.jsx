import React, { useState } from 'react'
import img from '../assets/land.png'
import img1 from '../assets/ci.png'
import img2 from '../assets/gi.png'
import img3 from '../assets/sup.png'
import log from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [domain, setDomain] = useState('');
    const [stream, setStream] = useState('');
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        if (password !== confirmpassword) {
            alert("Password is not same")
            return
        }
        e.preventDefault();
        let result = await fetch(
            'http://localhost:4000/register', {
            method: "post",
            body: JSON.stringify({ email, password,confirmpassword, stream, domain }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let result1 = await fetch(
			'http://localhost:2000/register', {
			method: "post",
			body: JSON.stringify({ email }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
        result = await result.json();
        console.log(result)
        if (result) {
            navigate('/login')
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
            <div className='flex w-screen h-screen overflow-y-hidden'>
                <div className=' w-1/5 h-full '>
                    <h1 className='absolute mt-44 ml-48 text-black'>Ministry Of Ayush</h1>
                    <img src={img} alt="" className='mt-72 ml-10 absolute h-1/2 ml-40 border-0 rounded-full' />
                      <div className='h-full w-6/6 w-screen bg-gradient-to-r from-green-500 ' />
                </div>
                <div className='flex  w-3/5 h-4/5 items-center justify-center border-solid border- border-blue-500 ml-52 mt-32 mr-40 relative'>
                    <form onSubmit={handleOnSubmit}>
                        <input type="text" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} className='bg-white border-2 border-green-700 text-lg px-12  py-3 my-2 rounded-lg w-full focus:outline-none' />
                        <br />
                        <input type="text" value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} className='bg-white border-2 border-green-700 text-lg px-12  py-3 my-2 rounded-lg w-full focus:outline-none' />
                        <br />
                        <input type="text" value={confirmpassword} placeholder='Confrim Password' onChange={e => setConfirmpassword(e.target.value)} className='bg-white border-2 border-green-700 text-lg px-12  py-3 my-2 rounded-lg w-full focus:outline-none' />
                        <br />
                        <select placeholder="Name" class="bg-white border-2 border-green-700 text-lg px-12  py-3 my-2 rounded-lg w-full focus:outline-none" onChange={e => setStream(e.target.value)} >
                            <option value="">Select Stream</option>
                            <option value="Ayurvedha">Ayurvedha</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Unani">Unani</option>
                            <option value="Siddha">Siddha</option>
                            <option value="Homeopathy">Homeopathy</option>
                            <option value="Administrator">Admininistrator</option>
                        </select>
                        <br />
                        <input type="text" value={domain} placeholder='Domain' onChange={e => setDomain(e.target.value)} className='bg-white border-2 border-green-700 text-lg px-12  py-3 my-2 rounded-lg w-full focus:outline-none' />
                        <br />
                        <button type="submit" value="login" className='bg-[#009c00] text-lg px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#009c0080]'  > Login </button >
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup