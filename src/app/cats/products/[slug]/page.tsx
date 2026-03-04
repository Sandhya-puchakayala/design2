import Image from 'next/image';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

type Product = {
  id: string;
  name: string;
  brand: string;
  price: string;
  mrp: string;
  discount: string;
  image: string;
};

const productData: Record<
  string,
  {
    title: string;
    description: string;
    products: Product[];
  }
> = {
  'dry-food': {
    title: 'Dry Food for Cats',
    description:
      'Balanced dry food options for everyday meals, tailored to different breeds and life stages.',
    products: [
      {
        id: 'c1',
        name: 'Adult Chicken & Rice Dry Cat Food',
        brand: 'Whiskas',
        price: '₹899',
        mrp: '₹999',
        discount: '10% OFF',
        image: '/images/img_waterproof_ripstop.png',
      },
      {
        id: 'c2',
        name: 'Hairball Control Adult Dry Cat Food',
        brand: 'Royal Canin',
        price: '₹1,499',
        mrp: '₹1,699',
        discount: '12% OFF',
        image: '/images/img_pet_2_in_1_slow.png',
      },
    ],
  },
  'wet-food': {
    title: 'Wet Food for Cats',
    description: 'Tasty wet food meals to add variety and hydration to your cat’s diet.',
    products: [
      {
        id: 'c3',
        name: 'Tuna in Jelly Wet Cat Food Pouch',
        brand: 'Sheba',
        price: '₹110',
        mrp: '₹125',
        discount: '12% OFF',
        image: '/images/img_reindeer_stuffed.png',
      },
    ],
  },
};

interface CatsProductsPageProps {
  params: {
    slug: string;
  };
}

export default function CatsProductsPage(props: CatsProductsPageProps) {
  const key = props.params.slug;
  const config = productData[key] || productData['dry-food'];

  return (
    <>
      <Header />
      <main className="bg-background-main min-h-screen">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
          {/* Top bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-1">
                {config.title}
              </h1>
              <p className="text-sm sm:text-base text-text-muted max-w-2xl">
                {config.description}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-text-muted">Sort by:</span>
              <select className="border border-border-light rounded-full px-3 py-1 text-sm bg-white">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters sidebar */}
            <aside className="w-full lg:w-64 bg-background-card border border-border-light rounded-2xl p-4 space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-text-primary">Price</span>
                  <span className="text-xs text-text-muted">₹0 – ₹17000</span>
                </div>
                <div className="h-1 bg-border-light rounded-full" />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Age</p>
                {['Kitten', 'Adult', 'Senior'].map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <input type="checkbox" className="rounded-sm" />
                    {label}
                  </label>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Pet type</p>
                {['Cats'].map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <input type="checkbox" className="rounded-sm" />
                    {label}
                  </label>
                ))}
              </div>
            </aside>

            {/* Products grid */}
            <section className="flex-1 space-y-4">
              {/* Category pills row */}
              <div className="flex gap-3 overflow-x-auto pb-1">
                {Object.keys(productData).map((slug) => (
                  <button
                    key={slug}
                    className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
                      slug === key
                        ? 'bg-primary-background text-primary-foreground border-primary-background'
                        : 'bg-white text-text-primary border-border-light'
                    }`}
                  >
                    {productData[slug].title}
                  </button>
                ))}
              </div>

              {/* Grid of products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {config.products.map((p) => (
                  <article
                    key={p.id}
                    className="bg-background-card border border-border-light rounded-2xl p-4 flex flex-col gap-3"
                  >
                    <div className="w-full h-40 bg-background-light rounded-xl flex items-center justify-center overflow-hidden mb-1">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={160}
                        height={160}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-text-muted uppercase">{p.brand}</p>
                    <h3 className="text-sm font-semibold text-text-primary leading-snug">
                      {p.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-text-primary">{p.price}</span>
                      <span className="text-xs line-through text-text-muted">{p.mrp}</span>
                      <span className="text-xs font-semibold text-accent-color">{p.discount}</span>
                    </div>
                    <button className="mt-auto w-full text-sm font-semibold text-primary-foreground bg-primary-background rounded-full py-2">
                      Add to cart
                    </button>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

