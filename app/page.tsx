"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MensajeInicial } from "@/components/mensaje-inicial"
import { HistoriaConocerse } from "@/components/historia-conocerse"
import { MomentosEspeciales } from "@/components/momentos-especiales"
import { ComparacionLiloStitch } from "@/components/comparacion-lilo-stitch"
import { SignificadoOhana } from "@/components/significado-ohana"
import { PropuestaCita } from "@/components/propuesta-cita"
import { MensajeFelicitacion } from "@/components/mensaje-felicitacion"
import { FondoAnimado } from "@/components/fondo-animado"

export default function Home() {
  const [paso, setPaso] = useState(1)

  const avanzarPaso = () => {
    setPaso((pasoActual) => pasoActual + 1)
  }

  const retrocederPaso = () => {
    setPaso((pasoActual) => Math.max(1, pasoActual - 1))
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-400">
      <FondoAnimado />

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {paso === 1 && (
            <motion.div
              key="paso1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <MensajeInicial onSiguiente={avanzarPaso} />
            </motion.div>
          )}

          {paso === 2 && (
            <motion.div
              key="paso2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <HistoriaConocerse onSiguiente={avanzarPaso} onAnterior={retrocederPaso} />
            </motion.div>
          )}

          {paso === 3 && (
            <motion.div
              key="paso3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <MomentosEspeciales onSiguiente={avanzarPaso} onAnterior={retrocederPaso} />
            </motion.div>
          )}

          {paso === 4 && (
            <motion.div
              key="paso4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <ComparacionLiloStitch onSiguiente={avanzarPaso} onAnterior={retrocederPaso} />
            </motion.div>
          )}

          {paso === 5 && (
            <motion.div
              key="paso5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <SignificadoOhana onSiguiente={avanzarPaso} onAnterior={retrocederPaso} />
            </motion.div>
          )}

          {paso === 6 && (
            <motion.div
              key="paso6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <PropuestaCita onAceptar={avanzarPaso} onRechazar={() => setPaso(5)} onAnterior={retrocederPaso} />
            </motion.div>
          )}

          {paso === 7 && (
            <motion.div
              key="paso7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <MensajeFelicitacion onReiniciar={() => setPaso(1)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
