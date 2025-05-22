"use client"

import { motion } from "framer-motion"

export function WavesAnimation() {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden">
      <motion.div
        className="absolute w-[200%] h-24 bg-cyan-300 opacity-70"
        style={{
          borderRadius: "100% 100% 0 0",
          left: "-50%",
          top: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-[200%] h-20 bg-cyan-400 opacity-80"
        style={{
          borderRadius: "100% 100% 0 0",
          left: "-50%",
          top: 10,
        }}
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute w-[200%] h-16 bg-cyan-500 opacity-90"
        style={{
          borderRadius: "100% 100% 0 0",
          left: "-50%",
          top: 20,
        }}
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </div>
  )
}
