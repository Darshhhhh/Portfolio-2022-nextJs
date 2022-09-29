/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import ProfilePhoto from "../styles/images/heroimg.jpg";
import Image from "next/image";
import Link from "next/link";
import HeroProfilepic from "../styles/images/heroimg.jpg";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey,I'm Darsh!",
      "NoCoffeOnlyTea.jsx",
      "<React />",
      "<UserInterface />",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />

      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        // src="https://media-exp1.licdn.com/dms/image/C4D03AQGQd9uo2i9k2A/profile-displayphoto-shrink_200_200/0/1662266280220?e=1669248000&v=beta&t=P_C0ZB_6DwYER5HRggGqGxVkYGNCp2MHuqS55Nv98UM"
        src={HeroProfilepic}
        alt="Profile Photo"
        height={128}
        width={128}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Web Developer
        </h2>
        <h1>
          <span className="text-4xl lg:text-5xl font-semibold px-10">
            {text}
            <Cursor cursorColor="#F7AB0A" />
          </span>
        </h1>
        <div className="pt-10">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#workexperience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
