import Styles from './PostBanner.module.css'
import LinksStyles from '../Links.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ArrowIcon from '@/public/assets/svgs/icons/Links/Arrow.svg'

const PostBanner: React.FC<{ postId: string, title: string, minRead: string }> = ({ postId, title, minRead }) => {
  return (
    <Link href={ `/posts/${ postId }` } className={ `${ LinksStyles.linkWithBackground }  ${ LinksStyles.container }` }>
      <div className={ Styles.content }>
        <span className={ LinksStyles.title }>{ title }</span>
        <span className={ LinksStyles.description }>{ minRead } min read</span>
      </div>
      <Image width={ 12 } height={ 12 } src={ ArrowIcon } alt='Arrow Icon' />
    </Link>
  )
}

export default PostBanner
