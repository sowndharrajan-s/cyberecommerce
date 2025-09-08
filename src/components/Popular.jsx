import React from 'react'
import huwaiwatch from "../assets/huwaismart.png"
import huwai from "../assets/huwai.png"
import ipadpop from "../assets/ipadpop.png"
import macair from "../assets/macair.png"
import galaxy from "../assets/galaxyphone.png"


const Popular = () => {
  return (
    <div className=' w-full mt-10 flex'>
        <div className=' flex flex-col w-[400px] bg-white h-[640px] pl-6 '>
            <div className=' relative'>
                <img src={huwai} className=' w-[213px] h-[200px] rotate-[30deg] ' alt="" />
            <img src={huwaiwatch}  className=' w-[164px] h-[186px] rotate-[-120deg] absolute left-[120px]  top-[80px] ' alt="" />
            </div>
            <div className=' '>
                <p className=' text-[33px] font-[300] leading-[38px] mt-36 flex '>Popular Products</p>
            <p className='  mt-4 text-[16px] leading-[24px] text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className='  border-2 mt-4  border-black rounded-md text-black bg-white text-[16px] leading-[24px] px-12 py-4 font-medium mb-10'>Shop Now</button>
            </div>

        </div>
        <div className=' flex flex-col w-[360px]  h-[640px]  pl-6 shadow-xl'>
            <div className=' relative'>
                <img src={ipadpop} className=' w-[300px] h-[300px]  ' alt="" />
            
            </div>
            <div className=' '>
                <p className=' text-[33px] font-[300] leading-[38px] mt-10'>Popular Products</p>
            <p className='  mt-4 text-[16px] leading-[24px] text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className='  border-2 mt-4  border-black rounded-md text-black bg-white text-[16px] leading-[24px] px-12 py-4 font-medium mb-10'>Shop Now</button>
            </div>

        </div>
        
        <div className=' flex flex-col w-[360px]  h-[640px] pl-6 bg-[#EAEAEA] '>
            <div className=' relative'>
                <img src={galaxy} className=' w-[300px] h-[300px]  ' alt="" />
            
            </div>
            <div className=' '>
                <p className=' text-[33px] font-[300] leading-[38px] mt-10'>Popular Products</p>
            <p className='  mt-4 text-[16px] leading-[24px] text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className='  border-2 mt-4  border-black rounded-md text-black bg-white text-[16px] leading-[24px] px-12 py-4 font-medium mb-10'>Shop Now</button>
            </div>

        </div>
        <div className=' flex flex-col w-[360px]  h-[640px] pl-6 bg-[#2C2C2C] rounded-md '>
            <div className=' relative'>
                <img src={macair} className=' w-[300px] h-[300px]  ' alt="" />
           
            </div>
            <div className=' '>
                <p className=' text-[33px] font-[300] leading-[38px] text-white mt-10'>Popular Products</p>
            <p className='  mt-4 text-[16px] leading-[24px] text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className='  border-2 mt-4  border-white rounded-md text-white bg-[#2C2C2C]  text-[16px] leading-[24px] px-12 py-4 font-medium mb-10'>Shop Now</button>
            </div>

        </div>
    </div>
  )
}

export default Popular