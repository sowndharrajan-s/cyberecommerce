import React from 'react'
import summersale from "../assets/summersale.png"

const Summersale = () => {
  return (
    <div className="w-full h-[456px]">
      <div
        className="w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${summersale})` }}
      >
        <p className="text-white text-[72px] leading-[72px] font-[100]">
          Big Summer{" "}
          <span className="text-white text-[72px] leading-[72px] font-[300]">
            Sale
          </span>
        </p>

        <p className="text-white text-[16px] leading-[32px] font-[400] mb-10 max-w-[500px]">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>

        <button className="border border-white rounded-md text-white text-[16px] leading-[24px] px-12 py-4 font-medium">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Summersale
