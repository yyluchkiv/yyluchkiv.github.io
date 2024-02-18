import Styles from './Post.module.css'
import { allPosts } from 'contentlayer/generated'
import ReadingTime from 'reading-time'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import ImageGallery from '@/src/components/ImageGallery/ImageGallery'
import TweetBadge from '@/src/components/TweetBadge/TweetBadge'
import DateUtility from '@/src/utilities/DateUtility'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import RoundedImage from '@/src/components/RoundedImage/RoundedImage'

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

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.url }))

export const generateMetadata = ({ params }: { params: any }) => {
  const post = allPosts.find((post) => post.url === params.slug)
  return {
    metadataBase: new URL('https://yyluchkiv.com/'),
    title: 'Yurii Luchkiv — ' + post?.title,
    description: post?.summary,
    twitter: {
      title: 'Yurii Luchkiv — ' + post?.title,
      card: 'summary_large_image',
      description: post?.summary,
      images: [
        {
          type: "image/png",
          width: 800,
          height: 600,
          url: '/assets/pngs/Home/Main-V120.png'
        }
      ],
    },
    openGraph: {
      title: 'Yurii Luchkiv — ' + post?.title,
      description: post?.summary,
      siteName: `yyluchkiv.com/posts/${post?.url}`,
      url: `https://yyluchkiv.com/posts/${post?.url}`,
      images: [
        {
          type: "image/png",
          width: 800,
          height: 600,
          url: '/assets/pngs/Home/Main-V120.png'
        }
      ],
      locale: post?.locale,
      type: 'article',
    }
  }
}

export default function Article({ params }: { params: any }) {
  const post = allPosts.find((post) => post.slug === params?.slug)
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
      <div className={ Styles.description }>
        <span>{ DateUtility.formatArticleDate(post.publishedAt) } ({ timeAgo.format(dateTimestamp, 'round') })</span>
        <span>{ postStats.text }</span>
      </div>
      <Mdx code={ post.body.code } />
    </section>
  )
}
