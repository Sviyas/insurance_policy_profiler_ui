import { useState } from 'react';

export default function Sidebar() {
  const links = ['Home', 'Billing', 'Reports', 'Refferls'];

  const [currentState, setSideBarState] = useState<number | null>();

  return (
    <div className='h-full w-2xs bg-white flex flex-col items-center justify-start gap-10'>
      <div className='flex p-5  border-b-[1px] border-b-gray-400'>
        <p className='text-green-primary poppins-bold text-2xl'>Insurance Profiler</p>
      </div>

      <div className='flex flex-col items-center w-full'>
        {links.map((l, i) => {
          return (
            <div
              key={l}
              className={`p-3 w-full flex hover:cursor-pointer gap-10 items-center ${
                currentState === i ? `bg-green-secondary` : 'bg-white'
              }`}
              onClick={e => {
                e.stopPropagation();
                setSideBarState(i);
              }}
            >
              <div className='h-7 w-7'></div>
              <p
                className={`text-left text-[18px] poppins-regular  ${
                  currentState === i ? `text-white` : 'text-green-secondary'
                } `}
              >
                {l}
              </p>
            </div>
          );
        })}
      </div>

      <div className='w-full p-3 mt-24'>
        <div className='bg-green-secondary h-full w-full rounded-md flex flex-col p-3 gap-5'>
          <div className='h-10 w-full'></div>
          <div className='flex flex-col gap-3'>
            <p className='poppins-bold text-white text-xl'>Refferal Program</p>
            <p className='poppins-light text-[14px] text-white'>invite people and earn $100 off on your next reward</p>
          </div>
          <div className='bg-pink-primary p-2 rounded text-center hover:cursor-pointer'>
            <p className='poppins-bold'>Invite Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
