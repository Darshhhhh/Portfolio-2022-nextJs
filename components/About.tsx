import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>
      <motion.img
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
        className="mb-5 mt-20 md:mb-0 flex-shrink-0 w-[190px] h-[200px] rounded-[999999px] object-cover md:rounded-lg md:w-64 md:h-94 xl:w-[500px] xl:h-[600px]"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGQd9uo2i9k2A/profile-displayphoto-shrink_200_200/0/1662266280220?e=1669248000&v=beta&t=P_C0ZB_6DwYER5HRggGqGxVkYGNCp2MHuqS55Nv98UM"
      />
      <div className="space-y-10 px-0 md:px-10 mt-[-10%]">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#A85CF9]/60">little</span>{" "}
          Background
        </h4>
        <p className="text-sm">
          My name is Darsh Shah🚀, and I work as a web developer, UI designer,
          and content creator.I'm currently 23 years old and work as a Web
          developer💻.currently I'm learning various tech stacks to improve my
          knowledge and skills over time. apart from my professional career I'm
          also a content creator on youtube where im making content based on
          video editing and photoshop.
        </p>
      </div>
    </motion.div>
  );
}
