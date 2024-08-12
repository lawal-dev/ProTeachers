import React from 'react'
import { testimonials } from '../contants'

const Testimonial = () => {
    return (
        <div className="padding-x py-6 bg-primary">
            <h2 className='heading-text text-white'>Testimonials</h2>
            <div className='grid md:grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5'>
                {testimonials.map((testimonial, index) => (
                    <div className="bg-white-200 rounded-md py-4 px-3 text-center hover:bg-secondary hover:text-white" key={index}>
                        <img src={testimonial.img} alt=""  width={80} height={80} className='rounded-full m-auto mb-3'/>
                        <p className='text-sm text-primary '>{testimonial.quote}</p>
                        <p className="font-bold text-md mt-4">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.occupation}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial