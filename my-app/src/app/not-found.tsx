"use client";

import { motion } from "framer-motion";
import Example from "@/components/ui/banner-ui";
import { Component as AnimatedBackground } from "@/components/ui/open-ai-codex-animated-background";

export default function DemoOne() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Анимированный фон с плавным появлением */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <AnimatedBackground />
      </motion.div>
      
      {/* Баннер с анимацией появления */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <Example />
      </motion.div>
    </div>
  );
}
