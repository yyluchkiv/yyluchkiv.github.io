import Styles from './Home.module.css'
import IconLink from '@/src/components/Links/IconLink/IconLink'
import ImageGallery from '@/src/components/ImageGallery/ImageGallery'
import Badge from '@/src/components/Links/Badge/Badge'

import Tech1SmallIcon from '@/public/assets/svgs/icons/Home/Tech1Small.svg'
import JavaIcon from '@/public/assets/svgs/icons/Home/Java.svg'
import NextIcon from '@/public/assets/svgs/icons/Home/Next.svg'
import ReactIcon from '@/public/assets/svgs/icons/Home/React.svg'
import VueIcon from '@/public/assets/svgs/icons/Home/Vue.svg'
import PythonIcon from '@/public/assets/svgs/icons/Home/Python.svg'
import AwsIcon from '@/public/assets/svgs/icons/Home/Aws.svg'
import SpringIcon from '@/public/assets/svgs/icons/Home/Spring.svg'
import Tech1LargeIcon from '@/public/assets/svgs/icons/Home/Tech1Large.svg'
import CiklumIcon from '@/public/assets/svgs/icons/Home/Ciklum.svg'
import AmpardIcon from '@/public/assets/svgs/icons/Home/Ampard.svg'
import ConscensiaIcon from '@/public/assets/svgs/icons/Home/Conscensia.svg'
import SystematicIcon from '@/public/assets/svgs/icons/Home/Systematic.svg'

import BirdImage from '@/public/assets/avifs/Home/Bird.avif'
import PonyImage from '@/public/assets/avifs/Home/Pony.avif'
import RocksImage from '@/public/assets/avifs/Home/Rocks.avif'
import GlacierImage from '@/public/assets/avifs/Home/Glacier.avif'
import WaterfallImage from '@/public/assets/avifs/Home/Waterfall.avif'
import SeaImage from '@/public/assets/avifs/Home/Sea.avif'
import AuroraPolarisImage from '@/public/assets/jpgs/Home/AuroraPolaris.jpg'
import AutumnImage from '@/public/assets/jpgs/Home/Autumn.jpg'
import ForestImage from '@/public/assets/jpgs/Home/Forest.jpg'
import IslandImage from '@/public/assets/jpgs/Home/Island.jpg'
import LakeImage from '@/public/assets/jpgs/Home/Lake.jpg'
import RoadImage from '@/public/assets/jpgs/Home/Road.jpg'
import LighthouseImage from '@/public/assets/pngs/Home/Lighthouse.png'
import SunflowerImage from '@/public/assets/pngs/Home/Sunflower.png'
import SunsetImage from '@/public/assets/pngs/Home/Sunset.png'

const galleryTop = [
  {
    ratio: 33.33,
    images: [
      {
        source: BirdImage,
        ratio: 40,
        alt: 'Bird'
      },
      {
        source: PonyImage,
        ratio: 60,
        alt: 'Pony'
      }
    ]
  },
  {
    ratio: 33.34,
    images: [
      {
        source: RocksImage,
        ratio: 60,
        alt: 'Rocks'
      },
      {
        source: GlacierImage,
        ratio: 40,
        alt: 'Glacier'
      }
    ]
  },
  {
    ratio: 33.33,
    images: [
      {
        source: WaterfallImage,
        ratio: 40,
        alt: 'Waterfall'
      },
      {
        source: SeaImage,
        ratio: 60,
        alt: 'Sea'
      }
    ]
  }
]

const galleryMidle = [
  {
    ratio: 50,
    images: [
      {
        source: LighthouseImage,
        ratio: 100,
        alt: 'Lighthouse'
      }
    ]
  },
  {
    ratio: 50,
    images: [
      {
        source: SunflowerImage,
        ratio: 60,
        alt: 'Sunflower'
      },
      {
        source: SunsetImage,
        ratio: 40,
        alt: 'Sunset'
      }
    ]
  }
]

