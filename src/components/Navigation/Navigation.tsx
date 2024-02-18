'use client'

import Styles from './Navigation.module.css'
import ApplicationConstants from '@/src/constants/app.constants'
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

export default function Navigation () {
  const params = useParams()
  const isArticleHidden = allPosts.find((post) => post.url === params?.slug && post.hide)
  let routePathName: string = usePathname() || '/'

  if (routePathName.includes('/posts/')) {
    routePathName = '/posts'
  }

  if (isArticleHidden) {
    routePathName = ''
  }

  return (
    <nav className={ Styles.navigation }>
      <ul className={ Styles.list }>
        { ApplicationConstants.NAVIGATION_TABS.map(tab => {
          if (!tab.hide) {
            const isActiveTab = routePathName === tab.pathName
            return (
              <li className={ Styles.item } key={ tab.name }>
                <Link target={ tab.pathName.includes('http') ? '_blank' : '_self' } className={ `${ Styles.link } ${ isActiveTab && Styles.active }` } href={ tab.pathName }>{ tab.name }</Link>
              </li>
            )
          }
        })}
      </ul>
    </nav>
  )
}
