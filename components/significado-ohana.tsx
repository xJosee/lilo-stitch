"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SignificadoOhanaProps {
  onSiguiente: () => void
  onAnterior: () => void
}

export function SignificadoOhana({ onSiguiente, onAnterior }: SignificadoOhanaProps) {
  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
      <CardContent className="p-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">El Significado de Ohana</h2>

          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Image
                src="/ohana.avif"
                alt="Familia Lilo y Stitch"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-blue-700 font-medium text-lg">
              "Ohana significa familia, y tu familia nunca te abandona ni te olvida."
            </p>

            <p className="text-blue-700">
              Esta es quizás la lección más importante de Lilo & Stitch, y es lo que siento por ti. Eres mi ohana, mi
              familia elegida.
            </p>

            <p className="text-blue-700">
              Contigo he aprendido que el amor verdadero es aceptación, apoyo incondicional y estar juntos en cada
              momento, bueno o malo.
            </p>

            <p className="italic text-blue-600 font-medium">"La familia es donde el corazón encuentra su hogar."</p>
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
