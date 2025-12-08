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

const mainSkills = [
    {
        name: "Spring Boot",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        description: "High availability, event-driven architecture, asynchronous programming, multi-threading, RESTful API"
    },
    {
        name: "Go",
        level: "Intermediate",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
        description: "Go routine, Gin, multi-threading, RESTful API"
    },
    {
        name: "Flutter",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        description: "State management (BLoC), offline mode, mobile notification, published app in iOS and Android"
    },
    {
        name: "Laravel",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        description: "Data management, authentication, and restful API service"
    },
    {
        name: "React/NextJS",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "State management, realtime chat, reactflow"
    }
]

const otherSkills = [
    { name: "MySQL", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Git", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "PHP", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" },
    { name: "AWS", level: "Beginner", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" }
]

export default function Skills() {
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
                                        posthog.capture(`clicked_mobile_nav_${item.name.toLowerCase().replace(' ', '_')}_skills_page`)
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
                            <Link href="/" className="group flex items-center gap-2" onClick={() => posthog.capture('clicked_logo_skills_page')}>
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
                                    posthog.capture('clicked_mobile_menu_open_skills_page')
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
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${item.href === '/skills'
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                        : 'text-gray-900 hover:bg-gray-100'
                                        }`}
                                    onClick={() => posthog.capture(`clicked_nav_${item.name.toLowerCase().replace(' ', '_')}_skills_page`)}
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
                        <p className="text-sm font-semibold text-blue-600 mb-2">Skills</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                            Technical Expertise
                        </h1>
                        <p className="text-base leading-7 max-w-2xl" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            A comprehensive overview of my technical skills and proficiency levels across various technologies and frameworks.
                        </p>
                    </div>

                    {/* Main Skills */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>Core Technologies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {mainSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl p-6 transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(0, 0, 0, 0.1)',
                                        boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg font-bold" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                                                    {skill.name}
                                                </h3>
                                                <span
                                                    className="px-3 py-1 text-xs font-medium rounded-full text-white"
                                                    style={{
                                                        background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234))',
                                                    }}
                                                >
                                                    {skill.level}
                                                </span>
                                            </div>
                                            <p className="text-sm" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Skills */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>Additional Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {otherSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl p-4 transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(0, 0, 0, 0.1)',
                                        boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
                                    }}
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" />
                                    <h4 className="text-sm font-semibold mb-1" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                                        {skill.name}
                                    </h4>
                                    <span className="text-xs" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                                        {skill.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}