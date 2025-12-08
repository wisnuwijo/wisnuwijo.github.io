import { Inter } from 'next/font/google'
import './globals.css'
import Providers from "./providers";
import TrackPageView from "./_components/TrackPageView";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wisnu Wijokangko',
  description: 'Personal website and portfolio',
  icons: {
    icon: "/images/favicon.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
          <TrackPageView />
          {children}
        </Providers>
      </body>
    </html>
  )
}
