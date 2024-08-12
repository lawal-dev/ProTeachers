import React, { useEffect, useRef, useState } from 'react'
import { collection, getDoc, getDocs,} from "firebase/firestore";
import { db, auth } from '../../../firebaseConfig';
import { getUser } from '../../action/getUser';

const ProfilePage = () => {

  const [userDetails, setUserDetails] = useState('')
  const userEmail = auth.currentUser.email;

  const getAllDBData = async () => {
    const querySnapshot =  await getDocs(collection(db, "teachersCollection"));
    querySnapshot.forEach((document) => {
      if (userEmail == document.data().email) {
        getUser("teachersCollection", document.id)
        .then((data) => {
          if (data) {
            setUserDetails(data)
            const name = data.name; // Replace 'fieldName' with your actual field name
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
      <h1 className='font-bold text-center text-xl text-primary py-4'>Profile Page </h1>
       <form action="" className='m-auto md:pl-20 max-md:px-5 py-8 flex flex-col gap-6 opacity-80'>
        
        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%] '> UserId</label>
          <input type="text" className='md:w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.id}/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> Name </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.name}/>
        </div>

        
        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> Level </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.level}/>
        </div>

        
        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> TRCN </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.trcn}/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> Email</label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.email}/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> Sex </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.sex}/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold  md:w-[5%]'> Marital Status </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.maritalStatus}/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'>Local Govt. </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.localGovt}/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold md:w-[5%]'> State </label>
          <input type="text" className='w-[50%] max-md:w-[85%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder={userDetails.state}/>
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