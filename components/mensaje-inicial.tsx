"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

interface MensajeInicialProps {
  onSiguiente: () => void
}

export function MensajeInicial({ onSiguiente }: MensajeInicialProps) {
  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
      <CardContent className="p-6 pt-6">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Image
              src="/lilo-and-stitch-together.png"
              alt="Lilo y Stitch"
              width={150}
              height={150}
              className="rounded-full border-4 border-blue-400"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute -top-2 -right-2"
            >
              <Image src="/red-heart.png" alt="Corazón" width={50} height={50} />
            </motion.div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-blue-800 mb-4">Mi amor</h1>

        <div className="space-y-4 text-center">
          <p className="text-blue-700">
            Quiero compartir contigo una historia especial, una aventura llena de amor, amistad y el verdadero
            significado de estar juntos.
          </p>

          <p className="text-blue-700">
            Como en toda buena historia, hay un comienzo, un desarrollo y un final feliz. Esta es nuestra historia,
            contada a través de Lilo & Stitch.
          </p>

          <p className="italic text-blue-600 font-medium">
            "A veces las cosas más pequeñas ocupan el mayor espacio en tu corazón."
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <Button onClick={onSiguiente} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-full">
            Comenzar nuestra historia
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
