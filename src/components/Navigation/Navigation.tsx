import Styles from './Navigation.module.css'
import ApplicationConstants from '@/src/constants/app.constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { allPosts } from 'contentlayer/generated'
import Head from 'next/head'
import StringUtility from '@/src/utilities/StringUtility'

export default function Navigation () {
  const router = useRouter()
  const isArticleHidden = allPosts.find((post) => post.url === router.query.slug && post.hide)
  let routePathName: string = usePathname() || '/'

  if (routePathName.includes('/blog/')) {
    routePathName = '/blog'
  }

  if (isArticleHidden) {
    routePathName = ''
  }

  function getPageTitle () {
    const routeName: string = StringUtility.capitalizeFirstLetter(routePathName.replace('/', ''))

    if (routeName) {
      return `Yurii Luchkiv — ${ routeName }`
    } else {
      return 'Yurii Luchkiv'
    }
  }

  return (
    <>
      <Head>
        <title>{ getPageTitle() }</title>
      </Head>
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
    </>
  )
}