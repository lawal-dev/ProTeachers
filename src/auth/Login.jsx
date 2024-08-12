import React, { useRef } from 'react'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext";
import { toast } from 'react-toastify';
import { useState } from 'react';
import { logo } from '../assets/icons';
import { getUser } from '../action/getUser';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';



const Login = () => {
    const formRef = useRef();
    const { loginUser, loading, user } = useContext(AuthContext);
    // const [ currentUser, setCurrentUser ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const navigate = useNavigate();

    const notifySuccess = () => toast.success("Login Successful!");
    const notifyError = () => toast.error("Error in Authetication");

    // if (user) {
    //     navigate("/teacher-dashboard");
    // }

    const chekExistInCol = async ({ email, coll = "teachersCollection" }) => {
        try {
            let data = null;
            const collRef = collection(db, coll);
            const q = query(collRef, where("email", "==", email));
            const querySnapshot = (await getDocs(q)).docs[0];
            if (querySnapshot?.id) data = { user: querySnapshot?.data(), id: querySnapshot?.id }
            return data;
        } catch (e) {
            console.log('Error: ', e.message)
        }
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        const email = formRef.current.email.value;
        const password = formRef.current.password.value;
        const loginAs = formRef.current.login_as.value
        setIsLoading(true)
        loginUser(email, password)
            .then(async (result) => {
                console.log(result);
                if (loginAs == 'teacher') {
                    const chekExistInCollection = await chekExistInCol({ email })
                    if (chekExistInCollection) {
                        notifySuccess()
                        navigate("/teacher-dashboard");
                    } else {
                        alert("record not found!");
                    }
                }
                else {
                    const chekExistInCollection = await chekExistInCol({ email, coll: "schoolsCollection" });
                    if (chekExistInCollection) {
                        notifySuccess()
                        navigate("/school-dashboard");
                    } else {
                        alert("record not found!");
                    }
                }
            })
            .catch((error) => {
                notifyError()
            }
            ).finally(() => setIsLoading(false));


    }

    return (
        <div>

            <div className='relative'>
                <Link to='/'>
                    <div className='absolute top-3 left-4'>
                        <Button content='Back Home' />
                    </div>
                </Link>

                <div className='flex h-screen  items-center justify-center  '>


                    <div className='p-4 place-items-center bg-white rounded-lg shadow-md md:w-1/4 max-md:w-2/4 max-sm:w-3/4 '>
                        <div className='text-center leading-none mb-8'>
                            <img src={logo} alt="" className="w-64 mx-auto mb-3" />
                            {/* <h1 className="text-2xl font-bold mb-4 text-primary max-sm:text-xl"> ProfessionalTeachersHub</h1> */}
                            <p className='text-md text-slate-500'>Login</p>
                        </div>


                        <form action="" ref={formRef}>

                            <p className='text-md mb-2'>Login in as </p>
                            <div className='flex gap-6 items-center text-sm text-gray-800 font-bold uppercase mb-4'>
                                <div className='flex gap-2'>
                                    <input className='accent-secondary' type="radio" value='school' name="login_as" id="school" checked />
                                    <label htmlFor="school"> School </label>
                                </div>
                                <div className='flex gap-3'>
                                    <input className='accent-secondary' type="radio" value='teacher' name="login_as" id="teacher" />
                                    <label htmlFor="teacher"> Teacher </label>
                                </div>
                            </div>




                            <input
                                type="email"
                                className="input_text"
                                placeholder='Email'
                                name="email"
                                required
                            />

                            <input
                                type="password"
                                className="input_text"
                                placeholder='Password'
                                name="password"
                                required
                            />

                            <div className='text-center'>
                                <Button content='Login' disabled={isLoading} func={handleLogin}/>
                            </div>

                        </form>
                        <p className='text-sm text-center mt-3'> I don't have an account. <Link to='/registerAs' className='font-semibold text-secondary '> Register </Link> </p>


                    </div >
                </div>
            </div>

        </div>
    )
}

export default Login