'use client'

import 'swiper/css'
import 'swiper/css/scrollbar'
import Styles from './ImageGallery.module.css'
import Image, { StaticImageData } from 'next/image'
import { useState, useLayoutEffect, useEffect } from 'react'
import { v4 as uuId } from 'uuid'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Keyboard, Zoom } from 'swiper/modules'
import CloseIcon from '@/public/assets/svgs/icons/ImageGallery/Close.svg'
import ArrowIcon from '@/public/assets/svgs/icons/ImageGallery/Arrow.svg'

type Orientation = 'v' | 'h'
type Position = 'l' | 'c' | 'r'

interface GalleryImage {
  id?: number,
  alt: string,
  ratio: number,
  source: StaticImageData | string
}

interface GalleryItem {
  ratio: number,
  images: GalleryImage[]
}

function useWindowSize () {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })

  useIsomorphicLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

function SwiperButtonNext () {
  const swiper = useSwiper()
  return <Image className={ Styles.arrowRight } src={ ArrowIcon } alt='Arrow' width={ 30 } height={ 30 } onClick={ () => swiper.slideNext() } />
}

function SwiperButtonPrev () {
  const swiper = useSwiper()
  return <Image className={ Styles.arrowLeft } src={ ArrowIcon } alt='Arrow' width={ 30 } height={ 30 } onClick={ () => swiper.slidePrev() } />
}

