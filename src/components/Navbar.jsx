import React from 'react'
import { Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { UserRound } from 'lucide-react';
const Navbar = () => {
  return (
    <>
        <div className=' flex items-center  py-7 font-medium'>
        <h1 className=' font-bold text-2xl pl-20'>Cyber</h1>
        <div className=' flex items-center bg-gray-100 rounded-sm px-4 py-2 ml-16 '>
            <Search className=' w-5 h-5 text-gray-300'/>
            <input type="text" className=' outline-none ml-1 rounded-md placeholder-gray-400' placeholder=' search'/>
        </div>
        <ul className=' flex items-center gap-8 text-sm text-gray-700 ml-15 '>
            <NavLink to={"/"} className=" flex flex-col items-center gap-1  ">
                <p className='text-gray-600 text-[16px]'>Home</p>
            </NavLink>
            <NavLink to={"/products"} className=" flex flex-col items-center gap-1 ">
                <p className='text-gray-600 text-[16px]'>Products</p>
            </NavLink>
            <NavLink to={"/productsDetails"} className=" flex flex-col items-center gap-1 ">
                <p className='text-gray-600 text-[16px]'>Products Details</p>
            </NavLink>
            <NavLink to={"/cart"} className=" flex flex-col items-center gap-2 ">
                <p className='text-gray-600 text-[16px]'>Cart</p>
            </NavLink>
            <NavLink  to={"/address"} className=" flex flex-col items-center gap-2 ">
                <p className='text-gray-600 text-[16px]'>Address</p>
            </NavLink>
            <NavLink to={"/shipping"} className=" flex flex-col items-center gap-2 ">
                <p className='text-gray-600 text-[16px]'>Shipping</p>
            </NavLink>
            <NavLink to={"/payment"} className=" flex flex-col items-center gap-2 ">
                <p className='text-gray-600 text-[16px]'>Payment</p>
            </NavLink>
            <div className=' ml-15 flex items-center gap-4 '>
                <Heart className=' flex flex-col items-center gap-1'/>
                <ShoppingCart className=' flex flex-col items-center gap-1'/>
                <UserRound className=' flex flex-col items-center gap-1'/>
            </div>

        </ul>
    
    </div>
        <hr className=' text-gray-200 h-[2px] w-full border-t-2  ' />  
    </>
    
  )
}

export default Navbar