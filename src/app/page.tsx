'use client'

import '../components/global.css';
import Avatar from "@/public/assets/jpgs/avatar.jpg";
import LogoDadApp from "@/public/assets/pngs/logo-dad-app.png";
import LogoPasswordGenerator from "@/public/assets/pngs/logo-password-generator.png";
import LogoSlackCLI from '@/public/assets/pngs/logo-slack-cli.png';
import LogoSmartTrader from '@/public/assets/pngs/logo-smart-trader.png';
import RoundedImage from "@/src/components/RoundedImage";
import { Outfit } from 'next/font/google'
import GithubMonoIcon from "@/public/assets/svgs/icons/Footer/Mono/GithubMono.svg";
import GithubColorIcon from "@/public/assets/svgs/icons/Footer/Color/GithubColor.svg";
import TwitterMonoIcon from "@/public/assets/svgs/icons/Footer/Mono/TwitterMono.svg";
import TwitterColorIcon from "@/public/assets/svgs/icons/Footer/Color/TwitterColor.svg";
import YoutubeMonoIcon from "@/public/assets/svgs/icons/Footer/Mono/YoutubeMono.svg";
import YoutubeColorIcon from "@/public/assets/svgs/icons/Footer/Color/YoutubeColor.svg";
import UpworkMonoIcon from "@/public/assets/svgs/icons/Footer/Mono/UpworkMono.svg";
import UpworkColorIcon from "@/public/assets/svgs/icons/Footer/Color/UpworkColor.svg";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Link from "next/link";

const titleFont = Outfit({
    weight: ['300', '400', '700'],
    subsets: ['latin']
})

interface SocialItem {
    alt: string,
    visible: boolean,
    icon: StaticImageData | string,
    hoverIcon: StaticImageData | string
    href: string
}

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
        href: 'https://x.com/yyluchkiv'
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

interface App {
    title: string,
    appUsers: string,
    link: string,
    description: string,
    linkText: string,
    logo: StaticImageData,
}

const apps: App[] = [
    {
        title: 'DadApp',
        appUsers: '500+ users',
        description: 'mobile app to securely store family data offline',
        link: 'https://dadapp.app',
        linkText: '→ dadapp.app',
        logo: LogoDadApp
    },
    {
        title: 'Password Generator',
        appUsers: '3.6k+ users',
        description: 'simple, secure, one-click chrome extension',
        link: 'https://chromewebstore.google.com/detail/password-generator/nbnjbddbbcnnlceoglkfoolmknejieoi?hl=en',
        linkText: '→ password generator',
        logo: LogoPasswordGenerator
    }
]

interface PortfolioItem {
    title: string,
    description: string,
    link: string,
    pageLink: string,
    logo: StaticImageData
}

const portfolioItems: PortfolioItem[] = [
    {
        title: 'SmartTrader',
        description: 'solution to trade simultaneously on multiple cryptocurrency exchanges',
        link: 'https://tech1.agency/showcases/smart-trader',
        pageLink: '/portfolio/smart-trader',
        logo: LogoSmartTrader
    },
    {
        title: 'Slack CLI',
        description: 'simplify and automate team workflows and routines',
        link: 'https://tech1.agency/showcases/slack-cli',
        pageLink: '/portfolio/slack-cli',
        logo: LogoSlackCLI
    }
]

const SocialLink: React.FC<{ socialItem: SocialItem }> = ({ socialItem }) => {
    const [isHovering, setIsHovered] = useState(false)

    function onMouseEnterLink () {
        setIsHovered(true)
    }

    function onMouseLeaveLink () {
        setIsHovered(false)
    }

    return (
        <li key={socialItem.alt} onMouseEnter={onMouseEnterLink} onMouseLeave={onMouseLeaveLink}
            onClick={onMouseLeaveLink}>
            <Link className="socialLink" href={socialItem.href} target='_blank' rel="noopener noreferrer">
                <Image className={`icon ${isHovering && 'iconHidden'}`} width={25} height={25} src={socialItem.icon}
                       alt={socialItem.alt} priority={true}/>
                <Image className={`hoverIcon ${isHovering && 'hoverIconVisible'}`} width={25} height={25}
                       src={socialItem.hoverIcon} alt={socialItem.alt}/>
            </Link>
        </li>
    )
}

