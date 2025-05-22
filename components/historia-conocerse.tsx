"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface HistoriaConocerseProps {
  onSiguiente: () => void
  onAnterior: () => void
}

export function HistoriaConocerse({ onSiguiente, onAnterior }: HistoriaConocerseProps) {
  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
      <CardContent className="p-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Nuestro Comienzo</h2>

          <div className="flex justify-center mb-6">
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
                src="/stitch-star-gazing.png"
                alt="Stitch mirando las estrellas"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-blue-700">
              Como Stitch, que viajó a través del espacio para encontrar su hogar, el destino nos unió en el momento
              perfecto.
            </p>

            <p className="text-blue-700">
              Recuerdo la primera vez que te vi. Fue como si todas las estrellas del universo se alinearan para ese
              momento.
            </p>

            <p className="italic text-blue-600 font-medium">
              "A veces encontramos familia en los lugares más inesperados."
            </p>
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
