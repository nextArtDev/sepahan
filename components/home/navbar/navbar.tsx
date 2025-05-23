'use client'
import { cn } from '@/lib/utils'
import { HoveredLink, Menu, MenuItem, ProductItem } from './navbar-menu'
import { useState } from 'react'
import Image from 'next/image'
import MenuSvg from './menu-svg'
import SearchSvg from './search-svg'
export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0  max-w-sm md:max-w-2xl mx-auto z-50 ',
        className
      )}
    >
      {/* mobile */}
      <Menu
        className="relative bg-background/20 backdrop-blur-sm p-1 h-10 flex sm:hidden justify-between items-center "
        setActive={setActive}
      >
        <div>
          <MenuSvg isOpen={false} />
        </div>
        <div className="absolute left-1/2 -translate-x-3/4">
          <figure className="relative flex items-center justify-center p-0 w-20 h-20">
            <Image
              fill
              alt="sepahan logo"
              src={'/sepahan-logo.png'}
              className=""
            />
          </figure>
        </div>
        <div className="self-start">
          <SearchSvg />
        </div>
      </Menu>

      {/* desktop */}
      <Menu className="hidden sm:block" setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
