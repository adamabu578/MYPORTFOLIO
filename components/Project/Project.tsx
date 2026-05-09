"use client"

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PortfolioCards() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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
    <section id='projects' className="bg-gradient-to-b from-slate-100 to-indigo-50/50 py-24 relative overflow-hidden z-0">
      <div className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-400/10 blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-400/10 blur-[120px] -z-10 pointer-events-none"></div>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
        className="container mx-auto px-4 md:px-8 lg:px-16 text-center mb-16"
      >
        <h3 className="text-indigo-600 font-bold text-lg mb-3 uppercase tracking-wider">Portfolio</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10">My Amazing Works</h2>
        
        {/* Mock Filter Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-500 font-medium text-sm md:text-base">
          <span className="text-indigo-600 cursor-pointer">All</span>
          <span className="hover:text-indigo-600 transition cursor-pointer">Next.js</span>
          <span className="hover:text-indigo-600 transition cursor-pointer">React</span>
          <span className="hover:text-indigo-600 transition cursor-pointer">Tailwind CSS</span>
        </div>
      </motion.div>

      <motion.div 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          {
            name: "SMATPAY WEB APP",
            icon: "/assets/smat-pay.png",
            description: "A fintech App which allow users to buy Data, airtime, TV subscription, pay bills online.",
            tools: "React.js, JavaScript, Tailwind CSS",
            link: "https://smatpay.vercel.app/"
          },
          {
            name: "APRILFULL",
            icon: "/assets/aprilfull.png",
            description: "Africa's Premier WEB3 entertainment event where innovation meets creativity",
            tools: "React.js, Tailwind CSS",
            link: "https://aprilfull.fun"
          },
          {
            name: "AI-POWERED BODY & GYM TRACKER",
            icon: "/assets/iron-track-v2.png",
            description: "Track your workouts, analyze your form, and optimize your gains using state-of-the-art artificial intelligence. The future of fitness is entirely data-driven.",
            tools: "Nextjs, JavaScript, Tailwind CSS",
            link: "https://iron-track-xeme.vercel.app/"
          },
          {
            name: "AUTOBID PLATFORM",
            icon: "/assets/autobid.png",
            description: "Automotive auction live bidding platform.",
            tools: "Next JS, Tailwind CSS",
            link: "https://autobid-platform.vercel.app"
          },
          {
            name: "LEOTEK SOLUTIONS",
            icon: "/assets/leotek.png",
            description: "CLOUDBASE CALL CENTER SOLUTIONS AND VALUE ADDED SERVICES",
            tools: "Next JS Tailwind CSS",
            link: "https://www.leoteksolutions.net.ng/"
          },
          {
            name: "HEXACORE",
            icon: "/assets/hexacore.png",
            description: "Streamlined Solutions for Modern Banking. Leverage smart technology to empower your workforce, enhance efficiency, and future-proof your banking operations.",
            tools: "Next JS, Tailwind CSS",
            link: "https://hexacore-website-qi51.vercel.app"
          }
        ].map((skill) => (
          <motion.div
            key={skill.name}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            tabIndex={0}
            className="group relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col overflow-hidden hover:shadow-[0_20px_40px_rgb(79,70,229,0.15)] hover:border-indigo-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/40 focus:border-indigo-300 focus:-translate-y-2 cursor-pointer transition-all duration-300"
          >
            {/* Cover Image */}
            <div className="w-full h-56 relative overflow-hidden bg-gray-100">
              <Image
                src={skill.icon}
                alt={skill.name}
                layout="fill"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            {/* Text Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h4 className="text-slate-900 font-bold text-xl mb-3">{skill.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{skill.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{skill.tools}</span>
                <a
                  href={skill.link}
                  className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition shadow-sm"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
