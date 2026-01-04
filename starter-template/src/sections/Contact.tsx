"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const url = "https://www.linkedin.com/in/tanishq-kumar-894814211/";
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (err) {
      // fallback: set location
      window.location.href = url;
    }
  };
  return (
    <div className="py-16 pt-12 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden md:text-left isolate">
          
          {/* Grain background */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          />

          <div className="flex flex-col md:flex-row gap-8 items-center md:gap-16 relative z-10">
            <div>
              <h2 className="font-serif text-2xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals
              </p>
            </div>

            <div className="relative z-20">
              <a
                href={url}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-50 pointer-events-auto text-white bg-gray-900 inline-flex items-center rounded-xl px-6 h-12 gap-2 w-max border border-gray-900 hover:bg-gray-800 transition"
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
