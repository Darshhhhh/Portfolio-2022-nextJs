import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactLogo from "../styles/images/reactLogo.png";
import JsLogo from "../styles/images/javascriptLogo.png";
import cssLogo from "../styles/images/cssLogo.png";
import HtmlLogo from "../styles/images/htmlLogo.png";
import Web3Logo from "../styles/images/metamaskLogo.png";
import firebaseLogo from "../styles/images/firebaseLogo.png";
import GitHubLogo from "../styles/images/githubLogo.png";
import FigmaLogo from "../styles/images/figmaLogo.png";
import PsLogo from "../styles/images/photoshopLogo.png";
import AeLogo from "../styles/images/afterEffectsLogo.png";
type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  const [SkillData, setSKillData] = useState([
    {
      skillLogo: ReactLogo,
      SkillLevel: "75%",
    },
    {
      skillLogo: JsLogo,
      SkillLevel: "70%",
    },
    {
      skillLogo: FigmaLogo,
      SkillLevel: "90%",
    },
    {
      skillLogo: cssLogo,
      SkillLevel: "90%",
    },
    {
      skillLogo: HtmlLogo,
      SkillLevel: "100%",
    },
    {
      skillLogo: PsLogo,
      SkillLevel: "90%",
    },
    {
      skillLogo: Web3Logo,
      SkillLevel: "40%",
    },
    {
      skillLogo: firebaseLogo,
      SkillLevel: "70%",
    },
    {
      skillLogo: GitHubLogo,
      SkillLevel: "85%",
    },

    {
      skillLogo: AeLogo,
      SkillLevel: "90%",
    },
  ]);
  return (
    <>
      {SkillData.map((value) => {
        return (
          <>
            <div className="group relative flex cursor-pointer mx-4 my-1">
              <motion.img
                initial={{
                  x: directionLeft ? -100 : 100,
                  opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-lg  border-gray-500 object-cover w-14 h-14 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
                // src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png "
                src={value.skillLogo.src}
              />
              <div className=" rounded-lg absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 xl:w-32 xl:h-32 md:w-28 md:h-28 z-0">
                <div className="flex items-center justify-center h-full">
                  <p className="text-xl font-bold text-black opacity-100 xl:text-3xl">
                    {value.SkillLevel}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
