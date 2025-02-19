import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/shared/carousel/carousel'
import Image from 'next/image'
export const selectedNewses = [
  {
    id: '1',
    title: '۵ بازیکن سپاهان در اردوی تیم ملی هندبال ۱۷ سال حضور دارند',
    subtitle: 'لیگ هندبال بانوان',
    description:
      'به گزارش روابط عمومی باشگاه فولاد مبارکه سپاهان، دومین مرحله از اردوی آمادگی تیم ملی هندبال زیر ۱۷ سال پسران به میزبانی تهران و در محل فدراسیون هندبال در حال برگزاری است.',
    imageSrc: '/images/1.jpg',
    date: '1403/12/25',
  },
  {
    id: '2',
    title: ' طلایی‌ها علی رغم شایستگی نایب‌قهرمان شدند ',
    subtitle: 'سوپرلیگ والیبال کشور',
    description:
      'به گزارش روابط عمومی باشگاه فولاد مبارکه سپاهان، تیم والیبال فولاد مبارکه سپاهان در حالی که صعود خود به سوپر لیگ والیبال کشور را قطعی کرده بود، با نتیجه سه بر یک بازی فینال لیگ دسته یک را به رازین پلیمر تهران واگذار کرد.',
    imageSrc: '/images/2.jpg',
    date: '1403/12/25',
  },
  {
    id: '3',
    title: 'معرفی داور دیدار سپاهان و ذوب‌آهن',
    subtitle: 'لیگ برتر فوتبال',
    description:
      'به گزارش روابط عمومی باشگاه فولاد مبارکه سپاهان، اسامی داور قضاوت‌کننده هفته بیستم لیگ برتر فوتبال اعلام شد که وحید کاظمی قضاوت بازی سپاهان و ذوب‌آهن را برعهده خواهد داشت. بر این اساس قضاوت دیدار سپاهان و ذوب‌آهن که روز جمعه ۳ اسفند ماه برگزار می‌شود بر عهده وحید کاظمی‌خواهد بود، دانیال باشنده، محسن بابایی و حسین امیدی نیز او را در امر قضاوت یاری خواهند کرد.',
    imageSrc: '/images/3.jpg',
    date: '1403/12/25',
  },
  {
    id: '4',
    title: ' آینده‌داران طلایی برای قهرمانی به مصاف آراد می‌روند ',
    subtitle: 'فوتبال نوجوانان استان اصفهان',
    description:
      'به گزارش روابط عمومی باشگاه فولاد مبارکه سپاهان، تیم فوتبال نوجوانان دختر سپاهان در چارچوب هفته ششم لیگ فوتبال نوجوانان دختر استان اصفهان امروز ۳۰ بهمن ماه از ساعت ۱۵ در ورزشگاه دستگردی به مصاف آراد ورزش زاگرس خواهد رفت.',
    imageSrc: '/images/4.jpg',
    date: '1403/12/25',
  },
]
function HeroCarousel() {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <>
      <section dir="ltr">
        {/* <h1 className="text-center text-4xl font-semibold pb-4">Autoplay</h1> */}
        <Carousel
          isScale
          options={OPTIONS}
          isAutoPlay={true}
          className="w-4/5 mx-auto relatvie"
        >
          <SliderContainer className="gap-2 rounded-md  ">
            {selectedNewses.map((news) => (
              <Slider
                key={news.id}
                className="w-full px-1 pt-1 bg-primary rounded-md"
              >
                <div className="h-[400px]">
                  <figure className="relative w-full h-full  rounded-t-md overflow-hidden ">
                    <Image
                      fill
                      src={news.imageSrc}
                      alt=""
                      w-full
                      className="object-cover w-full h-full"
                    />
                  </figure>
                  <article className="rounded-t-md absolute h-1/3 bottom-0  bg-background/90 backdrop-blur-md flex flex-col w-full  text-primary text-right ">
                    {/* <div className="max-w-md ml-auto pr-2"> */}
                    <div className="px-6 py-3 flex flex-col gap-2">
                      <h3 className="font-semibold text-center text-sm line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3 text-xs">
                        {news.description}
                      </p>
                    </div>
                  </article>
                </div>

                {/* <div className="bg-red-500/30 rounded-xl h-[400px] w-full"></div> */}
              </Slider>
            ))}
          </SliderContainer>
          <div className="flex justify-center py-4 ">
            <SliderDotButton activeclass="text-primary" />
          </div>
        </Carousel>
      </section>
    </>
  )
}

export default HeroCarousel
