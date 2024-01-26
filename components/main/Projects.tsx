import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

      <div className="grid grid-cols-3 gap-10 mt-6 ">
        <ProjectCard
          src="/TravelCover.png"
          title="Travel Camp Website"
          description="A Web app to book your next travel destination. It provides you with the best travel experience."
            link='https://github.com/Meet2054/Travel-WebSite'
          />
        <ProjectCard
          src="/Convia.png"
          title="Desentelize chat Web-app Convia"
          description="Revolutionize communication with a decentralized chat web app empowered by AI. Experience secure, peer-to-peer conversations enriched by intelligent bots, ensuring privacy while delivering seamless, intelligent interactions. Join the next era of conversational technology, where innovation meets privacy and intelligence for a connected yet secure world."
          link='https://github.com/Meet2054/Travel-WebSite'

          />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Potfolio"
          description="My portfolio , you can know all about me here."
          link='https://github.com/Meet2054/Travel-WebSite'

          />
         
        <ProjectCard
          src="/Anime.png"
          title="Anime Poster Infinte Scroll"
          description="A web app to search for anime posters and get the details of the anime."
          link='travel-web-site-mu.vercel.app'

          />
      <ProjectCard
          src="/connect.png"
          title="GuardAnon"
          description="It is a decentralized app where you can share your problems anonymously and get help from the community."
          link='travel-web-site-mu.vercel.app'

        />
          
      </div>
          </div>
      
    </div>
  );
};

export default Projects;