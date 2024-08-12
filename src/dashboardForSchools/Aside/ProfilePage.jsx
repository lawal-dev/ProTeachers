import React from 'react'
import { auth, db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { getUser } from '../../action/getUser';
import { useState, useEffect } from 'react';


const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState('')
  const userEmail = auth.currentUser.email;

  const getAllDBData = async () => {
    const querySnapshot =  await getDocs(collection(db, "schoolsCollection"));
    querySnapshot.forEach((document) => {
      if (userEmail == document.data().email) {
        getUser("schoolsCollection", document.id)
        .then((data) => {
          if (data) {
            setUserDetails(data)
            const name = data.name; 
            return name
          }
        })
        .catch((error) => {
        });
      }
    })
  }
  const user = auth.currentUser;


  useEffect(() => {
    getAllDBData()
  }, [])

  return (
    <div>
      <h1 className='font-bold  pl-20 text-xl text-primary pt-8'>Profile Page </h1>
       <form action="" className='m-auto md:pl-20 max-md:px-5 py-8 flex flex-col gap-6 opacity-80'>
        
        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> UserId</label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.id}/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> School Name </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.name}/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> Email</label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.email}/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> Country </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder='Nigeria'/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> Address </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.address}/>
        </div>

       </form>
    </div>
  )
}

export default ProfilePage