import Script from "next/script";
import Styles from './Home.module.css'
import IconLink from '@/src/components/Links/IconLink/IconLink'
import ImageGallery from '@/src/components/ImageGallery/ImageGallery'

import Tech1SmallIcon from '@/public/assets/svgs/icons/Home/Tech1Small.svg'

import Home01 from '@/public/assets/jpgs/Home/01.jpg'
import Home02 from '@/public/assets/jpgs/Home/02.jpg'

const gallery01 = [
  {
    ratio: 100,
    images: [
      {
        source: Home01,
        ratio: 100,
        alt: 'Mountains'
      }
    ]
  }
]

const gallery02 = [
  {
    ratio: 100,
    images: [
      {
        source: Home02,
        ratio: 100,
        alt: 'Mountains'
      }
    ]
  }
]

export default function Home() {
  return (
    <div className={Styles.home}>
      <p>
        I am a software engineer (since 2011) and a husband (since 2014) and a father (since 2016).
        As long as I can remember, I have always been curious about how things work.
        I currently work at <IconLink iconSource={Tech1SmallIcon} alt='Tech1' text='Tech1' link='https://tech1.io/'/>.
        I enjoy building apps and delivering ideas to the market.
      </p>
      <div className={Styles.gallery}>
        <ImageGallery gallery={gallery01} gap={15} imageBorderRadius={2} orientation={'h'} preview={false}/>
      </div>
      <p className={Styles.paragraph}>
        When I was young I wasn&apos;t sure I should become a software engineer.
        However, I started my professional education when I was 12 years old in Lviv Physics and
        Mathematics Lyceum and completed it at the age of 21 in the Applied Mathematics and Informatics department at
        Lviv Ivan Franko National University.
        I had some viable options in the non-software development area (or at least I thought they were viable at that
        time).
        But then I tried to start a professional career as a software engineer. It worked, and I liked it.
      </p>
      <p className={Styles.paragraph}>
        Right now I am a mostly Java software engineer.
        In the early days of my career, I wanted to be a full-stack developer to be able to complete apps individually.
        Or at least in the early stages.
        Later on, I understood that to be a really good full-stack developer you need to be a backend developer during
        your work time and be a frontend developer in your spare time.
      </p>
      <p className={Styles.paragraph}>
        Overall, I like working closely with decision-makers, teaching and mentoring young people in our industry.
      </p>
      <div className={Styles.gallery}>
        <ImageGallery gallery={gallery02} gap={15} imageBorderRadius={2} orientation='h' preview={false}/>
      </div>
      <p className={Styles.paragraph}>
        That&apos;s all Folks 🙃
      </p>

      {/*Google Analytics*/}
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MGGJJG58LQ"/>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-MGGJJG58LQ');
          `}
        </Script>
      </div>
    </div>
  )
}
