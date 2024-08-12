import React, { useState } from 'react'
import Button from '../../components/Button'
import { PostedJob, findAJob } from '../../contants'
import { useRef } from 'react'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../firebaseConfig'
import { useContext } from 'react'
import { AuthContext } from '../../contextApi/AuthContext'
import { toast } from 'react-toastify'


const PostAJob = () => {
  const formRef = useRef()
  const { user } = useContext(AuthContext);
  const [postLoading, setPostLoading] = useState(false)
  const name = auth.currentUser.displayName

  const notifySuccess = () => toast.success("Successful!");
  const notifyError = () => toast.error("Failed!");

  const handlePost = async (e) => {
    e.preventDefault();
    const schoolName = formRef.current.schoolName.value;
    const role = formRef.current.role.value;
    const salary = formRef.current.salary.value;

    if (schoolName && role && salary) {

      try {
        setPostLoading(true)
        const docRef = await addDoc(collection(db, "jobsCollection"), {
          uid: user.uid,
          email: user.email,
          schoolName,
          role,
          salary,
          id: null,
          appliedUsers: []
        });

        const appliedJob = doc(db, "jobsCollection", docRef.id);
        await updateDoc(appliedJob, {
          id: docRef.id,
        });
        notifySuccess()
      }

      catch (error) {
        notifyError()
      } finally {
        setPostLoading(false)
      }
      formRef.current.reset();
    }
    else {
      notifyError()
    }

  };


  return (
    <div>
      <h1 className='font-bold text-center text-xl text-primary py-4'> Post a Job </h1>

      <form action="" method="post" ref={formRef} className='m-auto max-md:pl-3 md:pl-20 py-4 flex flex-col gap-6 relative border-2 mx-4 w-[95%] mb-8'>
        <div className='flex items-center gap-3'>
          <label htmlFor="" className='w-[10%] md:visible max-md:hidden text-primary font-semibold'> School Name </label>
          <input type="text" name="schoolName"value={name} className='md:w-[50%] max-md:w-[90%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md' id="" placeholder={name} required />
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='w-[10%] md:visible max-md:hidden text-primary font-semibold'> Role </label>
          <input type="text" className='w-[50%] max-md:w-[90%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md' name="role" placeholder='Role' id="" required />
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='w-[10%] md:visible max-md:hidden text-primary font-semibold'> Salary </label>
          <input type="text" name="salary" className='w-[50%] max-md:w-[90%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md' placeholder='Salary' id="" required />
        </div>

        <div className='md:mx-auto max-md:ml-auto mr-8' onClick={handlePost}>
          <Button content={postLoading ? 'Posting...' : 'Post a Job'} disabled={postLoading} />
        </div>
      </form>
    </div>
  )
}

export default PostAJob