'use client';
import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import ShopNowSection from './ShopNowSection';

import PopularPicksSection from './PopularPicksSection';
import TrustSection from './TrustSection';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

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

interface Category {
  id: string;
  name: string;
  icon: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    loadHomeData()
  }, [])

  const loadHomeData = async (): Promise<void> => {
    try {
      // Simulate API call with timeout
      setTimeout(() => {
        // Sample categories
        setCategories([
          { id: 'dogs', name: 'Dogs', icon: '/images/img_icons_dog_1.png' },
          { id: 'cats', name: 'Cats', icon: '/images/img_icons_cat_1.png' },
          { id: 'birds', name: 'Birds', icon: '/images/img_icons_bird_2.png' },
          { id: 'fishes', name: 'Fishes', icon: '/images/img_icons_fish_2.png' }
        ])

        // Sample products
        setProducts([
          { 
            id: '1',
            name: 'Waterproof Ripstop Dog Coat—Blue',
            price: '$150.00',
            rating: 5,
            image: '/images/img_waterproof_ripstop.png'
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
          }
        ])
        
        setLoading(false)
      }, 1000)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ShopNowSection 
          categories={categories}
          loading={loading}
          products={products}
        />
        <PopularPicksSection 
          products={products}
          loading={loading}
        />
        <TrustSection />
      </main>
      <Footer />
    </>
  )
}