import React from 'react'

const Hero = () => {
  return (
    <div className='flex h-150 w-screen bg-black '>
        <div className='w-1/2'>
            <h1 className='text-white text-8xl pl-12 pt-50'>SPACE FINDER</h1>
            <p className='text-white pl-12 pt-4 text-justify' >In an ocean of information, we aim to be your North Star. We strip away the jargon to deliver clear, accurate, and breathtaking stories about the universe we call home. We don't just report the news; we celebrate the human curiosity that drives us to reach for the stars.</p>
        </div>
        <div className='w-1/2 justify-center items-center flex'> 
            <img src="https://www.isro.gov.in/media_isro/image/index/LVM3M6/PostLaunch/LVM3M6Img15.jpg.webp" alt="" className='h-100 m-5 rounded-xl'/>
        </div>
        

    </div>
  )
}

export default Hero