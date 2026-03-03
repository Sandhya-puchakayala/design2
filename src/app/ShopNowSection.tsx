'use client';
import Image from'next/image';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface ShopNowSectionProps {
  categories: Category[];
  loading: boolean;
}

const ShopNowSection = ({ categories, loading }: ShopNowSectionProps) => {
  const careItems = [
    { name: 'Food', icon: '/images/img_icons_dry_food_2.png' },
    { name: 'Treats & Chews', icon: '/images/img_icons_treats_and.png' },
    { name: 'Health & Wellness', icon: '/images/img_icons_health_and.png' },
    { name: 'Accessories', icon: '/images/img_icons_accessories.png' }
  ]

  return (
    <section className="w-full bg-background-main py-8 md:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[84px]">
        <div className="bg-background-main border-2 border-[#0000003a] rounded-lg p-6 lg:p-[26px]">
          
          {/* Shop Now Title */}
          <div className="text-center mb-8 lg:mb-[77px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-medium leading-tight lg:leading-[50px] text-text-primary font-['Roboto']">
              Shop Now
            </h2>
          </div>

          {/* Categories Section */}
          <div className="mb-8 lg:mb-[18px]">
            <div className="border border-[#0000006d] rounded-3xl p-1 lg:p-[6px]">
              <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-0">
                
                {loading ? (
                  <div className="flex flex-wrap justify-center gap-4 w-full">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 p-4">
                        <div className="w-[60px] h-[60px] lg:w-[96px] lg:h-[96px] bg-gray-200 animate-pulse rounded-full"></div>
                        <div className="w-[60px] h-[20px] bg-gray-200 animate-pulse rounded"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {/* Dogs */}
                    <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-auto lg:flex-1 p-4">
                      <Image
                        src="/images/img_icons_dog_1.png"
                        alt="Dogs"
                        width={96}
                        height={96}
                        className="w-[60px] h-[60px] lg:w-[96px] lg:h-[96px] object-contain mb-2"
                      />
                      <span className="text-lg sm:text-2xl lg:text-[28px] font-medium leading-tight lg:leading-[34px] text-text-primary font-['Roboto']">
                        Dogs
                      </span>
                    </div>

                    {/* Vertical Line */}
                    <div className="hidden lg:block w-[4px] h-[80px] bg-[#00000066] rounded-[2px]"></div>

                    {/* Cats */}
                    <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-auto lg:flex-1 p-4">
                      <Image
                        src="/images/img_icons_cat_1.png"
                        alt="Cats"
                        width={96}
                        height={96}
                        className="w-[60px] h-[60px] lg:w-[96px] lg:h-[96px] object-contain mb-2"
                      />
                      <span className="text-lg sm:text-2xl lg:text-[28px] font-medium leading-tight lg:leading-[34px] text-text-primary font-['Roboto']">
                        Cats
                      </span>
                    </div>

                    {/* Vertical Line */}
                    <div className="hidden lg:block w-[4px] h-[80px] bg-[#00000066] rounded-[2px]"></div>

                    {/* Birds */}
                    <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-auto lg:flex-1 p-4">
                      <Image
                        src="/images/img_icons_bird_2.png"
                        alt="Birds"
                        width={96}
                        height={96}
                        className="w-[60px] h-[60px] lg:w-[96px] lg:h-[96px] object-contain mb-2"
                      />
                      <span className="text-lg sm:text-2xl lg:text-[28px] font-medium leading-tight lg:leading-[34px] text-text-primary font-['Roboto']">
                        Birds
                      </span>
                    </div>

                    {/* Vertical Line */}
                    <div className="hidden lg:block w-[4px] h-[80px] bg-[#00000066] rounded-[2px]"></div>

                    {/* Fishes */}
                    <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-auto lg:flex-1 p-4">
                      <Image
                        src="/images/img_icons_fish_2.png"
                        alt="Fishes"
                        width={96}
                        height={96}
                        className="w-[60px] h-[60px] lg:w-[96px] lg:h-[96px] object-contain mb-2"
                      />
                      <span className="text-lg sm:text-2xl lg:text-[28px] font-medium leading-tight lg:leading-[34px] text-text-primary font-['Roboto']">
                        Fishes
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Care & Essentials Section */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-medium leading-tight lg:leading-[31px] text-text-primary font-['Roboto'] mb-6">
              Care & Essentials for Dogs
            </h3>

            <div className="border border-[#00000099] rounded-3xl p-4 lg:p-[18px]">
              <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-0">
                {careItems.map((item, index) => (
                  <div key={item.name} className="flex items-center w-full sm:w-1/2 lg:w-auto lg:flex-1">
                    <div className="flex flex-col items-center flex-1 p-4">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] object-contain mb-4"
                      />
                      <span className="text-lg sm:text-2xl lg:text-[26px] font-medium leading-tight lg:leading-[31px] text-text-primary font-['Roboto'] text-center">
                        {item.name}
                      </span>
                    </div>
                    {index < careItems.length - 1 && (
                      <div className="hidden lg:block w-[4px] h-[80px] bg-[#00000066] rounded-[2px] ml-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopNowSection