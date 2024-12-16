"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from 'next/link';
import DownloadButton from "@/components/Hero/Download"


import { Menu } from "lucide-react";
// import Button from "@mui/material/Button";
import purple from "@/public/assets/mancap.png";

import Framer from "./framer";
import AnimatedGreeting from "@/components/Hero/Animated";

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-gray-400">
      <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-orange-500 font-medium px-4 py-2 rounded-md bg-orange-500/10">
          ADAMU ABU
        </div>
        <nav className="hidden md:flex space-x-6">
        <Link href="#About" className="text-gray-400 hover:text-orange-500 transition-colors">
            About
        </Link>
        <Link href="#skills" className="text-gray-400 hover:text-orange-500 transition-colors">
            Skills
        </Link>
        <Link href="#projects" className="text-gray-400 hover:text-orange-500 transition-colors">
            Projects
        </Link>
        <Link href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
            Contact
        </Link>
        </nav>
        <div className="flex items-center gap-4">
        {/* <a href="/CV.pdf" download="CV.pdf">
          <button className="text-gray-400 w-full sm:w-[200px] h-[45px] sm:h-[50px] bg-white rounded-lg hover:bg-orange-500 hover:text-blue-500 px-4 sm:px-6">
          Download CV
          </button>
          </a> */}
             <div>
             {/* <h1>My CV</h1> */}
             <DownloadButton fileUrl="/assets/ADAMU_CV.pdf" fileName="CV.pdf" />
             </div>


          <button  className="text-gray-400 ">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-32">
        <div className="flex flex-col gap-20">
          {/* Title */}
          <div className="items-start">
            <div className="flex flex-row gap-8 lg:flex lg:flex-col lg:gap-10">
              <div>
                <AnimatedGreeting />
              </div>

              <div className="mt-14">
                <Framer />
              </div>
            </div>

            {/* Animated Image */}
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center space-x-2  lg:absolute lg:right-3 lg:top-2"
            >
              <motion.div variants={imageVariants}>
                <Image src={purple} alt="cap icon" width={500} height={32} />
              </motion.div>
            </motion.div>
          </div>

          {/* About */}
          <section id="About">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase mb-4">About</h2>
            <p className="text-lg">
              I am a developer based in Lagos, specializing in creating dynamic,
              responsive, and visually appealing websites. With expertise in
              <span className="text-orange-500"> React</span>,
              <span className="text-orange-500"> Next.js</span>,
              <span className="text-orange-500"> JavaScript</span>, and
              <span className="text-orange-500"> TypeScript</span>, I focus on
              delivering seamless functionality and engaging user experiences.
            </p>
          </div>
          </section>

          {/* Skills */}
          <section id="skills">
          <div className="mb-20">
            <h2 className="text-[8vw] md:text-[6vw] font-bold text-center text-gray-700 mb-20">
              SKILLS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                {
                  name: "HTML",
                  color: "bg-[#E44D26]/10",
                  textColor: "text-[#E44D26]",
                  icon: "/assets/html.svg",
                },
                {
                  name: "CSS",
                  color: "bg-[#1572B6]/10",
                  textColor: "text-[#1572B6]",
                  icon: "/assets/css-icon.svg",
                },
                {
                  name: "JavaScript",
                  color: "bg-[#F7DF1E]/10",
                  textColor: "text-[#F7DF1E]",
                  icon: "/assets/javascript.svg",
                },
                {
                  name: "React",
                  color: "bg-[#61DAFB]/10",
                  textColor: "text-[#61DAFB]",
                  icon: "/assets/react.svg",
                },
                {
                  name: "Tailwind CSS",
                  color: "bg-[#764ABC]/10",
                  textColor: "text-[#764ABC]",
                  icon: "/assets/tailwind.svg",
                },
                {
                  name: "Next.js",
                  color: "bg-[#339933]/10",
                  textColor: "text-[#339933]",
                  icon: "/assets/nextjs.svg",
                },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className={`${skill.color} rounded-lg p-8 flex flex-col items-center gap-4 transition-transform hover:scale-105`}
                >
                  <div className="w-16 h-16 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className={`${skill.textColor} font-medium`}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          </section>
        </div>
      </main>
    </div>
  );
}
