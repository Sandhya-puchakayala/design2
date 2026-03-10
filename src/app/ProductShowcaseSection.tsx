'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
}

interface ProductShowcaseSectionProps {
  products: Product[];
  loading: boolean;
}

const ProductShowcaseSection = ({ products, loading }: ProductShowcaseSectionProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Dry Food')

  const filters = [
    { name: 'Dry Food', icon: '/images/img_icons_dry_food_2.png' },
    { name: 'Wet Food', icon: '/images/img_icons_wet_food_1.png' },
    { name: 'Puppy Corner', icon: '/images/img_icons_dog_1.png' },
    { name: 'Vitamins & Supplements', icon: null },
    { name: 'Prescription', icon: null }
  ]

  // Generate 16 products for the grid (4x4)
  const generateProducts = () => {
    const baseProduct = {
      name: 'Waterproof Ripstop Dog Coat—Blue',
      price: '$150.00',
      rating: 5,
      image: '/images/img_waterproof_ripstop.png'
    }

    return Array.from({ length: 16 }, (_, index) => ({
      ...baseProduct,
      id: `product-${index + 1}`
    }))
  }

  const showcaseProducts = generateProducts()

  return (
    <div className="border border-[#00000099] rounded-3xl p-4 lg:p-[18px] mt-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-medium leading-tight lg:leading-[33px] text-text-primary font-['Roboto']">
          Showing 48 products
        </h2>

        <div className="flex items-center gap-2 bg-[#00000070] rounded-xl px-4 py-2">
          <span className="text-sm sm:text-lg lg:text-[21px] font-medium leading-tight lg:leading-[25px] text-primary-foreground font-['Roboto']">
            Sort by
          </span>
          <span className="text-lg sm:text-xl lg:text-[24px] font-medium leading-tight lg:leading-[29px] text-primary-foreground font-['Roboto']">
            &gt;
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[14px]">

        {/* Sidebar Filters */}
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <div className="bg-background-main border border-[#0000007c] rounded-lg p-3 lg:p-[14px]">
            <div className="flex flex-col gap-6 lg:gap-[32px]">

              {/* Selected Filter */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] relative">
                    <div className="w-[56px] h-[56px] lg:w-[74px] lg:h-[74px] bg-background-main border border-[#00000059] rounded-t-lg"></div>
                    <Image
                      src="/images/img_icons_dry_food_2.png"
                      alt="Dry Food"
                      width={80}
                      height={80}
                      className="absolute top-0 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] object-contain"
                    />
                  </div>
                  <div className="w-[56px] h-[14px] lg:w-[74px] lg:h-[18px] bg-background-main border border-[#00000059] rounded-b-lg flex items-center justify-center -mt-1">
                    <span className="text-xs lg:text-xs font-medium text-text-primary font-['Roboto']">
                      Dry Food
                    </span>
                  </div>
                </div>
                <div className="w-[8px] h-[72px] lg:w-[10px] lg:h-[96px] bg-[#00000066] rounded-[5px]"></div>
              </div>

              {/* Other Filters */}
              <div className="flex flex-col gap-6 lg:gap-[32px]">
                {filters.slice(1).map((filter, index) => (
                  <div key={filter.name} className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] relative">
                      {filter.icon ? (
                        <>
                          <div className={`w-[56px] h-[56px] lg:w-[74px] lg:h-[74px] ${index === 1 ? 'bg-[#ffffff4c]' : 'bg-[#0000004c]'} border border-[#00000059] rounded-t-lg`}></div>
                          {index === 1 && (
                            <Image
                              src={filter.icon}
                              alt={filter.name}
                              width={80}
                              height={80}
                              className="absolute top-0 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] object-contain"
                            />
                          )}
                        </>
                      ) : (
                        <div className="w-[56px] h-[56px] lg:w-[74px] lg:h-[74px] bg-[#0000004c] border border-[#00000011] rounded-t-lg"></div>
                      )}
                    </div>
                    <div className="w-[56px] lg:w-[74px] min-h-[14px] lg:min-h-[18px] bg-background-main border border-[#00000084] rounded-b-lg flex items-center justify-center px-2 py-1 -mt-1">
                      <span className="text-xs font-medium text-text-primary font-['Roboto'] text-center leading-tight">
                        {filter.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[18px]">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-full h-[180px] sm:h-[200px] lg:h-[234px] bg-gray-200 animate-pulse rounded-md mb-2"></div>
                  <div className="w-3/4 h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
                  <div className="w-1/2 h-3 bg-gray-200 animate-pulse rounded mb-2"></div>
                  <div className="w-1/3 h-4 bg-gray-200 animate-pulse rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6 lg:space-y-[18px]">

              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[18px]">
                {showcaseProducts.slice(0, 4).map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="flex flex-col items-center cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={232}
                      height={234}
                      className="w-full h-[180px] sm:h-[200px] lg:h-[234px] object-cover rounded-md mb-2"
                    />
                    <h3 className="text-sm lg:text-sm font-bold leading-tight text-text-primary font-['Nunito'] text-center mb-2 px-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-1">
                      <Image
                        src="/images/img_img_rated_5_00.png"
                        alt="5 star rating"
                        width={36}
                        height={8}
                        className="w-[36px] h-[8px]"
                      />
                    </div>
                    <span className="text-xs lg:text-xs font-semibold text-text-primary font-['Nunito']">
                      {product.price}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[18px]">
                {showcaseProducts.slice(4, 8).map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="flex flex-col items-center cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={232}
                      height={234}
                      className="w-full h-[180px] sm:h-[200px] lg:h-[234px] object-cover rounded-md mb-2"
                    />
                    <h3 className="text-sm lg:text-sm font-bold leading-tight text-text-primary font-['Nunito'] text-center mb-2 px-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-1">
                      <Image
                        src="/images/img_img_rated_5_00.png"
                        alt="5 star rating"
                        width={36}
                        height={8}
                        className="w-[36px] h-[8px]"
                      />
                    </div>
                    <span className="text-xs lg:text-xs font-semibold text-text-primary font-['Nunito']">
                      {product.price}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[18px]">
                {showcaseProducts.slice(8, 12).map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="flex flex-col items-center cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={232}
                      height={234}
                      className="w-full h-[180px] sm:h-[200px] lg:h-[234px] object-cover rounded-md mb-2"
                    />
                    <h3 className="text-sm lg:text-sm font-bold leading-tight text-text-primary font-['Nunito'] text-center mb-2 px-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-1">
                      <Image
                        src="/images/img_img_rated_5_00.png"
                        alt="5 star rating"
                        width={36}
                        height={8}
                        className="w-[36px] h-[8px]"
                      />
                    </div>
                    <span className="text-xs lg:text-xs font-semibold text-text-primary font-['Nunito']">
                      {product.price}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Fourth Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[18px]">
                {showcaseProducts.slice(12, 16).map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="flex flex-col items-center cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={232}
                      height={234}
                      className="w-full h-[180px] sm:h-[200px] lg:h-[234px] object-cover rounded-md mb-2"
                    />
                    <h3 className="text-sm lg:text-sm font-bold leading-tight text-text-primary font-['Nunito'] text-center mb-2 px-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-1">
                      <Image
                        src="/images/img_img_rated_5_00.png"
                        alt="5 star rating"
                        width={36}
                        height={8}
                        className="w-[36px] h-[8px]"
                      />
                    </div>
                    <span className="text-xs lg:text-xs font-semibold text-text-primary font-['Nunito']">
                      {product.price}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Scrollbar */}
        <div className="hidden lg:block w-[14px] h-[218px] bg-[#00000066] rounded-md self-start mt-8"></div>
      </div>
    </div>
  )
}

export default ProductShowcaseSection