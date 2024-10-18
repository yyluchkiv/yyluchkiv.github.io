import { Roboto_Mono } from 'next/font/google'
import '@/src/app/global.css'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/Footer'
import CookieConsent from '@/src/components/CookieConsent'
import '@/src/components/global.css'

const appFont = Roboto_Mono({
  weight: '400',
  subsets: ['latin']
})

export const generateMetadata = () => {
  return {
    metadataBase: new URL('https://yyluchkiv.com'),
    title: 'Yurii Luchkiv | Software Engineer',
    description: 'I have been a software engineer since 2011 and have spent a decade building a software development agency. Starting in 2024, I want to realize my ideas and potential. My focus is on building apps and supporting my wife and three children.',
    twitter: {
      title: 'Yurii Luchkiv | Software Engineer',
      card: 'summary_large_image',
      description: 'I have been a software engineer since 2011 and have spent a decade building a software development agency. Starting in 2024, I want to realize my ideas and potential. My focus is on building apps and supporting my wife and three children.'
    },
    openGraph: {
      title: 'Yurii Luchkiv | Software Engineer',
      description: 'I have been a software engineer since 2011 and have spent a decade building a software development agency. Starting in 2024, I want to realize my ideas and potential. My focus is on building apps and supporting my wife and three children.',
      siteName: 'yyluchkiv.com',
      url: 'https://yyluchkiv.com',
      locale: 'en_US',
      type: 'website',
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header className={appFont.className}>
          <Navigation />
        </header>
        <main className={appFont.className}>{children}</main>
        <footer className={appFont.className}>
          <Footer />
        </footer>
        <CookieConsent localFont={appFont} />
        {/*100% privacy-first analytics*/}
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
      </body>
    </html>
  )
}
