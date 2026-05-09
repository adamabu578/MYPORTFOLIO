"use client"

import { Github, Instagram, Youtube, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <section id='contact' className="bg-gradient-to-t from-indigo-100/40 to-indigo-50/50 py-24 relative overflow-hidden z-0 border-t border-white/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-purple-400/10 blur-[120px] -z-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl flex flex-col items-center">
        {/* Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-indigo-600 font-bold text-lg mb-3 uppercase tracking-wider">Contact</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Let's Work Together</h2>
        </motion.div>

        {/* Main Content */}
        <div className="w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Hire Me
                <br />
                For The Next Projects.
              </h1>
              <p className="text-gray-500 text-lg">Reach out and let's bring your ideas to life.</p>
            </div>

            <div className="flex gap-5">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md border border-gray-100 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md border border-gray-100 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md border border-gray-100 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md border border-gray-100 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>

            <div className="text-sm font-medium text-gray-400">
              © {new Date().getFullYear()} Adamu Abu. All rights reserved
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Me</h2>
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Full Name"
                  className="bg-slate-50 border-none shadow-none rounded-xl px-5 py-6 text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-indigo-600 transition"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-slate-50 border-none shadow-none rounded-xl px-5 py-6 text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-indigo-600 transition"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-slate-50 border-none shadow-none rounded-xl px-5 py-6 text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-indigo-600 transition"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message Here"
                  className="bg-slate-50 border-none shadow-none rounded-xl px-5 py-4 text-gray-700 placeholder:text-gray-400 min-h-[150px] resize-none focus-visible:ring-1 focus-visible:ring-indigo-600 transition"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-indigo-600/30 transition">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
