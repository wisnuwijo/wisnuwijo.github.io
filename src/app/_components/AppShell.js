'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between relative selection:bg-primary-bg-subdued-hover selection:text-primary-deep bg-canvas text-ink transition-colors duration-300">
      {/* ATMOSPHERIC GRADIENT MESH BACKDROP (Flows seamlessly behind the transparent navbar) */}
      <div className="hero-gradient-mesh"></div>

      {/* NAVBAR WITH TRANSPARENT BACKGROUND */}
      <Navbar />

      {/* PAGE CONTENT WITH SUBTLE TRANSITION */}
      <div className="flex-grow relative z-10">
        <PageTransition>
          {children}
        </PageTransition>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
