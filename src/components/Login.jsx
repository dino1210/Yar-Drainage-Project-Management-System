import React from 'react'
import bg from '../assets/bg.jpg'
import companyLogo from '../assets/companyLogo.png'

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
                <h2>LOGIN</h2>
                <label>Username</label>
                <input type='text' placeholder='Username' />
                <label>Password</label>
                <input type='password' placeholder='Username' />   
                <button>Login</button>
                <p>Need Help? <a href="www.google.com">Contact Administrator</a></p>         
            </form>
        </div>
    </div>
  )
}

export default Login