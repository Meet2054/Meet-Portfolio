import { Frontend_skill , Backend_skill , Full_stack ,Other_skill, Skill_data} from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillsText from '../sub/SkillsText'

const Skills = () => {
  return (
    <section 
    id='skills'
    className='flex flex-col items-center gap-3 h-full relative py-20 overflow-hidden'
    style={{transform:"0.9"}}
    >
      <SkillsText/>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-7 items-center' >
        {Skill_data.map((image,index)=>(
          <SkillDataProvider 
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-7 items-center' >
        {Frontend_skill.map((image,index)=>(
          <SkillDataProvider 
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-7 items-center' >
        {Backend_skill.map((image,index)=>(
          <SkillDataProvider 
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-7 items-center' >
        {Full_stack.map((image,index)=>(
          <SkillDataProvider 
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-7 items-center' >
        {Other_skill.map((image,index)=>(
          <SkillDataProvider 
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full absolute z[-15] opacity-30 flex justify-center items-center bg-cover">
          <video
          className='w-full h-auto'
          preload="flase"
          playsInline
          muted
          loop
          autoPlay
          src="/cards-video.webm"
          />
        </div>
      </div>
      
      
    </section>
  )
}

export default Skills
