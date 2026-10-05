'use client'

import { useState } from 'react'
import Link from 'next/link'
import posthog from 'posthog-js'
import { useYOE } from '@/lib/useYOE'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    title: "Technical Lead",
    company: "Jatis Mobile",
    period: "Jan 2022 — Present",
    location: "Jakarta / Remote",
    isCurrent: true,
    summary: "Leading backend architecture, system integrations, and team delivery for enterprise clients using the WhatsApp Business API.",
    responsibilities: [
      "Lead and coordinate sprint planning, daily standups, and task delivery for the engineering team.",
      "Translate business and high-level requirements into clear, actionable technical specifications.",
      "Design and build RESTful APIs and middleware to handle high-volume enterprise transactions.",
      "Implement Apache Artemis (JMS) message queues for reliable asynchronous communication.",
      "Write comprehensive architecture documentation, system flow diagrams, and technical decision records.",
      "Profile and optimize API response times and resolve performance bottlenecks across services.",
      "Write automated unit and integration tests to ensure software reliability and stability.",
      "Establish coding standards, conduct regular code reviews, and support team members' professional growth."
    ],
    tech: ["Java", "Spring Boot", "Apache Artemis (JMS)", "Microservices", "Distributed Systems", "RESTful APIs"]
  },
  {
    title: "IT Team Lead",
    company: "PT Bromindo Mekar Mitra",
    period: "Oct 2019 — Jan 2022",
    location: "Semarang / Kudus, Indonesia",
    isCurrent: false,
    duration: "2 yrs 4 mos",
    summary: "Managed IT product development, transformed business requirements into sprint roadmaps, and supported developer growth.",
    responsibilities: [
      "Turned business requirements into clear project plans and sprint backlogs.",
      "Monitored project delivery, code quality, and release timelines.",
      "Coordinated cross-functional work between design, development, and QA teams.",
      "Mentored developers through regular pair programming sessions and code reviews.",
      "Communicated progress, technical trade-offs, and project timelines with company leadership."
    ],
    tech: ["Technical Roadmapping", "Sprint Coordination", "Engineer Mentorship", "Agile / Scrum"]
  },
  {
    title: "Mobile Developer (Flutter)",
    company: "PT Bromindo Mekar Mitra",
    period: "Feb 2019 — Oct 2019",
    location: "Semarang, Indonesia",
    isCurrent: false,
    duration: "9 mos",
    highlight: "+45% User Increase via Offline-First Mobile Sync",
    summary: "Built cross-platform mobile solutions using Flutter with offline-first synchronization for field technicians.",
    responsibilities: [
      "Developed mobile application features in Flutter to support a wide range of devices.",
      "Implemented offline-first functionality with SQLite so field technicians could work without cellular connection, increasing active users by 45%.",
      "Improved application responsiveness by caching data locally and syncing in the background.",
      "Implemented the BLoC pattern for predictable state management and clean UI structure."
    ],
    tech: ["Flutter", "Dart", "BLoC Pattern", "Offline-First Sync", "SQLite", "Push Notifications"]
  },
  {
    title: "Web Developer",
    company: "PT Bromindo Mekar Mitra",
    period: "May 2018 — Feb 2019",
    location: "Semarang, Indonesia",
    isCurrent: false,
    duration: "10 mos",
    highlight: "Reduced Inspection Process Time from 30m ➔ 2s",
    summary: "Digitized paper-based inspection procedures into automated web applications, reducing turnaround time and data entry errors.",
    responsibilities: [
      "Automated internal inspection paperwork into web workflows, reducing processing time from half an hour to seconds.",
      "Developed database-backed web applications with Laravel and MySQL to manage operational workflows.",
      "Added automated form validation to eliminate common data entry errors in inspection reports."
    ],
    tech: ["PHP", "Laravel", "MySQL", "Workflow Automation", "JavaScript", "REST APIs"]
  }
]

