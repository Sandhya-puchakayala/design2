'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full bg-background-main">
      <div className="w-full ">
        {/* Hero Banner */}
        <div className="px-4 sm:px-6 lg:px-[70px] -mt-4">
          <div className="relative">
            <Image
              src="/images/img_image_120.png"
              alt="Pet products hero banner"
              width={1300}
              height={328}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[328px] object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection