"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";

export function VisionMission() {
  const missions = [
    { text: "Create meaningful career opportunities", icon: <HiOutlineBriefcase /> },
    { text: "Strengthen institutions through research", icon: <HiOutlineAcademicCap /> },
    { text: "Promote skill development", icon: <HiOutlineChartBar /> },
    { text: "Support entrepreneurship", icon: <HiOutlineLightBulb /> },
    { text: "Encourage lifelong learning", icon: <HiOutlineGlobeAlt /> },
  ];

  return (
    <Section id="vision" className="bg-primary text-white overflow-hidden py-24">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Vision */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Large Quote Mark */}
          <div className="absolute -top-16 -left-8 text-9xl text-white/10 font-serif leading-none select-none">&quot;</div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-accent">Our Vision</h2>
          <p className="text-2xl md:text-3xl leading-relaxed font-light text-white/90 relative z-10 italic">
            &quot;To become a leading organization that bridges education, research, and industry.&quot;
          </p>
        </motion.div>

        {/* Right: Mission */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-heading font-bold mb-8 text-white">Our Mission</h2>
          
          <ul className="space-y-6">
            {missions.map((mission, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 border border-accent/20">
                  {mission.icon}
                </div>
                <div className="pt-2 text-lg text-white/80 font-medium">
                  {mission.text}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
      </div>
    </Section>
  );
}