const ImageGallery: React.FC<{
  gallery: GalleryItem[],
  width?: string,
  height?: number,
  orientation?: Orientation,
  position?: Position,
  gap?: number,
  imageBorderRadius?: number,
  preview?: boolean
}> = ({
  gallery,
  width = '100%',
  height = 30,
  orientation = 'v',
  position = 'c',
  gap = 10,
  imageBorderRadius = 0,
  preview = true
}) => {
  const [showPreview, setShowPreview] = useState(false)
  const [initialSlide, setInitialSlide] = useState(0)
  let isHorizontalOrientation: boolean
  let isVerticalOrientation: boolean
  let galleryHeight: number = height
  const screenWidth: number = useWindowSize().width
  const mobilePointWidth: number = 550
  const minColumnPerRow: number = 2
  let imageIndex = 0

  const updatedGallery = gallery.map(galleryItem => {
    return {
      ...galleryItem,
      images: galleryItem.images.map(image => {
        imageIndex++

        return {
          ...image,
          id: imageIndex
        }
      })
    }
  })

  useEffect(() => {
    const html = document.querySelector('html')

    if (html) {
      html.style.overflow = showPreview ? 'hidden' : 'auto'
    }
  }, [showPreview])

  if (screenWidth < mobilePointWidth && gallery.length > minColumnPerRow) {
    galleryHeight = height * 2
    isHorizontalOrientation = false
    isVerticalOrientation = true
  } else {
    isHorizontalOrientation = orientation === 'h'
    isVerticalOrientation = orientation === 'v'
  }

  function isValidRatio (gallery: GalleryItem[]) {
    let lineRatio = 0
    let imageRation = 0
    
    gallery.forEach(galleryItem => {
      lineRatio += galleryItem.ratio

      galleryItem.images.forEach(image => {
        imageRation += image.ratio
      })

      if (imageRation !== 100) {
        throw new Error('Elements ratio sum should be [100%].')
      } else {
        imageRation = 0
      }
    })

    if (lineRatio !== 100) {
      throw new Error('Elements ratio sum should be [100%].')
    } else {
      return true
    }
  }

  function getGalleryCssClass () {
    const galleryPosition = position && Styles[position]
    const galleryOrientation = isVerticalOrientation ? Styles.vertical : Styles.horizontal

    return `${ galleryPosition } ${ galleryOrientation }`
  }

  function getGalleryStyles () {
    let styles: React.CSSProperties = {
      width,
      height: `${ galleryHeight }rem`,
      gap
    }

    if (screenWidth < mobilePointWidth && gallery.length > minColumnPerRow) {
      styles = {
        ...styles,
        flexWrap: 'wrap',
      }
    }

    return styles
  }

  function getLineCssClass () {
    return isVerticalOrientation ? Styles.lineVertical : Styles.lineHorizontal
  }

  function getLineStyles (ratio: number) {
    let styles: React.CSSProperties = {
      gap
    }

    if (isVerticalOrientation) {
      if (screenWidth < mobilePointWidth && gallery.length > minColumnPerRow) {
        styles = {
          ...styles,
          width: `calc(50% - (${ gap }px / 2)`,
          height: `${ galleryHeight / 2 }rem`,
          flex: '1 1 auto'
        }
      } else {
        styles = {
          ...styles,
          width: `${ ratio }%`
        }
      }
    }

    if (isHorizontalOrientation) {
      if (screenWidth < mobilePointWidth && gallery.length > minColumnPerRow) {
        styles = {
          ...styles,
          height: `${ ratio }%`,
          flexWrap: 'wrap'
        }
      } else {
        styles = {
          ...styles,
          height: `${ ratio }%`
        }
      }
    }

    return styles
  }

  function getImageContainerStyles (ratio: number) {
    let styles: React.CSSProperties = {
      borderRadius: `${ imageBorderRadius }%`,
      cursor: preview ? 'pointer' : 'auto'
    }

    if (isVerticalOrientation) {
      styles = {
        ...styles,
        height: `${ ratio }%`,
        
      }
    }

    if (isHorizontalOrientation) {
      styles = {
        ...styles,
        width: `${ ratio }%`,
      }
    }

    return styles
  }

  function getImageStyle () {
    return { borderRadius: `${ imageBorderRadius }%` }
  }

  function openPreview (initialSlideNumber: number) {
    setShowPreview(true)
    setInitialSlide(initialSlideNumber)
  }

  function closePreview () {
    setShowPreview(false)
  }

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === 'Escape' && showPreview) {
        closePreview()
      }
    }
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [showPreview])

  return (
    <div className={ getGalleryCssClass() } style={ getGalleryStyles() }>
      {
        isValidRatio(gallery) &&
        updatedGallery.map(galleryItem => (
          <div className={ getLineCssClass() } style={ getLineStyles(galleryItem.ratio) } key={ uuId() }>
            {
              galleryItem.images.map(image => (
                <div className={ Styles.container } style={ getImageContainerStyles(image.ratio) } key={ uuId() }>
                  <Image
                    onClick={ () => preview && openPreview(image.id - 1) }
                    className={ Styles.image }
                    style={ getImageStyle() }
                    src={ image.source }
                    alt={ image.alt }
                    fill={ true }
                    priority={ true }
                    sizes='(max-width: 768px) 1200w, (max-width: 1200px) 1000w, 33vw'
                  />
                </div>
              ))
            }
          </div>
        ))
      }
      {
        preview && showPreview &&
        <div className={ Styles.swiper }>
          <Swiper
            spaceBetween={ 30 }
            slidesPerView={ 1 }
            loop={ true }
            zoom={ true }
            keyboard={{
              enabled: true
            }}
            modules={ [Keyboard, Zoom] }
            initialSlide={ initialSlide }
          >
            {
              updatedGallery.map(galleryItem => (
                galleryItem.images.map(image => (
                  <SwiperSlide key={ uuId() }>
                    <div className={ `${Styles.swiperContainer} swiper-zoom-container` }>
                      <Image
                        className={ Styles.slideImage }
                        src={ image.source }
                        alt={ image.alt }
                        fill={ true }
                        priority={ true }
                      />
                    </div>
                  </SwiperSlide>
                ))
              ))
            }
            <SwiperButtonNext />
            <SwiperButtonPrev />
          </Swiper>
          <Image className={ Styles.closeIcon } src={ CloseIcon } alt='Close' width={ 20 } height={ 20 } onClick={ () => closePreview() } />
        </div>
      }
    </div>
  )
}

export default ImageGallery
