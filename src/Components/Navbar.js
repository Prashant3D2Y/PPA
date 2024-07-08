import React from 'react'

const Navbar = () => {
  return (
    <div className='container p-4 flex justify-between items-center mt-4'>
        <div className=''>
            <div>logo</div>
        </div>
        <div className='flex justify-center items-center'>
             <div className='flex mr-4'>Home</div>
             <div className='mr-4'>Services</div>
             <div className='mr-4'>features</div>
             <div className='mr-4'>Products</div>
             <div className='mr-4'>Testimonial</div>
             <div className=''>FAQ</div>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex mr-5 text-green-600'>Login</div>
            <div className=' flex rounded mr-6 bg-green-600 w-[90px] h-[40px] justify-center items-center text-white'>SignUp</div>
        </div>
    </div>
  )
}

export default Navbar