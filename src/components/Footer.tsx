'use client'

import packageJSON from '@/package.json'
import  { StaticImageData } from 'next/image'
import GithubMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/GithubMono.svg'
import GithubColorIcon from '@/public/assets/svgs/icons/Footer/Color/GithubColor.svg'
import TwitterMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/TwitterMono.svg'
import TwitterColorIcon from '@/public/assets/svgs/icons/Footer/Color/TwitterColor.svg'
import YoutubeMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/YoutubeMono.svg'
import YoutubeColorIcon from '@/public/assets/svgs/icons/Footer/Color/YoutubeColor.svg'
import UpworkMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/UpworkMono.svg'
import UpworkColorIcon from '@/public/assets/svgs/icons/Footer/Color/UpworkColor.svg'

interface SocialItem {
  alt: string,
  visible: boolean,
  icon: StaticImageData | string,
  hoverIcon: StaticImageData | string
  href: string
}

const Footer: React.FC = () => {
  const socials: SocialItem[] = [
    {
      alt: 'Github',
      visible: true,
      icon: GithubMonoIcon,
      hoverIcon: GithubColorIcon,
      href: 'https://github.com/yyluchkiv'
    },
    {
      alt: 'Twitter',
      visible: true,
      icon: TwitterMonoIcon,
      hoverIcon: TwitterColorIcon,
      href: 'https://twitter.com/yyluchkiv'
    },
    {
      alt: 'Youtube',
      visible: false,
      icon: YoutubeMonoIcon,
      hoverIcon: YoutubeColorIcon,
      href: 'https://www.youtube.com/'
    },
    {
      alt: 'Upwork',
      visible: true,
      icon: UpworkMonoIcon,
      hoverIcon: UpworkColorIcon,
      href: 'https://www.upwork.com/freelancers/yyluchkiv'
    }
  ]

  return (
      <div className="footer">
        <div>
          <span>© { new Date().getFullYear() } Yurii Luchkiv | v{ packageJSON.version }</span>
        </div>
      </div>
  )
}

export default Footer
