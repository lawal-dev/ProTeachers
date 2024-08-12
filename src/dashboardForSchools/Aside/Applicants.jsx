import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth, db } from '../../../firebaseConfig';
import { addDoc, collection, deleteDoc, doc, documentId, getDocs, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { getUser } from '../../action/getUser';

const Applicants = () => {
    const [userDetails, setUserDetails] = useState({})
    const [appliedJob, setAppliedJob] = useState([])
    const [modal, setModal] = useState(false)

    const userEmail = auth.currentUser.email;
    const notifySuccess = () => toast.success("Successful Deleted!");
    const notifyError = () => toast.error("Failed!");

    const handleModal = (e) => {
        e.preventDefault()
    }
    const handleCloseModal = (e) => {
        e.preventDefault()
        setModal(false)
    }


    const getApplicantInfo = async (email) => {
        const querySnapshot = await getDocs(collection(db, "teachersCollection"));
        querySnapshot.forEach((document) => {
            if (email == document.data().email) {
                getUser("teachersCollection", document.id)
                    .then((data) => {
                        if (data) {
                            setUserDetails(data)
                            setModal(true)
                        }
                    })
                    .catch((error) => {
                    });

            }
        })

    }


    const getAllDBData = async () => {
        const querySnapshot = await getDocs(collection(db, "appliedJobsCollection"));
        querySnapshot.forEach((document) => {
            if (userEmail == document.data().schoolEmail) {
                const docID = document.id
                const appliedJobLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const filterAppliedJobList = appliedJobLists.filter((doc) => {
                    return (
                        doc.schoolEmail == userEmail
                    )
                })
                setAppliedJob(filterAppliedJobList)
                const statusRef = doc(db, "appliedJobsCollection", document.id);
                updateDoc(statusRef, {
                    id: docID
                });
            }
        })
    }
    const name = auth.currentUser.displayName;

    const handleConfirmation = async (id, email) => {
        const statusRef = doc(db, "appliedJobsCollection", id);
        await updateDoc(statusRef, {
            status: true,
        });
        await addDoc(collection(db, "notificationsCollection"), {
            email,
            message: `Congratulatons!!! Your application has been accepted at ${name}, Kindly visit the school for Physical interview. Thanks`,
            date: new Date(),
        });
    }

    const handleDelete = async (documentId) => {
        try {
            const docRef = doc(db, 'appliedJobsCollection', documentId);
            await deleteDoc(docRef);
            notifySuccess();
        } catch (error) {
            notifyError();
        }
    };
    const user = auth.currentUser;
    
    useEffect(() => {
        userDetails
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
    }, [userDetails])

    return (
        <div>
            <h1 className='font-bold text-center text-xl text-primary py-4'>Applicants</h1>
            <div className='max-sm:text-[8px] grid md:grid-cols-6 max-md:grid-cols-6 md:ml-10 max-md:ml-5 font-bold uppercase text-primary mb-3 max-md:gap-5 md:gap-10 md:w-[90%] max-md:w-[90%]'>
                <h3 className='col-span-2'>
                    Names of Applicant
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
                    const accepted = job.status
                    return (
                        <div key={job.id} className={`grid max-sm:text-[8px] py-2 md:grid-cols-6 max-md:grid-cols-6  md:ml-10 max-md:mx-2 opacity-80 ${index % 2 == 0 ? 'bg-secondary  text-white' : 'bg-gray-300 text-primary'} p-2 md:w-[90%] max-md:w-[95%] rounded-md max-md:gap-5 md:gap-10 my-3`}>
                            <p className='col-span-2'>
                                {job.name}
                            </p>
                            <p>
                                {job.role}
                            </p>
                            <p>
                                {job.salary}
                            </p>
                            <div className='flex gap-2'>
                                <button className='bg-primary p-2 rounded-md font-medium text-white' onClick={() => { getApplicantInfo(job.email) }}> Details </button>
                                <button className='bg-primary p-2 rounded-md font-medium text-white' onClick={() => { handleDelete(job.id) }}> Del </button>
                            </div>

                            {modal && (
                                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20 z-50">
                                    <div className="bg-white rounded-lg p-8 max-w-md w-full max-md:mx-3">
                                        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">
                                            Applicant Details
                                        </h3>
                                        <div className='font-bold text-xl text-primary'>
                                            <div> <h4 className='font-bold text-xl text-primary inline mr-3'>Name:  </h4> <span className='font-bold text-md text-gray-800 max-md:block'>{userDetails.name}</span></div>
                                            <div> <h4 className='font-bold text-xl text-primary inline mr-3'>Email:  </h4> <span className='font-bold text-md text-gray-800 max-md:block'>{userDetails.email}</span></div>
                                            <div> <h4 className='font-bold text-xl text-primary inline mr-3'>Level:  </h4> <span className='font-bold text-md text-gray-800 max-md:block'>{userDetails.level}</span></div>
                                            <div> <h4 className='font-bold text-xl text-primary inline mr-3'>Marital Status:  </h4> <span className='font-bold text-md text-gray-800 max-md:block'>{userDetails.martalStatus}</span></div>
                                            <div> <h4 className='font-bold text-xl text-primary inline mr-3'>State:  </h4> <span className='font-bold text-md text-gray-800 max-md:block'>{userDetails.state}</span></div>
                                            <div> <h4 className='font-bold text-xl text-primary inline mr-3'>Local Govt:  </h4> <span className='font-bold text-md text-gray-800 max-md:block'>{userDetails.localGovt}</span></div>
                                            <div> <h4 className='font-bold text-xl text-primary inline mr-3'>Contact:  </h4> <span className='font-bold text-md text-gray-800 max-md:block'>{userDetails.contact}</span></div>
                                            <div> <h4 className='font-bold text-xl text-primary inline mr-3'>Address:  </h4> <span className='font-bold text-md text-gray-800 max-md:block'>{userDetails.address}</span></div>

                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <button className={` py-3 rounded-md font-medium text-2xl px-4 text-white-200' { ${accepted ? 'bg-green-700 text-white-200' : 'bg-primary'}`} disabled={accepted} onClick={() => { handleConfirmation(job.id, job.email) }}>
                                                {accepted ? 'Accepted' : 'Accept'}
                                            </button>

                                            <button
                                                className="bg-gray-300 hover:bg-gray-400 text-2xl text-gray-800 font-semibold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                                                onClick={handleCloseModal}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Applicants