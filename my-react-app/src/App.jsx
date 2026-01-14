import { useState } from 'react'
import './App.css'
import LogoIcon from './assets/Icon Only - Purple.svg'
import { BackgroundPaths } from '@/components/background-paths'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F9F9F9] via-[#F5F6FD] to-[#E6EAFF]">
      <header className="sticky top-0 z-20 border-b border-white/40 bg-gradient-to-r from-white/80 via-[#F5F6FD]/80 to-[#E6EAFF]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Left: Nav links (desktop) */}
          <div className="hidden items-center gap-8 text-sm font-medium text-[#5C4A82] md:flex">
            <button className="inline-flex items-center gap-1 hover:text-[#1D0C46] transition-colors">
              <span>Products</span>
              <span className="text-xs">▾</span>
            </button>
            <button className="inline-flex items-center gap-1 hover:text-[#1D0C46] transition-colors">
              <span>Resources</span>
              <span className="text-xs">▾</span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center justify-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            <img
              src={LogoIcon}
              alt="Cryptique logo"
              className="h-7 w-7"
            />
            <span className="text-sm font-semibold tracking-[0.18em] text-[#2A1A4F] md:text-base">
              CRYPTIQUE
            </span>
          </div>

          {/* Right: CTA + mobile menu button */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button className="hidden rounded-full bg-[#1D0C46] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1D0C46]/35 hover:bg-[#140732] md:inline-flex">
              Request Free Trial
            </button>

            {/* Mobile menu toggle */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D3D1E8] bg-white text-[#1D0C46] shadow-sm md:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Toggle navigation</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-4 rounded-full bg-[#1D0C46]" />
                <span className="block h-0.5 w-4 rounded-full bg-[#1D0C46]" />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {isMobileMenuOpen && (
          <div className="border-t border-white/60 bg-white/90 px-4 py-3 text-sm font-medium text-[#5C4A82] backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-3">
              <button className="inline-flex items-center justify-between hover:text-[#1D0C46]">
                <span>Products</span>
                <span className="text-xs">▾</span>
              </button>
              <button className="inline-flex items-center justify-between hover:text-[#1D0C46]">
                <span>Resources</span>
                <span className="text-xs">▾</span>
              </button>
              <button className="mt-2 w-full rounded-full bg-[#1D0C46] px-4 py-2 text-center text-sm font-semibold text-white shadow-md shadow-[#1D0C46]/35">
                Request Free Trial
              </button>
            </div>
          </div>
        )}
      </header>

      <BackgroundPaths />
    </div>
  )
}

export default App
