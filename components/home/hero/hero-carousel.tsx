import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/shared/carousel/carousel'
import Image from 'next/image'
const selectedNewses = [
  {
    id: '1',
    title: '۵ بازیکن سپاهان در اردوی تیم ملی هندبال ۱۷ سال حضور دارند.',
    description:
      'به گزارش روابط عمومی باشگاه فولاد مبارکه سپاهان، دومین مرحله از اردوی آمادگی تیم ملی هندبال زیر ۱۷ سال پسران به میزبانی تهران و در محل فدراسیون هندبال در حال برگزاری است.',
    imageSrc: '/images/1.jpg',
  },
  {
    id: '2',
    title: ' طلایی‌ها علی رغم شایستگی نایب‌قهرمان شدند ',
    description:
      'به گزارش روابط عمومی باشگاه فولاد مبارکه سپاهان، تیم والیبال فولاد مبارکه سپاهان در حالی که صعود خود به سوپر لیگ والیبال کشور را قطعی کرده بود، با نتیجه سه بر یک بازی فینال لیگ دسته یک را به رازین پلیمر تهران واگذار کرد.',
    imageSrc: '/images/2.jpg',
  },
  {
    id: '3',
    title: '	معرفی داور دیدار سپاهان و ذوب‌آهن',
    description:
      'به گزارش روابط عمومی باشگاه فولاد مبارکه سپاهان، اسامی داور قضاوت‌کننده هفته بیستم لیگ برتر فوتبال اعلام شد که وحید کاظمی قضاوت بازی سپاهان و ذوب‌آهن را برعهده خواهد داشت. بر این اساس قضاوت دیدار سپاهان و ذوب‌آهن که روز جمعه ۳ اسفند ماه برگزار می‌شود بر عهده وحید کاظمی‌خواهد بود، دانیال باشنده، محسن بابایی و حسین امیدی نیز او را در امر قضاوت یاری خواهند کرد.',
    imageSrc: '/images/3.jpg',
  },
  {
    id: '4',
    title: ' آینده‌داران طلایی برای قهرمانی به مصاف آراد می‌روند ',
    description:
      'به گزارش روابط عمومی باشگاه فولاد مبارکه سپاهان، تیم فوتبال نوجوانان دختر سپاهان در چارچوب هفته ششم لیگ فوتبال نوجوانان دختر استان اصفهان امروز ۳۰ بهمن ماه از ساعت ۱۵ در ورزشگاه دستگردی به مصاف آراد ورزش زاگرس خواهد رفت.',
    imageSrc: '/images/4.jpg',
  },
]
function HeroCarousel() {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <>
      <article dir="ltr">
        {/* <h1 className="text-center text-4xl font-semibold pb-4">Autoplay</h1> */}
        <Carousel options={OPTIONS} isAutoPlay={true} className="w-4/5 mx-auto">
          <SliderContainer className="gap-2 rounded-md h-[400px] overflow-hidden">
            {selectedNewses.map((news) => (
              <Slider key={news.id} className="relative w-full  ">
                <Image
                  fill
                  src={news.imageSrc}
                  alt=""
                  w-full
                  className="object-cover "
                />
                <article className="rounded-t-md absolute h-1/2 bottom-0 bg-background/40 backdrop-blur-mdflex flex-col w-full p-2 z-10 text-right ">
                  <div className="max-w-md ml-auto pr-2">
                    <h3 className="font-semibold ">{news.title}</h3>
                    <p className="line-clamp-3">{news.description}</p>
                  </div>
                </article>
                {/* <div className="bg-red-500/30 rounded-xl h-[400px] w-full"></div> */}
                {/* Red background with rounded corners */}
              </Slider>
            ))}
          </SliderContainer>
          <div className="flex justify-center py-4">
            <SliderDotButton />
          </div>
        </Carousel>
      </article>
    </>
  )
}

export default HeroCarousel
