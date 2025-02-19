import React from 'react'
import { selectedNewses } from '../home/hero/hero-carousel'
import Image from 'next/image'
import Carousel, {
  Slider,
  SliderCircleDotButton,
  SliderContainer,
} from '@/components/shared/carousel/carousel'
import MultimediaSvg from './multimedia-svg'
import { EmblaOptionsType } from 'embla-carousel'
import { MediaModal } from '../shared/media-modal'
type Props = {}

function MultimediaCarousel({}: Props) {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <section className="relative w-[98%] mx-auto bg-primary flex flex-col rounded-md gap-12">
      <span
        dir="rtl"
        className="py-4 pr-2 flex items-center justify-start gap-2"
      >
        <MultimediaSvg />
        <h2 className="font-bold text-background">چندرسانه‌ای</h2>
      </span>
      <article className="w-[96%] mx-auto  p-1 bg-background rounded-md ">
        {/* <div className="h-[400px]"> */}
        <div className="">
          {/* <figure className="relative w-full h-full  rounded-t-md overflow-hidden ">
            <Image
              fill
              src={selectedNewses[0].imageSrc}
              alt=""
              w-full
              className="object-cover w-full h-full"
            />
          </figure> */}
          <article className="relative overflow-hidden w-full mx-auto">
            <MediaModal
              videoSrc={
                'https://www.sepahansc.com/files/fa/news/1403/11/28/43756_809.mp4'
              }
              //   className="object-cover w-full h-full"
            />
            <div className="absolute w-full h-1/3 bottom-1 rounded-xl bg-background/30 backdrop-blur-sm ">
              <p className="text-xs font-semibold text-primary text-center px-4 py-2 ">
                {selectedNewses[0].title}
              </p>
            </div>
          </article>
        </div>
      </article>
      <section
        dir="ltr"
        className="w-[96%] mx-auto px-2 rounded-xl h-fit my-auto  "
      >
        <Carousel
          //   isScale
          //   isAutoPlay={true}
          options={OPTIONS}
          className="w-full mx-auto relative"
        >
          <SliderContainer className="gap-2  ">
            {selectedNewses.map((news) => (
              <Slider
                key={news.id}
                className="w-full  px-1 pt-1 bg-background  rounded-xl "
              >
                <div className="relative flex flex-col w-full  gap-1 ">
                  {/* <figure className="relative   rounded-t-md overflow-hidden w-[96%] aspect-video mx-auto "> */}
                  <MediaModal
                    videoSrc={
                      'https://www.sepahansc.com/files/fa/news/1403/10/10/40104_774.mp4'
                    }
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute w-full h-1/3 bottom-1 rounded-xl bg-background/30 backdrop-blur-sm ">
                    <p className="text-xs font-semibold text-primary text-center px-4 py-2 ">
                      {news.title}
                    </p>
                  </div>
                  {/* </figure> */}
                  {/* <article className="flex-col w-full  text-primary text-right ">
                    <h3 className="font-semibold text-center text-sm line-clamp-1">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-1 text-xs">
                        {news.description}
                      </p>
                  </article> */}
                </div>

                {/* <div className="bg-red-500/30 rounded-xl h-[400px] w-full"></div> */}
              </Slider>
            ))}
          </SliderContainer>
          <div className="flex justify-center pt-3 pb-3 ">
            <SliderCircleDotButton activeclass="bg-background" />
          </div>
        </Carousel>
      </section>
    </section>
  )
}

export default MultimediaCarousel
