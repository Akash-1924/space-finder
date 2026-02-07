import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-22 text-white backdrop-blur-sm fixed w-full'>
        <div className='text-2xl font-bold pl-12'>
            <a href="">✯SPFDER</a>
        </div>
        <div>
            <ul className='flex gap-8 pr-12 text-lg'>
                <li><a href="">Vehicle</a></li>
                <li><a href="">Satellite</a></li>
                <li><a href="">History</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar