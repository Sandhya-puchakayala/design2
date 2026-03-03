import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Pet Products E-commerce - Quality Supplies for Dogs, Cats, Birds & Fish',
  description: 'Discover premium pet supplies for dogs, cats, birds, and fish. Shop care essentials, popular picks with special pricing, and trusted brands. Fast shipping and excellent customer service.',
  keywords: 'pet supplies, dog products, cat accessories, bird care, fish supplies, pet food, pet toys, veterinary products, pet care essentials',
  
  openGraph: {
    title: 'Pet Products E-commerce - Quality Supplies for Dogs, Cats, Birds & Fish',
    description: 'Shop premium pet supplies with special pricing on popular picks. Quality products for dogs, cats, birds, and fish with fast shipping and expert customer service.',
  }
}

export default function Page() {
  return <HomePage />
}