export default function Home() {
    const [showAll, setShowAll] = useState(false)
    const [showAllPortfolio, setShowAllPortfolio] = useState(false)

    function toggleShowAll () {
        setShowAll(!showAll)
    }

    function toggleShowAllPortfolio () {
        setShowAllPortfolio(!showAllPortfolio)
    }

  return (
      <div className="any-page page-container">
          <div className="home-main-text-container">
              <div className={`${titleFont.className} homepage-title`}>
                  <p className="main-title">Yurii Luchkiv</p>
                  <p className="description-text">Code hard. Work hard. Spend time with your family</p>
                  <p className="description-text location">🇺🇦 Ukraine</p>
                  <ul className="socialList">
                      {socials.map(socialItem => socialItem.visible &&
                          <SocialLink socialItem={socialItem} key={socialItem.alt}/>)}
                  </ul>
              </div>
              <div className="any-page-gallery">
                  <RoundedImage src={Avatar} alt={Avatar} />
              </div>
          </div>
          <div className="any-page-paragraph m-0">
              <p>→ 💻 I am a software engineer</p>
              <p>→ ⏳ I have been a software engineer since 2011</p>
              <p>→ 🏁 I plan to continue to be a software engineer</p>
              <p>→ 📖 <a className="homepage-link" href="/about">Read more about me</a></p>
          </div>
          <p className="any-page-paragraph">
              What do I do?
          </p>
          <div className="any-page-paragraph">
              <p>→ I run <a className="homepage-link" target={'_blank'} rel="noopener noreferrer" href={"https://tech1.agency"}>software
                  development agency</a></p>
              <p>→ I build <a className="homepage-link" href={"#apps"}>apps</a></p>
          </div>
          <div>
              <div className="homepage-subtitle-container">
                  <h4 className={`${titleFont.className} homepage-subtitle`}>Portfolio</h4>
                  {portfolioItems.length > 4 &&
                      <button type="button" className="see-more-button"
                              onClick={toggleShowAllPortfolio}>{showAllPortfolio ? 'See Less' : 'See more'}</button>
                  }
              </div>
              <div className="app-cards-container">
                  {portfolioItems.slice(0, showAllPortfolio ? portfolioItems.length : 4).map((item, index) => (
                      <div className="app-card-wrapper" key={index}>
                          <a href={item.link} className="app-card" target='_blank' rel="noopener noreferrer">
                              <div className="app-card-header-container">
                                  <Image width={20} height={20} src={item.logo} alt={item.title}/>
                                  <h3 className={`${titleFont.className} app-card-title`}>{item.title}</h3>
                              </div>
                              <p>{item.description}</p>
                          </a>
                          <a className="app-card-page-link" href={item.pageLink}>
                              Read more <span className='arrow-icon'>⌃</span>
                          </a>
                      </div>
                  ))}
              </div>
          </div>
          <div id="apps">
              <div className="homepage-subtitle-container">
                  <h4 className={`${titleFont.className} homepage-subtitle`}>Apps</h4>
                  {apps.length > 4 &&
                      <button type="button" className="see-more-button"
                              onClick={toggleShowAll}>{showAll ? 'See Less' : 'See more'}</button>
                  }
              </div>
              <div className="app-cards-container">
                  {apps.slice(0, showAll ? apps.length : 4).map((app, index) =>
                      <a className="app-card" key={index} href={app.link} target={'_blank'} rel="noopener noreferrer">
                          <div className="app-card-header-container">
                              <Image width={20} height={20} src={app.logo} alt={app.title}/>
                              <h3 className={`${titleFont.className} app-card-title`}>{app.title}</h3>
                          </div>
                          <span className={`${titleFont.className} app-card-users`} style={{ fontStyle: 'italic' }}>{app.appUsers}</span>
                          <p>{app.description}</p>
                      </a>
                  )}
              </div>
          </div>
          <p className="any-page-paragraph">
              That&apos;s all Folks 🙃
          </p>
      </div>
  )
}
