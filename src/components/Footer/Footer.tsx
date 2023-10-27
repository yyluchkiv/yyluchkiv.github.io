'use client'

import Styles from './Footer.module.css'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DateUtility from '@/src/utilities/DateUtility'
import BehanceMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/BehanceMono.svg'
import BehanceColorIcon from '@/public/assets/svgs/icons/Footer/Color/BehanceColor.svg'
import ClutchMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/ClutchMono.svg'
import ClutchColorIcon from '@/public/assets/svgs/icons/Footer/Color/ClutchColor.svg'
import DouMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/DouMono.svg'
import DouColorIcon from '@/public/assets/svgs/icons/Footer/Color/DouColor.svg'
import FacebookMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/FacebookMono.svg'
import FacebookColorIcon from '@/public/assets/svgs/icons/Footer/Color/FacebookColor.svg'
import GithubMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/GithubMono.svg'
import GithubColorIcon from '@/public/assets/svgs/icons/Footer/Color/GithubColor.svg'
import GmailMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/GmailMono.svg'
import GmailColorIcon from '@/public/assets/svgs/icons/Footer/Color/GmailColor.svg'
import InstagramMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/InstagramMono.svg'
import InstagramColorIcon from '@/public/assets/svgs/icons/Footer/Color/InstagramColor.svg'
import LinkedinMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/LinkedinMono.svg'
import LinkedinColorIcon from '@/public/assets/svgs/icons/Footer/Color/LinkedinColor.svg'
import TwitterMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/TwitterMono.svg'
import TwitterColorIcon from '@/public/assets/svgs/icons/Footer/Color/TwitterColor.svg'
import YoutubeMonoIcon from '@/public/assets/svgs/icons/Footer/Mono/YoutubeMono.svg'
import YoutubeColorIcon from '@/public/assets/svgs/icons/Footer/Color/YoutubeColor.svg'

interface SocialItem {
  alt: string,
  icon: StaticImageData | string,
  visible: boolean,
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
      <li className={ Styles.socialItem } key={ socialItem.alt } onMouseEnter={ onMouseEnterLink } onMouseLeave={ onMouseLeaveLink }>
        <Link className={ Styles.socialLink } href={ socialItem.href } target='_blank'>
          <Image className={ `${ Styles.icon } ${ isHovering && Styles.iconHidden }` } width={ 22 } height={ 22 } src={ socialItem.icon } alt={ socialItem.alt } priority={ true } />
          <Image className={ `${ Styles.hoverIcon } ${ isHovering && Styles.hoverIconVisible }` } width={ 22 } height={ 22 } src={ socialItem.hoverIcon } alt={ socialItem.alt } />
        </Link>
      </li>
  )
}

const Footer: React.FC<{
  instagramVisible?: boolean,
  linkedinVisible?: boolean,
  twitterVisible?: boolean,
  facebookVisible?: boolean,
  youtubeVisible?: boolean,
  githubVisible?: boolean,
  gmailVisible?: boolean,
  douVisible?: boolean,
  behanceVisible?: boolean,
  clutchVisible?: boolean
}> = ({
  instagramVisible = true,
  linkedinVisible = true,
  twitterVisible = true,
  facebookVisible = true,
  youtubeVisible = false,
  githubVisible = true,
  gmailVisible = false,
  douVisible = false,
  behanceVisible = false,
  clutchVisible = false
}) => {
  const socials: SocialItem[] = [
    {
      alt: 'Instagram',
      icon: InstagramMonoIcon,
      visible: instagramVisible,
      hoverIcon: InstagramColorIcon,
      href: 'https://www.instagram.com/yyluchkiv'
    },
    {
      alt: 'Linkedin',
      icon: LinkedinMonoIcon,
      visible: linkedinVisible,
      hoverIcon: LinkedinColorIcon,
      href: 'https://www.linkedin.com/in/yyluchkiv'
    },
    {
      alt: 'Twitter',
      icon: TwitterMonoIcon,
      visible: twitterVisible,
      hoverIcon: TwitterColorIcon,
      href: 'https://twitter.com/yyluchkiv'
    },
    {
      alt: 'Facebook',
      icon: FacebookMonoIcon,
      visible: facebookVisible,
      hoverIcon: FacebookColorIcon,
      href: 'https://www.facebook.com/yurii.luchkiv'
    },
    {
      alt: 'Youtube',
      icon: YoutubeMonoIcon,
      visible: youtubeVisible,
      hoverIcon: YoutubeColorIcon,
      href: 'https://www.youtube.com/'
    },
    {
      alt: 'Github',
      icon: GithubMonoIcon,
      visible: githubVisible,
      hoverIcon: GithubColorIcon,
      href: 'https://github.com/yurii-luchkiv'
    },
    {
      alt: 'Gmail',
      icon: GmailMonoIcon,
      visible: gmailVisible,
      hoverIcon: GmailColorIcon,
      href: 'https://mail.google.com/'
    },
    {
      alt: 'Dou',
      icon: DouMonoIcon,
      visible: douVisible,
      hoverIcon: DouColorIcon,
      href: 'https://dou.ua/'
    },
    {
      alt: 'Behance',
      icon: BehanceMonoIcon,
      visible: behanceVisible,
      hoverIcon: BehanceColorIcon,
      href: 'https://www.behance.net/'
    },
    {
      alt: 'Clutch',
      icon: ClutchMonoIcon,
      visible: clutchVisible,
      hoverIcon: ClutchColorIcon,
      href: 'https://clutch.co/'
    }
  ]

  return (
      <div className={ Styles.footer }>
        <div className={ Styles.leftSide }>
          <span className={ Styles.copyright }>Yurii Luchkiv © 2019 — { DateUtility.getCurrentYear() }</span>
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
