
import React from 'react'
import { User } from '../../../models'

interface Props {
  user: User
}
function Avatar({ user }: Props) {
  return (
    <div className='flex flex-col items-center mt-4 w-full'>
      <div className='h-16 w-16 rounded-full overflow-hidden mb-3 '>
        <img
            src={`${user?.avatar
                  ? user?.avatar
                  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                }`}
                    alt='Profile picture'
                    className='object-cover h-full'
                  />
        </div>
            <h1 className='text-center'>{user?.fullname}</h1>
            <p className='text-secondary-regular break-words'>{user?.email}</p>
        </div>
  )
}

export default Avatar