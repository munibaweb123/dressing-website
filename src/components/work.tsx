import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Work = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-[#2A7CC7]'>
      <div className='max-w-[500px] mx-auto p-10 text-white space-y-5'>
        <h2>WORK WITH US</h2>
        <h3 className='text-3xl font-bold'>Now Let&apos;s grow Yours</h3>
        <p>
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
        </p>
        <Button variant={'outline'} className='bg-[#2A7CC7]'>Button</Button>
      </div>
      <div>
        <Image src='/work.png' alt='work' width={500} height={500} />
      </div>
    </div>
  )
}

export default Work
