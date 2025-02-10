import Image from 'next/image'
import React from 'react'

const Video = () => {
  return (
    <div className='flex justify-center items-center max-w-[1000px] mx-auto'>
        <Image src={"/video-card.png"} alt='video card' width={500} height={500} className='w-full'/>
    </div>
  )
}

export default Video