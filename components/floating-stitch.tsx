"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FloatingStitch() {
  return (
    <div className="absolute -right-20 -top-20 md:-right-10 md:-top-10 z-10 pointer-events-none">
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/stitch-floating.webp"
          alt="Floating Stitch"
          width={200}
          height={200}
          className="drop-shadow-lg"
        />
      </motion.div>
    </div>
  )
}
