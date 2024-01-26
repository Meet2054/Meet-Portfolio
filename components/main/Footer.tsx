import React from 'react'
import { Socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-[65px] flex flex-row buttom-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
    
        <div className="w-full h-full m-auto px-[10px] flex flex-row gap-3">
        <h1 className='font-semibold text-[20px] text-white'>
                    Contact me
            </h1>
            <div className="flex flex-row gap-6">
                {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={44}
              height={44}
              />
              ))}
        </div>
        </div>
     </div>
  )
}

export default Footer
