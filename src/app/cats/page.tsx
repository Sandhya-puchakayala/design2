'use client';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Image from 'next/image';
import Link from 'next/link';

const catBreeds = ['Indie', 'Persian', 'Siamese', 'Bengal'];

const catFoodEssentials = [
  'Dry food',
  'Wet food',
  'Prescription food',
  'Kitten food',
  'Senior food',
  'Vet recommended',
];

const litterSupplies = [
  'Scented litter',
  'Unscented litter',
  'Litter boxes & scoopers',
  'Mats & accessories',
];

const lifestyleAccessories = [
  'Summer wear',
  'Beds & mats',
  'Toys',
  'Walk essentials',
  'Bowls & feeders',
  'Trees & scratchers',
  'Bath & body',
  'Travel supplies',
];

const healthcareItems = [
  'Supertails+ clinic',
  'Skin care',
  'Dewormer',
  'Tick & fleas',
  'Joint care',
  'Kidney care',
  'Cardiac care',
  'Combo',
];

const petParentItems = [
  'Fashion',
  'Key chain',
  'Accessories',
  'Brooch',
  'Pet-safe plants',
  'Everyday carry',
  'Mugs',
  'Stationary',
];

const slugify = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function CatsPage() {
  return (
    <>
      <Header />
      <main className="bg-background-main min-h-screen">
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 space-y-12">
          {/* Page title */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-text-primary mb-2">
              Shop for Cats
            </h1>
            <p className="text-base text-text-muted max-w-2xl">
              Discover everything your cat needs – from litter and food to toys, grooming, and cozy
              accessories.
            </p>
          </div>

          {/* Shop by breed */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">Shop by breed</h2>
            <div className="flex flex-wrap gap-6 pb-3">
              {catBreeds.map((breed) => (
                <Link
                  key={breed}
                  href={`/cats/products/${slugify(breed)}`}
                  className="min-w-[170px] max-w-[200px] bg-background-card rounded-[24px] shadow-sm border border-border-light flex flex-col items-center p-5 gap-4"
                >
                  <div className="w-[120px] h-[120px] rounded-2xl bg-background-light flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/img_icons_cat_1.png"
                      alt={breed}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base font-semibold text-text-primary text-center">{breed}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Food essentials */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">Food essentials</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {catFoodEssentials.map((item) => (
                <Link
                  key={item}
                  href={`/cats/products/${slugify(item)}`}
                  className="bg-background-card rounded-[24px] shadow-sm border border-border-light flex flex-col items-center p-5 gap-4"
                >
                  <div className="w-[100px] h-[100px] rounded-2xl bg-background-light flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/img_icons_dry_food_2.png"
                      alt={item}
                      width={84}
                      height={84}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base font-semibold text-text-primary text-center">{item}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Litter & litter supplies */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
              Litter & litter supplies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {litterSupplies.map((item) => (
                <Link
                  key={item}
                  href={`/cats/products/${slugify(item)}`}
                  className="bg-background-card rounded-[24px] shadow-sm border border-border-light flex flex-col items-center p-5 gap-4"
                >
                  <div className="w-[100px] h-[100px] rounded-2xl bg-background-light flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/img_image.png"
                      alt={item}
                      width={84}
                      height={84}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base font-semibold text-text-primary text-center">{item}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Lifestyle & accessories */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
              Lifestyle & accessories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {lifestyleAccessories.map((item) => (
                <Link
                  key={item}
                  href={`/cats/products/${slugify(item)}`}
                  className="bg-background-card rounded-[24px] shadow-sm border border-border-light flex flex-col items-center p-5 gap-4"
                >
                  <div className="w-[100px] h-[100px] rounded-2xl bg-background-light flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/img_icons_accessories.png"
                      alt={item}
                      width={84}
                      height={84}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base font-semibold text-text-primary text-center">{item}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Healthcare */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">Healthcare</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {healthcareItems.map((item) => (
                <Link
                  key={item}
                  href={`/cats/products/${slugify(item)}`}
                  className="bg-background-card rounded-[24px] shadow-sm border border-border-light flex flex-col items-center p-5 gap-4"
                >
                  <div className="w-[100px] h-[100px] rounded-2xl bg-background-light flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/img_icons_health_and.png"
                      alt={item}
                      width={84}
                      height={84}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base font-semibold text-text-primary text-center">{item}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Pet parent */}
          <section className="space-y-6 pb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">Pet parent</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {petParentItems.map((item) => (
                <Link
                  key={item}
                  href={`/cats/products/${slugify(item)}`}
                  className="bg-background-card rounded-[24px] shadow-sm border border-border-light flex flex-col items-center p-5 gap-4"
                >
                  <div className="w-[100px] h-[100px] rounded-2xl bg-background-light flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/img_image.png"
                      alt={item}
                      width={84}
                      height={84}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base font-semibold text-text-primary text-center">{item}</p>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
