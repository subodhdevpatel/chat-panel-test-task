import React from 'react'
import Avatar from '../assests/svg/avatar.svg'
import Avatar2 from '../assests/svg/avatar2.svg'
import Avatar3 from '../assests/svg/avatar3.svg'
import Avatar4 from '../assests/svg/avatar4.svg'

import Ellipsis from '../assests/svg/ellipsis.svg'
import Image from 'next/image'

function Header() {
  return (
    <header className='flex justify-between items-center p-4 border-b border-[rgba(229,229,234,1)] shadow-sm'>
      <div className='flex items-center'>
        <div className=' flex justify-center items-center'>
          <Image src={Avatar} width={26} height={26} alt="avatar" className='border-[2px] border-white rounded-full' />
          <Image className='-ml-2 border-[2px] border-white rounded-full  ' src={Avatar2} width={26} height={26} alt="avatar2" />
          <Image className='-ml-2 border-[2px] border-white rounded-full' src={Avatar3} width={26} height={26} alt="avatar3" />
          <Image className='-ml-2 border-[2px] border-white rounded-full' src={Avatar4} width={26} height={26} alt="avatar4" />
        </div>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <h5 className='text-sm text-[#2C2C2E] font-extrabold'>🦄 Team Unicorns</h5>
        <p className='text-xs text-[#666668]'>last seen 45 minutes ago</p>
      </div>
      <div className='flex' >
        <div className='w-6 h-6 hover-bg-[#eee] rounded-[4px] flex cursor-pointer items-center justify-center'>
          <Image className='   ' src={Ellipsis} width={16} height={16} alt="avatar" />
        </div>
      </div>
    </header>
  )
}

export default Header