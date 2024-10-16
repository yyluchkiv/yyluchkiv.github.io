import Image from 'next/image'
import Link from 'next/link'
import ArrowIcon from '@/public/assets/svgs/icons/Links/Arrow.svg'

const PostBanner: React.FC<{ postId: string, title: string, minRead: string }> = ({ postId, title, minRead }) => {
  return (
    <Link href={ `/posts/${ postId }` } className={ `linkWithBackground  container` }>
      <div className="content">
        <span className="title">{ title }</span>
        <span className="description">{ minRead } min read</span>
      </div>
      <Image width={ 12 } height={ 12 } src={ ArrowIcon } alt='Arrow Icon' />
    </Link>
  )
}

export default PostBanner
