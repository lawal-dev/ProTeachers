import React from 'react'
import { notifications } from '../../contants'

const Notifications = () => {
  return (
    <div>
      <h1 className='font-bold text-center text-xl text-primary py-4'> Notification </h1>

      <div>
      {notifications.map((notification) => {
          return (
            <div key={notification.id} className={`grid grid-cols-4 gap-1 max-md:ml-2 md:ml-10 opacity-80 ${notification.color == true ? 'bg-secondary  text-white' : 'bg-gray-300 text-primary'} p-2 md:w-[90%] max-md:w-[95%]  rounded-md gap-10 my-3 relative`}>
              <p className='absolute left-0 top-0 bg-primary py-1 px-2 rounded-ss-md text-white'>
                {notification.id}
              </p>
              <p className='col-span-4 ml-8'>
                {notification.message}
                <p className='mt-3 text-sm'>
                Date: 24/12/2024 Time: 8:00am
              </p>
              </p>
              

            </div>

          )
        })}
      </div>
    </div>



  )
}

export default Notifications