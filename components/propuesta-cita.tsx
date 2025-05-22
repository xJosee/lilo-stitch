"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, X, ChevronLeft } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface PropuestaCitaProps {
  onAceptar: () => void
  onRechazar: () => void
  onAnterior: () => void
}

export function PropuestaCita({ onAceptar, onRechazar, onAnterior }: PropuestaCitaProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [noCount, setNoCount] = useState(0)

  const handleNoHover = () => {
    if (noCount < 5) {
      // Move the button to a random position when hovered
      const x = Math.random() * 200 - 100
      const y = Math.random() * 100 - 50
      setNoButtonPosition({ x, y })
      setNoCount((prev) => prev + 1)
    }
  }

  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Image
                src="/stitch-flower.png"
                alt="Stitch con una flor"
                width={180}
                height={180}
                className="drop-shadow-lg"
              />
            </motion.div>
          </div>

          <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
            ¿Me acompañarías al estreno de Lilo & Stitch?
          </h2>

          <p className="text-center text-blue-600 mb-6">
            Después de todo lo que hemos compartido, me encantaría vivir esta experiencia contigo, como una verdadera
            ohana.
          </p>

          <p className="text-center text-blue-600 italic mb-6">
            "Algunas veces, las mejores aventuras comienzan con un simple 'sí'."
          </p>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex justify-center gap-4">
              <Button onClick={onAceptar} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-full">
                ¡Sí, acepto! <Heart className="ml-2 h-4 w-4" />
              </Button>

              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant="outline"
                  onMouseEnter={handleNoHover}
                  onClick={noCount >= 5 ? onRechazar : undefined}
                  className="border-red-300 text-red-500 hover:bg-red-50 px-8 py-2 rounded-full"
                >
                  No <X className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            <div className="flex justify-center mt-2">
              <Button
                onClick={onAnterior}
                variant="ghost"
                className="text-blue-500 hover:bg-blue-50 hover:text-blue-600"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
              </Button>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
