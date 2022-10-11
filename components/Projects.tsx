/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Healthyfy from "../styles/images/Mockup1.png";
import NetflixClone from "../styles/images/NetflixProjectImg.jpg";
import { useState } from "react";
type Props = {};

export default function Projects({}: Props) {
  const [projects, setProjects] = useState([
    {
      projectCover: Healthyfy,
      ProjectTitle: "Healthyfyyy IoT based System",
      ProjectDescription:
        "The IoT Based Health Care System is the affordable healthcare device for patients and doctors. It provides a solution for the measurement of body parameters like ECG, Temperature, Pulse rate, and Oxygen level.",
      ProjectLink: "https://github.com/Darshhhhh/Healthyfyy-IoT-based-system",
    },
    {
      projectCover: NetflixClone,
      ProjectTitle: "Netflix Clone",
      ProjectDescription:
        " Netflix 2.0 app that has a Log In and Log Out Authentication with Google.It has a beautiful Home Screen with all the movies looking just like Netflix.There is also a subscription page where you can see your active monthly subscription.",
      ProjectLink: "https://github.com/Darshhhhh/Netflix-clone-ReactJs",
    },
  ]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen overflow-hidden text-left md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#A85CF9]/80">
        {projects.map((project, i) => {
          return (
            <>
              <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                <motion.img
                  className="w-[300px]"
                  initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={project.projectCover.src}
                  alt="ProjectImg"
                />

                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-4xl font-semibold text-center">
                    <span className="underline decoration-[#000]/70">
                      Project {i + 1} of {projects.length}:
                    </span>
                    <br />
                    &nbsp;{project.ProjectTitle}
                  </h4>
                  <p className="text-sm text-center md:text-left">
                    {project.ProjectDescription}
                  </p>
                </div>
                <p>Swipe to see more projects...</p>
              </div>
            </>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#A85CF9]/30 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
