'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Skills', href: '/skills' },
    { name: 'Education', href: '/educations' }
]

export default function Index() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [yoe, setYoe] = useState(0)

    useEffect(() => {
        const yoe = new Date().getFullYear() - 2018
        setYoe(yoe)
    }, [])

    return (
        <div className="h-screen w-screen relative overflow-hidden" style={{
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
                                    onClick={() => setMobileMenuOpen(false)}
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

                {/* Blue background nav */}
                <nav className="px-6 py-4" style={{
                    backgroundColor: 'rgba(0, 140, 255, 0.1)',
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                }}>
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="group flex items-center gap-2">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    W
                                </div>
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-900 transition-all duration-200 hover:bg-gray-100"
                                onClick={() => setMobileMenuOpen(true)}
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
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${item.href === '/'
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                        : 'text-gray-900 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
                    </div>
                </nav>
            </div>

            {/* Main content */}
            <div className="w-full h-full relative z-10 flex flex-col pt-24">
                {/* Content area - centered */}
                <div className="flex-1 flex items-center justify-center overflow-y-auto">
                    <div className="text-center space-y-4 w-full py-8">
                        <div className="px-6 max-w-4xl mx-auto">
                            {/* Avatar */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-xl">
                                    <div className="w-full h-full rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold" style={{
                                        color: 'rgba(255, 255, 255, 0.95)',
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(142, 209, 252, 0.15) 100%)',
                                        backdropFilter: 'blur(40px) saturate(100%)',
                                    }}>
                                        W
                                    </div>
                                </div>
                            </div>

                            {/* Greeting badge */}
                            <div className="flex justify-center mb-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium" style={{
                                    color: 'rgba(0, 0, 0, 0.7)',
                                    background: 'rgba(0, 0, 0, 0.05)',
                                    backdropFilter: 'blur(30px) saturate(150%)',
                                    border: '1px solid rgba(0, 0, 0, 0.1)',
                                }}>
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    Available for opportunities
                                </div>
                            </div>

                            {/* Main heading */}
                            <div className="space-y-3 mb-4">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                                    Hello! I am
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Wisnu Wijokangko
                                    </span>
                                </h1>
                                <p className="mt-3 text-sm md:text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                    Senior software engineer with {yoe}+ years of technical experience in designing and building user-friendly applications and a proven track record of leadership.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <a
                                    href="/about"
                                    className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto"
                                >
                                    <span className="relative z-10">Get to know me</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </a>
                                <a
                                    href="/portfolio"
                                    className="group px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
                                    style={{
                                        color: 'rgba(0, 0, 0, 0.8)',
                                        background: 'rgba(0, 0, 0, 0.05)',
                                        backdropFilter: 'blur(30px) saturate(150%)',
                                        border: '1px solid rgba(0, 0, 0, 0.15)',
                                    }}
                                >
                                    See Portfolio
                                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrolling feature cards - Fixed at bottom */}
                <div className="w-full" style={{
                    background: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                }}>
                    <div className="overflow-hidden w-full py-6">
                        <div className="flex gap-2 scroll-rtl">
                            {[
                                { icon: '💼', label: '5+ Years', desc: 'Experience' },
                                { icon: '🚀', label: 'Full Stack', desc: 'Development' },
                                { icon: '👥', label: 'Leadership', desc: 'Proven Track' },
                                { icon: '⚡', label: 'Performance', desc: 'Optimization' },
                                { icon: '🎨', label: 'UI/UX', desc: 'Design' },
                                { icon: '☁️', label: 'Cloud', desc: 'Architecture' },
                                { icon: '📱', label: 'Mobile', desc: 'Development' },
                                { icon: '🔧', label: 'DevOps', desc: 'CI/CD' },
                                // Duplicate items for seamless loop
                                { icon: '💼', label: '5+ Years', desc: 'Experience' },
                                { icon: '🚀', label: 'Full Stack', desc: 'Development' },
                                { icon: '👥', label: 'Leadership', desc: 'Proven Track' },
                                { icon: '⚡', label: 'Performance', desc: 'Optimization' },
                                { icon: '🎨', label: 'UI/UX', desc: 'Design' },
                                { icon: '☁️', label: 'Cloud', desc: 'Architecture' },
                                { icon: '📱', label: 'Mobile', desc: 'Development' },
                                { icon: '🔧', label: 'DevOps', desc: 'CI/CD' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg px-3 py-2 hover:scale-105 transition-all duration-300 flex-shrink-0 flex items-center gap-2 min-w-[160px]"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.9)',
                                        backdropFilter: 'blur(30px) saturate(150%)',
                                        border: '1px solid rgba(255, 255, 255, 0.5)',
                                        boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
                                    }}
                                >
                                    <div className="text-xl">{item.icon}</div>
                                    <div className="text-left">
                                        <div className="font-semibold text-xs" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>{item.label}</div>
                                        <div className="text-[10px]" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
