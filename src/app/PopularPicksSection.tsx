'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from './components/ui/Button';

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  image: string;
  discount?: string;
  badge?: string;
  badgeColor?: string;
}

interface PopularPicksSectionProps {
  products: Product[];
  loading: boolean;
}

const PopularPicksSection = ({ products, loading }: PopularPicksSectionProps) => {
  const [selectedTab, setSelectedTab] = useState<string>('Top Seller')

  const tabs = ['Top Seller', 'On Sale', 'Big Deals']

  const popularProducts = [
    {
      id: '1',
      name: 'Waterproof Ripstop Dog Coat—Blue',
      price: '$150.00',
      rating: 5,
      image: '/images/img_waterproof_ripstop_324x324.png'
    },
    {
      id: '2',
      name: 'Reindeer Stuffed Animal—Orange',
      price: '$175.00',
      rating: 5,
      image: '/images/img_reindeer_stuffed.png',
      badge: 'Limited Stock',
      badgeColor: 'bg-accent-light'
    },
    {
      id: '3',
      name: 'Sherpa Fleece Dog Coat—Orange',
      price: '$150.00',
      rating: 5,
      image: '/images/img_sherpa_fleece_dog.png'
    },
    {
      id: '4',
      name: 'Pet 2-in-1 Slow Feeder Interactive Bowl',
      price: '$135.00',
      originalPrice: '$145.00',
      rating: 4,
      image: '/images/img_pet_2_in_1_slow.png',
      discount: '-7%'
    },
    {
      id: '5',
      name: 'Sherpa Dog Vest—Olive',
      price: '$175.00',
      originalPrice: '$195.00',
      rating: 4,
      image: '/images/img_sherpa_dog_vest_olive.png',
      discount: '-10%'
    },
    {
      id: '6',
      name: 'Pets Gigglers Chicken—Dog Toy',
      price: '$150.00',
      rating: 4,
      image: '/images/img_pets_gigglers_chicken_dog.png'
    },
    {
      id: '7',
      name: 'Automatic Dog Feeder',
      price: '$125.00',
      originalPrice: '$155.00',
      rating: 5,
      image: '/images/img_automatic_dog_feeder.png',
      discount: '-19%'
    },
    {
      id: '8',
      name: 'Waterproof Ripstop Dog Coat—Olive',
      price: '$280.00',
      rating: 5,
      image: '/images/img_waterproof_ripstop_1.png'
    }
  ]

  return (
    <section className="w-full bg-background-main py-8 md:py-12 mt-[90px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-7">
        
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-[143px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-semibold leading-tight lg:leading-[74px] text-secondary-dark font-['Nunito']">
            Popular Picks
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 lg:mb-[131px]">
          <div className="flex items-center gap-2 lg:gap-4">
            {tabs.map((tab, index) => (
              <div key={tab} className="flex items-center">
                {index === 0 && (
                  <div className="flex flex-col items-center gap-2 lg:gap-[10px]">
                    <button
                      onClick={() => setSelectedTab(tab)}
                      className={`text-lg sm:text-xl lg:text-[24px] font-semibold leading-tight lg:leading-[33px] font-['Nunito'] transition-colors ${
                        selectedTab === tab ? 'text-primary-light' : 'text-primary-light hover:text-primary-background'
                      }`}
                    >
                      {tab}
                    </button>
                    {selectedTab === tab && (
                      <div className="w-[120px] sm:w-[150px] lg:w-[166px] h-[2px] lg:h-[3px] bg-primary-light rounded"></div>
                    )}
                  </div>
                )}
                {index > 0 && (
                  <button
                    onClick={() => setSelectedTab(tab)}
                    className={`text-lg sm:text-xl lg:text-[24px] font-semibold leading-tight lg:leading-[33px] font-['Nunito'] transition-colors ml-4 lg:ml-8 ${
                      selectedTab === tab ? 'text-primary-light' : 'text-primary-light hover:text-primary-background'
                    }`}
                  >
                    {tab}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[21px]">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full max-w-[324px] h-[250px] sm:h-[280px] lg:h-[324px] bg-gray-200 animate-pulse rounded-lg mb-4"></div>
                <div className="w-3/4 h-5 bg-gray-200 animate-pulse rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
                <div className="w-1/3 h-5 bg-gray-200 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[21px] ml-[18px]">
            {popularProducts.map((product) => (
              <div key={product.id} className="flex flex-col items-center max-w-[324px] mx-auto w-full">
                <div className="relative w-full mb-2 lg:mb-[10px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={324}
                    height={324}
                    className="w-full h-[250px] sm:h-[280px] lg:h-[324px] object-cover rounded-lg"
                  />
                  
                  {/* Badge */}
                   {product.badge && (
                    <div className={`absolute top-3 left-3 ${product.badgeColor} rounded-2xl px-2 py-1 flex items-center gap-1`}>
                      {product.badge === 'Limited Stock' && (
                        <Image
                          src="/images/img_import.png"
                          alt="Limited stock icon"
                          width={12}
                          height={12}
                          className="w-[12px] h-[12px]"
                        />
                      )}
                      <span className="text-xs font-medium leading-tight text-primary-foreground font-['Instrument_Sans'] capitalize">
                        {product.badge}
                      </span>
                    </div>
                  )} 
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <Button
                      text={product.discount}
                      className="absolute top-3 left-3 bg-accent-color text-primary-foreground text-xs font-medium rounded-2xl px-3 py-1 border-none"
                    />
                  )}
                </div>

                <div className="flex flex-col items-center gap-1 lg:gap-[6px] w-full px-4 lg:px-0">
                  <h3 className="text-sm sm:text-base lg:text-[15px] font-bold leading-tight lg:leading-[22px] text-secondary-dark font-['Nunito'] text-center">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center">
                    <Image
                      src={product.rating === 5 ? "/images/img_img_rated_5_00.png" : "/images/img_img_rated_4_00.png"}
                      alt={`${product.rating} star rating`}
                      width={52}
                      height={10}
                      className="w-[42px] sm:w-[48px] lg:w-[52px] h-[8px] lg:h-[10px]"
                    />
                  </div>
                  
                  {product.originalPrice ? (
                    <div className="flex items-center gap-1 lg:gap-[4px]">
                      <span className="text-sm lg:text-base font-semibold leading-tight lg:leading-[20px] text-accent-color font-['Nunito']">
                        {product.price}
                      </span>
                      <span className="text-sm lg:text-base font-normal leading-tight lg:leading-[20px] text-[#666666] font-['Nunito'] line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm lg:text-base font-semibold leading-tight lg:leading-[20px] text-secondary-dark font-['Nunito']">
                      {product.price}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PopularPicksSection