import React from "react";
import { ChevronLeft, ChevronRight, Smartphone, Watch, Camera, Headphones, Monitor, Gamepad2 } from 'lucide-react';


const Category = () => {
  return (
    <div className=" w-full h-[352px] px-[160px] py-[50px]">
      <div className=" max-w-7xl mx-auto">
        <div className=" flex items-center justify-between mb-8">
        <p className=" font-[500] text-[24px] leading-[32px]">
            Browse By Category
        </p>
        <div className=" flex items-center gap-8 mb-6">
            <ChevronLeft className=" w-12 h-12 text-gray-600 "/>
         <ChevronRight className=" w-12 h-12 text-gray-600 "/>
        </div>
    

      </div>
        <div className="flex gap-18">
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg ">
            <Smartphone className="w-8 h-8 text-gray-700 mb-3 group-hover:text-gray-900 transition-colors" />
            <span className="text-[16px] font-[500] text-[#000000]  text-center ">
              Phones
            </span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg ">
            <Watch className="w-8 h-8 text-[#000000] mb-3 " />
            <span className="text-[16px] font-[500] text-[#000000] text-center ">
              Smart Watches
            </span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg ">
            <Camera className="w-8 h-8 text-[#000000] mb-3 " />
            <span className="text-[16px] font-[500] text-[#000000] text-center ">
              Cameras
            </span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg ">
            <Headphones className="w-8 h-8 text-[#000000] mb-3 group-hover:text-gray-900 transition-colors" />
            <span className="text-[16px] font-[500] text-[#000000] text-center ">
              Headphones
            </span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg ">
            <Monitor className="w-8 h-8 text-[#000000] mb-3 group-hover:text-gray-900 transition-colors" />
            <span className="text-[16px] font-[500] text-[#000000] text-center ">
              Computers
            </span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg ">
            <Gamepad2 className="w-8 h-8 text-[#000000] mb-3 group-hover:text-gray-900 transition-colors" />
            <span className="text-[16px] font-[500] text-[#000000] text-center ">
              Gaming
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Category;
