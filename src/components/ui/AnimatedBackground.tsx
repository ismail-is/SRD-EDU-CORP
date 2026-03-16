"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none w-full h-full bg-white">
      {/* Education "Doodle" Pattern Overlay - A key element from the PDF */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply transition-opacity duration-1000 hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a2540' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Primary Navy Blue Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, 20, 40, 20, 0],
          scale: [1, 1.05, 1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 -left-1/4 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-primary/5 rounded-full filter blur-[60px] md:blur-[100px] opacity-80 will-change-transform"
      />
      
      {/* Rich Gold Accent Ambient Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, -30, -60, -30, 0],
          scale: [1, 0.9, 1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 -right-1/4 w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-accent/5 rounded-full filter blur-[70px] md:blur-[120px] opacity-70 will-change-transform"
      />
      
      {/* Floating Center Subtle Glow */}
      <motion.div
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-primary-light/5 rounded-full filter blur-[60px] md:blur-[100px] opacity-50 will-change-transform hidden md:block"
      />
    </div>
  );
}
