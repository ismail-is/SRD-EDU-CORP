"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "../ui/Section";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

export function Programs() {
  const programs = [
    {
      title: "Technical Workshops",
      description: "Hands-on sessions covering the latest technologies, frameworks, and industry-standard tools.",
      image: "/program-1.jpg",
    },
    {
      title: "Career Fairs",
      description: "Connect directly with top employers through our organized career and placement fairs.",
      image: "/program-3.jpg",
    },
    {
      title: "Skill Development Programs",
      description: "Enhance soft skills, leadership, and communication through interactive workshops and mentorship.",
      image: "/program-2.jpg",
    },
    {
      title: "Entrepreneurship Development",
      description: "Incubate ideas with expert guidance, funding avenues, and structured startup programs.",
      image: "/about-1.jpg",
    },
    {
      title: "Research Initiatives",
      description: "Collaborate on cutting-edge research projects with academic and corporate partners.",
      image: "/program-6.jpg",
    },
    {
      title: "Institutional Consulting",
      description: "Strategic advisory services for educational institutions to optimize operations and academic excellence.",
      image: "/program-5.jpg",
    },
    {
      title: "Industry Visits",
      description: "Gain practical exposure through organized visits to leading corporate and manufacturing facilities.",
      image: "/program-7.jpg",
    }
  ];

  return (
    <Section id="programs" className="bg-gray-50">
      <SectionTitle 
        title="Programs & Activities" 
        subtitle="Empowering Growth"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
        {programs.map((program, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-srd cursor-pointer shadow-sm hover:shadow-xl ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
          >
            <div className={`aspect-square w-full relative ${index === 0 ? 'md:aspect-auto md:h-full min-h-[400px]' : ''}`}>
              <Image 
                src={program.image} 
                alt={program.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 leading-tight">{program.title}</h3>
              <div className="inline-flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-medium">
                Learn More <HiArrowRight />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
