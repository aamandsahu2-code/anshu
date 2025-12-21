"use client"

import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react"

export default function PhotosScreen({ onNext }) {
  return (
    <div className="py-10 md:py-14 text-center">
      <div className="flex flex-col items-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow mb-8 leading-tight"
        >
          Memories ✨
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full px-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-48 md:h-64 photo-placeholder flex items-center justify-center rounded-2xl border-4 border-white/20 group-hover:border-white/40 transition-all duration-300 bg-gradient-to-br from-pink-400/30 to-purple-400/30">
                <span className="text-2xl font-bold text-white/80">Photo {i}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <GradientButton onClick={() => onNext?.()} className="mt-8">
          Special Message 💌
          <ArrowRight size={20} className="mt-0.5" />
        </GradientButton>
      </div>
    </div>
  )
}
