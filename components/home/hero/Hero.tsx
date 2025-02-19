import React from 'react'
import HeroCarousel from './hero-carousel'
import SubNewsCarousel from '../sub-news/sub-news-carousel'
import NewsCarousel from '../news/news-carousel'
import GalleryCarousel from '../gallery/gellery-carousel'
import MultimediaCarousel from '@/components/muli-media/multimedia-carousel'

type Props = {}

function Hero({}: Props) {
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <HeroCarousel />
      <SubNewsCarousel />
      <NewsCarousel />
      <GalleryCarousel />
      <MultimediaCarousel />
    </section>
  )
}

export default Hero
