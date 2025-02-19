'use client'
import React, { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'

import { XIcon } from 'lucide-react'
// import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'

interface IMediaModal {
  imgSrc?: string
  imgAlt?: string
  videoSrc?: string
  className?: string
}
const transition = {
  type: 'spring',
  duration: 0.4,
}
export function MediaModal({
  imgSrc,
  videoSrc,
  className,
  imgAlt,
}: IMediaModal) {
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false)
  //   const isDesktop = useMediaQuery('(min-width:768px)')
  const uniqueId = useId()

  useEffect(() => {
    if (isMediaModalOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMediaModalOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMediaModalOpen])
  return (
    <>
      <MotionConfig transition={transition}>
        <>
          <motion.div
            className={cn(
              'w-full h-full flex relative  flex-col overflow-hidden border',
              className
            )}
            layoutId={`dialog-${uniqueId}`}
            style={{
              borderRadius: '12px',
            }}
            onClick={() => {
              setIsMediaModalOpen(true)
            }}
          >
            {imgSrc && (
              <motion.div
                layoutId={`dialog-img-${uniqueId}`}
                className="w-full h-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className=" w-full object-cover h-full"
                />
              </motion.div>
            )}
            {videoSrc && (
              <motion.div
                layoutId={`dialog-video-${uniqueId}`}
                className="w-full h-full"
              >
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full w-full object-cover  rounded-sm"
                >
                  <source src={videoSrc!} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </motion.div>
        </>
        <AnimatePresence initial={false} mode="sync">
          {isMediaModalOpen && (
            <>
              <motion.div
                key={`backdrop-${uniqueId}`}
                className="fixed inset-0 h-full w-full  bg-background/25 backdrop-blur-sm "
                variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => {
                  setIsMediaModalOpen(false)
                }}
              />
              <motion.div
                key="dialog"
                className="pointer-events-none fixed inset-0 flex items-center justify-center z-50"
              >
                <motion.div
                  className="pointer-events-auto relative flex flex-col overflow-hidden    bg-background  border w-[80%] h-[90%] "
                  layoutId={`dialog-${uniqueId}`}
                  tabIndex={-1}
                  style={{
                    borderRadius: '24px',
                  }}
                >
                  {imgSrc && (
                    <motion.div
                      layoutId={`dialog-img-${uniqueId}`}
                      className="w-full h-full"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  )}
                  {videoSrc && (
                    <motion.div
                      layoutId={`dialog-video-${uniqueId}`}
                      className="w-full h-full"
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        controls
                        className="h-full w-full object-cover  rounded-sm"
                      >
                        <source src={videoSrc!} type="video/mp4" />
                      </video>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setIsMediaModalOpen(false)}
                    className="absolute right-6 top-6 p-3 text-primary cursor-pointer  rounded-full  "
                    type="button"
                    aria-label="Close dialog"
                  >
                    <XIcon size={24} />
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  )
}
