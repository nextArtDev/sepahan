import React from 'react'
import HeroCarousel from './hero-carousel'
import SubNewsCarousel from '../sub-news/sub-news-carousel'

type Props = {}

function Hero({}: Props) {
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <HeroCarousel />
      <SubNewsCarousel />
    </section>
  )
}

export default Hero
