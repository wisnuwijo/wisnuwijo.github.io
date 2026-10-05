'use client'

import Link from 'next/link'
import posthog from 'posthog-js'

export default function Footer() {
  return (
    <footer className="border-t py-12 px-4 sm:px-6 lg:px-8 bg-canvas border-hairline text-ink-mute transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col">
            <div className="font-normal text-ink">Wisnu Wijokangko</div>
            <div className="caption">Software Engineer • Kudus, Central Java, Indonesia 🇮🇩</div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-light">
            <Link
              href="/"
              className="hover:text-primary transition-colors"
              onClick={() => posthog.capture('clicked_footer_nav', { target: 'home' })}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
              onClick={() => posthog.capture('clicked_footer_nav', { target: 'about' })}
            >
              About
            </Link>
            <Link
              href="/experiences"
              className="hover:text-primary transition-colors"
              onClick={() => posthog.capture('clicked_footer_nav', { target: 'experiences' })}
            >
              Experience
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-primary transition-colors"
              onClick={() => posthog.capture('clicked_footer_nav', { target: 'portfolio' })}
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="hover:text-primary transition-colors"
              onClick={() => posthog.capture('clicked_footer_nav', { target: 'skills' })}
            >
              Skills
            </Link>
            <Link
              href="/educations"
              className="hover:text-primary transition-colors"
              onClick={() => posthog.capture('clicked_footer_nav', { target: 'educations' })}
            >
              Education
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
