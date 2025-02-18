'use client'
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer  hover:opacity-[0.9] "
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className=" backdrop-blur-sm rounded-2xl overflow-hidden border border-foreground/[0.2]   shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
  className?: string
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn(
        'relative rounded-full sm:rounded-2xl border border-transparent  dark:border-primary/[0.2]  shadow-input flex justify-center space-x-4 px-8 py-1 sm:py-6 mx-1.5',
        className
      )}
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 ">{title}</h4>
        <p className=" text-sm max-w-[10rem]  ">{description}</p>
      </div>
    </Link>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="  ">
      {children}
    </Link>
  )
}
