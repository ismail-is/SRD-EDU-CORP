"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "../ui/Section";
import { 
  FaUserGraduate, 
  FaClipboardList, 
  FaBrain, 
  FaHandsHelping, 
  FaLightbulb, 
  FaNetworkWired 
} from "react-icons/fa";

export function Mentorship() {
  const items = [
    { title: "Career Counselling", icon: <FaUserGraduate />, color: "bg-blue-100 text-blue-600" },
    { title: "Skill Assessment", icon: <FaClipboardList />, color: "bg-purple-100 text-purple-600" },
    { title: "Psychological Support", icon: <FaBrain />, color: "bg-green-100 text-green-600" },
    { title: "Mentorship Programs", icon: <FaHandsHelping />, color: "bg-orange-100 text-orange-600" },
    { title: "Startup Incubation", icon: <FaLightbulb />, color: "bg-yellow-100 text-yellow-600" },
    { title: "Industry Networking", icon: <FaNetworkWired />, color: "bg-pink-100 text-pink-600" },
  ];

  return (
    <Section id="mentorship" className="bg-white overflow-hidden">
      <SectionTitle 
        title="Mentorship, Counselling & Entrepreneurship" 
        subtitle="Guiding Your Journey"
      />

      <div className="relative max-w-4xl mx-auto py-10">
        {/* Animated Connection Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 hidden md:block" 
        />

        <div className="space-y-12 md:space-y-0">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative flex flex-col md:flex-row items-center md:h-32">
                
                {/* Left Side */}
                <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-6 rounded-srd shadow-lg border border-gray-100 flex items-center gap-4 w-full max-w-sm hover:-translate-y-1 transition-transform"
                  >
                    <div className={`w-12 h-12 rounded-srd flex items-center justify-center text-xl shrink-0 ${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-gray-900">{item.title}</h3>
                  </motion.div>
                </div>

                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-accent shadow-md z-10 hidden md:block"
                />

                {/* Right Side (Empty for staggering) */}
                <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : ''}`} />
                
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
