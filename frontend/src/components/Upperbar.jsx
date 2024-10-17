import React from 'react'

const Upperbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white z-0 flex justify-end items-center p-4">
      <div className="text-black hover:text-white">  
        <button className="hover:bg-gray-900 p-2 rounded-lg">Logout</button>
      </div>
    </div>
  )
}

export default Upperbar