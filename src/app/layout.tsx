import Navigation from '@/src/components/Navigation/Navigation'
import Footer from '@/src/components/Footer/Footer'
import LocalFont from 'next/font/local'
import '@/src/app/global.css'

const graphik = LocalFont({
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
    metadataBase: new URL('https://yurii-luchkiv.github.io/'),
    title: 'Yurii Luchkiv',
    openGraph: {
      title: 'Yurii Luchkiv',
      description: 'Code hard. Work hard. Spend time with your family.',
      siteName: 'Yurii Luchkiv',
      url: 'https://yurii-luchkiv.github.io/',
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
      </body>
    </html>
  )
}
