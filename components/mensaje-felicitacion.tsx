"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Confetti from "react-confetti"
import { useState, useEffect } from "react"

interface MensajeFelicitacionProps {
  onReiniciar: () => void
}

export function MensajeFelicitacion({ onReiniciar }: MensajeFelicitacionProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    // Set dimensions for confetti
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={500}
          colors={["#3B82F6", "#06B6D4", "#F472B6", "#FBBF24"]}
        />
      )}

      <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, 0, -10, 0] }}
                transition={{
                  scale: { duration: 0.5 },
                  rotate: { duration: 1, delay: 0.5 },
                }}
              >
                <Image
                  src="/lilo-and-stitch-celebration.png"
                  alt="Lilo y Stitch celebrando"
                  width={200}
                  height={200}
                  className="drop-shadow-lg"
                />
              </motion.div>
            </div>

            <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">¡Qué emoción!</h2>

            <p className="text-center text-blue-600 mb-2">
              Será una noche mágica que recordaremos para siempre, como parte de nuestra historia juntos.
            </p>

            <p className="text-center text-blue-600 mb-4">
              Gracias por ser mi compañera de aventuras, mi apoyo y mi amor.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
              <p className="text-center text-blue-700 italic font-medium">
                "Esta es mi familia. Encontré por mi cuenta, es pequeña y está rota, pero sigue siendo buena. Sí, sigue
                siendo buena."
              </p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </>
  )
}
