'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import TrustSection from '../../TrustSection';

const productImages = [
    '/images/img_waterproof_ripstop.png',
    '/images/img_waterproof_ripstop_1.png',
    '/images/img_waterproof_ripstop_324x324.png',
    '/images/img_sherpa_dog_vest_olive.png',
    '/images/img_sherpa_fleece_dog.png',
];

const sizeOptions = [
    { label: '2.8 kg', price: '$20', mrp: '$25' },
    { label: '2.8 kg', price: '$20', mrp: '$25' },
    { label: '2.8 kg', price: '$20', mrp: '$25' },
    { label: '2.8 kg', price: '$20', mrp: '$25' },
    { label: '2.8 kg', price: '$20', mrp: '$25' },
    { label: '2.8 kg', price: '$20', mrp: '$25' },
];

const relatedProducts = [
    { id: 'r1', name: 'Sherpa Fleece Dog Coat—Orange', price: '$150.00', image: '/images/img_sherpa_fleece_dog.png', rating: 5 },
    { id: 'r2', name: 'Sherpa Fleece Dog Coat—Orange', price: '$150.00', image: '/images/img_sherpa_fleece_dog.png', rating: 5 },
    { id: 'r3', name: 'Sherpa Fleece Dog Coat—Orange', price: '$150.00', image: '/images/img_sherpa_fleece_dog.png', rating: 5 },
    { id: 'r4', name: 'Sherpa Fleece Dog Coat—Orange', price: '$150.00', image: '/images/img_sherpa_fleece_dog.png', rating: 5 },
];

const recentlyViewed = [
    { id: 'rv1', name: 'Pet 2-in-1 Slow Feeder Interactive Bowl', price: '$135.00', originalPrice: '$145.00', image: '/images/img_pet_2_in_1_slow.png', rating: 4, discount: '-7%' },
    { id: 'rv2', name: 'Pets Gigglers Chicken—Dog Toy', price: '$150.00', image: '/images/img_pets_gigglers_chicken_dog.png', rating: 4 },
];

const trustBadges = [
    { label: 'Quality Assurance' },
    { label: '24hr Delivery' },
    { label: 'No Return/Exchange' },
];

