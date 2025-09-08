import React from 'react'
import heroiphone from '../assets/heroiphone.png'

const Hero = () => {
  return (
    <div className='bg-[#211C24] h-[632px] w-screen flex items-center justify-between overflow-hidden'>
      <div className=' pl-45'>
        <p className=' text-[#757277] font-semibold text-[25px] mb-6'>Pro.Beyond</p>
        <p className=' text-white font-[100] leading-[72px] text-[96px] mb-8'>Iphone 14 <span className=' text-white font-[600] leading-[72px] text-[96px]'>Pro</span></p>
        <p className=' text-[#909090] font-[500] leading-[24px] text-[18px] mb-6'>Created to change everything for the better. For everyone</p>
        <button className=' border border-white rounded-md text-white text-[16px] leading-[24px] px-12 py-4 font-medium'>Shop Now</button>
      </div>
      <div className=' pr-45'>
        <img className=' w-[406px] h-[750px] mt-70 '  src={heroiphone} alt="" />
      </div>
        
    </div>
  )
}

export default Hero