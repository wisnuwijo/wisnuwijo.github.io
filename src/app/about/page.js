'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, InboxArrowDownIcon } from '@heroicons/react/24/outline'
import posthog from 'posthog-js'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Skills', href: '/skills' },
    { name: 'Education', href: '/educations' }
]

export default function About() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen w-screen relative overflow-hidden" style={{
            backgroundColor: '#ffffffff',
            backgroundImage: `
                linear-gradient(90deg, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
                linear-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0',
        }}>
            {/* Mobile Menu Dialog */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l shadow-2xl" style={{
                    borderLeft: '3px solid',
                    borderImage: 'linear-gradient(to bottom, rgb(37, 99, 235), rgb(147, 51, 234)) 1'
                }}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                                W
                            </div>
                            <span className="font-semibold text-gray-900">Menu</span>
                        </div>
                        <button
                            type="button"
                            className="rounded-xl p-2.5 transition-all duration-200 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-xl px-4 py-3 text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100"
                                    onClick={() => {
                                        posthog.capture(`clicked_mobile_nav_${item.name.toLowerCase().replace(' ', '_')}_about_page`)
                                        setMobileMenuOpen(false)
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>

            {/* Navigation Bar - Stuck to top with gradient top border */}
            <div className="fixed top-0 left-0 right-0 z-20">
                {/* Gradient top border */}
                <div className="h-[10px]" style={{
                    background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234))',
                }}></div>

                {/* White background nav */}
                <nav className="px-6 py-4" style={{
                    backgroundColor: 'rgba(0, 140, 255, 0.1)',
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                }}>
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="group flex items-center gap-2" onClick={() => posthog.capture('clicked_logo_about_page')}>
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    W
                                </div>
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-900 transition-all duration-200 hover:bg-gray-100"
                                onClick={() => {
                                    posthog.capture('clicked_mobile_menu_open_about_page')
                                    setMobileMenuOpen(true)
                                }}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${item.href === '/about'
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                            : 'text-gray-900 hover:bg-gray-100'
                                        }`}
                                    onClick={() => posthog.capture(`clicked_nav_${item.name.toLowerCase().replace(' ', '_')}_about_page`)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="relative pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Right Column - Image (appears first on mobile) */}
                        <div className="flex items-center justify-center min-h-[400px] lg:min-h-[600px] order-1 lg:order-2">
                            <div className="relative rounded-full overflow-hidden shadow-2xl max-w-[50%]" style={{
                                background: 'linear-gradient(to bottom right, rgb(37, 99, 235), rgb(147, 51, 234))',
                                padding: '4px'
                            }}>
                                <div className="rounded-full overflow-hidden bg-white">
                                    <img
                                        className="w-full h-auto"
                                        src="/images/wisnu.jpg"
                                        alt="Wisnu Wijokangko"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Left Column - Text Content (appears second on mobile) */}
                        <div className="space-y-8 lg:mt-20 order-2 lg:order-1">
                            {/* Header */}
                            <div>
                                <p className="text-sm font-semibold text-blue-600 mb-2">About</p>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                                    Wisnu Wijokangko
                                </h1>
                            </div>

                            {/* Description */}
                            <div className="space-y-4 text-base leading-7" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                                <p>
                                    Passionate software engineer with a specialization in backend development. With years of experience in the tech industry, I've had the privilege of leading talented teams of engineers, guiding them towards success. My journey in this field has been driven by an insatiable curiosity and a constant desire to learn new things.
                                </p>
                                <p>
                                    Hailing from the charming city of Kudus in Central Java (🇮🇩), I bring a unique perspective to my work. I am dedicated to helping companies and teams progress, whether it's through optimizing code, building robust systems, or fostering a culture of continuous improvement.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6 pt-4">
                                <h2 className="text-lg font-semibold" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>Get in Touch</h2>
                                <ul className="space-y-4">
                                    <li className="flex gap-x-3 items-start">
                                        <InboxArrowDownIcon className="h-6 w-6 flex-none text-blue-600" aria-hidden="true" />
                                        <div>
                                            <strong className="font-semibold block" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>Email</strong>
                                            <a href="mailto:dti.wisnu@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors" onClick={() => posthog.capture('clicked_email_link')}>
                                                dti.wisnu@gmail.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex gap-x-3 items-start">
                                        <svg className="h-6 w-6 flex-none text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <div>
                                            <strong className="font-semibold block" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>LinkedIn</strong>
                                            <a href="https://www.linkedin.com/in/wisnuwijo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors" onClick={() => posthog.capture('clicked_linkedin_link')}>
                                                linkedin.com/in/wisnuwijo
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Navigation Links */}
                            <div className="pt-8">
                                <h2 className="text-lg font-semibold mb-4" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>Explore More</h2>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/portfolio" className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105" onClick={() => posthog.capture('clicked_explore_portfolio')}>
                                        Portfolio
                                    </Link>
                                    <Link href="/skills" className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105" onClick={() => posthog.capture('clicked_explore_skills')}>
                                        Skills
                                    </Link>
                                    <Link href="/experiences" className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105" onClick={() => posthog.capture('clicked_explore_experiences')}>
                                        Experiences
                                    </Link>
                                    <Link href="/educations" className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105" onClick={() => posthog.capture('clicked_explore_education')}>
                                        Education
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
