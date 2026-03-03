'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-header-background">
      {/* Purple strip directly above header content */}
      <div className="w-full">
        <Image
          src="/images/img_frame_427321731.png"
          alt="Top banner"
          width={1440}
          height={28}
          className="w-full h-[28px] object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-11 pt-3 lg:pt-4 pb-0">
        {/* Single row: contact (left), logo (center), icons (right) */}
        <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto]">
          {/* Left side: mobile menu OR contact info */}
          <div className="flex items-center">
            {/* Mobile: hamburger */}
            <button
              className="block lg:hidden p-2"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop: phone + mail */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="tel:+12025559829" className="flex items-center gap-[10px]">
                <Image
                  src="/images/img_proicons_call.png"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px]"
                />
                <span className="text-base font-medium leading-normal text-text-accent font-['Nunito']">
                  +1-202-555-9829
                </span>
              </Link>
              <Link href="mailto:noreply@petoty.com" className="flex items-center gap-[10px]">
                <Image
                  src="/images/img_iconoir_mail.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px]"
                />
                <span className="text-base font-medium leading-normal text-text-accent font-['Nunito']">
                  noreply@petoty.com
                </span>
              </Link>
            </div>
          </div>

          {/* Centered logo */}
          <div className="flex-1 flex justify-center lg:justify-center lg:col-start-2">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/ing_header_logo.png"
                alt="Petoty Logo"
                width={170}
                height={86}
                className="w-[120px] h-[60px] sm:w-[150px] sm:h-[76px] lg:w-[170px] lg:h-[86px] object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right side: header icons */}
          <div className="flex justify-end">
            <Image
              src="/images/img_shopping images.png"
              alt="Header icons"
              width={168}
              height={28}
              className="w-auto h-[24px] sm:h-[26px] lg:h-[28px] object-contain"
            />
          </div>
        </div>

        {/* Mobile contact details */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden w-full border-t border-gray-200 pt-3 pb-3`}>
          <div className="flex flex-col gap-3">
            <Link href="tel:+12025559829" className="flex items-center gap-3">
              <Image
                src="/images/img_proicons_call.png"
                alt="Phone"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              <span className="text-sm font-medium text-text-accent font-['Nunito']">
                +1-202-555-9829
              </span>
            </Link>
            <Link href="mailto:noreply@petoty.com" className="flex items-center gap-3">
              <Image
                src="/images/img_iconoir_mail.png"
                alt="Email"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              <span className="text-sm font-medium text-text-accent font-['Nunito']">
                noreply@petoty.com
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header