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
          I am a software engineer (since 2011) and a father (since 2016). As long as I can remember, I have always been curious about how things work.
          I currently work at <IconLink iconSource={ Tech1SmallIcon } alt='Tech1' text='Tech1' link='https://tech1.io/' />.
          I build apps and deliver ideas to the market using <IconLink iconSource={ JavaIcon } alt='Java' text='Java' link='https://dev.java/' />&nbsp;
          <IconLink iconSource={ SpringIcon } alt='Spring' text='Spring' link='https://spring.io/projects/spring-framework' />&nbsp;
          <IconLink iconSource={ NextIcon } alt='Next.js' text='Next.js' link='https://nextjs.org/' />&nbsp;
          <IconLink iconSource={ ReactIcon } alt='React' text='React' link='https://react.dev/' />&nbsp;
          <IconLink iconSource={ VueIcon } alt='Vue.js' text='Vue.js' link='https://vuejs.org/' /> and <IconLink iconSource={ AwsIcon } alt='AWS' text='AWS' link='https://aws.amazon.com/' />.
        </p>
        <div className={ Styles.gallery }>
          <ImageGallery gallery={ gallery01 } gap={ 15 } imageBorderRadius={ 2 } orientation={ 'h' } preview={ false } />
        </div>
        <p className={ Styles.paragraph }>
          When I was young I wasn&apos;t sure I should become a software engineer.
          However, I started my professional education when I was 12 years old in Lviv Physics and
          Mathematics Lyceum and completed it at the age of 21 in the Applied Mathematics and Informatics department at Lviv Ivan Franko National University.
          I had some viable options in the non-software development area (or at least I thought they were viable at that time).
          But then I tried to start a professional career as a software engineer. It worked, and I liked it.
        </p>
        <p className={ Styles.paragraph }>
          Right now I am a mostly Java software engineer.
          In the early days of my career, I wanted to be a full-stack developer to be able to complete apps individually.
          Or at least in the early stages.
          Later on, I understood that to be a really good full-stack developer you need to be a backend developer during your work time and be a frontend developer in your spare time.
        </p>
        <p className={ Styles.paragraph }>
          Overall, I like working closely with decision-makers, teaching and mentoring young people in our industry.
        </p>
        <div className={ Styles.gallery }>
          <ImageGallery gallery={ gallery02 } gap={ 15 } imageBorderRadius={ 2 } orientation='h' preview={ false } />
        </div>
        <p className={ Styles.paragraph }>
          Over the past decade I worked with multiple companies, projects and teams.
        </p>
        <div className={ Styles.badges }>
          <Badge iconSource={ Tech1LargeIcon } alt='Tech1' link='https://tech1.io/' />
          <Badge iconSource={ CiklumIcon } alt='Ciklum' link='https://www.ciklum.com/' />
          <Badge iconSource={ ConscensiaIcon } alt='Conscensia' link='https://conscensia.com/' />
          <Badge iconSource={ SystematicIcon } alt='Systematic' link='https://systematic.com/en-gb/industries/defence/products/sitaware-suite/sitaware-headquarters' />
        </div>
        <p className={ Styles.paragraph }>
            Technologies that I am experienced in:
            <ul className={ Styles.technologies }>
                <li className={ Styles.technology }>— java, spring boot, spring data, apache maven</li>
                <li className={ Styles.technology }>— ubuntu, docker, docker-compose, github actions, jenkins</li>
                <li className={ Styles.technology }>— postgres, mongodb</li>
                <li className={ Styles.technology }>— javascript, vue.js</li>
            </ul>
        </p>

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
