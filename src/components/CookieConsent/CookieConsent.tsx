'use client'

import Styles from './CookieConsent.module.css'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { hasCookie, setCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CookiesIcon from '@/public/assets/svgs/icons/CookieConsent/cookies.svg'

const CookieConsent: React.FC<{ localFont: NextFontWithVariable }> = ({ localFont }) => {
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
    <div className={ `${ Styles.cookie } ${ localFont.className }`}>
      <div className={ Styles.wrapper }>
        <div className={ Styles.content }>
          <Image src={ CookiesIcon } alt='cookies-icon' height={ 30 } />
          <span className={ Styles.text }>
            This website uses cookies to improve user experience.
          </span>
        </div>
        <button className={ Styles.acceptButton } onClick={ () => acceptCookie() }>
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
