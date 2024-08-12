import React from 'react'
import { bg, bg2, bg3 } from '../assets/images'
import { howItWorks } from '../contants'

const Steps = () => {
    return (
        <div className='padding-x py-6'>
            <h2 className='heading-text text-primary'> How it Works
            </h2>
            <p className='text-sm text-center font-semibold '> We have made it easier for you to find your dream job</p>
            <section className='grid md:grid-cols-2 gap-5 justify-center items-center'>
                <div className=' flex flex-col '>
                    {howItWorks.map((step) => {
                        return (
                            <div key={step.id} className='flex flex-col gap-1'>
                                <div className='bg-secondary text-white rounded-md py-2 px-2 w-12 text-center '>
                                    {/* {step.id} */}
                                    <img src={step.icon} alt="" />
                                </div>
                                <h3 className='font-bold text-xl text-primary'>
                                    {step.header}
                                </h3>
                                <p className='text-sm w-3/3'>
                                    {step.content}
                                </p>
                            </div>
                        )
                    })

                    }
                </div>

                <div>
                    <img src={bg2} alt="" className='rounded-lg' />
                </div>
            </section>
        </div>
    )
}

export default Steps