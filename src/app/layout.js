import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import Providers from "./providers";
import TrackPageView from "./_components/TrackPageView";
import AppShell from "./_components/AppShell";
import { getYOE } from '@/lib/experience'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const yoe = getYOE()
const siteDescription = `Hands-on full-stack engineering, scalable digital products, RESTful API integrations, and cross-platform mobile architectures with ${yoe}+ years of delivery experience.`

export const metadata = {
  metadataBase: new URL('https://wisnuwijo.github.io'),
  title: 'Wisnu Wijokangko — Software Engineer',
  description: siteDescription,
  keywords: ['Wisnu Wijokangko', 'Software Engineer', 'Full-Stack Developer', 'Node.js', 'Express.js', 'React', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Next.js', 'Flutter', 'Indonesia'],
  authors: [{ name: 'Wisnu Wijokangko' }],
  creator: 'Wisnu Wijokangko',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wisnuwijo.github.io',
    title: 'Wisnu Wijokangko — Software Engineer',
    description: siteDescription,
    siteName: 'Wisnu Wijokangko Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisnu Wijokangko — Software Engineer',
    description: siteDescription,
  },
  icons: {
    icon: "/images/favicon.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />

        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4Z11SX69B4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-4Z11SX69B4');
              `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={null}>
            <TrackPageView />
          </Suspense>
          <AppShell>
            {children}
          </AppShell>
        </Providers>
      </body>
    </html>
  )
}


