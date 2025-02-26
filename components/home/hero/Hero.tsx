import React from 'react'
import HeroCarousel from './hero-carousel'
import SubNewsCarousel from '../sub-news/sub-news-carousel'
import NewsCarousel from '../news/news-carousel'
import GalleryCarousel from '../gallery/gellery-carousel'
import MultimediaCarousel from '@/components/muli-media/multimedia-carousel'
import TeamCarousel from '../team/team-carousel'
import ScoreCarousel from '../score/score-gallery'
import CupsCarousel from '../cups/cups-carousel'

type Props = {}

function Hero({}: Props) {
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <HeroCarousel />
      <SubNewsCarousel />
      <CupsCarousel />
      <NewsCarousel />
      <ScoreCarousel />
      <GalleryCarousel />
      <MultimediaCarousel />
      <TeamCarousel />
    </section>
  )
}

export default Hero
