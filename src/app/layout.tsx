import LocalFont from 'next/font/local'
import '@/src/app/global.css'
import Navigation from '@/src/components/Navigation/Navigation'
import Footer from '@/src/components/Footer/Footer'
import CookieConsent from '@/src/components/CookieConsent/CookieConsent'

export const graphik = LocalFont({
  src: [
    {
      path: '../../public/assets/fonts/GraphikLight.otf',
      weight: '200',
      style: 'lighter',
    },
    {
      path: '../../public/assets/fonts/GraphikRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/GraphikMedium.otf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

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
          url: '/assets/pngs/Home/Main.png'
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
          url: '/assets/pngs/Home/Main.png'
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
        <header className={ graphik.className }>
          <Navigation />
        </header>
        <main className={ graphik.className }>{ children }</main>
        <footer className={ graphik.className }>
          <Footer />
        </footer>
        <CookieConsent localFont={ graphik } />
      </body>
    </html>
  )
}
