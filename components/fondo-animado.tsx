"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function FondoAnimado() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = []

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Twinkle effect
        star.opacity += Math.random() * 0.01 - 0.005

        // Keep opacity in bounds
        if (star.opacity <= 0) star.opacity = 0
        if (star.opacity >= 1) star.opacity = 1

        // Move stars slightly
        star.y += star.speed

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" aria-hidden="true" />

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-cyan-400 opacity-30 z-0"
        style={{ borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="absolute top-10 right-10 opacity-20 z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="w-40 h-40 rounded-full border-4 border-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 opacity-20 z-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="w-20 h-20 rounded-full border-2 border-white" />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-[5%] opacity-30 z-0"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      >
        <Image src="/hawaiian-flower.png" alt="Flor hawaiana" width={80} height={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-[5%] opacity-30 z-0"
        animate={{ y: [0, -10, 0], rotate: [0, -5, 0, 5, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      >
        <Image
          src="/palm.png"
          alt="Palmera"
          width={60}
          height={60}
        />
      </motion.div>
    </>
  )
}
