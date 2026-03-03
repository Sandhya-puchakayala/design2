'use client';
import Link from 'next/link';
import Button from '../ui/Button';
import EditText from '../ui/EditText';

const Footer = () => {
  return (
    <footer className="w-full bg-footer-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-12 space-y-10">
        {/* Top link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="text-lg font-bold leading-normal text-[#55575c] font-['Lexend_Deca'] mb-4">
              Get to Know Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm font-normal leading-normal text-[#595b5e] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm font-normal leading-normal text-[#535559] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  News &amp; Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm font-normal leading-normal text-[#56585c] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/investors"
                  className="text-sm font-normal leading-normal text-[#5b5d60] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-normal leading-normal text-[#595b5f] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold leading-normal text-[#56595d] font-['Lexend_Deca'] mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-sm font-normal leading-normal text-[#595b5f] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm font-normal leading-normal text-[#54565a] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/franchise"
                  className="text-sm font-normal leading-normal text-[#545659] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Franchise
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-sm font-normal leading-normal text-[#55575a] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <span className="text-sm font-normal leading-normal text-[#5e6063] font-['Lexend_Deca']">
                  Become a Vendor
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold leading-normal text-[#4d5055] font-['Lexend_Deca'] mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm font-normal leading-normal text-[#5d5f63] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm font-normal leading-normal text-[#525457] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-sm font-normal leading-normal text-[#56585b] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-sm font-normal leading-normal text-[#505356] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Orders & Returns + Newsletter (top of last column) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold leading-normal text-[#585a5e] font-['Lexend_Deca'] mb-4">
                Orders &amp; Returns
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/track-order"
                    className="text-sm font-normal leading-normal text-[#5f6164] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="text-sm font-normal leading-normal text-[#525458] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                  >
                    Shipping &amp; Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="text-sm font-normal leading-normal text-[#525457] hover:text-primary-background transition-colors font-['Lexend_Deca']"
                  >
                    Return &amp; Exchange
                  </Link>
                </li>
                <li>
                  <span className="text-sm font-normal leading-normal text-[#55575a] font-['Lexend_Deca']">
                    Price Match Guarantee
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row: newsletter + social + copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-t border-[#e1e2e5] pt-8">
          {/* Newsletter */}
          <div className="w-full lg:max-w-xl">
            <h3 className="text-xs font-bold leading-tight text-[#595b5f] font-['Inter']">
              Let&apos;s keep in touch
            </h3>
            <p className="text-sm font-normal leading-normal text-text-muted font-['Inter'] mt-3">
              Get recommendations, tips, updates and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <EditText
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button
                text="Subscribe"
                className="text-sm font-bold leading-tight text-primary-foreground bg-primary-background border border-primary-background rounded-lg px-5 py-3"
              />
            </div>
          </div>

          {/* Social + copyright */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-4">
            <div className="flex flex-col items-start lg:items-end gap-2 w-full">
              <span className="text-sm font-normal leading-normal text-[#585a5e] font-['Lexend_Deca']">
                Stay Connected
              </span>
              <div className="flex flex-wrap gap-3 text-sm font-normal text-[#585a5e] font-['Lexend_Deca']">
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Instagram</span>
                <span>LinkedIn</span>
                <span>YouTube</span>
              </div>
            </div>

            <p className="text-sm font-normal leading-normal text-[#646669] font-['Lexend_Deca'] mt-2">
              Copyright © 2025 Petoty, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;