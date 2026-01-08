import fruitAIImage from "@/assets/images/fruitAIImage.png";
import inOutImage from "@/assets/images/InOutImage.png";
import jiitCommuteImage from "@/assets/images/jcimage.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import grainimage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "JUNE",
    year: "2025",
    title: "JIITCommute – Campus Ride Sharing App",
    results: [
      {
        title:
          "Built a full-stack carpooling & commute management platform with JWT authentication",
      },
      {
        title:
          "Developed real-time chat rooms using Socket.IO for instant trip coordination",
      },
      { title: "Onboarded 300+ registered users with a mobile-first UI" },
    ],
    link: "https://github.com/TANISHQ-dev2430/JIITCommute.git", // replace with actual link
    image: jiitCommuteImage, // import this image
  },
  {
    company: "AUGUST",
    year: "2025",
    title: "InOut – QR Based Entry/Exit Management System",
    results: [
      {
        title:
          "Designed a QR-based digital gate entry/exit system replacing manual registers",
      },
      { title: "Reduced logging time by over 80% through automated scanning" },
      {
        title:
          "Implemented role-based dashboards for students, guards, and administrators",
      },
    ],
    link: "https://github.com/TANISHQ-dev2430/InOut.git", // replace with actual link
    image: inOutImage, // import this image
  },
  {
    company: "DECEMBER",
    year: "2025",
    title: "FruitAI – Fruit Ripeness & Disease Detection System",
    results: [
      {
        title:
          "Built an end-to-end fruit analysis system using MobileNetV2, YOLOv8, and CLIP",
      },
      {
        title:
          "Implemented ripeness estimation, disease detection, and shelf-life prediction",
      },
      {
        title:
          "Designed a WebApp dashboard with real-time webcam scanning and analytics",
      },
    ],
    link: "https://github.com/TANISHQ-dev2430/FruitAi.git", // replace with actual link
    image: fruitAIImage, // import this image
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent text-center bg-clip-text">
            Real-World Results
          </p>
        </div>
        <h2 className=" font-serif text-3xl text-center md:text-5xl mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg max-w-md mx-auto text-white/60 mt-4 lg:text-xl">
          See how I transformed concepts into engaging experiences
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project ,projectIndex) => (
            <Card
              key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style = {{
                  top:`calc(64px + ${projectIndex * 40}px)`
                }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5 md:pt-12 md:px-10"
                style={{ backgroundImage: `url(${grainimage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex gap-2  font-bold uppercase tracking-widest text-sm ">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-white/50 md:text-base">
                      <CheckIcon className="size-5 md:size-6" />
                      {result.title}
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    View Project
                    <ArrowUp className="size-4" />
                  </button>
                </a>
                </div>
              <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-20 rounded-xl md:-mb-20 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:-mb-10"
              />
              </div>
            </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
