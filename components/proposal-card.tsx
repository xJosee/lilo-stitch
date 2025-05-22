"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, PartyPopper, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function ProposalCard() {
  const [response, setResponse] = useState<"yes" | "no" | null>(null)
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
    <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl">
      <CardContent className="p-6">
        <div className="flex justify-center mb-4">
          <Image
            src="/stitch-heart.png"
            alt="Stitch with a heart"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-400"
          />
        </div>

        <h3 className="text-2xl font-bold text-center text-blue-800 mb-4">Will you be my date to see Lilo & Stitch?</h3>

        <p className="text-center text-blue-600 mb-6">
          Let's experience this adventure together, just like Lilo and Stitch!
        </p>

        <AnimatePresence>
          {response === null ? (
            <div className="flex justify-center gap-4 mt-6">
              <Button
                onClick={() => setResponse("yes")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-full"
              >
                Yes! <Heart className="ml-2 h-4 w-4" />
              </Button>

              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant="outline"
                  onMouseEnter={handleNoHover}
                  onClick={() => noCount >= 5 && setResponse("no")}
                  className="border-red-300 text-red-500 hover:bg-red-50 px-8 py-2 rounded-full"
                >
                  No <X className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          ) : response === "yes" ? (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="flex justify-center mb-4">
                <PartyPopper className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Yay! I'm so excited!</h3>
              <p className="text-blue-600">It's going to be an amazing date!</p>
              <div className="mt-4">
                <Button onClick={() => setResponse(null)} className="bg-blue-500 hover:bg-blue-600 text-white">
                  Reset
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Are you sure?</h3>
              <p className="text-blue-600 mb-4">Stitch is very disappointed...</p>
              <Image
                src="/stitch-floating.webp"
                alt="Sad Stitch"
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <Button onClick={() => setResponse(null)} className="bg-blue-500 hover:bg-blue-600 text-white">
                Let me reconsider
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
