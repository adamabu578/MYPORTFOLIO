"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import ResponsiveNavbar from "./ResponsiveNavbar";
import purple from "@/public/assets/mancap.png";

export default function Portfolio() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-slate-100 text-gray-800 font-sans min-h-screen relative z-0">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-400/10 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-purple-400/10 blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-cyan-400/10 blur-[100px]"></div>
      </div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <ResponsiveNavbar />
      </header>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between mb-24 mt-10 overflow-hidden">
          {/* Left Text */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="md:w-1/2 mt-16 md:mt-0 z-10"
          >
            <h3 className="text-indigo-600 font-bold text-xl mb-3 uppercase tracking-wide">Hi, I'm</h3>
            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-5 tracking-tight">
              Adamu Abu
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-500 mb-10 max-w-lg leading-relaxed text-lg">
              I am a developer based in Lagos, specializing in creating dynamic, responsive, and visually appealing websites. I focus on delivering seamless functionality and engaging user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="/assets/Frontend-developer.pdf" download="Frontend-developer.pdf" className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition shadow-lg shadow-indigo-600/30"
              >
                Download CV
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="#contact" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3.5 rounded-full font-bold hover:bg-indigo-50 transition"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 relative flex justify-center mt-8 md:mt-0"
          >
            {/* Background shapes */}
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-indigo-600 rounded-full z-0 shadow-2xl shadow-indigo-600/20"></motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-2/3 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-blue-100 rounded-full z-0 opacity-60 mix-blend-multiply"></div>
            {/* User Image */}
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }} className="relative z-10 w-64 h-64 md:w-96 md:h-96">
              <Image src={purple} alt="Adamu Abu" layout="fill" objectFit="contain" className="scale-125 translate-y-8 drop-shadow-2xl" />
            </motion.div>
          </motion.div>
        </section>

        {/* Floating Stats */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="container mx-auto px-4 -mt-16 mb-24 relative z-20"
        >
          <div className="bg-white rounded-full shadow-2xl shadow-gray-200/50 py-6 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 max-w-4xl mx-auto border border-gray-50">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shadow-inner">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">3 years job</h4>
                <p className="text-gray-500 font-medium">Experience</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200"></div>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shadow-inner">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">10+ Projects</h4>
                <p className="text-gray-500 font-medium">Completed</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200"></div>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shadow-inner">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">Online 24/7</h4>
                <p className="text-gray-500 font-medium">Support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services / Skills */}
        <section id="skills" className="container mx-auto px-4 md:px-8 lg:px-16 py-16 mb-20 overflow-hidden">
          <div className="w-full">
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {[
                { title: "Next.js", iconBg: "bg-black/5", iconText: "text-black", icon: "/assets/nextjs.svg", isImage: true },
                { title: "React.js", iconBg: "bg-blue-50", iconText: "text-blue-500", icon: "/assets/react.svg", isImage: true },
                { title: "JavaScript", iconBg: "bg-yellow-50", iconText: "text-yellow-500", icon: "/assets/javascript.svg", isImage: true },
                { title: "Tailwind CSS", iconBg: "bg-teal-50", iconText: "text-teal-500", icon: "/assets/tailwind.svg", isImage: true },
                { title: "Shadcn UI", iconBg: "bg-gray-100", iconText: "text-gray-800", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", isImage: false },
                { title: "Git Version Control", iconBg: "bg-indigo-50", iconText: "text-indigo-600", icon: "M8 5a2 2 0 100-4 2 2 0 000 4zM8 12a2 2 0 100-4 2 2 0 000 4zM16 19a2 2 0 100-4 2 2 0 000 4zM8 19a2 2 0 100-4 2 2 0 000 4z M8 5v7 M8 12v7 M8 12h4a4 4 0 014 4v3", isImage: false },
                { title: "UI/UX", iconBg: "bg-pink-50", iconText: "text-pink-500", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", isImage: false }
              ].map((skill, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp} 
                  tabIndex={0}
                  className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-indigo-500/20 hover:border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/40 focus:-translate-y-2 focus:shadow-indigo-500/20 cursor-pointer transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full ${skill.iconBg} ${skill.iconText} flex items-center justify-center mb-4`}>
                    {skill.isImage ? (
                      <Image src={skill.icon} alt={skill.title} width={32} height={32} className="object-contain" />
                    ) : (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={skill.icon}></path></svg>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{skill.title}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Bars */}
        <section className="bg-indigo-50/50 py-24 border-t border-white/50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-center mb-16"
            >
              <h3 className="text-indigo-600 font-bold text-lg mb-3 uppercase tracking-wider">Why Choose Me</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">My Experience Area</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              {[
                { name: "React / Next.js", percent: "95%" },
                { name: "JavaScript / TypeScript", percent: "90%" },
                { name: "Tailwind CSS", percent: "95%" },
                { name: "HTML / CSS", percent: "98%" },
                { name: "Web Design", percent: "85%" },
                { name: "Responsive UI", percent: "95%" },
              ].map((skill, i) => (
                <AnimatedProgress key={i} name={skill.name} percent={skill.percent} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AnimatedProgress({ name, percent, index }: { name: string, percent: string, index: number }) {
  const [count, setCount] = useState(0);
  const target = parseInt(percent);

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      onViewportEnter={() => {
        let start = 0;
        const duration = 1500;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);
      }}
    >
      <div className="flex justify-between mb-3">
        <span className="font-bold text-slate-900 text-lg">{name}</span>
        <span className="font-bold text-slate-900 text-lg">{count}%</span>
      </div>
      <div className="w-full bg-gray-200/80 rounded-full h-3 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }} 
          variants={{ visible: { width: percent, transition: { duration: 1.5, ease: "easeOut", delay: index * 0.1 } } }}
          className="bg-indigo-600 h-3 rounded-full relative"
        ></motion.div>
      </div>
    </motion.div>
  );
}
