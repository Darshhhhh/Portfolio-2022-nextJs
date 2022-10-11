/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from "../styles/images/aboutPic.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-400 text-2xl ">
        About
      </h3>
      <br />
      <br />
      <br />
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
      >
        <Image
          className="mb-0 mt-10 md:mb-0 flex-shrink-0 w-[190px] h-[200px] rounded-[999999px] object-cover md:rounded-lg md:w-64 md:h-94 xl:w-[500px] xl:h-[600px] "
          // src="https://media-exp1.licdn.com/dms/image/C4D03AQGQd9uo2i9k2A/profile-displayphoto-shrink_200_200/0/1662266280220?e=1669248000&v=beta&t=P_C0ZB_6DwYER5HRggGqGxVkYGNCp2MHuqS55Nv98UM"
          src={AboutImage}
          alt="AboutImage"
        />
      </motion.div>

      <div className="space-y-2 px-0 md:px-5 mt-[-45px] mb-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#A85CF9]/60">little</span>{" "}
          Background
        </h4>
        <p className="text-sm">
          My name is Darsh Shah🚀, and I work as a web developer and user
          interface designer. I am currently 23 years old. To gradually advance
          my knowledge and skills, I'm learning a variety of technological
          stacks. Besides my professional career, I am a content creator on
          YouTube, creating content based on video editing and Photoshop.
        </p>
      </div>
    </motion.div>
  );
}
