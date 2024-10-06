'use client'

import Styles from './Footer.module.css'
import packageJSON from '@/package.json'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DateUtility from '@/src/utilities/DateUtility'
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

const SocialLink: React.FC<{ socialItem: SocialItem }> = ({ socialItem }) => {
  const [isHovering, setIsHovered] = useState(false)

  function onMouseEnterLink () {
    setIsHovered(true)
  }

  function onMouseLeaveLink () {
    setIsHovered(false)
  }

  return (
      <li className={ Styles.socialItem } key={ socialItem.alt } onMouseEnter={ onMouseEnterLink } onMouseLeave={ onMouseLeaveLink } onClick={ onMouseLeaveLink }>
        <Link className={ Styles.socialLink } href={ socialItem.href } target='_blank'>
          <Image className={ `${ Styles.icon } ${ isHovering && Styles.iconHidden }` } width={ 25 } height={ 25 } src={ socialItem.icon } alt={ socialItem.alt } priority={ true } />
          <Image className={ `${ Styles.hoverIcon } ${ isHovering && Styles.hoverIconVisible }` } width={ 25 } height={ 25 } src={ socialItem.hoverIcon } alt={ socialItem.alt } />
        </Link>
      </li>
  )
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
      <div className={ Styles.footer }>
        <div className={ Styles.leftSide }>
          <span className={ Styles.copyright }>© 2019 — { new Date().getFullYear() } Yurii Luchkiv | v{ packageJSON.version }</span>
        </div>
        <div className={ Styles.rightSide }>
          <ul className={ Styles.socialList }>
            { socials.map(socialItem => socialItem.visible && <SocialLink socialItem={ socialItem } key={ socialItem.alt } />) }
          </ul>
        </div>
      </div>
  )
}

export default Footer
