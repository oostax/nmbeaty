"use client"

import * as React from "react"
import { motion } from "framer-motion"

type PageRevealProps = {
  children: React.ReactNode
  className?: string
}

export function PageReveal({ children, className }: PageRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

 
