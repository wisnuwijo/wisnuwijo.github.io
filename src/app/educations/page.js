'use client'

import Link from 'next/link'
import posthog from 'posthog-js'

const education = [
  {
    title: "Binus University",
    degree: "Bachelor's Degree in Computer Science (S.Kom)",
    period: "2019 — 2023",
    type: "Higher Education",
    location: "Jakarta, Indonesia",
    details: "Comprehensive study covering computer systems architecture, data structures, algorithms, relational & distributed databases, software engineering methodologies, and computing theory."
  },
  {
    title: "SMKN 7 Semarang",
    degree: "Computer and Networking",
    period: "2014 — 2018",
    type: "Vocational High School",
    location: "Semarang, Indonesia",
    details: "Four-year vocational engineering curriculum in computer networking, TCP/IP protocols, server configuration, network switching, and hardware maintenance."
  }
]

const certifications = [
  {
    title: "Foundation of Project Management",
    issuer: "Coursera",
    year: "2021",
    description: "Agile methodologies, sprint planning, project initiation, and risk mitigation strategies."
  },
  {
    title: "Information System Security Protection Knowledge",
    issuer: "Inixindo Jogja",
    year: "2021",
    description: "Information security governance, vulnerability assessment, defense in depth, and enterprise data protection standards."
  },
  {
    title: "Mobile Developer (Flutter)",
    issuer: "Inixindo Jogja",
    year: "2019",
    description: "Cross-platform mobile application architecture, state management patterns, and production deployment."
  }
]

export default function EducationsPage() {
  return (
    <div className="relative pt-10 pb-24 px-4 sm:px-6 lg:px-8">
      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto space-y-16">
          
          {/* Eyebrow & Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="pill-tag-soft">06 / CREDENTIALS &amp; FOUNDATIONS</span>
              <span className="text-xs text-ink-mute font-light">Academic &amp; Professional Verification</span>
            </div>
            <h1 className="display-xxl text-ink">
              Formal education and verified certifications.
            </h1>
            <p className="body-lg text-ink-secondary max-w-3xl font-light leading-relaxed">
              I combine a strong academic grounding in computer science theory with practical, industry-accredited certifications in engineering management, security, and mobile architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formal Degrees */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="caption text-primary uppercase font-mono tracking-wider font-semibold">ACADEMIC FOUNDATION</span>
                <h2 className="heading-lg text-ink">Higher Education Degrees</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="card-feature-light space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="heading-lg text-ink">{edu.title}</h3>
                        <div className="body-md text-primary font-normal">{edu.degree}</div>
                      </div>
                      <span className="caption font-mono text-ink bg-canvas-soft px-3 py-1 rounded-full border border-hairline tnum">
                        {edu.period}
                      </span>
                    </div>
                    <div className="caption text-ink-mute">{edu.type} • {edu.location}</div>
                    <p className="body-md text-ink-secondary font-light pt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="caption text-primary uppercase font-mono tracking-wider font-semibold">INDUSTRY CERTIFICATION</span>
                <h2 className="heading-lg text-ink">Professional Credentials</h2>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="card-feature-light space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="heading-md text-ink font-normal">{cert.title}</h3>
                        <div className="caption text-primary font-normal">{cert.issuer}</div>
                      </div>
                      <span className="caption font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 tnum">
                        {cert.year}
                      </span>
                    </div>
                    <p className="caption text-ink-secondary font-light pt-1">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Recruiter Action Strip */}
          <div className="card-cream-band text-center space-y-4">
            <h3 className="display-md text-ink">Looking for complete documentation or background checks?</h3>
            <p className="body-md text-ink-secondary max-w-xl mx-auto font-light">
              My formal verification, degree transcripts, and professional references are available upon request during recruiter screening.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/about"
                className="btn-primary-pill"
                onClick={() => posthog.capture('clicked_educations_to_about')}
              >
                <span>About &amp; Background Profile →</span>
              </Link>
              <a
                href="mailto:dti.wisnu@gmail.com"
                className="btn-secondary font-mono text-xs"
                onClick={() => posthog.capture('clicked_email_link')}
              >
                <span>dti.wisnu@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>
  )
}
