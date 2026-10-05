'use client'

import { usePathname } from 'next/navigation'

export default function PageTransition({ children }) {
  const pathname = usePathname()

  return (
    <div key={pathname} className="animate-page-enter min-h-screen flex flex-col justify-between">
      {children}
    </div>
  )
}
