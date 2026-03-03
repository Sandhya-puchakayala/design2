import './styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Pet Products E-commerce',
    template: 'Pet Products E-commerce | %s',
  },
  description: 'Discover premium pet supplies for dogs, cats, birds, and fish. Shop care essentials, popular picks with special pricing, and trusted brands. Fast shipping and excellent customer service.',
  keywords: 'pet supplies, dog products, cat accessories, bird care, fish supplies, pet food, pet toys, veterinary products, pet care essentials',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'Pet Products E-commerce',
      template: 'Pet Products E-commerce | %s',
    },
    description: 'Shop premium pet supplies with special pricing on popular picks. Quality products for dogs, cats, birds, and fish with fast shipping and expert customer service.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}