export default function ExperiencesPage() {
  const yoe = useYOE()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

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
    <div className="relative pt-10 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Floating Toast Notification */}
      <div className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-brand-dark-900 text-white shadow-level2">
          <CheckCircleIcon className="w-5 h-5 text-primary-bg-subdued-hover" />
          <span className="text-sm font-normal">{toastMessage}</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto space-y-16">
          
          {/* Eyebrow & Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="pill-tag-soft">WORK EXPERIENCE</span>
              <span className="text-xs text-ink-mute font-light tnum">2018 — {2018 + yoe} Engineering Practice</span>
            </div>
            <h1 className="display-xxl text-ink">
              Progressive engineering experience across systems and teams.
            </h1>
            <p className="body-lg text-ink-secondary max-w-3xl font-light leading-relaxed">
              From web development and mobile applications to distributed backends and technical leadership, each chapter represents hands-on delivery, scale, and team collaboration.
            </p>
          </div>

          {/* Numerics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-hairline">
            <div>
              <div className="display-lg text-ink tnum">{yoe}+</div>
              <div className="caption text-ink-secondary">Years Active Practice</div>
            </div>
            <div>
              <div className="display-lg text-primary tnum">100K+</div>
              <div className="caption text-ink-secondary">Daily Scaled Transactions</div>
            </div>
            <div>
              <div className="display-lg text-ink tnum">+45%</div>
              <div className="caption text-ink-secondary">Active User Expansion</div>
            </div>
            <div>
              <div className="display-lg text-primary tnum">30m ➔ 2s</div>
              <div className="caption text-ink-secondary">Automation Turnaround</div>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <article key={index} className="card-feature-light space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-hairline">
                  <div>
                    {exp.isCurrent && (
                      <span className="pill-tag-soft mb-2 inline-block">CURRENT ROLE</span>
                    )}
                    <h2 className="display-md text-ink">{exp.title}</h2>
                    <div className="heading-sm text-primary font-normal">{exp.company}</div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="caption text-ink font-mono tnum bg-canvas-soft px-3 py-1 rounded-full border border-hairline inline-block">
                      {exp.period}
                    </span>
                    <div className="caption text-ink-mute mt-1">
                      {exp.duration ? `${exp.duration} • ` : ''}{exp.location}
                    </div>
                  </div>
                </div>

                {exp.highlight && (
                  <div className="p-4 rounded-xl bg-canvas-soft border border-hairline text-sm text-ink-secondary flex items-center gap-3">
                    <span className="text-primary font-semibold text-base tnum">Key Metric:</span>
                    <span className="font-light">{exp.highlight}</span>
                  </div>
                )}

                <p className="body-md text-ink-secondary font-light leading-relaxed">
                  {exp.summary}
                </p>

                <div className="space-y-2">
                  <div className="caption font-mono uppercase text-ink-mute tracking-wider">Key Responsibilities &amp; Deliverables</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 body-md text-ink-secondary font-light">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary font-normal">›</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-ink-secondary border-t border-hairline">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-full bg-canvas-soft border border-hairline">
                      {t}
                    </span>
                  ))}
                </div>

              </article>
            ))}
          </div>

          {/* Subtle Connection & Collaboration CTA */}
          <div className="card-cream-band text-center space-y-4">
            <div className="flex items-center justify-center">
              <span className="pill-tag-soft !bg-canvas !text-ink font-mono">LET'S CONNECT</span>
            </div>
            <h3 className="display-md text-ink">
              Have an interesting engineering challenge or project?
            </h3>
            <p className="body-md text-ink-secondary max-w-xl mx-auto font-light leading-relaxed">
              Whether you want to exchange thoughts on distributed architectures, explore technical collaborations, or discuss upcoming engineering projects and challenges, I am always glad to connect.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/about"
                className="btn-primary-pill"
                onClick={() => posthog.capture('clicked_exp_cta_about')}
              >
                <span>Get in Touch →</span>
              </Link>
              <a
                href="mailto:dti.wisnu@gmail.com"
                className="btn-secondary font-mono text-xs"
                onClick={() => posthog.capture('clicked_email_link')}
              >
                <span>dti.wisnu@gmail.com</span>
              </a>
              <Link
                href="/portfolio"
                className="btn-secondary"
                onClick={() => posthog.capture('clicked_exp_cta_portfolio')}
              >
                <span>View Projects Portfolio</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
  )
}