import React from 'react'
const ProductViewDetails = () => {
  return (
    <div className='flex justify-center items-start  bg-gray-50 py-8'>
        <div className='flex flex-col w-[1120px] h-[984px] bg-white border-dashed border-blue-400 rounded-lg pt-[48px] pr-[40px] pb-[48px] pl-[40px] gap-[32px]'>
            <h2 className=' text-[20px] leading-[28px] mb-6 font-medium'>Details</h2>
            
            <div className='mb-6'>
                <p className='text-gray-600 text-[14px] leading-[24px]'>
                    Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because 
                    advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design 
                    solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the 
                    picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
                </p>
            </div>

            <div className='mb-6'>
                <h3 className='font-medium text-[20px] leading-[24px] mb-4'>Screen</h3>
                
                <div className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[16px] text-black'>Screen diagonal</span>
                        <span className='text-[16px] text-black'>6.7"</span>
                    </div>
                    <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
                    
                    <div className='flex justify-between items-center'>
                        <span className='text-[12px] text-black'>The screen resolution</span>
                        <span className='text-[12px] text-black'>2796×1290</span>
                    </div>
                    <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
                    
                    <div className='flex justify-between items-center'>
                        <span className='text-[12px] text-black'>The screen refresh rate</span>
                        <span className='text-[12px] text-black'>120 Hz</span>
                    </div>
                    <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
                    
                    <div className='flex justify-between items-center'>
                        <span className='text-[12px] text-black'>The pixel density</span>
                        <span className='text-[12px] text-black'>460 ppi</span>
                    </div>
                    <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
                    
                    <div className='flex justify-between items-center'>
                        <span className='text-[12px] text-black'>Screen type</span>
                        <span className='text-[12px] text-black'>OLED</span>
                    </div>
                    <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
                    
                    <div className='flex justify-between items-start'>
                        <span className='text-[12px] text-black'>Additionally</span>
                        <div className='text-right text-[12px] text-black'>
                            <div>Dynamic Island</div>
                            <div>Always-On display</div>
                            <div>HDR display</div>
                            <div>True Tone</div>
                            <div>Wide color (P3)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-6'>
                <h3 className='font-medium text-[16px] leading-[24px] mb-4'>CPU</h3>
                
                <div className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[12px] text-black'>CPU</span>
                        
                        <span className='text-[12px] text-black'>A16 Bionic</span>
                    </div>
                    <hr className=" text-gray-300 h-[2px] w-full  mt-2" />  
                    
                    <div className='flex justify-between items-center'>
                        <span className='text-[12px] text-black'>Number of cores</span>
                        <span className='text-[12px] text-black'>6</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <button className='border border-gray-400 rounded px-4 py-2 text-[14px] leading-[24px] flex items-center gap-2'>
                    View More 
                    
                </button>
            </div>
        </div>
    </div>
  )
}
export default ProductViewDetails