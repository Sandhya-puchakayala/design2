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

          {/* Right side: header icons as interactive links */}
          <nav className="flex items-center justify-end gap-6 text-primary-dark">
            <Link
              href="/account"
              aria-label="Account"
              className="hover:text-primary-background transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 19.5C5.8 16 8.6 14 12 14s6.2 2 7 5.5" />
              </svg>
            </Link>

            <Link
              href="/messages"
              aria-label="Messages"
              className="hover:text-primary-background transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                <path d="M6 8.5 10.5 11a3 3 0 0 0 3 0L18 8.5" />
              </svg>
            </Link>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="hover:text-primary-background transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 20s-5.5-3.2-8.1-6C2.7 11.7 3 8.4 5.5 6.8 7.2 5.7 9.3 6 10.7 7.4L12 8.7l1.3-1.3C14.7 6 16.8 5.7 18.5 6.8 21 8.4 21.3 11.7 20.1 14c-2.6 2.8-8.1 6-8.1 6Z" />
              </svg>
            </Link>

            <Link
              href="/cart"
              aria-label="Cart"
              className="hover:text-primary-background transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="9" cy="19" r="1.6" />
                <circle cx="18" cy="19" r="1.6" />
                <path d="M3 4h2l1.5 10.5H19a1 1 0 0 0 1-.8l1.2-7H6.1" />
              </svg>
            </Link>
          </nav>
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

      {/* ── Navigation Bar ── */}
      <div className="w-full bg-background-light border-t border-border-light">
        {/* <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-4"> */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* <div className="flex items-center justify-between gap-4"> */}
          <div className="flex items-center justify-between">
            {/* <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-wrap"> */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
              {[
                { label: 'DOGS', href: '/dogs' },
                { label: 'CATS', href: '/cats' },
                { label: 'BIRDS', href: '/birds' },
                { label: 'FISHES', href: '/fishes' },
                { label: 'BRANDS', href: '#' },
                { label: 'SHOP BY BREED', href: '#' },
                { label: 'SERVICES', href: '#' },
                { label: 'PAWSCRIPTION', href: '#' },
                { label: 'PAWSSURANCE', href: '#' },
                { label: 'COMMUNITY', href: '#' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  // className="text-sm lg:text-base font-bold leading-relaxed text-text-accent font-['Nunito'] hover:text-primary-background transition-colors whitespace-nowrap"
                  className="text-[15px] lg:text-[16px] font-semibold tracking-wide text-text-accent font-['Nunito'] hover:text-primary-background transition-colors whitespace-nowrap relative"
                >
                  {label}
                </Link>
              ))}
            </nav>
            {/* Mobile: show abbreviated nav */}
            <nav className="flex lg:hidden items-center gap-4 overflow-x-auto pb-1">
              {['DOGS', 'CATS', 'BIRDS', 'FISHES'].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  className="text-sm font-bold text-text-accent font-['Nunito'] whitespace-nowrap hover:text-primary-background transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
            {/* Search icon */}
            {/* <button className="flex-shrink-0" aria-label="Search"> */}
            <button className="ml-4 flex-shrink-0" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header