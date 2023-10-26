import Styles from './Badge.module.css'
import LinkStyles from '@/src/components/Links/Links.module.css'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const Badge: React.FC<{ iconSource: string | StaticImageData, alt: string, link: string }> = ({ iconSource, alt, link }) => {
  return (
    <Link href={ link } target='_blank' className={ `${ Styles.badge } ${ LinkStyles.container }` }>
      <Image src={ iconSource } alt={ alt } />
    </Link>
  )
}

export default Badge