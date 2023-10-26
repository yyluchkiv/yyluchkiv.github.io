import Styles from './ArrowLink.module.css'
import Image from 'next/image'
import ArrowIcon from '@/public/assets/svgs/icons/Links/Arrow.svg'

const ArrowLink: React.FC<{ link: string, text: string }> = ({ link, text }) => {
  return (
    <a href={ link } target="_blank" className={ Styles.link }>
      <Image width={ 12 } height={ 12 } src={ ArrowIcon } alt='Arrow Icon' />
      <p className={ Styles.text }>{ text }</p>
    </a>
  )
}

export default ArrowLink