export default function ProductDetailPage() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);
    const [pincode, setPincode] = useState('');
    const [activeTab, setActiveTab] = useState('Product Details');
    const [wishlist, setWishlist] = useState(false);

    const tabs = ['Product Details', 'More Information', 'Customer Reviews'];

    return (
        <>
            <Header />
            <main className="bg-background-main min-h-screen">
                <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 py-8">

                    {/* ── Product Section ── */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

                        {/* Left – Image Gallery */}
                        <div className="flex flex-row gap-3 flex-shrink-0">
                            {/* Thumbnails column */}
                            <div className="flex flex-col gap-3">
                                {productImages.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedImage(i)}
                                        className={`w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all ${selectedImage === i
                                            ? 'border-primary-background shadow-md'
                                            : 'border-border-light hover:border-border-dark'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${i + 1}`}
                                            width={120}
                                            height={120}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Main image */}
                            {/* <div className="relative w-[300px] h-[320px] sm:w-[360px] sm:h-[380px] lg:w-[460px] lg:h-[460px] bg-background-card border border-border-light rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"> */}
                            <div className="relative w-[380px] h-[400px] sm:w-[480px] sm:h-[500px] lg:w-[580px] lg:h-[580px] bg-background-card border border-border-light rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                                <button
                                    onClick={() => setWishlist(!wishlist)}
                                    className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-transform"
                                    aria-label="Add to wishlist"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill={wishlist ? '#c2185b' : 'none'}
                                        stroke={wishlist ? '#c2185b' : '#888'}
                                        strokeWidth="2"
                                        className="w-4 h-4"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                </button>
                                <Image
                                    src={productImages[selectedImage]}
                                    alt="Selected product"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-contain p-4"
                                />
                            </div>
                        </div>

                        {/* Right – Product Info */}
                        <div className="flex-1 min-w-0 space-y-6 text-[16px]">
                            {/* Title + share */}
                            <div className="flex items-start justify-between gap-4">
                                {/* <h1 className="text-xl sm:text-2xl font-semibold text-text-primary leading-[1.35] max-w-[85%]"> */}
                                <h1 className="text-[28px] lg:text-[34px] font-semibold text-text-primary leading-[42px] max-w-[700px]">
                                    Baked Chicken &amp; Liver Adult And Puppy Dog Dry Food | 100% Human Grade Ingredients
                                </h1>
                                <button className="flex-shrink-0 mt-1 text-text-muted hover:text-text-primary transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                    </svg>
                                </button>
                            </div>

                            {/* Vendor */}
                            <p className="text-[15px] text-text-muted">Vendor : <span className="text-text-primary font-medium">Pedigree</span></p>

                            {/* Rating */}
                            <div className="flex items-center gap-3">
                                <span className="text-[17px] font-semibold text-text-primary">4.2</span>
                                <div className="flex items-center gap-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            fill={star <= 4 ? '#f59e0b' : 'none'}
                                            stroke="#f59e0b" strokeWidth="1.5"
                                            className="w-[24px] h-[24px]">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <button className="text-[15px] text-primary-background underline hover:no-underline">20 Reviews</button>
                            </div>

                            {/* Description */}
                            {/* <p className="text-[14px] text-[#6b6b6b] leading-[22px] text-text-muted leading-[1.6]"> */}
                            <p className="text-[17px] text-[#6b6b6b] leading-[26px] max-w-[650px]">
                                Give Your Doggo The Goodness Of Real, Clean Preservative Free Food With Baked Chicken &amp; Liver, Crafted To Keep Tails Wagging And Hearts Healthy! U...
                            </p>

                            {/* Size options */}
                            <div className="flex flex-wrap gap-2">
                                {sizeOptions.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedSize(i)}
                                        className={`px-5 py-[8px] rounded-md border text-[13px] transition-all ${selectedSize === i
                                            ? 'border-primary-background bg-purple-50'
                                            : 'border-border-light bg-white hover:border-border-dark'
                                            }`}
                                    >
                                        <div className="text-[15px] font-semibold text-text-primary">{opt.label}</div>
                                        <div className="text-[14px] text-text-primary">{opt.price} <span className="text-text-muted line-through">MRP {opt.mrp}</span></div>
                                    </button>
                                ))}
                            </div>

                            {/* Delivery */}
                            <div className="flex items-center gap-2 text-[15px] text-text-muted">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 5v3h-7V8z" />
                                    <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                                </svg>
                                Estimated delivery time{' '}
                                <span className="font-semibold text-text-primary">5PM Today</span>
                            </div>

                            {/* Pincode */}
                            <div className="flex gap-3 max-w-[400px]">
                                <input
                                    type="text"
                                    placeholder="Enter pincode"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    className="flex-1 border border-border-light rounded-lg px-5 py-3 text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-background"
                                />
                                <button className="px-6 py-3 bg-[#6b6b6b] text-white text-[15px] font-semibold rounded-lg hover:bg-[#555] transition-colors whitespace-nowrap">
                                    Check
                                </button>
                            </div>

                            {/* Free shipping */}
                            <p className="text-[15px] text-text-muted">Free shipping above <span className="font-semibold text-text-primary">$99</span></p>

                            {/* CTA buttons */}
                            <div className="flex gap-4">
                                <button className="flex-1 max-w-[220px] py-4 px-8 bg-[#9e9e9e] text-white text-[16px] font-bold rounded-lg hover:bg-[#888] transition-colors">
                                    Add to Cart
                                </button>
                                <button className="flex-1 max-w-[220px] py-4 px-8 bg-[#9e9e9e] text-white text-[16px] font-bold rounded-lg hover:bg-[#888] transition-colors">
                                    Buy Now
                                </button>
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-3 pt-2">
                                {trustBadges.map((b) => (
                                    <span
                                        key={b.label}
                                        className="border border-[#323232] rounded-md px-4 py-[6px] text-[15px] font-semibold text-text-primary"
                                    >
                                        {b.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Tabs ── */}
                    <div className="mt-14">
                        <div className="flex w-full gap-4 lg:gap-6 mb-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 px-8 py-4 text-[16px] lg:text-[18px] font-semibold rounded-md border transition-all ${activeTab === tab
                                        ? 'bg-white text-text-primary border-[#323232]'
                                        : 'bg-[#c4c4c4] text-text-primary border-[#7a7a7a] hover:bg-[#b5b5b5]'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        {/* Tab content */}
                        {activeTab === 'Customer Reviews' ? (
                            <div className="w-full bg-white border border-[#323232] rounded-md p-6 sm:p-10">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                                    <div>
                                        <h2 className="text-[28px] font-semibold text-text-primary mb-2">Customer Reviews</h2>
                                        <div className="flex items-center gap-1 mb-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill={star <= 4 ? '#f59e0b' : 'none'}
                                                    stroke="#000000" strokeWidth="1.5"
                                                    className="w-[22px] h-[22px]">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-[15px] text-text-primary mt-2">Based on 30 reviews</p>
                                    </div>
                                    <button className="flex items-center gap-2 text-[20px] font-semibold text-text-primary underline hover:no-underline underline-offset-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                        Write a Review
                                    </button>
                                </div>

                                {/* Review Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <div key={item} className="bg-[#c4c4c4] rounded-md h-[220px] flex items-center justify-center">
                                            <span className="text-[20px] font-medium text-[#1e1e1e]">Review Card</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="w-full bg-[#c4c4c4] rounded-md p-12 flex items-center justify-center min-h-[300px]">
                                <span className="text-2xl font-bold text-text-primary">{activeTab} Content</span>
                            </div>
                        )}
                    </div>

                    {/* ── You May Also Like ── */}
                    <section className="mt-14">
                        <h2 className="text-[26px] font-semibold text-text-primary mb-8 mt-12">You may also like</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                            {relatedProducts.map((p) => (
                                <Link key={p.id} href={`/product/${p.id}`} className="flex flex-col gap-2 hover:opacity-90 transition-opacity">
                                    <div className="w-full aspect-square bg-background-light rounded-2xl overflow-hidden">
                                        <Image
                                            src={p.image}
                                            alt={p.name}
                                            width={220}
                                            height={220}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-[17px] font-semibold text-text-primary text-center mt-2">{p.name}</p>
                                    <div className="flex items-center justify-center gap-1 mt-1">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill={s <= p.rating ? '#f59e0b' : 'none'}
                                                stroke="#f59e0b" strokeWidth="1.5" className="w-[18px] h-[18px]">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-[16px] font-semibold text-text-primary text-center mt-1">{p.price}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            <button className="text-[16px] text-text-primary font-medium hover:underline">View more &gt;</button>
                        </div>
                    </section>

                    {/* ── Recently Viewed ── */}
                    <section className="mt-16 mb-4">
                        <h2 className="text-[26px] font-semibold text-text-primary mb-8">Recently Viewed products</h2>
                        <div className="flex gap-5 flex-wrap">
                            {recentlyViewed.map((p) => (
                                <Link key={p.id} href={`/product/${p.id}`} className="w-[220px] flex flex-col gap-2 hover:opacity-90 transition-opacity">
                                    <div className="relative w-full h-[200px] bg-background-light rounded-2xl overflow-hidden">
                                        {p.discount && (
                                            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
                                                {p.discount}
                                            </span>
                                        )}
                                        <Image
                                            src={p.image}
                                            alt={p.name}
                                            width={220}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-[16px] font-semibold text-text-primary mt-2">{p.name}</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill={s <= p.rating ? '#f59e0b' : 'none'}
                                                stroke="#f59e0b" strokeWidth="1.5" className="w-[18px] h-[18px]">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                        {p.originalPrice && (
                                            <span className="text-[14px] line-through text-accent-color font-semibold">{p.price}</span>
                                        )}
                                        <span className="text-[16px] font-semibold text-text-primary">
                                            {p.originalPrice ?? p.price}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                </div>

                {/* ── Bottom Trust Strip ── */}
                <TrustSection />

            </main>
            <Footer />
        </>
    );
}
