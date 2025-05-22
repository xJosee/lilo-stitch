"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MomentosEspecialesProps {
  onSiguiente: () => void
  onAnterior: () => void
}

export function MomentosEspeciales({ onSiguiente, onAnterior }: MomentosEspecialesProps) {
  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
      <CardContent className="p-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Nuestros Momentos</h2>

          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Image
                src="/moments.avif"
                alt="Lilo y Stitch bailando"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-blue-700">
              Como Lilo enseñó a Stitch a bailar y disfrutar de las pequeñas cosas, nosotros hemos creado momentos
              inolvidables juntos.
            </p>

            <p className="text-blue-700">
              Cada risa compartida, cada mirada cómplice, cada momento de silencio abrazados... todos son tesoros en
              nuestra historia.
            </p>

            <p className="italic text-blue-600 font-medium">
              "Recuerda quién eres y recuerda quién soy yo. Nadie nos va a separar."
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
