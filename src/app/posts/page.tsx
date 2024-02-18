'use client'

import Styles from './Posts.module.css'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import ReadingTime from 'reading-time'
import ApplicationConstants from '@/src/constants/app.constants'
import { CategoriesIcons } from '@/src/types/CategoriesTypes'
import { useState } from 'react'
import DateUtility from '@/src/utilities/DateUtility'
import ArrowIcon from '@/public/assets/svgs/icons/Blog/Arrow.svg'

const CategoryImage: React.FC<{ category: string }> = ({ category }) => {
  const [isHovering, setIsHovered] = useState(false)
  const iconSource =  ApplicationConstants.BLOG_ARTICLE_CATEGORIES.ICONS[category.toUpperCase() as keyof CategoriesIcons]

  function onMouseEnterIcon () {
    setIsHovered(true)
  }

  function onMouseLeaveIcon () {
    setIsHovered(false)
  }

  return (
    <div className={ Styles.category }>
      <span className={ `${ Styles.tooltip } ${ isHovering && Styles.tooltipVisible }` }>{ category }</span>
      <Image src={ iconSource } onMouseEnter={ onMouseEnterIcon } onMouseLeave={ onMouseLeaveIcon } alt={ category } priority={ true } />
    </div>
  )
}

export default function Blog () {
  const sortedPosts = allPosts.sort((postA, postB) => postB.publishedAt.localeCompare(postA.publishedAt))

  function getReadingTime (text: string) {
    const postStats = ReadingTime(text)

    return postStats.text
  }

  return (
    <div className={ Styles.posts }>
      <ul className={ Styles.post }>
        { sortedPosts.map(post => {
          if (!post.hide) {
            return (
              <li key={ post.slug }>
                <Link href={ `posts/${ post.slug }` } className={ Styles.link }>
                  <span className={ Styles.postDate }>{ DateUtility.formatArticleDate(post.publishedAt) }</span>
                  <CategoryImage category={ post.category } />
                  <div className={ Styles.postDescription }>
                    <span className={ Styles.postTitle }>{ post.title }</span>
                    <span className={ Styles.postReadingTime }>{ getReadingTime(post.body.raw) }</span>
                    <Image className={ Styles.arrow } src={ ArrowIcon } alt='Arrow' />
                  </div>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}
