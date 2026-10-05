'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import { useYOE } from '../lib/useYOE'
import {
  ServerStackIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const yoe = useYOE()

  return (
    <div className="relative z-10 space-y-24 pb-24">

        {/* HERO SECTION */}
        <section id="hero" className="pt-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto text-left space-y-8">
            
            {/* Eyebrow Pill Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="pill-tag-soft">
                SOFTWARE ENGINEER
              </span>
              <span className="pill-tag-soft !bg-canvas !border-hairline text-ink font-mono text-[11px]">
                FULL-STACK &amp; CLOUD SYSTEMS
              </span>
            </div>

            {/* Display XXL Headline with 300 Weight & Negative Tracking */}
            <div className="max-w-4xl space-y-5">
              <h1 className="display-xxl text-ink headline-shimmer pb-1">
                Scalable digital products, full-stack delivery, and resilient system integrations.
              </h1>
              <p className="body-lg text-ink-secondary max-w-3xl font-light leading-relaxed">
                I design, build, and maintain clean web and mobile applications across <strong className="font-normal text-ink">React and Flutter</strong>, backed by high-throughput services in <strong className="font-normal text-ink">Spring Boot, Go, and Node.js</strong>. Experienced in integrating enterprise RESTful APIs, translating AI-assisted prototypes into production-hardened systems, and mentoring engineering teams with <span className="tnum font-normal text-ink">{yoe}+</span> years of proven delivery.
              </p>
            </div>

            {/* CTA Hierarchy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/experiences"
                className="btn-primary-pill"
                onClick={() => {
                  posthog.capture('clicked_cta_get_to_know_me')
                  posthog.capture('hero_cta_explore_journey')
                }}
              >
                <span>Explore Delivery &amp; Track Record</span>
                <span>→</span>
              </Link>

              <Link
                href="/portfolio"
                className="btn-secondary"
                onClick={() => {
                  posthog.capture('clicked_cta_see_portfolio')
                }}
              >
                <span>See Production Projects (5)</span>
              </Link>

              <a
                href="https://www.linkedin.com/in/wisnuwijo/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                onClick={() => {
                  posthog.capture('clicked_linkedin_link')
                  posthog.capture('hero_cta_linkedin')
                }}
              >
                <span>LinkedIn Profile</span>
              </a>
            </div>



          </div>
        </section>

        {/* NUMERICS STRIP */}
        <section className="py-12 bg-canvas border-y border-hairline">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <div className="display-lg text-ink tnum">{yoe}+</div>
                <div className="body-md text-ink-secondary font-light">Years Full-Stack Delivery</div>
                <div className="caption text-ink-mute tnum">2018 — {2018 + yoe} Production Practice</div>
              </div>

              <div className="space-y-1">
                <div className="display-lg text-primary tnum">100K+</div>
                <div className="body-md text-ink-secondary font-light">API Integrations &amp; Trans.</div>
                <div className="caption text-ink-mute">RESTful Third-Party &amp; Meta Gateways</div>
              </div>

              <div className="space-y-1">
                <div className="display-lg text-ink tnum">+45%</div>
                <div className="body-md text-ink-secondary font-light">Web &amp; Mobile User Growth</div>
                <div className="caption text-ink-mute">Clean UX &amp; Offline-First Sync</div>
              </div>

              <div className="space-y-1">
                <div className="display-lg text-primary tnum">30m ➔ 2s</div>
                <div className="body-md text-ink-secondary font-light">Workflow Automation</div>
                <div className="caption text-ink-mute">Digital Transformation Latency</div>
              </div>
            </div>
          </div>
        </section>

        {/* ROLE ALIGNMENT & VALUE PROPOSITION */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto space-y-8">
            <div className="space-y-3">
              <span className="caption text-primary uppercase font-mono tracking-wider font-semibold">
                FULL-STACK COMPETENCIES &amp; ROLE ALIGNMENT
              </span>
              <h2 className="display-xl text-ink">
                Engineered for hands-on delivery, scale, and team mentorship.
              </h2>
              <p className="body-lg text-ink-secondary max-w-3xl font-light leading-relaxed">
                Directly addressing modern digital product teams: here is how my hands-on craft delivers web &amp; mobile execution, enterprise system integrations, AI workflows, and high code quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Web & Mobile */}
              <div className="card-feature-light p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="pill-tag-soft">FRONTEND &amp; MOBILE CRAFT</span>
                  <CodeBracketIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="heading-lg text-ink">
                  Full-Stack Web &amp; Mobile Applications
                </h3>
                <p className="body-md text-ink-secondary font-light leading-relaxed">
                  Hands-on engineering across <strong className="font-normal text-ink">React, Next.js, and Tailwind CSS</strong> for clean, component-driven web interfaces, paired with <strong className="font-normal text-ink">Flutter</strong> for cross-platform mobile apps. Focused on sub-second rendering, offline-first synchronization, and seamless user experiences.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">React</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Tailwind CSS</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Next.js</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Flutter</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Mobile &amp; Web</span>
                </div>
              </div>

              {/* Card 2: RESTful Integrations & Backend */}
              <div className="card-feature-light p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="pill-tag-soft">SYSTEM INTEGRATIONS</span>
                  <ServerStackIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="heading-lg text-ink">
                  RESTful APIs, Microservices &amp; Databases
                </h3>
                <p className="body-md text-ink-secondary font-light leading-relaxed">
                  Proficient in designing robust RESTful APIs using <strong className="font-normal text-ink">Node.js, Express.js, PostgreSQL</strong>, alongside Java and Go. Proven track record integrating complex third-party platforms (WhatsApp Business API, payment gateways, ERPs) with sliding-window rate limiters, idempotency keys, and zero message loss.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Node.js</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Express.js</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">PostgreSQL</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">REST APIs</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Docker</span>
                </div>
              </div>

              {/* Card 3: AI-Assisted Workflows & Production Hardening */}
              <div className="card-feature-light p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="pill-tag-soft">MODERN AI WORKFLOWS</span>
                  <CpuChipIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="heading-lg text-ink">
                  AI-Assisted Delivery &amp; Production Hardening
                </h3>
                <p className="body-md text-ink-secondary font-light leading-relaxed">
                  Actively adopting modern AI-assisted engineering tools (<strong className="font-normal text-ink">Cursor, Lovable, GitHub Copilot</strong>) to accelerate delivery cycles. Experienced in taking rapid AI-generated prototypes and low-code outputs and re-engineering them into secure, scalable, type-safe, and production-ready architectures.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Cursor</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">AI Prototyping</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Low-Code to Prod</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Defensive Security</span>
                </div>
              </div>

              {/* Card 4: Code Quality & Mentorship */}
              <div className="card-feature-light p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="pill-tag-soft">LEADERSHIP &amp; QUALITY</span>
                  <ShieldCheckIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="heading-lg text-ink">
                  Code Reviews, CI/CD &amp; Developer Mentorship
                </h3>
                <p className="body-md text-ink-secondary font-light leading-relaxed">
                  Committed to high craftsmanship: conducting thorough code reviews, maintaining living documentation, and establishing automated <strong className="font-normal text-ink">CI/CD pipelines and Docker containerization</strong>. Passionate about mentoring junior developers and instilling defensive programming standards across cross-functional teams.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Code Reviews</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Junior Mentorship</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">CI/CD &amp; Git</span>
                  <span className="px-2.5 py-1 rounded bg-canvas-soft border border-hairline text-xs font-mono text-ink-secondary">Azure / AWS Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* GET IN TOUCH / COLLABORATION CTA */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="card-cream-band text-center space-y-6">
              <div className="flex items-center justify-center">
                <span className="pill-tag-soft font-mono">GET IN TOUCH</span>
              </div>

              <div className="space-y-3 max-w-2xl mx-auto">
                <h2 className="display-md text-ink">
                  Have a project in mind or looking to collaborate?
                </h2>
                <p className="body-md text-ink-secondary font-light leading-relaxed">
                  Whether you want to discuss full-stack engineering, explore technical collaborations, or talk about engineering opportunities, my inbox is always open.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/about"
                  className="btn-primary-pill"
                  onClick={() => posthog.capture('clicked_home_cta_about')}
                >
                  <span>Get in Touch →</span>
                </Link>
                <a
                  href="mailto:dti.wisnu@gmail.com"
                  onClick={() => posthog.capture('clicked_email_link')}
                  className="btn-secondary font-mono text-xs"
                >
                  <span>dti.wisnu@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}
