import React from 'react';
import { FaTachometerAlt, FaBox, FaClipboardCheck, FaUserCog, FaCog } from 'react-icons/fa'; 

const Sidebar = () => {
  return (
    <div className='w-64 bg-gray-700 fixed h-full'>
      <div className='my-2 mb-4'>
        <h1 className='ml-6 text-2xl text-white font-bold'>Yar Drainage IMS</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='ml-4 mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='flex items-center p-2 text-white'>
            <FaTachometerAlt className='mr-2' />
            Dashboard
          </a>
        </li>
        <li className='ml-4 mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='flex items-center p-2 text-white'>
            <FaBox className='mr-2' /> 
            Inventory Management
          </a>
        </li>
        <li className='ml-4 mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='flex items-center p-2 text-white'>
            <FaClipboardCheck className='mr-2' /> 
            Check-In/Check-Out
          </a>
        </li>
        <li className='ml-4 mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='flex items-center p-2 text-white'>
            <FaUserCog className='mr-2' /> 
            User Management
          </a>
        </li>
        <li className='ml-4 mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='flex items-center p-2 text-white'>
            <FaCog className='mr-2' /> 
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
