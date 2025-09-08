import React from "react";
import playstation from "../assets/playstation.png";
import headphone from "../assets/headphone.png";
import applevision from "../assets/applevision.png";
import macbook from "../assets/macbook.png"

const SmallBanners = () => {
  return (
    
    <div className="flex w-full h-[700px]">
  <div className="w-1/2 h-[700px]">
    <div className="h-1/2 flex">
      
      <div className="w-1/2 pr-16 flex items-center justify-center">
        <img
          src={playstation}
          className="w-[360px] h-[343px] object-cover object-right"
          alt="PlayStation 5"
        />
      </div>
      
      <div className="w-1/2 flex items-center justify-center p-4">
        <div className="bg-white">
          <h2 className="text-2xl font-medium text-black mb-3 text-[49px] leading-[40px]">
            Playstation 5
          </h2>
          <p className="text-gray-400 text-sm font-medium mb-3 mt-4 leading-[24px] text-[14px]">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
            will redefine your PlayStation experience.
          </p>
        </div>
      </div>
    </div>
    
    <div className="flex h-[300px] bg-[#EDEDED]">
      <div className="w-1/2 relative">
        <div className="flex h-full bg-[#EDEDED]">
          <div className="w-[35%] flex items-center justify-center p-4">
            <img
              src={headphone}
              className="w-[360px] h-[300px]"
              alt="AirPods Max"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center p-6">
            <h3 className="text-[29px] font-[300] text-black mb-3 leading-[40px] ">
              Apple <br /> Airpods <br />
              <span className="font-medium leading-[40px] text-[29px]">Max</span>
            </h3>
            <p className="text-gray-500 text-[14px] leading-[24px]">
              Computational audio.
              <br />
              Listen, it's powerful
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 "></div>
      </div>
      
      <div className="w-1/2 bg-[#353535]">
        <div className="flex w-full mt-6">
          <div className="flex items-center justify-center p-4">
            <img
              src={applevision}
              className="w-[136px] h-[200px] rounded-lg rotate-y-180"
              alt="Apple Vision Pro"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center p-6">
            <h3 className="text-[29px] font-[300] text-white mb-3 leading-[40px]">
              Apple
              <br />
              Vision {" "}
              <span className="font-medium leading-[40px] text-[29px]">
                 Pro
              </span>
            </h3>
            <p className="text-[#909090] text-[14px] leading-[24px] font-[500]">
              An immersive way <br />
              experience
              <br />
              entertainment
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="w-1/2 h-[650px] bg-[#EDEDED] text-white flex items-center justify-between p-8">
    <div className=" pl-[40px]">
      <h2 className="text-[64px] font-[100] mb-4 leading-[29px] text-[#000000]">
        Macbook<br className=" mb-8" /><span className="text-[64px] font-[500] mb-4 leading-[29px] text-[#000000] ">Air</span> 
      </h2>
      <p className="text-[14px] font-[500] leading-[24px] mb-8 max-w-sm mt-10 text-[#909090]">
        The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
      </p>
      
      <button className=' border-2 border-black rounded-md text-black bg-white text-[16px] leading-[24px] px-12 py-4 font-medium'>Shop Now</button>
    </div>
    
    <div className="flex justify-end">
      <img 
        src= {macbook}
        alt="MacBook Air" 
        className="w-[682px] pl-28 h-[468px] object-cover"
      />
      
    </div>
  </div>
</div>
  );
};

export default SmallBanners;
