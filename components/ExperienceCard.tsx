/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media-exp1.licdn.com/dms/image/C560BAQEhkV-V2pszjw/company-logo_200_200/0/1586117466115?e=1671667200&v=beta&t=vypOXyLUU0wxxOkqf7rqBiabwT5Tiuf0FpO71SfZbvk"
        alt="InfoLabz"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-left">Web Developer Intern</h4>
        <p className="font-bold text-2xl mt-1 uppercase text-left">Infolabz</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-11 w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
            alt="HTMLlogo"
          />
          <img
            className="h-11 w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
            alt="HTMLlogo"
          />
          <img
            className="h-11 w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
            alt="HTMLlogo"
          />
          <img
            className="h-11 w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
            alt="HTMLlogo"
          />
        </div>
        <p className="uppercase py-5 space-y-4 text-lg text-left">
          Stared workin on-ended
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg text-left">
          <li>testadadadadad</li>
          <li>testadadadadad</li>
          <li>testadadadadad</li>
          <li>testadadadadad</li>
          <li>testadadadadad</li>
        </ul>
      </div>
    </article>
  );
}
