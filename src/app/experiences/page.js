'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import posthog from 'posthog-js'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Skills', href: '/skills' },
    { name: 'Education', href: '/educations' }
]

const experiences = [
    {
        title: "Technical Lead",
        company: "Jatis Mobile",
        period: "Jan 2022 - Present",
        responsibilities: [
            "Lead team of talented engineers",
            "Convert given high-level software design to low-level software design",
            "Implement unit tests and functional tests",
            "Designed APIs, Middleware, and Business logic implementation for large-scale transaction",
            "Wrote architecture documentation, and flow diagram",
            "Optimized application and API performance",
            "Troubleshoot and fixed issues across different services",
            "Managed tasks and assist team members in day-to-day problems such as debugging issues and others",
            "Helped define coding standards and development processes"
        ]
    },
    {
        title: "IT Team Lead",
        company: "PT Bromindo Mekar Mitra",
        period: "Oct 2019 - Jan 2022",
        responsibilities: [
            "Monitored and taking care of my teamwork progress",
            "Transformed business requirements into a detailed technical plan",
            "Lead and coordinate the project",
            "Grow engineers to their utmost potential"
        ]
    },
    {
        title: "Mobile Developer (Flutter)",
        company: "PT Bromindo Mekar Mitra",
        period: "Feb 2019 - Oct 2019",
        responsibilities: [
            "Using Flutter to optimize app features to be compatible with a wider variety of mobile devices",
            "Built a robust application that can work without connection to provide a better experience to the users resulting in 45% users increase",
            "Improved the app performance by reducing latency from minutes into a matter of seconds"
        ]
    },
    {
        title: "Web Developer",
        company: "PT Bromindo Mekar Mitra",
        period: "May 2018 – Feb 2019",
        responsibilities: [
            "Speed up internal team job time processing from a half-hour to seconds by digitizing all manual documents and automating tasks to reduce human error by creating web applications that handle all the flow and process"
        ]
    }
]

export default function Experiences() {
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
                                        posthog.capture(`clicked_mobile_nav_${item.name.toLowerCase().replace(' ', '_')}_experiences_page`)
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

                {/* Blue background nav */}
                <nav className="px-6 py-4" style={{
                    backgroundColor: 'rgba(0, 140, 255, 0.1)',
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                }}>
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="group flex items-center gap-2" onClick={() => posthog.capture('clicked_logo_experiences_page')}>
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
                                    posthog.capture('clicked_mobile_menu_open_experiences_page')
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
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${item.href === '/experiences'
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                            : 'text-gray-900 hover:bg-gray-100'
                                        }`}
                                    onClick={() => posthog.capture(`clicked_nav_${item.name.toLowerCase().replace(' ', '_')}_experiences_page`)}
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
            <div className="relative pt-32 pb-16 px-6 mt-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <p className="text-sm font-semibold text-blue-600 mb-2">Experiences</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                            Professional Journey
                        </h1>
                        <p className="text-base leading-7 max-w-2xl" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            My career progression from Web Developer to Technical Lead, showcasing growth in leadership and technical expertise.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5" style={{
                            background: 'linear-gradient(to bottom, rgb(37, 99, 235), rgb(147, 51, 234))',
                        }}></div>

                        {/* Experience items */}
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-8 md:pl-20">
                                    {/* Timeline dot */}
                                    <div className="absolute left-[-6px] md:left-[26px] top-2 w-3 h-3 rounded-full" style={{
                                        background: 'linear-gradient(to bottom right, rgb(37, 99, 235), rgb(147, 51, 234))',
                                        boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)'
                                    }}></div>

                                    {/* Experience card */}
                                    <div
                                        className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.8)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(0, 0, 0, 0.1)',
                                            boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
                                        }}
                                    >
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold mb-1" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                                                {exp.title}
                                            </h3>
                                            <p className="text-sm font-semibold mb-1" style={{ color: 'rgba(37, 99, 235, 1)' }}>
                                                {exp.company}
                                            </p>
                                            <p className="text-sm" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                                                {exp.period}
                                            </p>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                                                    <span className="text-blue-600 mt-1">•</span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
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