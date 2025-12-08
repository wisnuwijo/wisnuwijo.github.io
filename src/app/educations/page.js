'use client'

import Link from 'next/link'
import { useState } from 'react'
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

const education = [
    {
        title: "Binus University",
        degree: "Computer Science",
        period: "Mar 2019 - Nov 2023",
        type: "Bachelor's Degree"
    },
    {
        title: "SMKN 7 Semarang",
        degree: "Computer and Networking",
        period: "Jun 2014 - May 2018",
        type: "Vocational High School"
    }
]

const certifications = [
    {
        title: "Foundation of Project Management",
        issuer: "Coursera",
        year: "2021"
    },
    {
        title: "Information System Security Protection Knowledge",
        issuer: "Inixindo Jogja",
        year: "2021"
    },
    {
        title: "Mobile Developer (Flutter)",
        issuer: "Inixindo Jogja",
        year: "2019"
    }
]

export default function Educations() {
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
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${item.href === '/educations'
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

            {/* Main Content */}
            <div className="relative pt-32 pb-16 px-6 mt-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <p className="text-sm font-semibold text-blue-600 mb-2">Education & Certifications</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                            Academic Background
                        </h1>
                        <p className="text-base leading-7 max-w-2xl" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            My educational journey and professional certifications that have shaped my technical expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Formal Education */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>Formal Education</h2>
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{
                                    background: 'linear-gradient(to bottom, rgb(37, 99, 235), rgb(147, 51, 234))',
                                }}></div>

                                {/* Education items */}
                                <div className="space-y-8">
                                    {education.map((edu, index) => (
                                        <div key={index} className="relative pl-8">
                                            {/* Timeline dot */}
                                            <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full" style={{
                                                background: 'linear-gradient(to bottom right, rgb(37, 99, 235), rgb(147, 51, 234))',
                                                boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)'
                                            }}></div>

                                            {/* Education card */}
                                            <div
                                                className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.8)',
                                                    backdropFilter: 'blur(10px)',
                                                    border: '1px solid rgba(0, 0, 0, 0.1)',
                                                    boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
                                                }}
                                            >
                                                <h3 className="text-lg font-bold mb-1" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                                                    {edu.title}
                                                </h3>
                                                <p className="text-sm font-semibold mb-1" style={{ color: 'rgba(37, 99, 235, 1)' }}>
                                                    {edu.degree}
                                                </p>
                                                <p className="text-sm mb-2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                                                    {edu.period}
                                                </p>
                                                <span
                                                    className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                                                    style={{
                                                        background: 'rgba(37, 99, 235, 0.1)',
                                                        color: 'rgb(37, 99, 235)'
                                                    }}
                                                >
                                                    {edu.type}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>Certifications</h2>
                            <div className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.8)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(0, 0, 0, 0.1)',
                                            boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
                                        }}
                                    >
                                        <h3 className="text-lg font-bold mb-2" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                                            {cert.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-semibold" style={{ color: 'rgba(37, 99, 235, 1)' }}>
                                                {cert.issuer}
                                            </p>
                                            <span
                                                className="px-3 py-1 text-xs font-medium rounded-full text-white"
                                                style={{
                                                    background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234))',
                                                }}
                                            >
                                                {cert.year}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
