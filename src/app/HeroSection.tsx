'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full bg-background-main">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Navigation Bar */}
        <div className="w-full bg-background-light">
          <div className="px-4 sm:px-6 lg:px-14 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              
              {/* Navigation Menu - Hide on mobile, show on desktop */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  DOGS
                </a>
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  CATS
                </a>
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  BIRDS
                </a>
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  FISHES
                </a>
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  BRANDS
                </a>
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  SHOP BY BREED
                </a>
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  SERVICES
                </a>
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  PAWSCRIPTION
                </a>
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  PAWSSURANCE
                </a>
                <a href="#" className="text-xs font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors">
                  COMMUNITY
                </a>
              </nav>

              {/* Search Icon */}
              <button className="flex-shrink-0" aria-label="Search">
                <Image
                  src="/images/img_search.png"
                  alt="Search"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px]"
                  priority
                  unoptimized
                />
              </button>
            </div>
          </div>
        </div>

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