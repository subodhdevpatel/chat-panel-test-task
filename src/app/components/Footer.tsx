import React from 'react'
import Smile from '../assests/svg/smile.svg'
import AtRule from '../assests/svg/at_rule.svg'
import Sender from '../assests/svg/sender.svg'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="border-t w-full flex justify-between items-center px-3 shadow-sm  border-[#E5E5EA]">
      <div className="w-6 relative h-6 mr-1 flex justify-center items-center">
        <Image src={Smile} width={16} height={16} alt="avatar" className='' />
       
      </div>
      <input className=' text-sm text-[#666668] w-full border-none h-12 outline-none'  placeholder='Start typing...' />
      <div className='flex items-center gap-4'>
      <Image src={AtRule} width={16} height={16} alt="avatar" className=' text-[#3D3D3D]' />  
      <Image src={Sender} width={16} height={16} alt="avatar" className='text-[#8E8E93]' />  
      </div>
    </footer >
  )
}

export default Footer