import Styles from './IconLink.module.css'
import LinkStyles from '@/src/components/Links/Links.module.css'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

const IconLink: React.FC<{ iconSource: string | StaticImageData, link: string, text: string, alt: string }> = ({ iconSource, link, text, alt }) => {
  return (
    <Link href={ link } target='_blank' className={ `${ Styles.iconLink } ${ LinkStyles.container }` }>
      <Image src={ iconSource } alt={ alt } priority={ true } />
      <span>{ text }</span>
    </Link>
  )
}

export default IconLink