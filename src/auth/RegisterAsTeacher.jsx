import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import React from 'react'
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useRef } from 'react';
import { auth, db } from "../../firebaseConfig";
import { toast } from "react-toastify";
// import {logo} from "../../src/assets/icons/logo.png";
import { logo } from '../assets/icons';

const RegisterAsTeacher = () => {

    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        level: '',
        sex: '',
        marital: '',
        trcn: '',
        // Add more fields as needed
    });

    // List of Nigerian states (you can replace this with an API call if needed)

    const handleSelectChange = (fieldName) => (e) => {
        const { value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };


    const notifySuccess = () => toast.success("Registration Successful!. Login in");
    const notifyError = () => toast.error("Registration Failed!");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = formRef.current.name.value;
        const email = formRef.current.email.value;
        const level = formRef.current.level.value;
        const contact = formRef.current.contact.value;
        const dob = formRef.current.dob.value;
        const address = formRef.current.address.value;
        const localGovt = formRef.current.localGovt.value;
        const state = formRef.current.state.value;
        const password = formRef.current.password.value;
        const marital = formRef.current.marital.value;
        const trcn = formRef.current.trcn.value;
        const sex = formRef.current.sex.value;

        // console.log(name, level, email);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)


            const docRef = await addDoc(collection(db, "teachersCollection"), {
                uid: res.user.uid,
                id: res.user.metadata.createdAt.toString().padStart(10, '0').slice(0, 10),
                name: name,
                email: email,
                level: level,
                contact,
                dob,
                address,
                localGovt,
                state,
                maritalStatus: marital,
                sex,
                trcn,
            });
            console.log("Document written with ID: ", docRef.id);
            const user = res.user;
            await updateProfile(user, { displayName: name });
            notifySuccess()
        }
        catch {
            notifyError()
        }
        navigate('/teacher-dashboard')

    };


    return (
        <div>

            <div className='relative'>
                <Link to='/'>
                    <div className='absolute top-[4px] left-4'>
                        <Button content='Back Home' />
                    </div>
                </Link>
                <section className='flex justify-center items-center w-[100%]'>
                    <div className='m-8 max-sm:mt-12 p-4 bg-white rounded-lg shadow-md lg:w-1/4 max-md:w-3/4 max-sm:w-[90%]'>

                        <div className='text-center leading-none mb-8'>
                            <img src={logo} alt="" className="w-64 mx-auto mb-3" />
                            {/* <h1 className="text-2xl font-bold mb-4 text-primary max-sm:text-xl"> ProfessionalTeachersHub</h1> */}
                            <p className='text-md text-slate-500'>Register as teacher</p>
                        </div>

                        <form action="" ref={formRef}>
                            <input
                                type="text"
                                className="input_text"
                                placeholder='Name'
                                name="name"
                                required
                            />

                            <input
                                type="text"
                                className="input_text"
                                placeholder='Email'
                                name='email'
                                required
                            />




                            <div className="input_text">
                                <label htmlFor="level">Qualification:</label>
                                <select className='outline-none ml-4' id="level" name="level" value={formData.level} onChange={handleSelectChange('level')}>
                                    <option value="Phd">Phd</option>
                                    <option value="Msc">Msc</option>
                                    <option value="Bsc">Bsc</option>
                                    <option value="Nce">Nce</option>
                                    <option value="HND/ND">HND/ND</option>
                                    <option value="O'level">O'lvel</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>


                            <div className="input_text">
                                <label htmlFor="trcn">Do you have TRCN:</label>
                                <select className='outline-none ml-4' id="trcn" name="trcn" value={formData.trcn} onChange={handleSelectChange('trcn')}>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            <div className="input_text">
                                <label htmlFor="Sex">Sex:</label>
                                <select className='outline-none ml-4' id="sex" name="sex" value={formData.sex} onChange={handleSelectChange('sex')}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            <div className="input_text">
                                <label htmlFor="marital">Marital Status:</label>
                                <select className='outline-none ml-4' id="marital" name="marital" value={formData.marital} onChange={handleSelectChange('marital')}>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>




                            {/* <input
                                type="text"
                                className="input_text"
                                placeholder='Level of Qualification'
                                name='level'
                                required
                            /> */}

                            <input
                                type="text"
                                className="input_text"
                                placeholder='State of Origin'
                                name='state'
                                required
                            />


                            <input
                                type="text"
                                className="input_text"
                                placeholder='Local Governemt'
                                name='localGovt'
                                required
                            />

                            <label htmlFor="" className="p-2 text-gray-700"> Enter your date of Birth </label>
                            <input
                                type="date"
                                className="input_text"
                                placeholder='Date of Birth'
                                name='dob'
                                required
                            />


                            <input
                                type="number"
                                className="input_text"
                                placeholder='Phone Number'
                                name='contact'
                                required
                            />

                            <input
                                type="address"
                                className="input_text"
                                placeholder='Your Address'
                                name='address'
                                required
                            />

                            <input
                                type="password"
                                className="input_text"
                                placeholder='Password'
                                name='password'
                            />

                            <input
                                type="password"
                                className="input_text"
                                placeholder='Confirm Password'
                            />

                            <div className='text-center'>
                                <Button content='Register' disabled={isLoading} func={handleSubmit} />
                            </div>

                        </form>
                        <p className='text-sm text-center mt-3'> I have an account. <Link to='/login' className='font-semibold text-secondary'> Login </Link> </p>

                    </div >
                </section>
            </div>

        </div>
    )
}

export default RegisterAsTeacher;

