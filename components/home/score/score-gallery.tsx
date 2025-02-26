import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderCircleDotButton,
  SliderContainer,
} from '@/components/shared/carousel/carousel'
import { selectedNewses } from '../hero/hero-carousel'
import { Calendar } from 'lucide-react'
import ScoreCard from './score-card'

function ScoreCarousel() {
  const OPTIONS: EmblaOptionsType = {
    loop: false,
    direction: 'ltr',
    skipSnaps: true,
  }
  return (
    <>
      <section dir="ltr">
        <Carousel isAutoPlay={true} options={OPTIONS} activeSlider>
          <SliderContainer className="gap-4 !rounded-full">
            {selectedNewses.map((news) => (
              <Slider
                key={news.id}
                className="embla__slide !max-w-[90vw] w-3/8 px-1 pr-2 pt-1"
              >
                <ScoreCard
                  awayScore={2}
                  awayTeam={{
                    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
                    name: 'رئال مادرید',
                  }}
                  homeScore={1}
                  homeTeam={{
                    logo: '/sepahan-logo.png',
                    name: 'سپاهان',
                  }}
                  matchTime="نتیجه نهایی"
                  scorer="Foden"
                />

                {/* <div className="absolute h-1/5 bottom-0  bg-background/90 backdrop-blur-md flex justify-between items-center w-full rounded-b-md text-primary text-right px-3 "></div> */}

                {/* Added red background and rounded corners */}
              </Slider>
            ))}
          </SliderContainer>
          <div className="flex justify-center py-2">
            <SliderCircleDotButton className="" />
          </div>
        </Carousel>
      </section>
    </>
  )
}

export default ScoreCarousel
