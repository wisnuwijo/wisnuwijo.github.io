import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wisnu Wijokangko',
  description: 'Personal website and portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        {/* End Google Tag Manager */}
        
        {/* 10xlaunch */}
        <script
            src="https://app.10xlaunch.ai/widget"
            data-app-id="92be7fc9-3c5c-4bd2-8e71-30778e46f3e4"
            async
            defer
            >
        </script>
        {/* End of 10xlaunch */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
