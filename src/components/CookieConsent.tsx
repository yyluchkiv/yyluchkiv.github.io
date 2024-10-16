'use client'

import {NextFont} from 'next/dist/compiled/@next/font'
import {hasCookie, setCookie} from 'cookies-next'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import CookiesIcon from '@/public/assets/svgs/icons/CookieConsent/cookies.svg'

const CookieConsent: React.FC<{ localFont: NextFont }> = ({ localFont }) => {
  const [showConsent, setShowConsent] = useState(true)
  const cookieName = 'cookiesAccepted'

  useEffect(() => {
    setTimeout(() => {
      setShowConsent(hasCookie(cookieName))
    }, 2000)
  }, [])

  const acceptCookie = () => {
    setShowConsent(true)
    setCookie(cookieName, 'true', {})
  }

  if (showConsent) {
    return null
  }

  return (
    <div className={ `cookie ${ localFont.className }`}>
      <div className="wrapper">
        <div className="content">
          <Image src={ CookiesIcon } alt='cookies-icon' height={ 30 } />
          <span className="text">
            This website uses cookies to improve user experience.
          </span>
        </div>
        <button className="acceptButton" onClick={ () => acceptCookie() }>
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
