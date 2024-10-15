import React from 'react'
import bg from '../assets/bg.jpg'
import companyLogo from '../assets/companyLogo.png'
import { IoPerson } from "react-icons/io5";

const Login = () => {
  return (
    <div className='relative w-full h-screen'>
        <div className='absolute inset-0'>
             <img className='w-full h-full object-cover' src={bg} alt='Background' />
        </div>
    <div className='absolute inset-0 bg-slate-800/75'></div>
        <div className='relative flex items-center justify-center h-full'>
             <div className='hidden md:block text-center p-10'>
                <h1 className='text-[#17A2B8] font-bold text-5xl'>Yardrainage</h1>
                <h2 className='text-[#17A2B8] font-thin text-3xl'>Maintenance and Services</h2>
                <h2 className='text-white'>Inventory Management System</h2>
                {/*<img className='w-[150px] h-auto mx-auto mt-4' src={companyLogo} alt='Company Logo' />*/}
             </div>
            <form className='bg-white h-[400px] w-[300px] rounded-[30px] p-7'>
                <div className='flex flex-col items-center m-8'>
                <IoPerson className="text-[#17A2B8] h-10 w-auto"/>
                </div>
                <label className='text-sm'>Username:</label>
                <input className='border p-2 w-full' type='text' placeholder='Username' />
                <label className='text-sm'>Password:</label>
                <input className='border p-2 w-full mb-5' type='password' placeholder='Password' />   
                <button className='bg-[#17A2B8] text-white w-full rounded-lg py-1 mb-12' type='subm'>Login</button>
                <p className='text-sm'>Need Help? <a href="www.google.com">Contact Administrator</a></p>         
            </form>
        </div>
    </div>
  )
}

export default Login