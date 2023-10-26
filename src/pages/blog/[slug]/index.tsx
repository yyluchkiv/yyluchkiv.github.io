import Styles from './Article.module.css'
import { allPosts } from 'contentlayer/generated'
import { useRouter } from 'next/router'
import ReadingTime from 'reading-time'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/src/components/ImageGallery/ImageGallery'
import TweetBadge from '@/src/components/TweetBadge/TweetBadge'
import DateUtility from '@/src/utilities/DateUtility'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const CustomLink = (props: any) => {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={ href } { ...props }>
        { props.children }
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a { ...props } />
  }

  return <a target="_blank" rel="noopener noreferrer" { ...props } />
}

function RoundedImage(props: any) {
  return <Image alt={ props.alt } { ...props } />
}

const components = {
  a: CustomLink,
  Image: RoundedImage,
  ImageGallery: ImageGallery,
  TweetBadge: TweetBadge
}

function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <article>
      <Component components={ components } />
    </article>
  )
}

export default function Article() {
  const router = useRouter()
  const post = allPosts.find((post) => post.slug === router.query.slug)
  TimeAgo.addLocale(en)
  const timeAgo = new TimeAgo('en-US')

  if (!post) {
    return (
      <span>Loading...</span>
    )
  }

  const dateTimestamp = new Date(post.publishedAt).getTime()
  const postStats = ReadingTime(post.body.raw)

  return (
    <section className={ Styles.post }>
      <h1 className={ Styles.title }>{ post.title }</h1>
      <div className={ Styles.decription }>
        <span>{ DateUtility.formatArticleDate(post.publishedAt) } ({ timeAgo.format(dateTimestamp, 'round') })</span>
        <span>{ postStats.text }</span>
      </div>
      <Mdx code={ post.body.code } />
    </section>
  )
}