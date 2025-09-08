import React from "react";
import { ChevronUp } from "lucide-react";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import iphone14 from "../assets/iphone14.png"

import watch from "../assets/watch.png"
import airpods from "../assets/airpods.png"
import camera from "../assets/camera.png"
import gwatch from "../assets/gwatch.png"
import gfold from "../assets/gfold.png"
import gbuds from "../assets/gbuds.png"
import ipad from "../assets/ipad.png"

const ProductPage = () => {
  return (
    <div className=" w-full h-[1560px] px-[160px] pt-[24px] flex pb-[16px]">
      <div className=" max-w-[256px] h-[760px] flex flex-col ">
        <div className=" flex justify-between">
          <h2 className=" font-medium text-[18px] leading-[24px]">Brand</h2>
          <ChevronUp className=" w-[26px] h-[26px]" />
        </div>
        <hr className=" text-gray-300 h-[2px] w-full  mt-2" />

        <div className="flex items-center bg-gray-100 rounded-sm px-4 py-2 mt-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            className="ml-2 w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
            placeholder="Search"
          />
        </div>
        <div className=" flex gap-2 mt-4">
          <input type="checkbox" className=" " />
          <label className=" leading-[24px] text-[15px] font-[500]">
            Apple
          </label>
          <p className=" leading-[24px] text-[15px] font-[400] text-[#929292]">
            110
          </p>
        </div>
        <div className=" flex gap-2 mt-1">
          <input type="checkbox" className=" " />
          <label className=" leading-[24px] text-[15px] font-[500]">
            Samsung
          </label>
          <p className=" leading-[24px] text-[15px] font-[400] text-[#929292]">
            69
          </p>
        </div>
        <div className=" flex gap-2 mt-1">
          <input type="checkbox" className=" " />
          <label className=" leading-[24px] text-[15px] font-[500]">
            Xiaomi
          </label>
          <p className=" leading-[24px] text-[15px] font-[400] text-[#929292]">
            25
          </p>
        </div>
        <div className=" flex gap-2 mt-1">
          <input type="checkbox" className=" " />
          <label className=" leading-[24px] text-[15px] font-[500]">Poco</label>
          <p className=" leading-[24px] text-[15px] font-[400] text-[#929292]">
            49
          </p>
        </div>
        <div className=" flex gap-2 mt-1">
          <input type="checkbox" className=" " />
          <label className=" leading-[24px] text-[15px] font-[500]">OPPO</label>
          <p className=" leading-[24px] text-[15px] font-[400] text-[#929292]">
            29
          </p>
        </div>
        <div className=" flex gap-2 mt-1">
          <input type="checkbox" className=" " />
          <label className=" leading-[24px] text-[15px] font-[500]">
            Honor
          </label>
          <p className=" leading-[24px] text-[15px] font-[400] text-[#929292]">
            76
          </p>
        </div>
        <div className=" flex gap-2 mt-1">
          <input type="checkbox" className=" " />
          <label className=" leading-[24px] text-[15px] font-[500]">
            Motorola
          </label>
          <p className=" leading-[24px] text-[15px] font-[400] text-[#929292]">
            68
          </p>
        </div>
        <div className=" flex gap-2 mt-1">
          <input type="checkbox" className=" " />
          <label className=" leading-[24px] text-[15px] font-[500]">
            Nokia
          </label>
          <p className=" leading-[24px] text-[15px] font-[400] text-[#929292]">
            125
          </p>
        </div>
        <div className=" flex gap-2 mt-1">
          <input type="checkbox" className=" " />
          <label className=" leading-[24px] text-[15px] font-[500]">
            Realme
          </label>
          <p className=" leading-[24px] text-[15px] font-[400] text-[#929292]">
            56
          </p>
        </div>
        <div className=" flex justify-between mt-6">
          <p className=" leading-[24px] text-[18px] font-[500]">
            Battery Capacity
          </p>
          <ChevronDown className=" w-[26px] h-[26px]" />
        </div>
        <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
        <div className=" flex justify-between mt-6">
          <p className=" leading-[24px] text-[18px] font-[500]">Screen Type</p>
          <ChevronDown className=" w-[26px] h-[26px]" />
        </div>
        <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
        <div className=" flex justify-between mt-6">
          <p className=" leading-[24px] text-[18px] font-[500]">
            Screen Diagonal
          </p>
          <ChevronDown className=" w-[26px] h-[26px]" />
        </div>
        <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
        <div className=" flex justify-between mt-6">
          <p className=" leading-[24px] text-[18px] font-[500]">
            Production class
          </p>
          <ChevronDown className=" w-[26px] h-[26px]" />
        </div>
        <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
        <div className=" flex justify-between mt-6">
          <p className=" leading-[24px] text-[18px] font-[500]">
            Build in Memory
          </p>
          <ChevronDown className=" w-[26px] h-[26px]" />
        </div>
        <hr className=" text-gray-300 h-[2px] w-full  mt-2" />
      </div>
      <div className=" flex-1 ml-4">
        <div className="flex justify-between items-center mb-6">
          <p className="text-[16px] font-medium">
            Selected Products: <span className="font-bold">85</span>
          </p>
          <p className="text-[16px] font-medium">By rating</p>
        </div>
        <div className=" grid grid-cols-3 gap-6">
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
            <img src={camera} className=" h-[160px] w-[160px] " alt="" />
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
            <img src={gwatch} className=" h-[160px] w-[160px] " alt="" />
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
            <img src={gfold} className=" h-[160px] w-[160px] " alt="" />
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
            <img src={gbuds} className=" h-[160px] w-[160px] " alt="" />
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
            <img src={ipad} className=" h-[160px] w-[160px] " alt="" />
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
        </div>
        
      </div>
    </div>
  );
};

export default ProductPage;
