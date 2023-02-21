/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import InfolabzLogo from "../styles/images/infolabzLogo.jpg";
import BlatformLogo from "../styles/images/BlatformLogo1.png";
import ReactLogo from "../styles/images/reactLogo.png";
import JsLogo from "../styles/images/javascriptLogo.png";
import cssLogo from "../styles/images/cssLogo.png";
import HtmlLogo from "../styles/images/htmlLogo.png";
import Web3Logo from "../styles/images/metamaskLogo.png";
type Props = {};

export default function ExperienceCard({}: Props) {
  const [JobData, setJobData] = useState([
    {
      companyLogo: InfolabzLogo,
      jobTitle: "Web Developer Intern",
      comapanyName: "InfoLabz PVT LTD.",
      skills: {
        React: ReactLogo,
        Js: JsLogo,
        css: cssLogo,
        web3: HtmlLogo,
      },
      StartDate: "Jan,2022",
      EndDate: "April,2022",
      points: {
        firstLine: "Developed IoT based Healthcare System.",
        secondLine:
          "System is capable to monitor real time ECG,Oxygen Level,Pulse Rate,Temperature.",
        thirdLine: "Expolore ReactJs and Other Frontend Technologies.",
      },
    },
    {
      companyLogo: BlatformLogo,
      jobTitle: "Web Developer",
      comapanyName: "Blatform",
      skills: {
        React: ReactLogo,
        Js: JsLogo,
        css: cssLogo,
        web3: Web3Logo,
        html: HtmlLogo,
      },
      StartDate: "June,2022",
      EndDate: "Present",
      points: {
        firstLine:
          "Working As Web3 Developer,UI developer And Frontend Developer.",
        secondLine:
          "Currently Working on EMS as SaaS for Small to Medium size business.",
        thirdLine: "Expoloring Web3 Technologies!",
      },
    },
  ]);
  return (
    <>
      {JobData.length > 0 &&
        JobData.map((value) => {
          return (
            <>
              <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[310px] h-[550px] md:w-[600px] xl:w-[400px] xl:p-5 snap-center bg-[#292929] p-5 hover:scale-[1.03] scale-1 cursor-pointer transition-opacity duration-200 overflow-hidden ">
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
                  className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center mb-1"
                  // src="https://media-exp1.licdn.com/dms/image/C560BAQEhkV-V2pszjw/company-logo_200_200/0/1586117466115?e=1671667200&v=beta&t=vypOXyLUU0wxxOkqf7rqBiabwT5Tiuf0FpO71SfZbvk"
                  src={value.companyLogo.src}
                  alt="InfoLabz-Logo"
                />
                <div className="px-0 md:px-5">
                  <h4 className="text-2xl font-light text-center">
                    {value.jobTitle}
                  </h4>
                  <p className="font-bold text-2xl mt-1  text-center">
                    <span className="underline decoration-[#A85CF9]">
                      {value.comapanyName}
                    </span>
                  </p>
                  <div className="flex space-x-2 my-2 items-center justify-center">
                    <img
                      className="h-11 w-10 rounded-full"
                      src={value.skills.React.src}
                      alt="ReactJs-logo"
                    />
                    <img
                      className="h-9 w-11 mt-1"
                      src={value.skills.Js.src}
                      alt="Javascript-logo"
                    />

                    <img
                      className="h-10 w-11 mt-1"
                      src={value.skills.web3?.src}
                      alt="Web3-logo"
                    />
                    {/* <img
                      className="h-9 w-11 mt-1"
                      src={value?.skills?.web3?.src}
                      alt="Web3-logo"
                    /> */}
                    {/* <img
                      className="h-10 w-11 mt-1"
                      src={value.skills.css.src}
                      alt="CSS-logo"
                    />
                    <img
                      className="h-10 w-11 mt-1"
                      src={value.skills.html.src}
                      alt="HTML-logo"
                    /> */}
                  </div>
                  <p className="py-2 space-y-4 text-lg text-center upper">
                    {value.StartDate} - {value.EndDate}
                  </p>
                  <ul className="list-disc space-y-2 ml-5 text-sm text-left mt-5">
                    <li>{value.points.firstLine}</li>
                    <li>{value.points.secondLine}</li>
                    <li>{value.points.thirdLine}</li>
                  </ul>
                </div>
              </article>
            </>
          );
        })}
    </>
  );
}
