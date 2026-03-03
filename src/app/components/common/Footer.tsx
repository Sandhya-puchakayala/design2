'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EditText from '../ui/EditText';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSubscribe = () => {
    // Simple placeholder – you can replace with real logic
    if (!email.trim()) return;
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer
      className="w-full bg-secondary-background border-t border-border-secondary bg-no-repeat bg-left-bottom"
      style={{
        backgroundImage: "url('/images/img_group_gray_900_58x58.png')",
        // Move the decorative shape further left and down
        backgroundSize: '260px',
        backgroundPosition: '-160px 80%',
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Nav Columns */}
          <div className="flex flex-1 gap-6 items-start">
            <div className="flex flex-1 flex-wrap gap-x-12 gap-y-8">
              {/* Get to Know Us */}
              <div className="space-y-4 min-w-[140px]">
                <h3 className="text-xl font-bold text-text-secondary">Get to Know Us</h3>
                <div className="space-y-3">
                  {['About Us', 'News & Blog', 'Careers', 'Investors', 'Contact Us'].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-base font-normal text-text-secondary hover:text-primary-background transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Customer Service */}
              <div className="space-y-4 min-w-[160px]">
                <h3 className="text-xl font-bold text-text-secondary">Customer Service</h3>
                <div className="space-y-3">
                  {[
                    'Help Center',
                    "FAQ's",
                    'Franchise',
                    'Feedback',
                    'Become a Vendor',
                    'Payment Method',
                  ].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-base font-normal text-text-secondary hover:text-primary-background transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Legal */}
              <div className="space-y-4 min-w-[120px]">
                <h3 className="text-xl font-bold text-text-secondary">Legal</h3>
                <div className="space-y-3">
                  {['Privacy Policy', 'Terms of Use', 'Legal', 'Sitemap'].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-base font-normal text-text-secondary hover:text-primary-background transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Orders & Returns */}
              <div className="space-y-4 min-w-[180px]">
                <h3 className="text-xl font-bold text-text-secondary">Orders & Returns</h3>
                <div className="space-y-3">
                  {[
                    'Track Order',
                    'Shipping & Delivery',
                    'Return & Exchange',
                    'Price Match Guarantee',
                  ].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-base font-normal text-text-secondary hover:text-primary-background transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Newsletter + Social */}
          <div className="w-full lg:w-[320px] flex-shrink-0 space-y-5">
            <div>
              <h4 className="text-xl font-bold text-text-secondary mb-1">Let&apos;s keep in touch</h4>
              <p className="text-base text-text-muted">Get recommendations, tips, updates and more.</p>
            </div>

            {/* Email Subscribe Section */}
            <div className="flex flex-col sm:flex-row gap-4 w-full items-stretch">
              <EditText
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                text_font_size="text-base"
                text_font_family="Inter"
                text_font_weight="font-normal"
                text_line_height="leading-normal"
                text_color="text-text-primary"
                fill_background_color="bg-input-background"
                border_border="border border-border-primary"
                border_border_radius="rounded-full"
                padding="t=16px,r=20px,b=16px,l=20px"
                containerClassName="flex-1 w-full"
              />

              <button
                onClick={handleSubscribe}
                className="bg-primary-dark text-white text-xl font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-primary-dark/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out whitespace-nowrap min-w-[200px]"
              >
                Subscribe
              </button>
            </div>

            {/* Social Icons (reuse previous paths) */}
            <div>
              <h4 className="text-base font-normal text-text-secondary mb-3">Stay Connected</h4>
              <div className="flex items-center gap-5">
                {[
                  { src: '/images/img_image_12x14.png', alt: 'Facebook', w: 22, h: 22 },
                  { src: '/images/img_image_14x14.png', alt: 'Twitter', w: 22, h: 22 },
                  { src: '/images/img_image_10x14.png', alt: 'Instagram', w: 22, h: 22 },
                  { src: '/images/img_image_1.png', alt: 'LinkedIn', w: 22, h: 22 },
                  { src: '/images/img_image_2.png', alt: 'YouTube', w: 22, h: 22 },
                ].map(({ src, alt, w, h }) => (
                  <Link
                    key={alt}
                    href="#"
                    className="hover:opacity-75 transition-opacity flex-shrink-0"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={w}
                      height={h}
                      style={{ width: w, height: h, objectFit: 'contain' }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border-secondary mt-10 pt-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-base text-text-muted">
              Copyright © 2025 Petoty, All rights reserved.
            </p>
            <div className="flex-shrink-0">
              <Image
                src="/images/img_image_59.png"
                alt="Payment Methods"
                width={302}
                height={18}
                style={{ width: 302, height: 18, objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;