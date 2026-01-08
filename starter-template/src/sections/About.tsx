"use client"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/jssvg.svg";
import TypeScriptIcon from "@/assets/icons/tssvg.svg";
import TailwindIcon from "@/assets/icons/tailwind-css-svgrepo-com.svg";
import CppIcon from "@/assets/icons/cppsvg.svg";
import PythonIcon from "@/assets/icons/pythonsvg.svg";
import FigmaIcon from "@/assets/icons/figmasvg.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/jssvg.svg";
import NodejsIcon from "@/assets/icons/nodesvg.svg";
import GithubIcon from "@/assets/icons/github.svg";
import MongoDBIcon from "@/assets/icons/mongosvg.svg";
import { Techicon } from "@/components/Techicon";
import MapImage from "@/assets/images/mapimg.png";
import Smilememoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/Toolboxitems";
import { motion } from 'framer-motion';  

const hobbies = [
  {
    title: "Photography",
    emoji: "📸",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "60%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "30%",
    top: "40%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "65%",
  },
  {
    title: "Football",
    emoji: "⚽",
    left: "45%",
    top: "75%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "60%",
    top: "45%",
  },
];
const Toolboxitems = [
  {
    tittle: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    tittle: "HTML5",
    iconType: HtmlIcon,
  },
  {
    tittle: "CSS3",
    iconType: CssIcon,
  },
  {
    tittle: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    tittle: "React",
    iconType: ReactIcon,
  },
  {
    tittle: "Next.js",
    iconType: NextIcon,
  },
  {
    tittle: "Node.js",
    iconType: NodejsIcon,
  },
  {
    tittle: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    tittle: "GitHub",
    iconType: GithubIcon,
  },
  {
    tittle: "Figma",
    iconType: FigmaIcon,
  },
  {
    tittle: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    tittle: "C++",
    iconType: CppIcon,
  },
  {
    tittle: "Python",
    iconType: PythonIcon,
  },
];
export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am,What I do, and what drives me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                tittle="My Reads"
                description="Explore the books shaping my perspective"
                className="px-6 pt-6"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Cover" className="" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                tittle="My Toolbox"
                description="Explore the Technologies I Use to build websites"
                className=""
              />
              <ToolboxItems 
              toolboxitems={Toolboxitems} 
              className="" 
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                toolboxitems={Toolboxitems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                tittle="Beyond the Code"
                description="Explore my hobbies and interests beyond the code"
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                      touchAction: "none",
                    }}
                    drag
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span className="">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="Map Image"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/5 -translate-y-1/2
            bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full after:content-['']
            after:absolute after:inset-0 after:outline after-outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={Smilememoji}
                  alt="Smiley Emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
