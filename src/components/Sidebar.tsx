import { useState } from 'react';

export default function Sidebar({
  isMenu,
  setMenu
}: {
  isMenu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const links = ['Home', 'Billing', 'Reports', 'Refferls'];

  const [currentState, setSideBarState] = useState<number | null>();

  return (
    <div
      className={`lg:h-full h-full lg:relative z-10 fixed transition-transform duration-300 ease-in-out top-0 ${
        isMenu ? '-translate-x-0' : '-translate-x-full'
      }   lg:translate-x-0 lg:w-2xs bg-white flex flex-col items-center justify-start lg:gap-10`}
    >
      <div className='flex lg:p-5  p-3 border-b-[1px] border-b-gray-400 gap-5 items-center'>
        <p className='text-green-primary poppins-bold text-2xl'>Insurance Profiler</p>
        {isMenu && (
          <span
            className='lg:hidden p-4 rounded-full font-bold hover:cursor-pointer'
            onClick={e => {
              e.stopPropagation();
              setMenu(() => {
                return !isMenu;
              });
            }}
          >
            X
          </span>
        )}
      </div>

      <div className='flex flex-col items-center w-full'>
        {links.map((l, i) => {
          return (
            <div
              key={l}
              className={`p-3 w-full flex hover:cursor-pointer gap-10 items-center justify-center ${
                currentState === i ? `bg-green-secondary` : 'bg-white'
              }`}
              onClick={e => {
                e.stopPropagation();
                setSideBarState(i);
              }}
            >
              {/* <div className='h-7 w-7'></div> */}
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
