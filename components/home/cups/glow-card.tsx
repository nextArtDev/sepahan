'use client'
//https://motion-primitives.com/docs/glow-effect
import { motion } from 'motion/react'

import { ReactNode } from 'react'
import { GlowEffect } from './glowing-effect'
import { cn } from '@/lib/utils'

export default function GlowCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    // <div className="relative h-[200px] w-[300px]">
    <div className="relative h-full w-full py-2">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0"
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
      >
        <GlowEffect
          colors={['#1d1c0d', '#ddd459', '#242321', '#FF9004']}
          mode="colorShift"
          blur="medium"
          duration={4}
        />
      </motion.div>
      {children}
      {/* <div
        className={cn(
          'relative flex h-full flex-col items-end justify-end rounded-md border border-zinc-300/40 bg-zinc-100 px-4 py-3 dark:border-zinc-700/40 dark:bg-zinc-900',
          className
        )}
      >
 
      </div> */}
    </div>
  )
}
