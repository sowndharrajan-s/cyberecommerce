import React from "react";
import iphone14 from "../assets/iphone14.png"

import watch from "../assets/watch.png"
import airpods from "../assets/airpods.png"
import camera from "../assets/camera.png"
import gwatch from "../assets/gwatch.png"
import iphone1tb from "../assets/apple1tb.png"

const Discounts = () => {
  return (
    <div className=" w-full h-[656px] py-[50px] px-[160px]">
      <div className="  flex mb-8">
        <p className=" text-[18px] leading-[32px] font-[500] text-[#000000]">
          Discounts up to -50%
        </p>
      </div>
      <div className=" grid grid-cols-4 gap-6">
        <div className=" w-[268px] h-[432px] rounded-[9px] p-12 bg-[#f6f6f6]">
          <img src={iphone14} className=" h-[160px] w-[160px] " alt="" />
          <p className=" text-[14px] leading-[24px] font-[500] text-[#000000] text-center pt-4">
            Apple iPhone 14 Pro Max 128GB Deep Purple{" "}
          </p>
          <p className=" text-[24px] leading-[32px] font-[700] text-[#000000] text-center pt-4">
            $900{" "}
          </p>
          <button className=" border border-black bg-black rounded-md text-white w-full text-[16px] leading-[24px] px-8 py-2 font-medium mt-6">
            Buy Now
          </button>
        </div>
        <div className=" w-[268px] h-[432px] rounded-[9px] p-12 bg-[#f6f6f6]">
          <img src={airpods} className=" h-[160px] w-[160px] " alt="" />
          <p className=" text-[14px] leading-[24px] font-[500] text-[#000000] text-center pt-4">
            Apple iPhone 14 Pro Max 128GB Deep Purple{" "}
          </p>
          <p className=" text-[24px] leading-[32px] font-[700] text-[#000000] text-center pt-4">
            $900{" "}
          </p>
          <button className=" border border-black bg-black rounded-md text-white w-full text-[16px] leading-[24px] px-8 py-2 font-medium mt-6">
            Buy Now
          </button>
        </div>
        <div className=" w-[268px] h-[432px] rounded-[9px] p-12 bg-[#f6f6f6]">
          <img src={watch} className=" h-[160px] w-[160px] " alt="" />
          <p className=" text-[14px] leading-[24px] font-[500] text-[#000000] text-center pt-4">
            Apple iPhone 14 Pro Max 128GB Deep Purple{" "}
          </p>
          <p className=" text-[24px] leading-[32px] font-[700] text-[#000000] text-center pt-4">
            $900{" "}
          </p>
          <button className=" border border-black bg-black rounded-md text-white w-full text-[16px] leading-[24px] px-8 py-2 font-medium mt-6">
            Buy Now
          </button>
        </div>
        <div className=" w-[268px] h-[432px] rounded-[9px] p-12 bg-[#f6f6f6]">
          <img src={iphone1tb} className=" h-[160px] w-[160px] " alt="" />
          <p className=" text-[14px] leading-[24px] font-[500] text-[#000000] text-center pt-4">
            Apple iPhone 14 Pro Max 128GB Deep Purple{" "}
          </p>
          <p className=" text-[24px] leading-[32px] font-[700] text-[#000000] text-center pt-4">
            $900{" "}
          </p>
          <button className=" border border-black bg-black rounded-md text-white w-full text-[16px] leading-[24px] px-8 py-2 font-medium mt-6">
            Buy Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Discounts;
