import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderCircleDotButton,
  SliderContainer,
} from '@/components/shared/carousel/carousel'
import { selectedNewses } from '../hero/hero-carousel'
import { Calendar, Dot } from 'lucide-react'
import Image from 'next/image'
import NewsSvg from './news-svg'

function NewsCarousel() {
  const OPTIONS: EmblaOptionsType = {
    loop: false,
    direction: 'rtl',
    skipSnaps: true,
  }
  return (
    <>
      <section className="w-[96%] mx-auto px-2 rounded-xl h-96 my-auto bg-primary">
        <span className="py-4 pr-2 flex items-center justify-start gap-2">
          <NewsSvg />
          <h2 className="font-bold text-background">اخبار سپاهان</h2>
        </span>
        <Carousel
          className="h-full "
          //   isAutoPlay={true}
          options={OPTIONS}
          activeSlider
        >
          <SliderContainer className="gap-2  rounded-md">
            {selectedNewses.map((news) => (
              <Slider
                key={news.id}
                className="rounded-xl embla__slide w-3/4 px-1 pt-1 overflow-hidden bg-background mb-4"
              >
                {/* <div className="h-[10em] pl-2 bg-primary rounded-xl"></div>{' '} */}
                <article className="relative h-[20em] pl-2 bg-primary rounded-xl rounded-t-md overflow-hidden">
                  {/* <div className="max-w-md ml-auto pr-2"> */}
                  <Image
                    fill
                    src={news.imageSrc}
                    alt={news.title}
                    className="object-cover"
                  />

                  <div className="absolute h-1/5 bottom-0  bg-background/90 backdrop-blur-md flex justify-start items-center w-full rounded-b-md text-primary text-right px-0.5 ">
                    <div className="flex flex-col justify-start text-start gap-1.5  py-3 ">
                      <p className="text-sm line-clamp-2 pr-1  ">
                        {news.subtitle}
                      </p>

                      <span className="flex items-center justify-start ">
                        <Dot className="size-6 text-primary" />
                        <p className="text-primary/70 font-semibold line-clamp-1 text-xs">
                          {news.title}
                        </p>
                      </span>
                    </div>
                    {/* <span></span>
                    <span className=" flex items-center justify-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <p className="text-xs">{news.date}</p>
                    </span> */}
                  </div>
                </article>
                {/* Added red background and rounded corners */}
              </Slider>
            ))}
          </SliderContainer>
          {/* <div className="flex justify-center py-2">
            <SliderCircleDotButton className="" />
          </div> */}
        </Carousel>
      </section>
    </>
  )
}

export default NewsCarousel
