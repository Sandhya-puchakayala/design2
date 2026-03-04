'use client';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Image from 'next/image';
import Link from 'next/link';

const fishCategories = [
  'Fish food',
  'Aquariums & tanks',
  'Filters & pumps',
  'Heaters & lights',
  'Gravel & decor',
  'Water care',
];

const slugify = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Map categories to product page slugs
const categorySlugMap: Record<string, string> = {
  'Fish food': 'dry-food',
  'Aquariums & tanks': 'dry-food',
  'Filters & pumps': 'dry-food',
  'Heaters & lights': 'dry-food',
  'Gravel & decor': 'dry-food',
  'Water care': 'dry-food',
};

export default function FishesPage() {
  return (
    <>
      <Header />
      <main className="bg-background-main min-h-screen">
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 space-y-12">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-text-primary mb-2">
              Shop for Fishes
            </h1>
            <p className="text-base text-text-muted max-w-2xl">
              Build the perfect underwater world with tanks, equipment, decor, and premium fish
              nutrition.
            </p>
          </div>

          <section className="space-y-6 pb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
              Aquarium essentials
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {fishCategories.map((item) => (
                <Link
                  key={item}
                  href={`/fishes/products/${categorySlugMap[item] || slugify(item)}`}
                  className="bg-background-card rounded-[24px] shadow-sm border border-border-light flex flex-col items-center p-5 gap-4 hover:shadow-md hover:opacity-95 transition"
                >
                  <div className="w-[100px] h-[100px] rounded-2xl bg-background-light flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/img_icons_fish_2.png"
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

