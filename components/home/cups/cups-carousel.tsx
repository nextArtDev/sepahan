import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderCircleDotButton,
  SliderContainer,
} from '@/components/shared/carousel/carousel'
import { selectedNewses } from '../hero/hero-carousel'
import { Calendar, Dot } from 'lucide-react'
import GlowCard from './glow-card'

function CupsCarousel() {
  const OPTIONS: EmblaOptionsType = {
    loop: false,
    direction: 'rtl',
    skipSnaps: true,
  }
  return (
    <>
      <section className="my-20">
        <Carousel isAutoPlay={true} options={OPTIONS} activeSlider>
          <SliderContainer className="gap-4 !rounded-full">
            {selectedNewses.map((news) => (
              <Slider
                key={news.id}
                className="embla__slide max-w-[80vw] w-3/8 px-1 pt-1"
              >
                {/* <div className="h-[10em] pl-2 bg-primary rounded-xl"></div>{' '} */}
                <GlowCard>
                  <article className="relative h-[8em] pl-2 bg-background rounded-xl rounded-t-md ">
                    {/* <div className="max-w-md ml-auto pr-2"> */}

                    <div className="flex flex-col justify-start text-start gap-1.5 px-6 py-3 ">
                      <p className="text-sm line-clamp-2 pr-1 text-primary ">
                        {news.subtitle}
                      </p>

                      <span className="flex items-center justify-start ">
                        <Dot className="size-6 text-primary" />
                        <p className="text-primary font-semibold line-clamp-2 text-xs">
                          {news.title}
                        </p>
                      </span>
                    </div>
                  </article>
                </GlowCard>
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

export default CupsCarousel
