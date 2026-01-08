"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const url = "https://www.linkedin.com/in/tanishq-kumar-894814211/";

  return (
    <div id="contact" className="py-16 pt-12 lg:pt-20 relative z-40">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative">

          <div
            className="absolute inset-0 opacity-5"
            style={{ 
              backgroundImage: `url(${GrainImage.src})`,
              zIndex: 0
            }}
          />

          <div className="flex flex-col md:flex-row gap-8 items-center md:gap-16 relative z-10">

            <div className="flex-1">
              <h2 className="font-serif text-2xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals
              </p>
            </div>

            <div className="relative z-50">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-900 inline-flex items-center rounded-xl px-6 h-12 gap-2 w-max border border-gray-900 hover:bg-gray-800 cursor-pointer relative z-50"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};