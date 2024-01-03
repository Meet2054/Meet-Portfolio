import React from 'react'
import { Socials } from "@/constants";
import Image from "next/image";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
  } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-full h-[65px]  buttom-0 shadow-lg flex flex-row juctify-between shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">

            <div className="flex flex-row gap-6">
                {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
        <div className='text-[20px] text-white flex flex-row justify-between'>
            <h1 className='font-semibold text-[20px] text-white'>
                    Contect me
            </h1>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlzkxCnNwTwPMNDnhZndpDChQDvDgkxSNgvmvLRdsZXHZgCCmMpwVvjhqWdTqfxKdbXkV'
            className=' cursor-pointer' >
            - meetaparekh2003gmail.com
            </a>
        </div>
        </div>
    </div>
  )
}

export default Footer
