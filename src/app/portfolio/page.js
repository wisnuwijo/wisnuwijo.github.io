'use client'

import Link from 'next/link'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import posthog from 'posthog-js'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Skills', href: '/skills' },
    { name: 'Education', href: '/educations' }
]

export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState(null)
    const cancelButtonRef = useRef(null)

    const projects = [
        {
            title: "WhatsApp Business API",
            description: "Send and receive WhatsApp messages at scale",
            role: "Technical Lead",
            company: "Jatis Mobile",
            tech: ["Java", "Spring Boot", "Apache Artemis"],
            details: "Enterprise messaging solution with high availability and event-driven architecture."
        },
        {
            title: "Firecek",
            description: "Fire extinguisher management system",
            role: "Team Leader",
            company: "PT Bromindo Mekar Mitra",
            tech: ["Flutter", "Laravel"],
            details: "Comprehensive solution for setup, monitoring, and inspection of fire extinguishers."
        },
        {
            title: "Final",
            description: "Dynamic questionnaire application",
            role: "Developer",
            company: "PT Bromindo Mekar Mitra",
            tech: ["ReactJS", "Laravel"],
            details: "Streamlined inquiry processing for marketing teams."
        },
        {
            title: "Ruang Warga",
            description: "Civil registration application",
            role: "Developer",
            company: "PT Bromindo Mekar Mitra",
            tech: ["Flutter", "Laravel"],
            details: "Empowering local governance with data-driven decision-making."
        },
        {
            title: "ClockIN",
            description: "Attendance tracking application",
            role: "Lead Developer",
            company: "",
            tech: ["Flutter", "Go (Gin)"],
            details: "Reliable attendance solution for businesses and individuals."
        }
    ]

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
                                        posthog.capture(`clicked_mobile_nav_${item.name.toLowerCase().replace(' ', '_')}_portfolio_page`)
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
                            <Link href="/" className="group flex items-center gap-2" onClick={() => posthog.capture('clicked_logo_portfolio_page')}>
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
                                    posthog.capture('clicked_mobile_menu_open_portfolio_page')
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
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${item.href === '/portfolio'
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                            : 'text-gray-900 hover:bg-gray-100'
                                        }`}
                                    onClick={() => posthog.capture(`clicked_nav_${item.name.toLowerCase().replace(' ', '_')}_portfolio_page`)}
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
                        <p className="text-sm font-semibold text-blue-600 mb-2">Portfolio</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                            My Projects
                        </h1>
                        <p className="text-base leading-7 max-w-2xl" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            A collection of projects I've worked on, showcasing my expertise in full-stack development, leadership, and innovative solutions.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(0, 0, 0, 0.1)',
                                    boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
                                }}
                                onClick={() => {
                                    posthog.capture(`clicked_project_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
                                    setModalTitle(project.title)
                                    setModalContent(
                                        <div className="space-y-3">
                                            <p><strong>Role:</strong> {project.role}</p>
                                            {project.company && <p><strong>Company:</strong> {project.company}</p>}
                                            <p><strong>Technologies:</strong> {project.tech.join(', ')}</p>
                                            <p className="mt-4">{project.details}</p>
                                        </div>
                                    )
                                    setOpen(true)
                                }}
                            >
                                <h3 className="text-xl font-bold mb-2" style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
                                    {project.title}
                                </h3>
                                <p className="text-sm mb-4" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full"
                                            style={{
                                                background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234))',
                                                color: 'white'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <button className="text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors">
                                    Learn more →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Details Modal */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-6 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <InformationCircleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                                <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                                                    {modalTitle}
                                                </Dialog.Title>
                                                <div className="mt-4 text-sm text-gray-600">
                                                    {modalContent}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}