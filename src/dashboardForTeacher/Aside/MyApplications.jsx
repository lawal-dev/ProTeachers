import React from 'react'
import { useState } from 'react';
import { auth, db } from '../../../firebaseConfig';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';

const MyApplications = () => {
  const [appliedJob, setAppliedJob] = useState([])
  const userEmail = auth.currentUser.email;
  const notifySuccess = () => toast.success("Successful Deleted!");
  const notifyError = () => toast.error("Failed!");

  const getAllDBData = async () => {
    const querySnapshot = await getDocs(collection(db, "appliedJobsCollection"));
    querySnapshot.forEach((document) => {
      if (userEmail == document.data().email) {
        const appliedJobLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const filterAppliedJobList = appliedJobLists.filter((doc) => {
          return (
            doc.email == userEmail
          )
        })
        setAppliedJob(filterAppliedJobList)
      }
    })
  }

  const handleDelete = async (documentId) => {
    try {
      const docRef = doc(db, 'jobsCollection', documentId);
      await deleteDoc(docRef);
      notifySuccess();
    } catch (error) {
      notifyError();

    }
  };

  useEffect(() => {
    getAllDBData()
    const appliedJobsCollectionRef = collection(db, 'appliedJobsCollection');

    const unsubscribe = onSnapshot(appliedJobsCollectionRef, (snapshot) => {
      const newData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAppliedJob(newData);
    });

    return () => unsubscribe();
  }, [])

  return (
    <div>
      <h1 className='font-bold text-center text-xl text-primary py-4'> My Applications </h1>
      <div className='max-sm:text-[8px] grid md:grid-cols-6 max-md:grid-cols-5 md:ml-10 max-md:ml-5 font-bold uppercase text-primary mb-3 max-md:gap-5 md:gap-10 md:w-[90%] max-md:w-[90%]'>
        <h3 className='max-sm:hidden' >
          S/N
        </h3>
        <h3 className='col-span-2'>
          Name of Schools
        </h3>
        <h3>
          Role
        </h3>
        <h3>
          Salary
        </h3>
        <h3>
          Status
        </h3>
      </div>

      <div>
        {appliedJob.map((job, index) => {
          return (
            <div key={job.id} className={`grid max-sm:text-[8px] py-2 md:grid-cols-6 max-md:grid-cols-5  md:ml-10 max-md:mx-2 opacity-80 ${index % 2 == 0 ? 'bg-secondary  text-white' : 'bg-gray-300 text-primary'} p-2 md:w-[90%] max-md:w-[95%] rounded-md max-md:gap-5 md:gap-10 my-3`}>
              <p className='max-sm:hidden'>
                {index + 1}
              </p>
              <p className='col-span-2'>
                {job.schoolName}
              </p>
              <p>
                {job.role}
              </p>
              <p>
                {job.salary}
              </p>
              <p>
                {job.status ? <button className='bg-green-700 p-2 rounded-md font-medium text-white'> Accepted </button>
                  : <button className='bg-red-800 p-2 rounded-md font-medium text-white'> Pending... </button>}
              </p>
            </div>
          )
        })}
      </div>



    </div>
  )
}

export default MyApplications