'use client'

import '../components/global.css';
import Script from "next/script";
import Avatar from "@/public/assets/jpgs/avatar.jpg";
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
    weight: ['400', '700'],
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
            <Link className="socialLink" href={socialItem.href} target='_blank'>
                <Image className={`icon ${isHovering && 'iconHidden'}`} width={25} height={25} src={socialItem.icon}
                       alt={socialItem.alt} priority={true}/>
                <Image className={`hoverIcon ${isHovering && 'hoverIconVisible'}`} width={25} height={25}
                       src={socialItem.hoverIcon} alt={socialItem.alt}/>
            </Link>
        </li>
)
}

export default function Home() {
  return (
      <div className="any-page page-container">
          <div className="home-main-text-container">
              <div className={`${titleFont.className} homepage-title`}>
                  <p>Yurii Luchkiv</p>
                  <p className="description-text">Code hard. Work hard. Spend time with your family</p>
                  <span className="description-text">🇺🇦 Ukraine</span>
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
          </div>
          <p className="any-page-paragraph">
              What do I do?
          </p>
          <div className="any-page-paragraph">
              <p>→ I provide <a className="homepage-link" target={'_blank'} href={"https://tech1.agency"}>services</a></p>
              <p>→ I build <a className="homepage-link" target={'_blank'} href={"/apps"}>apps</a></p>
              <p className="any-page-paragraph">
                  That&apos;s all Folks 🙃
              </p>
          </div>

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
