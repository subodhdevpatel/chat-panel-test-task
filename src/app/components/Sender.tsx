import React from 'react'

import Image from 'next/image'
import CheckIcon from '../assests/svg/tick.svg'
import BlueArrow from '../assests/svg/blue_arrow.svg'
interface SenderProps {
  message: any;
  time: string;
  username?: string;
  profile?: string;
  online?: boolean | any;
  avatar?:any;
  userType?: string;
}
const Sender: React.FC<SenderProps> = ({ message, time }) => {
  return (
    <div className='flex justify-end w-full'>

      <div className='flex  relative bg-[#007AFF] px-2 py-1 rounded-md max-w-[265px] w-full '>
        <Image className='absolute top-0 -right-1' src={BlueArrow} width={8} height={12} alt="rcv" />
        <div className='flex flex-col w-full'>

          <div className='flex flex-wrap justify-start'>
            <p className='text-sm text-white'>{message}</p>
          </div>
          <div className='flex justify-end'>
            <span> {time}</span>
            <Image src={CheckIcon} width={16} height={8} alt='check' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sender