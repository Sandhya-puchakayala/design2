'use client';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Image from 'next/image';
import Link from 'next/link';

const birdCategories = [
  'Bird food',
  'Cages & stands',
  'Perches & ladders',
  'Toys & enrichment',
  'Baths & bowls',
  'Health & supplements',
];

const slugify = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Map categories to product page slugs
const categorySlugMap: Record<string, string> = {
  'Bird food': 'dry-food',
  'Cages & stands': 'dry-food',
  'Perches & ladders': 'dry-food',
  'Toys & enrichment': 'dry-food',
  'Baths & bowls': 'dry-food',
  'Health & supplements': 'dry-food',
};

export default function BirdsPage() {
  return (
    <>
      <Header />
      <main className="bg-background-main min-h-screen">
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 space-y-12">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-text-primary mb-2">
              Shop for Birds
            </h1>
            <p className="text-base text-text-muted max-w-2xl">
              Find nutritious food, comfortable habitats, and engaging toys to keep your birds happy
              and healthy.
            </p>
          </div>

          <section className="space-y-6 pb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">Bird essentials</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {birdCategories.map((item) => (
                <Link
                  key={item}
                  href={`/birds/products/${categorySlugMap[item] || slugify(item)}`}
                  className="bg-background-card rounded-[24px] shadow-sm border border-border-light flex flex-col items-center p-5 gap-4 hover:shadow-md hover:opacity-95 transition"
                >
                  <div className="w-[100px] h-[100px] rounded-2xl bg-background-light flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/img_icons_bird_2.png"
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

