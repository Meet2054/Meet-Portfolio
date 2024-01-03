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
        <ProjectCard
          src="/TravelCover.png"
          title="Modern Next.js Travel Website"
          description="Embark on unforgettable adventures with our Travel Camp Website! Immerse yourself in nature's beauty, connect with fellow travelers, and discover hidden gems around the globe. Our platform offers seamless exploration, from curated camping spots to thrilling outdoor activities. Join us in creating lifelong memories under the stars, where every journey is an opportunity for awe-inspiring experiences"
        />
        <ProjectCard
          src="/Convia.png"
          title="Desentelize chat Web-app Convia"
          description="Revolutionize communication with a decentralized chat web app empowered by AI. Experience secure, peer-to-peer conversations enriched by intelligent bots, ensuring privacy while delivering seamless, intelligent interactions. Join the next era of conversational technology, where innovation meets privacy and intelligence for a connected yet secure world."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Potfolio"
          description="My portfolio , you can know all about me here."
        />
        <ProjectCard
          src="/Anime.png"
          title="Anime Poster Infinte Scroll"
          description="Embark on a captivating journey through the world of anime with our cutting-edge portfolio piece. Experience the allure of infinite scrolling fused seamlessly with AI technology on a Next.js 14 platform. Dive into the magic of Framer Motion animations and explore the mysteries of server-side actions. This immersive video demonstration will unveil the synergy of Next.js 14's capabilities, from infinite scrolling to AI integration, shaping the future of interactive experiences."
        />
      </div>
      {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Potfolio"
          description="My portfolio , you can know all about me here."
        />
      </div> */}
    </div>
  );
};

export default Projects;