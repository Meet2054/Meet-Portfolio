"use client"
import Image from 'next/image';
import React from 'react'


interface props{
    src: string;
    title: string
    description: string;
}

const ProjectCard = ({src, title , description}:props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
        <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
        />
        <div className="relative p-4">
            <h1 className="text-white text-semibold text-2xl">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
