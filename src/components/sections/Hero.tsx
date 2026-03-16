"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-transparent">
      {/* Abstract floating shapes for explicit Hero focal points */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:2s]" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-light/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:4s]" />

      <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20"
            >
              Research • Education • Placement
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Empowering Talent.<br/>
              <span className="text-primary">Building Futures.</span><br/>
              <span className="text-accent">Connecting Opportunities.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              SRD Edu Corp is committed to empowering individuals and institutions through research, education, career development, and skill enhancement.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#services" 
                className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20 flex items-center gap-2 group"
              >
                Explore Services
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#contact" 
                className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 aspect-[4/3] bg-white">
              {/* Fallback pattern if image is missing, you can replace the src when ready */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Professional Students" 
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 lg:-right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                10k+
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Students</div>
                <div className="font-bold text-gray-900">Placed Successfully</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 lg:-left-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                50+
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Partners</div>
                <div className="font-bold text-gray-900">Global Reach</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
