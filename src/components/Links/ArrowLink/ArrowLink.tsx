import Styles from './ArrowLink.module.css'
import Image from 'next/image'
import ArrowIcon from '@/public/assets/svgs/icons/Links/Arrow.svg'

const ArrowLink: React.FC<{ link: string, text: string, imageVisible?: boolean }> = ({ link, text, imageVisible = true }) => {
  return (
    <a href={ link } target="_blank" className={ Styles.link }>
      {imageVisible && (
        <Image width={ 12 } height={ 12 } src={ ArrowIcon } alt='Arrow Icon' />
      )}
      <span className={ Styles.text }>{ text }</span>
    </a>
  )
}

export default ArrowLink