const galleryBottom = [
  {
    ratio: 33.33,
    images: [
      {
        source: AuroraPolarisImage,
        ratio: 40,
        alt: 'Bird'
      },
      {
        source: AutumnImage,
        ratio: 60,
        alt: 'Pony'
      }
    ]
  },
  {
    ratio: 33.34,
    images: [
      {
        source: ForestImage,
        ratio: 60,
        alt: 'Rocks'
      },
      {
        source: IslandImage,
        ratio: 40,
        alt: 'Glacier'
      }
    ]
  },
  {
    ratio: 33.33,
    images: [
      {
        source: LakeImage,
        ratio: 40,
        alt: 'Waterfall'
      },
      {
        source: RoadImage,
        ratio: 60,
        alt: 'Sea'
      }
    ]
  }
]

export default function Home() {
  return (
    <div className={ Styles.home }>
      <p>
        I am a software engineer, father and curious about how everything is working
        . I currently work at <IconLink iconSource={ Tech1SmallIcon } alt='Tech1' text='Tech1' link='https://tech1.io/' />
        , where I build and grow efficient teams to deliver ideas to the market
        using <IconLink iconSource={ JavaIcon } alt='Java' text='Java' link='https://dev.java/' />
        , <IconLink iconSource={ SpringIcon } alt='Spring' text='Spring' link='https://spring.io/projects/spring-framework' />
        , <IconLink iconSource={ NextIcon } alt='Next.js' text='Next.js' link='https://nextjs.org/' />
        , <IconLink iconSource={ ReactIcon } alt='React' text='React' link='https://react.dev/' />
        , <IconLink iconSource={ VueIcon } alt='Vue.js' text='Vue.js' link='https://vuejs.org/' />
        , <IconLink iconSource={ PythonIcon } alt='Python' text='Python' link='https://www.python.org/' /> and <IconLink iconSource={ AwsIcon } alt='AWS' text='AWS' link='https://aws.amazon.com/' />.
      </p>
      <div className={ Styles.gallery }>
        <ImageGallery gallery={ galleryTop } gap={ 15 } imageBorderRadius={ 2 } preview={ false } />
      </div>
      <p>
        I have been working in the software development area since 2011.
        When I was young I wasn&apos;t sure I should become a software engineer.
        However, I started my professional education at the age of twelve in Lviv Physics and
        Mathematics Lyceum and completed it at the age of twenty-one in the Applied Mathematics and Informatics department at Lviv Ivan Franko National University.
        I had some viable options or at least I thought they were viable at that time — I was only 19 years old.
        Silly me. Then I tried to start a professional career as a software engineer. It worked, and I liked it.
      </p>
      <div className={ Styles.gallery }>
        <ImageGallery gallery={ galleryMidle } gap={ 15 } imageBorderRadius={ 2 } preview={ false } />
      </div>
      <p>
        Right now I want to believe I am a Java-ecosystem software engineer. In the early days of my career
        , I wanted to be a full-stack developer to be able to complete apps individually
        . Or at least in the early stages. But the time came and I understood that to be
        a really good full-stack developer you need to be a backend developer during your work time and be a frontend developer in your spare time :)
      </p>
      <p>
        Overall, I like working closely with decision-makers, teaching and mentoring young people in our industry.
      </p>
      <div className={ Styles.gallery }>
        <ImageGallery gallery={ galleryBottom } gap={ 15 } imageBorderRadius={ 2 } orientation='h' preview={ false } />
      </div>
      <p>
        Over the past decade I worked with multiple companies, projects and teams.
      </p>
      <div className={ Styles.badges }>
        <Badge iconSource={ Tech1LargeIcon } alt='Tech1' link='https://tech1.io/' />
        <Badge iconSource={ CiklumIcon } alt='Ciklum' link='https://www.ciklum.com/' />
        <Badge iconSource={ AmpardIcon } alt='Ampard' link='https://www.crunchbase.com/organization/ampard' />
        <Badge iconSource={ ConscensiaIcon } alt='Conscensia' link='https://conscensia.com/' />
        <Badge iconSource={ SystematicIcon } alt='Systematic' link='https://systematic.com/en-gb/' />
      </div>
    </div>
  )
}
