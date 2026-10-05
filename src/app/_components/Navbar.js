'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import posthog from 'posthog-js'
import {
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Experience', href: '/experiences', id: 'experience' },
  { name: 'Projects', href: '/portfolio', id: 'portfolio' },
  { name: 'Skills', href: '/skills', id: 'skills' },
  { name: 'Education', href: '/educations', id: 'education' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  const isDarkPage = false

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const triggerToast = (msg) => {
    setToastMessage(msg)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3500)
  }

  const handleCopyEmail = () => {
    const email = 'dti.wisnu@gmail.com'
    navigator.clipboard.writeText(email).then(() => {
      triggerToast('dti.wisnu@gmail.com copied to clipboard!')
      posthog.capture('copied_email_clipboard')
    }).catch(() => {
      triggerToast('Email: dti.wisnu@gmail.com')
    })
  }

  return (
    <>
      {/* Floating Toast Notification */}
      <div className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-brand-dark-900 text-white shadow-level2">
          <CheckCircleIcon className="w-5 h-5 text-primary-bg-subdued-hover" />
          <span className="text-sm font-normal">{toastMessage}</span>
        </div>
      </div>

      {/* NAVIGATION BAR (Sticky on scroll with transparent background at top) */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? isDarkPage
            ? 'bg-brand-dark-900/90 backdrop-blur-md border-b border-white/10 shadow-sm'
            : 'bg-white/85 backdrop-blur-md border-b border-hairline/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className={`max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-200 ${
          isScrolled ? 'py-3.5' : 'pt-6 pb-4'
        } ${isDarkPage ? 'text-white' : 'text-ink'}`}>
        
        {/* Brand Logo & Profile Photo */}
        <Link
          href="/"
          className="flex items-center gap-3 group text-decoration-none"
          onClick={() => posthog.capture('nav_logo_clicked')}
        >
          <img
            src="/images/wisnu.jpg"
            alt="Wisnu Wijokangko"
            width={40}
            height={40}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0 transition-transform duration-200 group-hover:scale-105 ${
              isDarkPage
                ? 'border border-white/20 shadow-sm'
                : 'border border-hairline shadow-sm'
            }`}
          />
          <div className="flex flex-col">
            <span className={`font-normal text-base tracking-tight leading-tight ${isDarkPage ? 'text-white' : 'text-ink'}`}>
              Wisnu Wijokangko
            </span>
            <span className={`text-[12px] font-light ${isDarkPage ? 'text-white/60' : 'text-ink-mute'}`}>
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className={`hidden lg:flex items-center gap-6 body-md bg-transparent ${isDarkPage ? 'text-white/70' : 'text-ink-secondary'}`}>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => posthog.capture(`clicked_nav_${item.id}`)}
                className={`transition-colors relative py-1 ${
                  isActive
                    ? isDarkPage ? 'text-white font-normal' : 'text-primary font-normal'
                    : isDarkPage ? 'hover:text-white' : 'hover:text-primary'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                    isDarkPage ? 'bg-primary-bg-subdued-hover' : 'bg-primary'
                  }`}></span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Recruiter Fast-Action Pills */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleCopyEmail}
            className={`btn-secondary !text-xs !py-2 !px-3.5 !border-hairline !bg-transparent ${
              isDarkPage
                ? '!text-white !border-white/20 hover:!bg-white/10'
                : 'text-ink-secondary hover:!border-primary hover:!bg-white/40'
            }`}
          >
            <span>Copy Email</span>
          </button>

          <Link
            href="/about"
            className="btn-primary-pill !text-xs !py-2 !px-4"
            onClick={() => posthog.capture('cta_get_in_touch_nav')}
          >
            <span>Get in Touch</span>
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`lg:hidden p-2 rounded-lg bg-transparent ${isDarkPage ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-white/60'}`}
          onClick={() => {
            posthog.capture('clicked_mobile_menu_toggle')
            setMobileMenuOpen(!mobileMenuOpen)
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute inset-x-0 top-full border-b p-6 shadow-level2 space-y-4 backdrop-blur-md ${
          isDarkPage ? 'bg-brand-dark-900/95 border-white/10 text-white' : 'bg-white/95 border-hairline text-ink'
        }`}>
          <div className="flex flex-col gap-3 body-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  posthog.capture(`clicked_mobile_nav_${item.id}`)
                  setMobileMenuOpen(false)
                }}
                className={`py-1 ${
                  pathname === item.href 
                    ? isDarkPage ? 'text-primary-bg-subdued-hover font-normal' : 'text-primary font-normal' 
                    : isDarkPage ? 'hover:text-white' : 'hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-inherit flex flex-col gap-2">
            <button
              onClick={() => { handleCopyEmail(); setMobileMenuOpen(false); }}
              className={`btn-secondary w-full justify-center !text-sm !bg-transparent ${
                isDarkPage ? '!text-white !border-white/20' : ''
              }`}
            >
              dti.wisnu@gmail.com (Copy)
            </button>
            <Link
              href="/about"
              onClick={() => {
                posthog.capture('cta_get_in_touch_mobile')
                setMobileMenuOpen(false)
              }}
              className="btn-primary-pill w-full justify-center !text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
