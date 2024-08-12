import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import React, { useContext, useRef, useState } from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { auth, db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import { toast } from "react-toastify";
import { logo } from '../assets/icons';



const RegisterAsSchool = () => {

    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate()
    if (user) {
        navigate("/school-dashboard");
    }

    const notifySuccess = () => toast.success("Registration Successful!. Login in");
    const notifyError = () => toast.error("Registration Failed!");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = formRef.current.name.value;
        const email = formRef.current.email.value;
        const contact = formRef.current.contact.value;
        const doe = formRef.current.doe.value;
        const address = formRef.current.address.value;
        const password = formRef.current.password.value;
        const confirmPassword = formRef.current.confirmPassword.value;
        setIsLoading(true);
        if (password == confirmPassword) {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password)
                const docRef = await addDoc(collection(db, "schoolsCollection"), {
                    uid: res.user.uid,
                    id: res.user.metadata.createdAt.toString().padStart(10, '0').slice(0, 10),
                    name: name,
                    email: email,
                    contact,
                    date_of_establishment: doe,
                    address,
                });
                await updateProfile(res.user, { displayName: name });
                notifySuccess()
                setIsLoading(false)
            }
            catch {
                notifyError()
                setIsLoading(false)
            }
        };
    }


    return (
        <div>
            <div className='relative'>
                <Link to='/'>
                    <div className='absolute top-3 left-4'>
                        <Button content='Back Home' />
                    </div>
                </Link>
                <section className='flex justify-center items-center h-[100vh] w-[100%]'>
                    <div className='m-8 p-4 bg-white rounded-lg shadow-md lg:w-1/4 max-md:w-3/4 max-sm:w-[90%]'>
                        <div className='text-center leading-none mb-8'>
                            <img src={logo} alt="" className="w-64 mx-auto mb-3" />
                            {/* <h1 className="text-2xl font-bold mb-4 text-primary max-sm:text-xl"> ProfessionalTeachersHub</h1> */}
                            <p className='text-md text-slate-500'> Register as School</p>
                        </div>

                        <form action="" ref={formRef}>
                            <input
                                type="text"
                                className="input_text"
                                placeholder='Name of School '
                                name='name'
                                required
                            />

                            <input
                                type="text"
                                className="input_text"
                                placeholder='Email'
                                name='email'
                                required
                            />

                            <input
                                type="text"
                                className="input_text"
                                placeholder='School Address'
                                name='address'
                                required
                            />
                            <label htmlFor="" className="p-2 text-gray-700"> Date of Establishment</label>
                            <input
                                type="date"
                                className="input_text"
                                placeholder='Date of Establishment'
                                name='doe'
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
                                type="password"
                                className="input_text"
                                placeholder='Password'
                                name='password'
                            />

                            <input
                                type="password"
                                className="input_text"
                                placeholder='Confirm Password'
                                name="confirmPassword"
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

export default RegisterAsSchool