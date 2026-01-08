"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      // ✅ 1. Detect bottom of page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // ✅ 2. Normal section detection
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-3 w-full flex justify-center items-center z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item ${
            activeSection === "home" ? "bg-white text-gray-900" : ""
          }`}
        >
          Home
        </a>

        <a
          href="#projects"
          className={`nav-item ${
            activeSection === "projects" ? "bg-white text-gray-900" : ""
          }`}
        >
          Projects
        </a>

        <a
          href="#about"
          className={`nav-item ${
            activeSection === "about" ? "bg-white text-gray-900" : ""
          }`}
        >
          About
        </a>

        <a
          href="#contact"
          className={`nav-item ${
            activeSection === "contact" ? "bg-white text-gray-900" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
