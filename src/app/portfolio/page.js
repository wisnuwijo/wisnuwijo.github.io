'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import posthog from 'posthog-js'
import {
  XMarkIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const projectData = {
  whatsapp: {
    id: "whatsapp",
    title: "WhatsApp Business API",
    company: "Jatis Mobile",
    role: "Software Engineer",
    category: "backend",
    tech: ["Java", "Spring Boot", "Apache Artemis", "Microservices", "RESTful APIs", "High Availability"],
    overview: "Mission-critical enterprise messaging infrastructure enabling high-volume automated messaging at scale with high availability, event queues, and fault-tolerant architecture.",
    challenges: [
      "Handling high-volume bursts during marketing campaigns without dropping messages or overwhelming downstream Meta endpoints.",
      "Preventing message duplication in network disconnect/retry scenarios.",
      "Providing sub-second API acknowledgement to enterprise ERP/CRM callers."
    ],
    solution: "Implemented an event-driven architecture using Apache Artemis JMS queues as a buffer between ingress HTTP endpoints and consumer worker threads. Configured sliding-window rate limiters, idempotent database transaction keys, and automated health checks.",
    impact: "Guaranteed zero message loss under high concurrency, sustained high availability SLAs, and established standard architecture templates reused across multiple enterprise services."
  },
  firecek: {
    id: "firecek",
    title: "Firecek - Fire Extinguisher Management System",
    company: "PT Bromindo Mekar Mitra",
    role: "Mobile Software Engineer",
    category: "mobile",
    tech: ["Flutter", "Dart", "Laravel", "MySQL", "Offline-First Sync", "QR Code Scanning"],
    overview: "Comprehensive digital ecosystem for auditing, tracking, and maintaining thousands of fire extinguishers across commercial and industrial facilities.",
    challenges: [
      "Technicians routinely inspect equipment in underground basements and factory floors with zero cellular signal.",
      "Legacy paper inspections took up to 30 minutes per unit and were prone to inspection fraud."
    ],
    solution: "Engineered an offline-first mobile app using Flutter and local SQLite databases. Technicians scan QR codes and log pressure gauges offline. When connection is restored, background workers resolve conflicts and sync to the cloud.",
    impact: "Drove a 45% increase in active users, reduced inspection recording time to seconds, and eliminated manual data entry backlogs."
  },
  final: {
    id: "final",
    title: "Final - Dynamic Questionnaire Application",
    company: "PT Bromindo Mekar Mitra",
    role: "Full-Stack Developer",
    category: "web",
    tech: ["ReactJS", "Laravel", "REST APIs", "MySQL", "Dynamic Form Engine"],
    overview: "Dynamic, rule-based interactive survey and client profiling platform designed to automate incoming sales queries and customer assessment pipelines.",
    challenges: [
      "Sales engineers spent extensive time asking repetitive preliminary technical sizing questions.",
      "Form requirements varied depending on customer industry and facility scale."
    ],
    solution: "Developed a reactive questionnaire engine in ReactJS connected to a Laravel backend, calculating dynamic routing trees based on previous answers.",
    impact: "Streamlined customer inquiry processing time from half an hour to instant automated qualification, boosting lead qualification speed for the commercial sales team."
  },
  ruangwarga: {
    id: "ruangwarga",
    title: "Ruang Warga - Civil Registration & Governance",
    company: "PT Bromindo Mekar Mitra",
    role: "Mobile & Web Developer",
    category: "mobile",
    tech: ["Flutter", "Laravel", "MySQL", "Geographic Data", "Push Notifications"],
    overview: "Citizen-focused administrative portal allowing neighborhood residents to access municipal services, submit civic permits, and view neighborhood announcements transparently.",
    challenges: [
      "Manual paper filings led to lost citizen requests and administrative bottlenecks for local ward administrators."
    ],
    solution: "Built an intuitive cross-platform Flutter application backed by Laravel REST APIs, offering real-time status tracking, document uploads, and citizen push notifications.",
    impact: "Empowered local governance with clean digital audit trails, eliminating lost citizen paperwork and cutting processing turnarounds by over 70%."
  },
  clockin: {
    id: "clockin",
    title: "ClockIN - Intelligent Attendance System",
    company: "Independent Project",
    role: "Software Engineer",
    category: "backend",
    tech: ["Go (Gin)", "Flutter", "PostgreSQL", "Geofencing", "Microservices"],
    overview: "Resilient, lightweight attendance management platform combining mobile geofencing with a high-throughput Go backend for instant check-in verification.",
    challenges: [
      "Peak check-in spikes between 08:50 - 09:05 caused traditional relational MVC backends to suffer high connection wait times."
    ],
    solution: "Engineered a microservice in Go using the Gin framework and Goroutine worker pools to process check-ins in microseconds, verifying GPS coordinates within valid geofence polygons.",
    impact: "Achieved sub-50ms API response times during simultaneous shift starts while minimizing server resource footprint."
  }
}

export default function PortfolioPage() {
  const [currentFilter, setCurrentFilter] = useState('all')
  const [activeModalProject, setActiveModalProject] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          posthog.capture('closed_bottom_sheet', { project: activeModalProject.title, source: 'escape_key' })
          setActiveModalProject(null)
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [activeModalProject])

  const filteredProjects = Object.entries(projectData).filter(([key, project]) => {
    if (currentFilter === 'all') return true
    return project.category === currentFilter
  })

  return (
    <div className="relative pt-10 pb-24 px-4 sm:px-6 lg:px-8">
      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto space-y-16">
          
          {/* Eyebrow & Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="pill-tag-soft">04 / PRODUCTION DELIVERABLES</span>
                <span className="text-xs text-ink-mute font-light tnum">5 Enterprise &amp; Scaled Solutions</span>
              </div>
              <h1 className="display-xxl text-ink">
                Featured software systems and production architectures.
              </h1>
              <p className="body-lg text-ink-secondary max-w-2xl font-light leading-relaxed">
                A curated selection of high-concurrency message brokers, offline-first mobile inspection apps, and reactive web applications I engineered for stability.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {['all', 'backend', 'mobile', 'web'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCurrentFilter(cat)
                    posthog.capture('filter_projects', { category: cat })
                  }}
                  className={`filter-btn ${
                    currentFilter === cat
                      ? 'btn-primary-pill !text-xs !py-1.5 !px-3.5'
                      : 'btn-secondary !text-xs !py-1.5 !px-3.5 !border-hairline text-ink-secondary'
                  }`}
                >
                  {cat === 'all' ? 'All (5)' : cat === 'backend' ? 'Backend & Queues' : cat === 'mobile' ? 'Mobile (Flutter)' : 'Web & Fullstack'}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(([key, project]) => (
              <article
                key={key}
                onClick={() => {
                  posthog.capture(`clicked_project_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
                  setActiveModalProject(project)
                }}
                className="card-feature-light flex flex-col justify-between cursor-pointer group hover:border-primary/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="pill-tag-soft">
                      {project.category === 'backend' ? 'ENTERPRISE GATEWAY' : project.category === 'mobile' ? 'MOBILE & IOT' : 'WEB APPLICATION'}
                    </span>
                    <span className="caption text-ink-mute">{project.company || 'Independent'}</span>
                  </div>
                  <h2 className="display-md text-ink group-hover:text-primary transition-colors">{project.title}</h2>
                  <p className="body-md text-ink-secondary font-light line-clamp-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>
                
                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-ink-secondary">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-canvas-soft border border-hairline">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-hairline flex justify-between items-center text-sm font-normal text-primary">
                    <span>View Project Details</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Practical Engineering Highlights Band */}
          <div className="card-cream-band space-y-4">
            <span className="pill-tag-soft !bg-canvas !text-ink font-mono">ENGINEERING APPROACH</span>
            <h3 className="display-md text-ink">Building Dependable Software for Real Production Needs</h3>
            <p className="body-md text-ink-secondary max-w-3xl font-light leading-relaxed">
              In every project, my focus has been on delivering software that simply works well in production — whether that meant preventing message loss with buffered queue architectures, enabling field technicians to inspect equipment reliably offline, or keeping API latency under 50ms during peak attendance spikes. I enjoy turning complex requirements into clean, dependable systems.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="btn-primary-pill !text-xs !py-2 !px-4"
                onClick={() => posthog.capture('clicked_portfolio_cta_about')}
              >
                <span>Get in Touch →</span>
              </Link>
              <Link
                href="/experiences"
                className="btn-secondary !text-xs !py-2 !px-4"
                onClick={() => posthog.capture('clicked_portfolio_cta_exp')}
              >
                <span>Work Experience</span>
              </Link>
              <Link
                href="/skills"
                className="btn-secondary !text-xs !py-2 !px-4"
                onClick={() => posthog.capture('clicked_portfolio_cta_skills')}
              >
                <span>Technical Skills</span>
              </Link>
            </div>
          </div>

        </div>

      {/* PROJECT DETAIL MODAL BOTTOM SHEET */}
      {mounted && activeModalProject && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="bottom-sheet-title"
          className="fixed inset-0 z-50 flex flex-col justify-end bg-ink/60 backdrop-blur-sm animate-backdrop-fade-in"
          onClick={() => {
            posthog.capture('closed_bottom_sheet', { project: activeModalProject.title, source: 'backdrop_click' })
            setActiveModalProject(null)
          }}
        >
          <div
            className="w-full max-w-3xl mx-auto bg-canvas rounded-t-[28px] border-t border-x border-hairline shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-sheet-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grab / Drag Handle */}
            <div className="pt-3 pb-2 flex justify-center cursor-grab active:cursor-grabbing select-none flex-shrink-0">
              <span className="w-12 h-1.5 bg-hairline-input/70 rounded-full" aria-hidden="true" />
            </div>

            {/* Sheet Header */}
            <div className="px-6 sm:px-8 pt-1 pb-4 border-b border-hairline flex items-start justify-between gap-4 flex-shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="pill-tag-soft">{activeModalProject.company || 'Independent'}</span>
                  <span className="caption text-ink-mute">
                    Role: <strong className="text-ink font-normal">{activeModalProject.role}</strong>
                  </span>
                </div>
                <h3 id="bottom-sheet-title" className="display-md text-ink pt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  posthog.capture('closed_bottom_sheet', { project: activeModalProject.title, source: 'header_x_button' })
                  setActiveModalProject(null)
                }}
                className="p-2 -mr-2 rounded-lg text-ink-mute hover:text-ink hover:bg-canvas-soft transition-colors flex-shrink-0"
                aria-label="Close bottom sheet"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-6 overscroll-contain flex-1 min-h-0">
              <div>
                <p className="body-md text-ink-secondary font-light leading-relaxed">
                  {activeModalProject.overview}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="caption font-mono uppercase text-primary font-semibold">Architectural Challenge</div>
                <ul className="list-disc list-inside text-xs text-ink-secondary space-y-1.5 font-light">
                  {activeModalProject.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <div className="caption font-mono uppercase text-ink font-semibold">Engineered Solution</div>
                <p className="body-md text-ink-secondary font-light leading-relaxed">{activeModalProject.solution}</p>
              </div>

              <div className="space-y-2">
                <div className="caption font-mono uppercase text-primary font-semibold">Measurable Outcome</div>
                <p className="body-md text-ink-secondary p-3.5 rounded-xl bg-canvas-soft border border-hairline font-light">
                  {activeModalProject.impact}
                </p>
              </div>

              <div className="space-y-2">
                <div className="caption text-ink-mute">Technologies Used:</div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-ink-secondary">
                  {activeModalProject.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-canvas-soft border border-hairline">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sheet Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-hairline bg-canvas-soft/60 flex items-center justify-between flex-shrink-0">
              <span className="text-xs text-ink-mute font-mono">
                Project Detail View
              </span>
              <button
                onClick={() => {
                  posthog.capture('closed_bottom_sheet', { project: activeModalProject.title, source: 'footer_close_button' })
                  setActiveModalProject(null)
                }}
                className="btn-secondary !text-xs !border-hairline"
              >
                Close Sheet
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  )
}