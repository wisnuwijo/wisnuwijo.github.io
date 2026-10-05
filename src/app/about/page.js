'use client'

import { useState } from 'react'
import Link from 'next/link'
import posthog from 'posthog-js'
import { useYOE } from '@/lib/useYOE'
import {
  CheckCircleIcon,
  InboxArrowDownIcon
} from '@heroicons/react/24/outline'

export default function AboutPage() {
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
          
          {/* Header Eyebrow */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="pill-tag-soft">ABOUT ME</span>
              <span className="text-xs text-ink-mute font-light">Kudus, Central Java, Indonesia 🇮🇩</span>
            </div>
            <h1 className="display-xxl text-ink">
              Building reliable web, mobile, and backend systems with care.
            </h1>
            <p className="body-lg text-ink-secondary max-w-3xl font-light leading-relaxed">
              I am a Software Engineer with <span className="tnum font-normal text-ink">{yoe}+</span> years of hands-on experience building backend microservices, web applications, and mobile products. I focus on clean code, dependable system integrations, and pragmatic engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Detailed Narrative */}
            <div className="lg:col-span-7 space-y-6 body-lg text-ink-secondary font-light leading-relaxed">
              <p>
                My journey into technology began with vocational studies in computer networking at <strong className="font-normal text-ink">SMKN 7 Semarang</strong>, where I developed an interest in how systems and protocols communicate under the hood. That foundation motivated me to earn my Bachelor of Computer Science from <strong className="font-normal text-ink">Binus University</strong>, formalizing my knowledge in software engineering, algorithms, and system design.
              </p>
              <p>
                I started my professional career as a web developer at <strong className="font-normal text-ink">PT Bromindo Mekar Mitra</strong>, building internal web applications with Laravel and MySQL. One of my first major projects was digitizing manual safety inspection workflows, reducing operational task completion times from 30 minutes down to just 2 seconds.
              </p>
              <p>
                As our operational needs evolved, I transitioned into mobile development with <strong className="font-normal text-ink">Flutter</strong>. I architected an offline-first mobile app with SQLite local caching and the BLoC pattern, allowing field technicians to complete inspections in remote areas without cellular reception. This offline capability helped increase active user adoption by 45%. I later stepped into an IT Team Lead role, coordinating sprint backlogs, running code reviews, and mentoring junior developers.
              </p>
              <p>
                Currently, I am a Software Engineer at <strong className="font-normal text-ink">Jatis Mobile</strong>, working on high-volume backend integrations for enterprise clients utilizing the WhatsApp Business API. My work centers on designing RESTful APIs in <strong className="font-normal text-ink">Java (Spring Boot) and Go</strong>, configuring <strong className="font-normal text-ink">Apache Artemis (JMS)</strong> message queues for zero-data-loss asynchronous processing, and resolving performance bottlenecks across distributed services.
              </p>

              {/* Warm Cream Band Card - Approach to Engineering */}
              <div className="card-cream-band mt-8 space-y-3">
                <span className="pill-tag-soft !bg-canvas !text-ink font-mono">ENGINEERING APPROACH</span>
                <h2 className="display-md text-ink">How I Work</h2>
                <ul className="space-y-2 body-md text-ink-secondary font-light leading-relaxed list-disc list-inside">
                  <li><strong className="font-normal text-ink">Simplicity first:</strong> Clean, readable code and clear documentation are always more valuable than premature complexity.</li>
                  <li><strong className="font-normal text-ink">Defensive design:</strong> Designing APIs and services with idempotency, robust error handling, and message queues to ensure data integrity during network failures.</li>
                  <li><strong className="font-normal text-ink">Team mentorship:</strong> Fostering code reviews as collaborative learning opportunities and helping teammates grow their skills.</li>
                  <li><strong className="font-normal text-ink">Pragmatic modernization:</strong> Embracing modern tools (Docker, CI/CD, AI-assisted workflows like Cursor) to improve development velocity without compromising quality.</li>
                </ul>
              </div>

              {/* Direct Channels */}
              <div className="pt-8 space-y-4">
                <h3 className="heading-md text-ink">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <InboxArrowDownIcon className="w-5 h-5 text-primary" />
                    <span className="font-light text-sm">Email:</span>
                    <a
                      href="mailto:dti.wisnu@gmail.com"
                      className="text-primary hover:underline font-mono text-sm"
                      onClick={() => posthog.capture('clicked_email_link')}
                    >
                      dti.wisnu@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-primary font-bold text-sm flex items-center justify-center">in</span>
                    <span className="font-light text-sm">LinkedIn:</span>
                    <a
                      href="https://www.linkedin.com/in/wisnuwijo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-mono text-sm"
                      onClick={() => posthog.capture('clicked_linkedin_link')}
                    >
                      linkedin.com/in/wisnuwijo
                    </a>
                  </div>
                </div>
              </div>

              {/* Explore More Links */}
              <div className="pt-8 space-y-4">
                <h3 className="heading-md text-ink">Explore More</h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/experiences"
                    className="btn-primary-pill !text-xs !py-2 !px-4"
                    onClick={() => posthog.capture('clicked_explore_experiences')}
                  >
                    Work Experience →
                  </Link>
                  <Link
                    href="/portfolio"
                    className="btn-secondary !text-xs !py-2 !px-4"
                    onClick={() => posthog.capture('clicked_explore_portfolio')}
                  >
                    Projects &amp; Portfolio
                  </Link>

                  <Link
                    href="/skills"
                    className="btn-secondary !text-xs !py-2 !px-4"
                    onClick={() => posthog.capture('clicked_explore_skills')}
                  >
                    Technical Skills
                  </Link>
                  <Link
                    href="/educations"
                    className="btn-secondary !text-xs !py-2 !px-4"
                    onClick={() => posthog.capture('clicked_explore_education')}
                  >
                    Academic Background
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Column: Factsheet Card & Profile */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="card-feature-light space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-hairline">
                  <img
                    src="/images/wisnu.jpg"
                    alt="Wisnu Wijokangko"
                    className="w-16 h-16 rounded-full object-cover border border-hairline"
                  />
                  <div>
                    <h3 className="heading-lg text-ink">Wisnu Wijokangko</h3>
                    <div className="caption text-primary font-normal">Software Engineer @ Jatis Mobile</div>
                    <div className="caption text-ink-mute">Kudus, Central Java, Indonesia</div>
                  </div>
                </div>

                <div className="space-y-4 body-md divide-y divide-hairline">
                  <div className="pt-2 flex justify-between items-center">
                    <span className="text-ink-mute">Focus</span>
                    <span className="text-ink text-right font-light">Backend, Web &amp; Mobile</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-ink-mute">Experience</span>
                    <span className="text-ink text-right font-normal tnum">{yoe}+ Years (Since 2018)</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-ink-mute">Education</span>
                    <span className="text-ink text-right font-light">B.S. Computer Science (Binus)</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-ink-mute">Languages</span>
                    <span className="text-ink text-right font-mono text-xs">Java, Go, Dart, JavaScript, PHP</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-ink-mute">Work Preference</span>
                    <span className="text-ink text-right font-light">Remote / Hybrid</span>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <a
                    href="mailto:dti.wisnu@gmail.com"
                    onClick={() => posthog.capture('clicked_email_link')}
                    className="btn-primary-pill w-full justify-center !py-2.5 !text-xs"
                  >
                    <span>Send Email (dti.wisnu@gmail.com)</span>
                  </a>
                  <button onClick={handleCopyEmail} className="btn-secondary w-full justify-center !text-xs !border-hairline">
                    <span>Copy Contact Email</span>
                  </button>
                  <div className="pt-2 flex justify-center items-center gap-3 text-xs font-mono text-ink-mute">
                    <a
                      href="https://www.linkedin.com/in/wisnuwijo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      onClick={() => posthog.capture('clicked_linkedin_link')}
                    >
                      LinkedIn ↗
                    </a>
                    <span>•</span>
                    <a
                      href="https://github.com/wisnuwijo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      onClick={() => posthog.capture('clicked_github_link')}
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Summary Pill Highlights */}
              <div className="card-feature-light space-y-3 !p-6 bg-canvas-soft">
                <div className="caption font-mono uppercase text-ink-mute tracking-wider">Notable Highlights</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-secondary">Enterprise Messaging</span>
                    <span className="font-mono text-primary font-semibold">Apache Artemis (JMS)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-secondary">Mobile User Adoption</span>
                    <span className="font-mono text-emerald-600 font-semibold tnum">+45% (Offline Sync)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-secondary">Process Automation</span>
                    <span className="font-mono text-ink font-semibold tnum">30m ➔ 2s Latency</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
  )
}
