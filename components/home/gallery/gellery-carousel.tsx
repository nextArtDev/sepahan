import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderCircleDotButton,
  SliderContainer,
} from '@/components/shared/carousel/carousel'
import Image from 'next/image'
import { selectedNewses } from '../hero/hero-carousel'
import GallerySvg from './gallery-svg'
type Props = {}

function GalleryCarousel({}: Props) {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <>
      <section
        dir="ltr"
        className="w-[96%] mx-auto px-2 rounded-xl h-96 my-20 bg-primary"
      >
        <span
          dir="rtl"
          className="py-4 pr-2 flex items-center justify-start gap-2"
        >
          <GallerySvg />
          <h2 className="font-bold text-background">گالری تصاویر</h2>
        </span>
        <Carousel
          //   isScale
          //   isAutoPlay={true}
          options={OPTIONS}
          className="w-full mx-auto relative"
        >
          <SliderContainer className="gap-2 rounded-md  ">
            {selectedNewses.map((news) => (
              <Slider
                key={news.id}
                className="w-full  px-1 pt-1 bg-background py-2 rounded-md"
              >
                <div className="flex flex-col w-full  gap-1 ">
                  <figure className="relative   rounded-t-md overflow-hidden w-[96%] aspect-video mx-auto ">
                    <Image
                      fill
                      src={news.imageSrc}
                      alt=""
                      w-full
                      className="object-cover w-full h-full"
                    />
                  </figure>
                  <article className="rounded-t-md   bg-background/90 backdrop-blur-md flex flex-col w-full  text-primary text-right ">
                    {/* <div className="max-w-md ml-auto pr-2"> */}
                    <div className="px-3 py-3 flex flex-col gap-2">
                      <h3 className="font-semibold text-center text-sm line-clamp-1">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-1 text-xs">
                        {news.description}
                      </p>
                    </div>
                  </article>
                </div>

                {/* <div className="bg-red-500/30 rounded-xl h-[400px] w-full"></div> */}
              </Slider>
            ))}
          </SliderContainer>
          <div className="flex justify-center pt-6 pb-3 ">
            <SliderCircleDotButton activeclass="bg-primary" />
          </div>
        </Carousel>
      </section>
    </>
  )
}

export default GalleryCarousel
