import React from 'react'
import HeroCarousel from './hero-carousel'
import SubNewsCarousel from '../sub-news/sub-news-carousel'
import NewsCarousel from '../news/news-carousel'

type Props = {}

function Hero({}: Props) {
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <HeroCarousel />
      <SubNewsCarousel />
      <NewsCarousel />
    </section>
  )
}

export default Hero
