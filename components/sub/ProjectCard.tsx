
import Image from 'next/image';
import React from 'react'

interface Props {
  src: string;
  title: string;
  description: string;
  link: any; // Change the type from URL to string
}

const ProjectCard = ({src, title , description, link}:Props) => {
  return (
    
    <div className='relative overflow-hidden h-[585px] w-[500px] flex-wrap rounded-lg shadow-lg border border-[#25232a] ml-[40px] mr-[60px]'>
      <a key={title} href={link} >
        <Image
        src={src}
        alt={title}
        width={1000}
        height={1100}
        className='w-full object-contain'
        />
        <div className="relative p-4">
            <h1 className="text-white text-semibold text-2xl">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
            <br></br>
            {/* <h2 className='text-white text-semibold text-2xl'>Github - </h2> */}

        </div>
        </a>
    </div>
  )
}

export default ProjectCard
