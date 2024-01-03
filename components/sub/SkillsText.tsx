"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
const SkillsText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div 
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] items-center">
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                <h1 className="Welcome-text text-[13px] ">
                    Think Better with Next js 14
                </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium text-center mt-[10px] mb-[15px]'
        >
            Making Web-App with morden technology
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 my-[10px] text-center ">
            Never miss a task,  deadline or idea
        </motion.div>
    </div>
  )
}

export default SkillsText
