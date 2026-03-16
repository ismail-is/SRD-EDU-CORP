"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { HiCheckCircle } from "react-icons/hi";

export function About() {
  const highlights = [
    "Empowering individuals and institutions",
    "Bridging the gap between education and employment",
    "Strategic industry collaborations",
    "Innovative research and skill enhancement"
  ];

  return (
    <Section id="about" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Images */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-square max-w-md mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="About SRD Edu Corp" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team Meeting" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Shaping the <span className="text-accent">Future Workforce</span>
            </h2>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            SRD Edu Corp is committed to empowering individuals and institutions through research, education, career development, and skill enhancement.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We work with students, professionals, institutions, and industries to bridge the gap between education and employment through innovative programs and strategic collaborations. Our mission is to build a strong ecosystem where talent, research, and industry needs come together.
          </p>

          <ul className="space-y-4 mb-10">
            {highlights.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 text-gray-700 font-medium"
              >
                <HiCheckCircle className="text-accent w-6 h-6 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
      </div>
    </Section>
  );
}
