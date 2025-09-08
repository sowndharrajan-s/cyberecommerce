import React from "react";
import spiphone from "../assets/spiphone.png";
import { X } from "lucide-react";

const ShoppingCart = () => {
  return (
    <div className=" w-full h-[880px] py-[112px] px-[160px] flex">
      <div className=" h-[556px] w-[620px]  ">
        <h2 className=" font-[600] leading-[24px] text-[24px] text-black">
          Shopping Cart
        </h2>
        <div className="w-full h-[138px]">
          <div className=" flex flex-col">
            <div className=" flex  items-center gap-2 mt-10">
              <img src={spiphone} className=" w-[90px] h-[90px]" alt="" />
              <div className=" flex flex-col pl-3 ">
                <p className="text-[16px] leading-[24px] font-[500] text-[#000000] w-[200px] break-words">
                  Apple iPhone 14 Pro Max 128Gb Deep Purple
                </p>

                <p className=" text-[14px] leading-[24px] font-[400] text-[#1F1F1F] mt-1">
                  #25139526913984
                </p>
              </div>
              <div className=" flex items-center justify-center gap-4">
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] border border-gray-100  px-[12px] py-[6px]">
                  -
                </p>
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] border border-gray-100  px-[12px] py-[6px]">
                  1
                </p>
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] border border-gray-100  px-[12px] py-[6px]">
                  +
                </p>
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] ">
                  $1399
                </p>
                <X className=" w-[24px] h-[24px] text-gray-600" />
              </div>
            </div>
            <div className=" flex  items-center gap-2 mt-10">
              <img src={spiphone} className=" w-[90px] h-[90px]" alt="" />
              <div className=" flex flex-col pl-3 ">
                <p className="text-[16px] leading-[24px] font-[500] text-[#000000] w-[200px] break-words">
                  Apple iPhone 14 Pro Max 128Gb Deep Purple
                </p>

                <p className=" text-[14px] leading-[24px] font-[400] text-[#1F1F1F] mt-1">
                  #25139526913984
                </p>
              </div>
              <div className=" flex items-center justify-center gap-4">
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] border border-gray-100  px-[12px] py-[6px]">
                  -
                </p>
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] border border-gray-100  px-[12px] py-[6px]">
                  1
                </p>
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] border border-gray-100  px-[12px] py-[6px]">
                  +
                </p>
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] ">
                  $1399
                </p>
                <X className=" w-[24px] h-[24px] text-gray-600" />
              </div>
            </div>
            <div className=" flex  items-center gap-2 mt-10">
              <img src={spiphone} className=" w-[90px] h-[90px]" alt="" />
              <div className=" flex flex-col pl-3 ">
                <p className="text-[16px] leading-[24px] font-[500] text-[#000000] w-[200px] break-words">
                  Apple iPhone 14 Pro Max 128Gb Deep Purple
                </p>

                <p className=" text-[14px] leading-[24px] font-[400] text-[#1F1F1F] mt-1">
                  #25139526913984
                </p>
              </div>
              <div className=" flex items-center justify-center gap-4">
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] border border-gray-100  px-[12px] py-[6px]">
                  -
                </p>
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] border border-gray-100  px-[12px] py-[6px]">
                  1
                </p>
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] border border-gray-100  px-[12px] py-[6px]">
                  +
                </p>
                <p className=" text-[20px] leading-[32px] font-[500] text-[#1F1F1F] ">
                  $1399
                </p>
                <X className=" w-[24px] h-[24px] text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 shadow-md rounded-lg border border-gray-200">
        <div className=" w-[536px] h-[656px] mt-10 text-[20px] leading-[16px] font-[700] px-[60px] py-[4px] text-[#000000]">
          <p className=" ">Order Summary</p>
          <div className=" mt-10 ">
            <label className=" text-[#545454] text-[14px] leading-[16px] font-medium ">
              Discount code / Promo code
            </label>
            <input
              type="text"
              className=" w-full border border-gray-300 rounded-sm mt-4 p-4 outline-none placeholder-gray-400 "
              placeholder="code"
            />
          </div>
          <div className="mt-10">
    <label className="text-[#545454] text-[14px] leading-[16px] font-medium">Discount code / Promo code</label>
    <div className="relative mt-4">
        <input type="text" className="w-full border border-gray-300 rounded-sm p-4 pr-20 outline-none placeholder-gray-400" placeholder="code" />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 border border-black rounded-lg text-[12px]">Apply</button>
    </div>
</div>
          <div className=" flex justify-between">
            <p className=" text-[14px] leading-[24px] font-[600] mt-6 ">
              SubTotal
            </p>
            <p className=" text-[14px] leading-[24px] font-[600] mt-6 ">
              $2378
            </p>
          </div>
          <div className=" flex justify-between">
            <p className=" text-[14px] leading-[24px] font-[600] mt-6 text-gray-500">
              Estimated Tax
            </p>
            <p className=" text-[14px] leading-[24px] font-[600] mt-6 ">$50</p>
          </div>
          <div className=" flex justify-between">
            <p className=" text-[14px] leading-[24px] font-[600] mt-6 text-gray-500 ">
              Estimated shipping & Handling
            </p>
            <p className=" text-[14px] leading-[24px] font-[600] mt-6 ">$29</p>
          </div>
          <div className=" flex justify-between">
            <p className=" text-[14px] leading-[24px] font-[600] mt-6 ">
              Total
            </p>
            <p className=" text-[14px] leading-[24px] font-[600] mt-6 ">
              $2678
            </p>
          </div>
          <button className=" bg-black text-white w-full px-8 py-4 rounded-md mt-8 ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
