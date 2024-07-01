import React from 'react'
import Avatar from '../assests/svg/avatar.svg'
import Arrow from '../assests/svg/arrow.svg'
import Image from 'next/image'

interface ReceiverProps {
  message: any;
  time: string;
  username?: string;
  profile?: string;
  online?: boolean | any;
  avatar?:any;
  userType?: string;
}

const Receiver: React.FC<ReceiverProps> = ({ message, time, username, profile, online }) => {
  return (
    <div className='flex gap-1 items-start'>
      <div className='w-8 relative h-8 min-w-8 rounded-full'>
        <Image src={Avatar} width={32} height={32} alt='sender' />
        {online ? <span className='absolute bottom-0 right-0 w-[10px] h-[10px] border border-white rounded-full bg-[#34C759]'></span> : null}
      </div>
      <div className='flex relative bg-[#F2F2F7] px-2 py-1 rounded-md max-w-[265px] w-full '>
        <Image className='absolute -left-1 top-0' src={Arrow} width={9} height={12} alt='arrow' />
        <div className='flex flex-col w-full'>
          <div className='flex items-center gap-1 '>
            <h5 className='text-sm text-[#2C2C2E] font-semibold '>{username}</h5>
            <span className='text-xs text-[#666668] font-normal'>{profile}</span></div>
          <p className='text-sm text-[#2C2C2E] font-normal'>{message}</p>
          <div className='flex justify-end w-full text-sm text-[#666668]'>
            {time}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Receiver