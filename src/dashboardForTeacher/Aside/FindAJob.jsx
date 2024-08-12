import React from 'react'
import { useEffect } from 'react'
import { addDoc, arrayUnion, collection, doc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../firebaseConfig'
import { useState } from 'react'
import { toast } from 'react-toastify'

const FindAJob = () => {
  const [jobs, setJobs] = useState([])
  const [appliedJob, setAppliedJod] = useState(true)
  const userEmail = auth.currentUser.email
  const notifySuccess = () => toast.success("Successful!");
  const notifyError = () => toast.error("Failed!");
  const name = auth.currentUser.displayName


  const getAllDBData = async () => {
    const querySnapshot = await getDocs(collection(db, "jobsCollection"));
    querySnapshot.forEach((doc) => {
      setJobs(doc.data())
    })
    const jobLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setJobs(jobLists)
  }
  const handleAppliedJob = async (schoolName, role, salary, id, schoolEmail) => {
    try {
      const docRef = await addDoc(collection(db, "appliedJobsCollection"), {
        email: userEmail,
        schoolName,
        schoolEmail,
        role,
        salary,
        status: false,
        name,
      });
      const appliedUsersRef = doc(db, "jobsCollection", id);
      await updateDoc(appliedUsersRef, {
        appliedUsers: arrayUnion(userEmail)
      });
      const schoolEmailRef = doc(db, "appliedJobsCollection", docRef.id);
      await updateDoc(schoolEmailRef, {
        schoolEmail
      });
      await addDoc(collection(db, "notificationsCollection"), {
        email: userEmail,
        message: `You have successfully applied for the ${role} at ${schoolName}. Thanks`,
        date: new Date(),
    });
      notifySuccess()
    } catch (error) {
      notifyError(error)
      
    }


  }

  useEffect(() => {
    getAllDBData()

    const jobsCollectionRef = collection(db, 'jobsCollection');

    const unsubscribe = onSnapshot(jobsCollectionRef, (snapshot) => {
      const newData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setJobs(newData);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <h1 className='font-bold text-center text-xl text-primary py-4'> Find a Job </h1>
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

        </h3>
      </div>

      <div>
        {jobs.map((job, index) => {
          const hasApplied = job?.appliedUsers?.includes(userEmail)
          return (
            <div key={job.id} className={`grid max-sm:text-[8px] py-2 md:grid-cols-6 max-md:grid-cols-5  md:ml-10 max-md:mx-2 opacity-80 ${index % 2 == 0 ? 'bg-secondary  text-white' : 'bg-gray-300 text-primary'} p-2 md:w-[90%] max-md:w-[95%] rounded-md max-md:gap-5 md:gap-10 my-3`}>
              <p className='max-sm:hidden' >
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

              <button className={` p-2  rounded-md font-medium text-white bg-primary cursor-pointer ${hasApplied ? 'opacity-55' : 'opacity-100'}`} disabled={hasApplied} onClick={() => { handleAppliedJob(job.schoolName, job.role, job.salary, job.id, job.email) }} > {hasApplied ? "Applied" : "Apply"} </button>

            </div>
          )
        })}
      </div>



    </div>
  )
}

export default FindAJob