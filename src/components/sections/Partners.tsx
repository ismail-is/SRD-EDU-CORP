"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import Image from "next/image";

export function Partners() {
  return (
    <Section id="partners" className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
        <h2 className="sr-only">Organizations We Work With</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto rounded-srd overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
        >
          <Image 
            src="/partners.jpg" 
            alt="Organizations We Work With - Partner Logos" 
            width={1600}
            height={1000}
            quality={100}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </Section>
  );
}
