"use client";

import { motion, Variants } from "framer-motion";
import { Section, SectionTitle } from "../ui/Section";
import { Card } from "../ui/Card";
import { 
  HiOutlineUserGroup, 
  HiOutlineSearchCircle, 
  HiOutlineAcademicCap, 
  HiOutlineOfficeBuilding,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt
} from "react-icons/hi";

export function Services() {
  const services = [
    {
      title: "Recruitment & staffing solutions",
      description: "End-to-end recruitment services to connect top talent with industry-leading organizations effortlessly.",
      icon: <HiOutlineUserGroup size={28} />
    },
    {
      title: "Talent acquisition consultancy",
      description: "Strategic consulting to optimize your hiring processes and build high-performing teams.",
      icon: <HiOutlineSearchCircle size={28} />
    },
    {
      title: "Campus placement programs",
      description: "Comprehensive campus drives bridging the gap between fresh graduates and corporate needs.",
      icon: <HiOutlineAcademicCap size={28} />
    },
    {
      title: "Corporate placement services",
      description: "Tailored executive search and professional placement linking experienced leaders with opportunities.",
      icon: <HiOutlineOfficeBuilding size={28} />
    },
    {
      title: "Internship opportunities",
      description: "Curated internship programs to provide students with practical industry experience and exposure.",
      icon: <HiOutlineBriefcase size={28} />
    },
    {
      title: "Job portal connections",
      description: "Access to our exclusive network and cutting-edge job portals for diverse career options.",
      icon: <HiOutlineGlobeAlt size={28} />
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <Section id="services" className="bg-background relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-bl-[100px] -z-10" />
      
      <SectionTitle 
        title="Employment & Career Services" 
        subtitle="What We Offer"
        className="max-w-3xl mx-auto"
      />
      
      <div className="text-center max-w-2xl mx-auto mb-16 -mt-10 text-gray-600">
        SRD Edu Corp provides comprehensive employment and placement support for students, professionals, and institutions.
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full flex">
            <Card 
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="h-full w-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
