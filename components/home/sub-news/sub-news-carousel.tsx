import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderCircleDotButton,
  SliderContainer,
} from '@/components/shared/carousel/carousel'
import { selectedNewses } from '../hero/hero-carousel'
import { Calendar, Dot } from 'lucide-react'

function SubNewsCarousel() {
  const OPTIONS: EmblaOptionsType = {
    loop: false,
    direction: 'rtl',
    skipSnaps: true,
  }
  return (
    <>
      <section>
        <Carousel isAutoPlay={true} options={OPTIONS} activeSlider>
          <SliderContainer className="gap-4 !rounded-full">
            {selectedNewses.map((news) => (
              <Slider
                key={news.id}
                className="embla__slide max-w-[80vw] w-3/8 px-1 pt-1"
              >
                {/* <div className="h-[10em] pl-2 bg-primary rounded-xl"></div>{' '} */}
                <article className="relative h-[8em] pl-2 bg-primary rounded-xl rounded-t-md ">
                  {/* <div className="max-w-md ml-auto pr-2"> */}

                  <div className="flex flex-col justify-start text-start gap-1.5 px-6 py-3 ">
                    <p className="text-sm line-clamp-2 pr-1 text-muted ">
                      {news.subtitle}
                    </p>

                    <span className="flex items-center justify-start ">
                      <Dot className="size-6 text-background" />
                      <p className="text-muted font-semibold line-clamp-2 text-xs">
                        {news.title}
                      </p>
                    </span>
                  </div>

                  <div className="absolute h-1/5 bottom-0  bg-background/90 backdrop-blur-md flex justify-between items-center w-full rounded-b-md text-primary text-right px-3 ">
                    <span></span>
                    <span className=" flex items-center justify-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <p className="text-xs">{news.date}</p>
                    </span>
                  </div>
                </article>
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

export default SubNewsCarousel
