import React from 'react'
import { collection, deleteDoc, doc, getDocs, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../../firebaseConfig';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const PostedJobs = () => {
  const [postedJob, setPostedJob] = useState([])
  const userEmail = auth.currentUser.email;
  const notifySuccess = () => toast.success("Successful Deleted!");
  const notifyError = () => toast.error("Failed!");

  const getAllDBData = async () => {
    const querySnapshot = await getDocs(collection(db, "jobsCollection"));

    querySnapshot.forEach((document) => {
      if (userEmail == document.data().email) {
        const postedJobLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const filterPostedJobList = postedJobLists.filter((doc) => {
          return (
            doc.email == userEmail
          )
        })
        setPostedJob(filterPostedJobList)
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

  const user = auth.currentUser;
  // const avatar = userDetails.name[0]


  useEffect(() => {
    getAllDBData()
    const jobsCollectionRef = collection(db, 'jobsCollection');

    const unsubscribe = onSnapshot(jobsCollectionRef, (snapshot) => {
      const newData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPostedJob(newData);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();

  }, []);

  return (
    <div>
      <h1 className='text-xl font-bold text-primary text-center uppercase my-5'> List of Posted Job</h1>
      <div className='max-sm:text-[8px] grid md:grid-cols-4 max-md:grid-cols-3 md:ml-10 max-md:ml-5 font-bold uppercase text-primary mb-3 max-md:gap-5 md:gap-10 md:w-[90%] max-md:w-[90%]'>
        <h3 className='max-sm:hidden'>
          S/N
        </h3>
        <h3>
          Role
        </h3>
        <h3>
          Salary
        </h3>
        <h3>

        </h3>
      </div>

      <div>
        {postedJob.map((job, index) => {
          return (
            <div key={job.id} className={`grid max-sm:text-[8px] py-2 md:grid-cols-4 max-md:grid-cols-3  md:ml-10 max-md:mx-2 opacity-80 ${index % 2 == 0 ? 'bg-secondary  text-white' : 'bg-gray-300 text-primary'} p-2 md:w-[90%] max-md:w-[95%] rounded-md max-md:gap-5 md:gap-10 my-3`}>
              <p className='max-sm:hidden' >
                {index + 1}
              </p>

              <p>
                {job.role}
              </p>
              <p>
                {job.salary}
              </p>
              <button className='bg-primary p-2 rounded-md font-medium text-white' onClick={() => { handleDelete(job.id) }}> Delete </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostedJobs