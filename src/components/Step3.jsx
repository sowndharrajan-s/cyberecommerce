import React from "react";
import { MapPin } from "lucide-react";
import pdiphone from "../assets/pdiphone.png";
import atm from "../assets/atm.png"
const Step3 = () => {
  return (
    <div className=" w-full h-[1000px] px-[160px]  py-[32px]">
      <div className=" flex items-center justify-between w-full h-[184px]">
        <div className=" flex gap-2">
          <MapPin className=" w-[24px] h-[24px] mt-3" />
          <p className="text-[16px] leading-[24px] font-[500] text-gray-400 w-[200px] break-words">
            Step1 <br />{" "}
            <span className=" text-[16px] leading-[24px] font-[500] text-gray-400">
              Address
            </span>
          </p>
        </div>
        <div className=" flex gap-2">
          <MapPin className=" w-[24px] h-[24px] mt-3" />
          <p className="text-[16px] leading-[24px] font-[500] text-gray-400 w-[200px] break-words">
            Step2 <br />{" "}
            <span className=" text-[16px] leading-[24px] font-[500] text-gray-400">
              Shipping
            </span>
          </p>
        </div>
        <div className=" flex gap-2">
          <MapPin className=" w-[24px] h-[24px] mt-3" />
          <p className="text-[16px] leading-[24px] font-[500] text-black w-[200px] break-words">
            Step3 <br />{" "}
            <span className=" text-[16px] leading-[24px] font-[500] text-black">
              Payment
            </span>
          </p>
        </div>
      </div>
      <div className=" flex gap-8">
        <div className=" w-[512px] h-[704px] py-[32px] px-[24px]">
        <p className=" leading-[24px] text-[18px]  mt-2 font-[500] mb-5 ">
          Summary
        </p>
        <div className=" flex justify-between w-full gap-4 bg-gray-100 rounded-lg px-4 py-4 mb-4">
          <div className="flex gap-4 items-center justify-center">
            <img src={pdiphone} className=" w-[40px] h-[40px]" alt="" />
            <p className="font-medium">Apple IPhone 14 Pro Max 128 Gb</p>
          </div>
          <p className="text-right mt-2 font-bold ">$1399</p>
        </div>
        <div className=" flex justify-between w-full gap-4 bg-gray-100 rounded-lg px-4 py-4 mb-4">
          <div className="flex gap-4 items-center justify-center">
            <img src={pdiphone} className=" w-[40px] h-[40px]" alt="" />
            <p className="font-medium">Apple IPhone 14 Pro Max 128 Gb</p>
          </div>
          <p className="text-right mt-2 font-bold ">$1399</p>
        </div>
        <div className=" flex justify-between w-full gap-4 bg-gray-100 rounded-lg px-4 py-4 mb-4">
          <div className="flex gap-4 items-center justify-center">
            <img src={pdiphone} className=" w-[40px] h-[40px]" alt="" />
            <p className="font-medium">Apple IPhone 14 Pro Max 128 Gb</p>
          </div>
          <p className="text-right mt-2 font-bold ">$1399</p>
        </div>
        <div className="flex flex-col w-full mt-8  ">
            <p className=" text-medium text-[14px] leading-[16px] mt-3">address</p>
            <p className=" text-medium text-[16px] leading-[24px] mt-2">1131 Dusty Townline, Jacksonville, TX 40322</p>
            <p className=" text-medium text-[14px] leading-[16px] mt-6">Shipment method</p>
            <p className=" text-medium text-[16px] leading-[24px] mt-2">Free</p>
        </div>
        <div className=" flex justify-between mt-6">
            <p>SubTotal</p>
            <p>$1399</p>
        </div>
        <div className=" flex justify-between mt-4">
            <p>SubTotal</p>
            <p>$1399</p>
        </div>
        <div className=" flex justify-between mt-4">
            <p>SubTotal</p>
            <p>$1399</p>
        </div>
        <div className=" flex justify-between mt-4 ">
            <p>SubTotal</p>
            <p className=" font-semibold">$1399</p>
        </div>
      </div>
      <div className=" flex-1 h-[704px] py-[32px] px-[24px] mt-2">
          <div className=" flex flex-col ">
              <p className=" leading-[24px] text-[18px]  mt-2 font-[500] mb-5">Payment</p>
              <div className=" flex gap-12">
                  <p  className=" text-[14px] leading-[16px] font-medium">Credit Card <span className=""></span></p>
                  <p className=" text-[14px] leading-[16px] font-medium text-gray-600">paypal</p>
                  <p className=" text-[14px] leading-[16px] font-medium text-gray-600">Paypal Credit</p>
              </div>
              <img src={atm} className=" w-[337px] h-[190px] mt-8" alt="" />
              <input type="text" placeholder="Card holder Name" className=" outline-none mt-12 border border-gray-300 bg-gray-100 py-2 px-4 rounded-md" />
              <input type="text" placeholder="Card Number " className=" outline-none mt-4 border border-gray-300 bg-gray-100 py-2 px-4 rounded-md" />
              <div className=" flex w-1/2 gap-6 ">
                <input type="text" placeholder="EXp.date" className=" outline-none mt-4 border border-gray-300 bg-gray-100 py-2 px-4 rounded-md" />
                <input type="text" placeholder="CVV" className=" outline-none mt-4 border border-gray-300 bg-gray-100 py-2 px-4 rounded-md" />
              </div>
              <div className=" gap-3 flex mt-8">
                <input type="checkbox" className="" />
                <label className=" text-[14px] leading-[16px] font-medium">Same as billing address</label>
              </div>
              
              <div className=" flex justify-between gap-6 w-full mt-4   ">
            <button className=' border border-black bg-white rounded-md text-black  text-[16px] leading-[20px] px-18 py-4 font-medium mt-6'>Back</button>
             <button className=' border border-black bg-black rounded-md text-white  text-[16px] leading-[20px] px-18 py-4 font-medium mt-6'>Pay</button>
          </div>
          </div>
      </div>
      </div>
      
    </div>
  );
};

export default Step3;
