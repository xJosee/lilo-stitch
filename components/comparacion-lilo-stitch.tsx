"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ComparacionLiloStitchProps {
  onSiguiente: () => void
  onAnterior: () => void
}

export function ComparacionLiloStitch({ onSiguiente, onAnterior }: ComparacionLiloStitchProps) {
  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
      <CardContent className="p-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Tú y Yo</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <Image
                  src="/you.avif"
                  alt="Lilo sonriendo"
                  width={120}
                  height={120}
                  className="rounded-full border-2 border-pink-300 shadow-md mb-2"
                />
              </motion.div>
              <p className="text-center text-blue-700 font-medium">Tú</p>
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Image
                  src="/me.avif"
                  alt="Stitch sonriendo"
                  width={120}
                  height={120}
                  className="rounded-full border-2 border-blue-300 shadow-md mb-2"
                />
              </motion.div>
              <p className="text-center text-blue-700 font-medium">Yo</p>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-blue-700">
              Como Lilo, tú me has enseñado a ver la belleza en lo imperfecto, a valorar cada momento y a sentirme parte
              de algo especial.
            </p>

            <p className="text-blue-700">
              Y como Stitch, quizás a veces soy un poco torpe o impredecible, pero mi corazón te pertenece por completo.
            </p>

            <p className="italic text-blue-600 font-medium">"Somos diferentes, pero encajamos perfectamente juntos."</p>
          </div>

          <div className="flex justify-between mt-6">
            <Button onClick={onAnterior} variant="outline" className="border-blue-300 text-blue-500 hover:bg-blue-50">
              <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
            <Button onClick={onSiguiente} className="bg-blue-500 hover:bg-blue-600 text-white">
              Siguiente <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
