import React from "react";
import pdiphone1 from "../assets/pdiphone1.png";
import pdiphone from "../assets/pdiphone.png";
import pdiphone2 from "../assets/pdiphone2.png";
import pdiphone3 from "../assets/pdiphone3.png";

const ProductView = () => {
  return (
    <div className=" w-full h-[896px] py-[110px] px-[160px] flex">
      <div className=" w-[536px] h-[516px] flex ">
        <div className=" pt-4 ">
          <img className=" h-[94px] w-[94px] mb-6" src={pdiphone} alt="" />
          <img className=" h-[94px] w-[94px] mb-6" src={pdiphone1} alt="" />
          <img className=" h-[94px] w-[94px] mb-6" src={pdiphone2} alt="" />
          <img className=" h-[94px] w-[94px] mb-6" src={pdiphone3} alt="" />
        </div>
        <div className=" w-[413px] h-[583px] pl-10">
          <img src={pdiphone} alt="" />
        </div>
      </div>
      <div className="flex-1">
        <div className=" flex flex-col ml-8">
          <p className=" text-black text-[40px] leading-[40px] font-[700]">
            Apple iPhone 14 Pro Max
          </p>
          <div className=" flex gap-4 ">
            <p className=" text-black text-[32px] leading-[48px] font-[500] tracking-widest mt-4">
              $1399
            </p>
            <p className=" text-gray-400 text-[32px] leading-[48px] font-[500] tracking-widest mt-4 line-through">
              $1499
            </p>
          </div>
          <div className=" max-w-md mt-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-black">
                Select color  :
              </span>
              <div className="flex gap-2 ">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
          <div className=" flex gap-6 mt-4">
            <button className=" px-10 py-2 border border-gray-300 rounded-md">128GB</button>
            <button className=" px-10 py-2 border border-gray-300 rounded-md">256TB</button>
            <button className=" px-10 py-2 border border-gray-300 rounded-md">512GB</button>
            <button className=" px-10 py-2 border border-gray-300 rounded-md">1TB</button>
          </div>
          <div className=" flex gap-4 mt-6">
            <button className=" px-12 py-2  bg-gray-100 rounded-md">ScreeSize <br /> <span>6.7 Size</span></button>
            <button className=" px-12 py-2  bg-gray-100 rounded-md">ScreeSize <br /> <span>6.7 Size</span></button>
            <button className=" px-12 py-2  bg-gray-100 rounded-md">ScreeSize <br /> <span>6.7 Size</span></button>
          </div>
          <div className=" flex gap-4 mt-6">
            <button className=" px-12 py-2  bg-gray-100 rounded-md">ScreeSize <br /> <span>6.7 Size</span></button>
            <button className=" px-12 py-2  bg-gray-100 rounded-md">ScreeSize <br /> <span>6.7 Size</span></button>
            <button className=" px-12 py-2  bg-gray-100 rounded-md">ScreeSize <br /> <span>6.7 Size</span></button>
          </div>
          <p className=" mt-4 text-gray-400 text-[14px]">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</p>
          <div className=" flex justify-between gap-6 w-full mt-4   ">
            <button className=' border border-black bg-white rounded-md text-black  text-[16px] leading-[20px] px-18 py-4 font-medium mt-6'>Add to Wishlist</button>
             <button className=' border border-black bg-black rounded-md text-white  text-[16px] leading-[20px] px-18 py-4 font-medium mt-6'>Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
