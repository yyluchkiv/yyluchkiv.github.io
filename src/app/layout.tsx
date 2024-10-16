import {Roboto_Mono} from 'next/font/google'
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
    title: 'Yurii Luchkiv | Build apps',
    description: 'Code hard. Work hard. Spend time with your family',
    twitter: {
      title: 'Yurii Luchkiv | Build apps',
      card: 'summary_large_image',
      description: 'Code hard. Work hard. Spend time with your family'
    },
    openGraph: {
      title: 'Yurii Luchkiv | Build apps',
      description: 'Code hard. Work hard. Spend time with your family',
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
        <header className={ appFont.className }>
          <Navigation />
        </header>
        <main className={ appFont.className }>{ children }</main>
        <footer className={ appFont.className }>
          <Footer />
        </footer>
        <CookieConsent localFont={ appFont } />
      </body>
    </html>
  )
}
