import Head from 'next/head'
import Navigation from '@/src/components/Navigation/Navigation'
import Footer from '@/src/components/Footer/Footer'
import LocalFont from 'next/font/local'

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta name="description" content="Test Website GitHub Pages" />
      </Head>
      <header className={ graphik.className }>
        <Navigation />
      </header>
      <main className={ graphik.className }>{ children }</main>
      <footer className={ graphik.className }>
        <Footer />
      </footer>
    </>
  )
}