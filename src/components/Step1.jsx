import React from 'react'
import { MapPin } from 'lucide-react';
const Step1 = () => {
  return (
    <div className=' w-full h-[800px] px-[160px] py-[32px]'>
        <div className=' flex items-center justify-between w-full h-[184px]'>
            <div className=' flex gap-2'>
                <MapPin className=' w-[24px] h-[24px] mt-3'/>
            <p className="text-[16px] leading-[24px] font-[500] text-[#000000] w-[200px] break-words">
                  Step1 <br /> <span className=' text-[16px] leading-[24px] font-[500] text-[#000000]'>Address</span>
                </p>
            </div>
            <div className=' flex gap-2'>
                <MapPin className=' w-[24px] h-[24px] mt-3'/>
            <p className="text-[16px] leading-[24px] font-[500] text-gray-400 w-[200px] break-words">
                  Step2 <br /> <span className=' text-[16px] leading-[24px] font-[500] text-gray-400'>Shipping</span>
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
        <div className=' flex flex-col w-full gap-4'>
           
            <div className=' w-full h-[150px] flex  bg-gray-100 gap-2 pl-2 rounded-lg'>
                <input type="radio" className=' h-[18px] mt-3 w-[18px] ' />
               
                <div className=' flex flex-col mt-2 gap-4'>
                    <p className=' text-[16px] leading-[24px] font-[600] text-[#000000] '>2118 Thornridge Cir</p>
                    <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                    <p>(936) 361-0310</p>
                </div>
            </div>
            <div className=' w-full h-[150px] flex  bg-gray-100 gap-2 pl-2 rounded-lg'>
                <input type="radio" className=' h-[18px] mt-3 w-[18px] ' />
               
                <div className=' flex flex-col mt-2 gap-4'>
                    <p className=' text-[16px] leading-[24px] font-[600] text-[#000000] '>Headoffice</p>
                    <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                    <p>(704) 555-0127</p>
                </div>
            </div>
           
        </div>
        <div className=' flex justify-end gap-10 mt-15'>
            <button className=' border border-black bg-white rounded-md text-black  text-[16px] leading-[24px] px-8 py-2 font-medium mt-6'>Back</button>
             <button className=' border border-black bg-black rounded-md text-white  text-[16px] leading-[24px] px-8 py-2 font-medium mt-6'>Buy Now</button>
        </div>
       
    </div>
  )
}
export default Step1