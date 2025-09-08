import React from 'react'
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className='w-full bg-black h-[500px] py-[80px] px-[160px]'>
        <div className=' flex justify-between'>
            <div className=' flex flex-col '>
                <p className=' text-white leading-[16px] text-[20px] font-[700]'>Cyber</p>
                <p className=' text-white leading-[18px] text-[12px] font-[500] mt-8 '> We are a residential interior design firm located in <br className=' mb-1' /> Portland. Our boutique-studio offers more than</p>
            </div>
            <div className=' flex flex-col min-w-sm'>
                <p className=' text-white leading-[16px] text-[20px] font-[700]'>services</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-8'>Bonus Program</p>
                <p className=' text-white leading-[16px] text-[12px] font-[400] mt-6'>Gift Cards</p>
                
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-6'>Credit and Payments</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-6'>Service Contracts</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-6'>Non-Cash Account</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-6'>Payment</p>
            </div>
            <div className=' flex flex-col '>
                <p className=' text-white leading-[16px] text-[20px] font-[700]'>Assistance to the buyer</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-8'>Find an order</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-6'>Terms of delivery</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-6'>Exchange and return of goods</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-6'>Guarantee</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-6'>Frequently asked questions</p>
                <p className=' text-white leading-[16px] text-[14px] font-[400] mt-6'>Terms of use of the site</p>
            </div>

        </div>
        <div className='flex gap-4 mt-8'>
            <Twitter className=' h-[16px] w-[16px] text-white'/>
            <Facebook className=' h-[16px] w-[16px] text-white'/>
            <Instagram className=' h-[16px] w-[16px] text-white'/>
            <Linkedin className=' h-[16px] w-[16px]  text-white' />
        </div>
    </div>
  )
}

export default Footer