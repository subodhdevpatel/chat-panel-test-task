import React from 'react'
import Header from './Header'
import Sender from './Sender'
import Receiver from './Reciever'

function Main() {
  const messages = [
    {
      message: <span>Hi team</span>,
      userType: "sender",
      time: "11:31 AM"
    },
    {
      message: <span>Anyone on for lunch today</span>,
      userType: "sender",
      time: "11:31 AM"
    },
    {
      username: "Jav",
      profile: "Engineering",
      avatar: "",
      message: <span>Anyone on for lunch today</span>,
      userType: "receiver",
      online: false,
      time: "11:35 AM"
    },
    {
      message: <span>I am down for whatever!</span>,
      userType: "sender",
      time: "11:36 AM"
    },
    {
      username: "Aubrey",
      profile: "Product",
      avatar: "",
      message: <span>I was thinking the cafe downtown</span>,
      userType: "receiver",
      online: true,
      time: "11:45 AM"
    },
    {
      username: "Aubrey",
      profile: "Product",
      avatar: "",
      message: <span>But limited vegan options <span className="text-blue-500">@janet</span>!</span>,
      userType: "receiver",
      online: true,
      time: "11:45 AM"
    },
    {
      message: <span>Agreed</span>,
      userType: "sender",
      time: "11:52 AM"
    },
    {
      username: "Janet",
      profile: "Engineering",
      avatar: "",
      message: <span>That works- I was actually planning to get a smoothie anyways</span>,
      userType: "receiver",
      online: false,
      time: "12:03 PM"
    },
    {
      username: "Janet",
      profile: "Product",
      avatar: "",
      message: <span>On for 12:30 PM then?</span>,
      userType: "receiver",
      online: true,
      time: "12:04 PM"
    }
  ];

  return (
    <div className="flex-1 overflow-auto p-4 flex-col gap-3">
    <div className='flex justify-center items-center my-4'>
    <span className='text-xs text-[#666668] font-normal'>8/20/2020</span>
    </div>
      {
        messages.map((message) => {
          return (
            message.userType === "sender" ? (
              <Sender {...message} />
            ) : (
              <Receiver {...message} />
            )
          )
        })
      }
    </div>
  )
}

export default Main