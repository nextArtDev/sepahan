import React from 'react'
import HeroCarousel from './hero-carousel'

type Props = {}

function Hero({}: Props) {
  return (
    <section className="min-h-screen">
      <HeroCarousel />
    </section>
  )
}

export default Hero
