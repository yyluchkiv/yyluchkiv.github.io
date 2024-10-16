'use client'

import Image from 'next/image'
import { useState } from 'react'
import Loader from '@/src/components/Loader'

function RoundedImage(props: any) {
  const [loadedImage, setLoadedImage] = useState(true)

  return (
    <div className="roundedImage">
      <Loader loading={ loadedImage } />
      <Image className="image" style={{ display: loadedImage ? 'none' : 'block' }} alt={ props.alt } { ...props } onLoad={ () => setLoadedImage(false) } loading='eager' />
    </div>
  )
}

export default RoundedImage
