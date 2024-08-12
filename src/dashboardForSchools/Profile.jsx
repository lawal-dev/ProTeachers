import React from 'react'
import { avatar2 } from '../assets/images'
import { FaSignOutAlt } from 'react-icons/fa'
import { auth } from '../../firebaseConfig';
import { AuthContext } from '../contextApi/AuthContext';
import { useContext } from 'react';


const Profile = () => {
  const user = auth.currentUser;
  const id = user.metadata.createdAt.toString().padStart(10, '0').slice(0, 10)

  const { logOut } = useContext(AuthContext)


  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error));
  };

  return (
    <div className='relative'>
      <div className='bg-white max-md:h-16 max-md:p-2 md:p-2 flex flex-col rounded-lg cursor-pointer'>
        <div className='flex gap-1 items-center justify-between'>
          <h4 className='font-semibold max-md:text-sm md:text-md text-secondary'> {user.displayName} </h4>
          <div className='md:w-10 max-md:w-8 md:h-10 max-md:h-8 rounded-full bg-secondary text-white-200 font-bold text-center p-1 max-md:text-xl md:text-2xl'>{user.email[0].toUpperCase()}</div>
          {/* <img src={avatar2} alt="" className='w-10 h-10 rounded-full' /> */}
        </div>
        <div className='flex gap-2 items-center'>
          <p className='font-semibold max-md:text-sm md:text-md text-primary italic'> Id: {id} </p>
          <button type="button" onClick={handleSignOut}>
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile