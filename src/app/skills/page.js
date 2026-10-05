'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import { useYOE } from '@/lib/useYOE'

const getMainSkills = (yoe) => [
  {
    name: "Java & Spring Boot",
    tier: "Production Tier",
    level: `Advanced (${yoe}+ YOE)`,
    percent: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description: "High-availability backend architecture, asynchronous programming, multi-threading, Apache Artemis JMS queues, and microservice RESTful APIs."
  },
  {
    name: "Go (Golang)",
    tier: "Microservices",
    level: "Intermediate",
    percent: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    description: "Goroutines, concurrent channels, Gin web framework, lightweight worker pools, and low-latency microservices."
  },
  {
    name: "Flutter & Dart",
    tier: "Published Apps",
    level: "Advanced",
    percent: 92,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    description: "BLoC reactive state management, offline-first synchronization with SQLite, push notifications, and cross-platform Android & iOS deployments."
  },
  {
    name: "Laravel / PHP",
    tier: "Enterprise MVC",
    level: "Advanced",
    percent: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    description: "Relational data modeling, schema optimizations, secure authentication, API resource generation, and background job queues."
  },
  {
    name: "React / Next.js",
    tier: "Frontend & SSR",
    level: "Advanced",
    percent: 88,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Static site generation (SSG), dynamic state management, WebSockets realtime communication, and interactive diagramming."
  },
  {
    name: "Systems Architecture & Engineering",
    tier: "Software Engineer",
    level: `Advanced (${yoe}+ YOE)`,
    percent: 95,
    badgeText: "ADR",
    description: "Architecture decision records (ADRs), low-level system designs, automated test frameworks, and robust software implementation."
  }
]

const infrastructureSkills = [
  { name: "MySQL", level: "Advanced Indexing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", level: "Document Store", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", level: "Containers & Comps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" },
  { name: "AWS Cloud", level: "EC2, S3, RDS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Git & Workflows", level: "CI/CD & Branching", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Apache Artemis", level: "JMS Event Broker", badgeText: "JMS" }
]

export default function SkillsPage() {
  const yoe = useYOE()
  const mainSkills = getMainSkills(yoe)
  return (
    <div className="relative pt-10 pb-24 px-4 sm:px-6 lg:px-8">
      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto space-y-16">
          
          {/* Eyebrow & Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="pill-tag-soft">05 / TECHNICAL COMPETENCIES &amp; STACK</span>
              <span className="text-xs text-ink-mute font-light">Verified Engineering Proficiency</span>
            </div>
            <h1 className="display-xxl text-ink">
              Core engineering competencies and technical arsenal.
            </h1>
            <p className="body-lg text-ink-secondary max-w-3xl font-light leading-relaxed">
              My hands-on technical execution spans distributed enterprise backends, reactive mobile development, message queuing, and resilient software engineering.
            </p>
          </div>

          {/* Core Technologies Grid */}
          <div className="space-y-6">
            <h2 className="heading-md text-ink">Primary Engineering Stacks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainSkills.map((skill, index) => (
                <div key={index} className="card-feature-light space-y-4">
                  <div className="flex items-center gap-3">
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {skill.badgeText}
                      </div>
                    )}
                    <div>
                      <h3 className="heading-lg text-ink">{skill.name}</h3>
                      <div className="caption text-primary font-normal">{skill.tier} • {skill.level}</div>
                    </div>
                  </div>
                  <p className="body-md text-ink-secondary font-light leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="w-full bg-canvas-soft rounded-full h-1.5 overflow-hidden border border-hairline">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure & Tooling */}
          <div className="space-y-6 pt-4 border-t border-hairline">
            <h2 className="heading-md text-ink">Databases, Cloud &amp; Infrastructure</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {infrastructureSkills.map((tool, idx) => (
                <div key={idx} className="card-feature-light !p-4 text-center space-y-2">
                  {tool.icon ? (
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8 mx-auto object-contain" />
                  ) : (
                    <div className="w-8 h-8 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs">
                      {tool.badgeText}
                    </div>
                  )}
                  <h3 className="heading-sm text-ink text-xs">{tool.name}</h3>
                  <div className="caption text-ink-mute text-[10px]">{tool.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cream Band Interlude */}
          <div className="card-cream-band space-y-4">
            <span className="pill-tag-soft !bg-canvas !text-ink font-mono">TECHNICAL RIGOR</span>
            <h3 className="display-md text-ink">Beyond Programming Languages</h3>
            <p className="body-md text-ink-secondary max-w-3xl font-light leading-relaxed">
              My technology choices are driven by real business requirements, latency constraints, and operational maintainability. Whether I am choosing between Go and Spring Boot for a new microservice or evaluating SQLite offline sync versus cloud-first polling, my focus remains on resilient system guarantees and engineering team velocity.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="btn-primary-pill !text-xs !py-2 !px-4"
                onClick={() => posthog.capture('clicked_skills_to_portfolio')}
              >
                <span>See Systems in Production →</span>
              </Link>
              <Link
                href="/experiences"
                className="btn-secondary !text-xs !py-2 !px-4"
                onClick={() => posthog.capture('clicked_skills_to_experiences')}
              >
                <span>Work Experience</span>
              </Link>
              <Link
                href="/educations"
                className="btn-secondary !text-xs !py-2 !px-4"
                onClick={() => posthog.capture('clicked_skills_to_education')}
              >
                <span>View Academic Credentials</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
  )
}