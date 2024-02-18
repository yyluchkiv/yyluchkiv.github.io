import Script from "next/script";
import Styles from './Home.module.css'
import IconLink from '@/src/components/Links/IconLink/IconLink'
import ImageGallery from '@/src/components/ImageGallery/ImageGallery'
import Badge from '@/src/components/Links/Badge/Badge'

import Tech1SmallIcon from '@/public/assets/svgs/icons/Home/Tech1Small.svg'
import JavaIcon from '@/public/assets/svgs/icons/Home/Java.svg'
import NextIcon from '@/public/assets/svgs/icons/Home/Next.svg'
import ReactIcon from '@/public/assets/svgs/icons/Home/React.svg'
import VueIcon from '@/public/assets/svgs/icons/Home/Vue.svg'
import AwsIcon from '@/public/assets/svgs/icons/Home/Aws.svg'
import SpringIcon from '@/public/assets/svgs/icons/Home/Spring.svg'
import Tech1LargeIcon from '@/public/assets/svgs/icons/Home/Tech1Large.svg'
import CiklumIcon from '@/public/assets/svgs/icons/Home/Ciklum.svg'
import ConscensiaIcon from '@/public/assets/svgs/icons/Home/Conscensia.svg'
import SystematicIcon from '@/public/assets/svgs/icons/Home/Systematic.svg'

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
      <div className={ Styles.home }>
        <p>
          I am a software engineer, a father and always curious about how things works.
          I currently work at <IconLink iconSource={ Tech1SmallIcon } alt='Tech1' text='Tech1' link='https://tech1.io/' />,
          where I build and grow efficient teams to deliver ideas to the market
          using <IconLink iconSource={ JavaIcon } alt='Java' text='Java' link='https://dev.java/' />&nbsp;
          <IconLink iconSource={ SpringIcon } alt='Spring' text='Spring' link='https://spring.io/projects/spring-framework' />&nbsp;
          <IconLink iconSource={ NextIcon } alt='Next.js' text='Next.js' link='https://nextjs.org/' />&nbsp;
          <IconLink iconSource={ ReactIcon } alt='React' text='React' link='https://react.dev/' />&nbsp;
          <IconLink iconSource={ VueIcon } alt='Vue.js' text='Vue.js' link='https://vuejs.org/' /> and <IconLink iconSource={ AwsIcon } alt='AWS' text='AWS' link='https://aws.amazon.com/' />.
        </p>
        <p>
          I have been working in the software development area since 2011.
          When I was young I wasn&apos;t sure I should become a software engineer.
          However, I started my professional education at the age of twelve in Lviv Physics and
          Mathematics Lyceum and completed it at the age of twenty-one in the Applied Mathematics and Informatics department at Lviv Ivan Franko National University.
          I had some viable options or at least I thought they were viable at that time — I was only 19 years old.
          Silly me. Then I tried to start a professional career as a software engineer. It worked, and I liked it.
        </p>
        <div className={ Styles.gallery }>
          <ImageGallery gallery={ gallery01 } gap={ 15 } imageBorderRadius={ 2 } orientation={ 'h' } preview={ false } />
        </div>
        <p>
          Right now I want to believe I am a Java-ecosystem software engineer. In the early days of my career,
          I wanted to be a full-stack developer to be able to complete apps individually.
          Or at least in the early stages. But the time came and I understood that to be
          a really good full-stack developer you need to be a backend developer during your work time and be a frontend developer in your spare time.
        </p>
        <p>
          Overall, I like working closely with decision-makers, teaching and mentoring young people in our industry.
        </p>
        <div className={ Styles.gallery }>
          <ImageGallery gallery={ gallery02 } gap={ 15 } imageBorderRadius={ 2 } orientation='h' preview={ false } />
        </div>
        <p>
          Over the past decade I worked with multiple companies, projects and teams.
        </p>
        <div className={ Styles.badges }>
          <Badge iconSource={ Tech1LargeIcon } alt='Tech1' link='https://tech1.io/' />
          <Badge iconSource={ CiklumIcon } alt='Ciklum' link='https://www.ciklum.com/' />
          <Badge iconSource={ ConscensiaIcon } alt='Conscensia' link='https://conscensia.com/' />
          <Badge iconSource={ SystematicIcon } alt='Systematic' link='https://systematic.com/en-gb/industries/defence/products/sitaware-suite/sitaware-headquarters' />
        </div>


        {/*Google Analytics*/}
        <div className="container">
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-MGGJJG58LQ" />
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
