import React from 'react'
import { MapPin } from 'lucide-react';
const Step2 = () => {
  return (
    <div className=' w-full h-[800px] px-[160px] py-[32px]'>
        <div className=' flex items-center justify-between w-full h-[184px]'>
            <div className=' flex gap-2'>
                <MapPin className=' w-[24px] h-[24px] mt-3'/>
            <p className="text-[16px] leading-[24px] font-[500] text-gray-400 w-[200px] break-words">
                  Step1 <br /> <span className=' text-[16px] leading-[24px] font-[500] text-gray-400'>Address</span>
                </p>
            </div>
            <div className=' flex gap-2'>
                <MapPin className=' w-[24px] h-[24px] mt-3'/>
            <p className="text-[16px] leading-[24px] font-[500] text-black w-[200px] break-words">
                  Step2 <br /> <span className=' text-[16px] leading-[24px] font-[500] text-black'>Shipping</span>
                </p>
            </div>
            <div className=' flex gap-2'>
                <MapPin className=' w-[24px] h-[24px] mt-3'/>
            <p className="text-[16px] leading-[24px] font-[500] text-gray-400 w-[200px] break-words">
                  Step3 <br /> <span className=' text-[16px] leading-[24px] font-[500] text-gray-400'>Payment</span>
                </p>
            </div>
        </div>
        <p className=' leading-[24px] text-[18px]  mt-2 font-[500] mb-5 '>Select Address</p>
        
        <div className=' flex justify-between w-full gap-4 bg-gray-100 rounded-lg px-4 py-4 mb-4'>
           <div className='flex gap-4 items-center'>
                <input type="radio" className=' w-4 h-4' name="shipping" />
                <p className='font-medium'>Free</p>
                <p>Regular shipment</p>
           </div>
           <p className='text-right'>17 Oct, 2023</p>
        </div>

        <div className=' flex justify-between w-full gap-4 bg-gray-100 rounded-lg px-4 py-4 mb-4'>
           <div className='flex gap-4 items-center'>
                <input type="radio" className=' w-4 h-4' name="shipping" />
                <p className='font-medium'>$3.50</p>
                <p>Get your delivery as soon as possible</p>
           </div>
           <p className='text-right'>1 Oct, 2023</p>
        </div>

        <div className=' flex justify-between w-full gap-4 bg-gray-100 rounded-lg px-4 py-4 mb-4'>
           <div className='flex gap-4 items-center'>
                <input type="radio" className=' w-4 h-4' name="shipping" />
                <p className='font-medium'>Schedule</p>
                <p>Pick a date when you want to get your delivery</p>
           </div>
           <p className='text-right text-gray-300'>Select Date ▼</p>
        </div>
        
        <div className=' flex justify-end gap-10 mt-15'>
            <button className=' border border-black bg-white rounded-md text-black  text-[16px] leading-[24px] px-8 py-2 font-medium mt-6'>Back</button>
             <button className=' border border-black bg-black rounded-md text-white  text-[16px] leading-[24px] px-8 py-2 font-medium mt-6'>Buy Now</button>
        </div>
       
    </div>
  )
}
export default Step2