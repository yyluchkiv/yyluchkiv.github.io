import {Roboto_Mono} from 'next/font/google'
import '@/src/app/global.css'
import Navigation from '@/src/components/Navigation/Navigation'
import Footer from '@/src/components/Footer/Footer'
import CookieConsent from '@/src/components/CookieConsent/CookieConsent'

const appFont = Roboto_Mono({
  weight: '300',
  subsets: ['latin']
})

export const generateMetadata = () => {
  return {
    metadataBase: new URL('https://yyluchkiv.com/'),
    title: 'Yurii Luchkiv',
    description: 'Code hard. Work hard. Spend time with your family',
    twitter: {
      title: 'Yurii Luchkiv',
      card: 'summary_large_image',
      description: 'Code hard. Work hard. Spend time with your family',
      images: [
        {
          type: "image/png",
          width: 800,
          height: 600,
          url: '/assets/pngs/Home/Main-V120.png'
        }
      ],
    },
    openGraph: {
      title: 'Yurii Luchkiv',
      description: 'Code hard. Work hard. Spend time with your family',
      siteName: 'yyluchkiv.com/',
      url: 'https://yyluchkiv.com/',
      images: [
        {
          type: "image/png",
          width: 800,
          height: 600,
          url: '/assets/pngs/Home/Main-V120.png'
        }
      ],
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
